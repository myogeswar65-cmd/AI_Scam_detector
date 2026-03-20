import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
import joblib

data = pd.read_csv("app/services/data.csv")

X = data["text"]
y = data["label"]

vectorizer = TfidfVectorizer()
X_vec = vectorizer.fit_transform(X)

model = LogisticRegression()
model.fit(X_vec, y)

joblib.dump(model, "app/services/model.pkl")
joblib.dump(vectorizer, "app/services/vectorizer.pkl")

print("Model trained ✅")