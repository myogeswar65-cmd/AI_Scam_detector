
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.services.model import predict_scam

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "API running 🚀"}

@app.post("/predict")
def predict(data: dict):
    return predict_scam(data["text"])