# biz-analytics-ai-api

A minimal FastAPI app for BizAnalytics AI.

## Setup

```bash
cd api
sh setup.sh         # On Linux/macOS
setup.bat           # On Windows

uvicorn main:app --reload
```

## Endpoints
- `/` — Welcome message
- `/health` — Health check 