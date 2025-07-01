import os
import requests
from fastapi import UploadFile

CLOUDCONVERT_API_KEY = os.environ.get("CLOUDCONVERT_API_KEY")
CLOUDCONVERT_API_URL = "https://api.cloudconvert.com/v2/import/upload"

def send(file: UploadFile):
    headers = {
        "Authorization": f"Bearer {CLOUDCONVERT_API_KEY}",
    }
    # Step 1: Create an upload import task
    resp = requests.post(CLOUDCONVERT_API_URL, headers=headers)
    resp.raise_for_status()
    upload_task = resp.json()["data"]
    upload_url = upload_task["result"]["form"]["url"]
    form_data = upload_task["result"]["form"]["parameters"]
    files = {"file": (file.filename, file.file, file.content_type)}
    # Step 2: Upload the file to the provided URL
    upload_resp = requests.post(upload_url, data=form_data, files=files)
    upload_resp.raise_for_status()
    return upload_resp.json() if upload_resp.headers.get("content-type", "").startswith("application/json") else {"status": "uploaded"} 