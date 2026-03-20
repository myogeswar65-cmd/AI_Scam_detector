import joblib

model = joblib.load("app/services/model.pkl")
vectorizer = joblib.load("app/services/vectorizer.pkl")

def predict_scam(text: str):
    vec = vectorizer.transform([text])
    pred = model.predict(vec)[0]
    prob = model.predict_proba(vec)[0][pred]

    if pred == 1:
        return {
            "result": "Scam Likely",
            "confidence": f"{round(prob*100,2)}%"
        }
    else:
        return {
            "result": "Safe",
            "confidence": f"{round(prob*100,2)}%"
        }