from dotenv import load_dotenv
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from services.cloudconvert import send

load_dotenv()

app = FastAPI(title="biz-analytics-ai-api")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return "Hello, BizAnalyticsAIAPI"

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.post("/upload")
async def upload_file(
    file: UploadFile = File(...),
    company_id: str = Form(...)
):
    cloudconvert_response = send(file)
    return {
        "company_id": company_id,
        "filename": file.filename,
        "cloudconvert": cloudconvert_response
    } 