from fastapi import FastAPI
from service.api.api import main_router
import onnxruntime as rt
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(project_name="Emotions Detection")

origins = [
    "http://127.0.0.1:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(main_router)

providers = ['CPUExecutionProvider']
m_q = rt.InferenceSession("eff_quantized.onnx", providers=providers)


@app.get("/")
async def root():
    return {"Image Classification": "Human Emotion Detection"}
