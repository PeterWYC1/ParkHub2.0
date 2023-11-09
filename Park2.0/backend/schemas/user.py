from typing import Optional
from pydantic import BaseModel
from datetime import date as d
from datetime import time

class User(BaseModel):
    id: Optional[str] = None
    name: Optional[str] = None
    email: Optional[str] = None
    password: Optional[str] = None

class Change(BaseModel):
    email: str
    old_password: str
    new_password: str

class Company(BaseModel):
    id: Optional[str] = None
    name: Optional[str] = None

class ParkingLot(BaseModel):
    id: Optional[str] = None
    company_id: Optional[str] = None
    number: Optional[str] = None

class Booking(BaseModel):
    id: Optional[str] = None
    user_id: Optional[str] = None
    parking_lot_id: Optional[str] = None
    company_id: Optional[str] = None
    date: Optional[d] = None
    hour: Optional[str] = None