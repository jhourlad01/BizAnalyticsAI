#!/bin/sh
# Setup script for biz-analytics-ai-api

python -m venv venv
. venv/Scripts/activate
pip install --upgrade pip
pip install -r requirements.txt

echo "[✔] Environment setup complete. Activate with: . venv/Scripts/activate" 