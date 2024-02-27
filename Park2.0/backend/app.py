from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.user import user
from routes.booking import book

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://localhost:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,  
    allow_methods=["*"],     
    allow_headers=["*"]      
)

app.include_router(user)
app.include_router(book)
