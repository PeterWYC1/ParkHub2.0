from fastapi import APIRouter
from config.db import conn, session
from models.user import users
from schemas.user import User, UserCount
from typing import List
from starlette.status import HTTP_204_NO_CONTENT
from sqlalchemy import func, select, text
import uuid

user = APIRouter()


@user.get(
    "/users",
    tags=["users"],
    response_model=List[User],
    description="Get a list of all users",
)
def get_users():
    return conn.execute(users.select()).fetchall()


@user.get("/users/count", tags=["users"], response_model=UserCount)
def get_users_count():
    result = conn.execute(select([func.count()]).select_from(users))
    return {"total": tuple(result)[0][0]}


@user.get(
    "/users/{id}",
    tags=["users"],
    response_model=User,
    description="Get a single user by Id",
)
def get_user(id: str):
    return conn.execute(users.select().where(users.c.id == id)).first()


@user.post("/SignUp", tags=["users"], description="Create a new user")
def Sign_Up(u: User):
    try:
        new_id = str(uuid.uuid4())
        consulta = text('INSERT INTO user VALUES (:uuid, :name, :email, :password);')
        valores = {"uuid" : new_id,"name": u.name, "email": u.email, "password": u.password}
        session.execute(consulta, valores)
        session.commit()
        return {"message": "SignUp successful", "uuid": new_id}
    except Exception as e:
        print(f"Error al insertar en la base de datos: {e}")
        return {"message": "SignUp unsuccessful"} 
    finally:
        session.close()


@user.post("/LogIn", tags=["users"], description="Login")
def log_in(email: str, password: str):
    try:
        consulta = text('SELECT id FROM user WHERE user.email = :email')
        user_id = session.execute(consulta, {'email': email}).scalar()
        if user_id:
            consulta = text('SELECT password FROM user WHERE user.email = :email')
            stored_password = session.execute(consulta, {'email': email}).scalar()
            if stored_password == password:
                return {"message": "Login successful", "uuid": user_id}
        return {"message": "Login unsuccessful"}
    except Exception as e:
        print(f"Error al insertar en la base de datos: {e}")
        return {"message": "Login unsuccessful"}    