from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import sessionmaker

engine = create_engine("mysql+pymysql://root:password@localhost:3306/PARKHUB", echo=True)

meta = MetaData()

conn = engine.connect()

Session = sessionmaker(bind=engine)
session = Session()