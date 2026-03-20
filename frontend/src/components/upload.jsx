import { useState } from "react";
import { predictScam } from "../api/api";

export default function Upload() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await predictScam(text);
      setResult(res.data);
    } catch (error) {
      alert("Backend not connected");
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#0f172a",
      color: "white",
      fontFamily: "Arial"
    }}>
      <div style={{
        background: "#1e293b",
        padding: "30px",
        borderRadius: "10px",
        width: "400px",
        textAlign: "center",
        boxShadow: "0px 0px 20px rgba(0,0,0,0.5)"
      }}>
        <h2>🚨 AI Scam Detector</h2>

        <textarea
          placeholder="Enter suspicious message..."
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "100%",
            height: "100px",
            marginTop: "15px",
            padding: "10px",
            borderRadius: "5px",
            border: "none"
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            marginTop: "15px",
            padding: "10px",
            width: "100%",
            background: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Analyze
        </button>

        {result && (
          <div style={{ marginTop: "20px" }}>
            <h3 style={{
              color: result.result === "Scam Likely" ? "#f87171" : "#4ade80"
            }}>
              {result.result}
            </h3>
            <p>Confidence: {result.confidence}</p>
          </div>
        )}
      </div>
    </div>
  );
}