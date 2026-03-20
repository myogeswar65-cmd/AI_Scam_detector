from fastapi import APIRouter
from app.services.model import predict_scam

router = APIRouter()

@router.post("/predict")
def predict(data: dict):
    return predict_scam(data["text"])