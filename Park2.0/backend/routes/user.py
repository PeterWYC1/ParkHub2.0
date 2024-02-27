from fastapi import APIRouter, HTTPException, Depends
from config.db import conn, session
from schemas.models import User, ParkingLot, Booking, Company, Change
from datetime import date, time
from sqlalchemy import select, text
from passlib.context import CryptContext
from typing import List
import bcrypt
import uuid
from datetime import datetime

user = APIRouter()


pwd_context = CryptContext(schemes=['bcrypt'], deprecated="auto") 


@user.get("/users/{id}", tags=["users"], description="Get a single user by id",
)
def get_user_name(id: str):
    try:
        consulta = text("SELECT name FROM user WHERE user.id = :id")
        user_return = session.execute(consulta, {"id" : id}).fetchone()[0]
        if user_return is not None:
            return user_return
        else:
            return None
    except Exception as e:
        print(f"Error al insertar en la base de datos: {e}")


@user.post("/signup", tags=["users"], description="Create a new user")
def sign_up(u: User):
    try:
        new_id = str(uuid.uuid4())
        encripted_password = pwd_context.hash(u.password)
        
        consulta = text('INSERT INTO user VALUES (:uuid, :name, :email, :password, :date_created)')
        valores = {"uuid": new_id, "name": u.name, "email": u.email, "password": encripted_password, "date_created": datetime.now()}
        
        session.execute(consulta, valores)      
        session.commit()
        
        consulta = text("SELECT * FROM user WHERE user.id = :id")
        return session.execute(consulta, {"id" : new_id}).first()._asdict()
    except Exception as e:
        print(f"Error al insertar en la base de datos: {e}")
        return None
    finally:
        session.close()


@user.post("/login", tags=["users"], description="Login")
def log_in(u : User):
    try:
        consulta = text('SELECT id FROM user WHERE user.email = :email')
        user_id = session.execute(consulta, {'email': u.email}).scalar()
        if user_id:
            consulta = text('SELECT password FROM user WHERE user.email = :email')
            stored_password = session.execute(consulta, {'email': u.email}).scalar()
            if pwd_context.verify(u.password, stored_password):
                consulta = text("SELECT * FROM user WHERE user.id = :id")
                return session.execute(consulta, {"id" : user_id}).first()._asdict()
        return None
    except Exception as e:
        print(f"Error al insertar en la base de datos: {e}")
        return None
    finally:
        session.close()
        

@user.put("/change_password", tags=["users"], description="Login")
def change_password(c : Change):
    try:
        print(c.old_password)
        print(c.new_password)
        consulta = text('SELECT id FROM user WHERE user.email = :email')
        user_id = session.execute(consulta, {"email": c.email}).scalar()
        if user_id:
            consulta = text('SELECT password FROM user WHERE user.email = :email')
            stored_password = session.execute(consulta, {'email': c.email}).scalar()
            if pwd_context.verify(c.old_password, stored_password):
                consulta = text("UPDATE user SET user.password = :new_password")
                session.execute(consulta, {"new_password" : pwd_context.hash(c.new_password)})
                session.commit()
                consulta = text("SELECT * FROM user WHERE user.id = :id")
                return session.execute(consulta, {"id" : user_id}).first()._asdict()    
        return None
    except Exception as e:
        print(f"Error al insertar en la base de datos: {e}")
        return None
    finally:
        session.close()


