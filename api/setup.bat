@echo off
REM Setup script for biz-analytics-ai-api (Windows)

python -m venv venv
call venv\Scripts\activate.bat
python -m pip install --upgrade pip
python -m pip install -r requirements.txt

echo [✔] Environment setup complete. Activate with: venv\Scripts\activate.bat 