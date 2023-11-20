from sqlalchemy import Column, Table, ForeignKey, UniqueConstraint
from sqlalchemy.sql.sqltypes import Integer, String, Boolean, Date, Time, DateTime
from config.db import meta, engine


users = Table("user", meta,
    Column("id", String(36), primary_key=True),
    Column("name", String(36), nullable=False),
    Column("email", String(100), nullable=False, unique=True),
    Column("password", String(100), nullable=False),
    Column("date_created", DateTime, nullable=False),
    UniqueConstraint('email', name='email_UNIQUE'),  
)


companies = Table("company", meta,
                     Column("id", String(36), primary_key=True),
                     Column("name", String(100), nullable=False, unique=True),
)


parking_lot = Table("parking_lot", meta,
                    Column("id", String(36), primary_key=True),
                    Column("company_id", String(36), ForeignKey('company.id'), nullable=False),
                    Column("number", String(36), nullable=False, unique=True)
)


bookings = Table("booking", meta,
                Column("id", String(36), primary_key=True),
                Column("user_id", String(36), ForeignKey('user.id'), nullable=False),
                Column("parking_lot_id", String(36), ForeignKey('parking_lot.id'), nullable=False),
                Column("date", Date, nullable=False),
                Column("hour", String(16), nullable=False),
                Column("date_created", DateTime, nullable=False),
)

meta.create_all(engine)