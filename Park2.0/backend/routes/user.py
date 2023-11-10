from fastapi import APIRouter, HTTPException, Depends
from config.db import conn, session
from schemas.user import User, ParkingLot, Booking, Company, Change
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


@user.post("/add_company", tags=["company"], description="Add a new company")
def add_company(c : Company):
    try:
        new_id = str(uuid.uuid4())
        
        consulta = text("INSERT INTO company VALUES (:uuid, :name)")
        session.execute(consulta, {"uuid" : new_id, "name" : c.name})
        
        session.commit()
        
        consulta = text("SELECT * FROM company WHERE company.id = :id")
        return session.execute(consulta, {"id" : new_id}).first()._asdict()
    except Exception as e:
        print(f"Error al insertar en la base de datos: {e}")
        return None
    finally:
        session.close()


@user.get("/get_company", tags=["company"], description="Get the Company Name")
def get_company(id : str):
    try:
        consulta = text("SELECT name FROM company WHERE company.id = :id")
        return session.execute(consulta, {"id" : id}).first()._asdict()
    except Exception as e:
        print(f"Error al insertar en la base de datos: {e}")
        return None
    finally:
        session.close()


@user.post("/add_parking_lot", tags=["company"], description="Add parking lots to the Company")
def add_parking_lot(p : ParkingLot):
    try:
        new_id = str(uuid.uuid4())
        
        consulta = text('INSERT INTO parking_lot VALUES (:uuid, :company_id, :number)')
        valores = {"uuid" : new_id, "company_id" : p.company_id, "number" : p.number}
        session.execute(consulta, valores)
        
        session.commit()
        
        consulta = text("SELECT * FROM parking_lot WHERE parking_lot.id = :id")
        return session.execute(consulta, {"id" : new_id}).first()._asdict()
    except Exception as e:
        print(f"Error al insertar en la base de datos: {e}")
        return None
    finally:
        session.close()


@user.get("/get_parking_lot", tags=["company"], description="Get a parking lot")
def get_parking_lot(company_id : str):
    try:
        consulta = text("SELECT id FROM parking_lot WHERE parking_lot.company_id = :company_id ORDER BY RAND() LIMIT 1")
        return session.execute(consulta, {"company_id" : company_id}).first()._asdict()
    except Exception as e:
        print(f"Error al insertar en la base de datos: {e}")
        return None
    finally:
        session.close()


@user.get("/get_parking_number", tags=["company"], description="Get the parking number")
def get_parking_number(parking_id : str):
    try:
        consulta = text("SELECT number FROM parking_lot WHERE parking_lot.id = :id")
        return session.execute(consulta, {"id" : parking_id}).first()._asdict()
    except Exception as e:
        print(f"Error al insertar en la base de datos: {e}")
        return None
    finally:
        session.close()
        

@user.post("/add_booking", tags=["booking"], description="Make a reservation")
def add_booking(b : Booking):
    try:
        consulta = text("SELECT * FROM booking WHERE booking.user_id = :user_id AND booking.date = :date")
        valores = {"user_id" : b.user_id, "date" : b.date}
        existing_booking = session.execute(consulta, valores).fetchone()
        
        if existing_booking:
            return True
        
        parking_lot = get_parking_lot(b.company_id)
        
        consulta = text("SELECT * FROM booking WHERE booking.parking_lot_id = :parking_lot_id AND booking.date = :date")
        valores = {"parking_lot_id" : parking_lot["id"], "date" : b.date}
        existing_booking = session.execute(consulta, valores).fetchone()
        
        if existing_booking:
            return None
        
        new_id = str(uuid.uuid4())
        
        consulta = text("INSERT INTO booking VALUES (:id, :user_id, :parking_lot_id, :date, :hour, :date_created)")
        valores = {"id" : new_id, "user_id" : b.user_id, "parking_lot_id" : parking_lot["id"], "date" : b.date, "hour" : b.hour, "date_created" : datetime.now().date()}
        session.execute(consulta, valores)
        session.commit()
        
        return get_booking(new_id)
    except Exception as e:
        print(f"Error al insertar en la base de datos: {e}")
        return None
    finally:
        session.close()
        
        
@user.get("/get_booking/{id}", tags=["booking"], description="Get reservations")
def get_booking(id : str):
    try:
        
        consulta = text("SELECT * FROM booking WHERE booking.id = :id")
        result = session.execute(consulta, {"id" : id}).fetchone()
        
        if result:
            consulta_parking = text("SELECT number FROM parking_lot WHERE id = :id")
            parking_number = session.execute(consulta_parking, {"id" : result[2]}).fetchone()[0]
            
            consulta_user = text("SELECT name FROM user WHERE id = :id")
            user_name = session.execute(consulta_user, {"id" : result[1]}).fetchone()[0]
            
            booking = {
                "id" : result[0],
                "user_name" : user_name,
                "parking_lot_number" : parking_number,
                "date" : result[3],
                "hour" : result[4],
                "date_created" : result[5]
            }
            
            return booking
        else:
            return None
    except Exception as e:
        print(f"Error al insertar en la base de datos: {e}")
        return None
    finally:
        session.close()       
            

@user.get("/get_bookings/{user_id}", tags=["booking"], description="Get reservations")
def get_bookings(user_id : str):
    try:
        print(user_id)
        
        consulta = text('SELECT id FROM booking WHERE booking.user_id = :user_id')
        results = session.execute(consulta, {"user_id" : user_id}).fetchall()
        
        if results:
            bookings = {}
            i = 0
            for row in results:
                bookings[i] = get_booking(row[0])
                i += 1    
            return list(bookings.values())
        else:
            return None 
    except Exception as e:
        print(f"Error al insertar en la base de datos: {e}")
        return None
    finally:
        session.close()