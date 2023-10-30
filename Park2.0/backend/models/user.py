from sqlalchemy import Column, Table
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta, engine


users = Table("user", meta,
    Column("id", String(255), primary_key=True),
    Column("name", String(255), nullable=False),
    Column("email", String(255), nullable=False),
    Column("password", String(255), nullable=False),
)

meta.create_all(engine)