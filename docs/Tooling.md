# Tooling & Deployment Guide

This guide provides step-by-step instructions for deploying and connecting all major services in your stack.

---

## 1. Frontend (Vercel)
**Purpose:** Hosts your React (Vite) app and auto-deploys from GitHub.

**Steps:**
1. Go to [vercel.com](https://vercel.com) and sign up using your GitHub account.
2. Click "Add New Project" and select your GitHub repo.
3. If your React project is inside a folder (like `/frontend`), set that as the project directory.
4. Choose the Vite preset.
5. Leave build command as `vite build` and output as `dist`.
6. Click Deploy. Done.

---

## 2. Backend API (Railway or Render)
**Purpose:** Runs your Python FastAPI server to process files and talk to AI.

### Railway
1. Go to [railway.app](https://railway.app) and sign up.
2. Click "New Project" → "Deploy from GitHub Repo".
3. Select your backend repo or folder.
4. Railway will auto-detect Python and install your dependencies.
5. Set start command to run FastAPI: `uvicorn main:app --host 0.0.0.0 --port 8000`
6. Railway gives you a public API URL.

### Render (alternative)
1. Go to [render.com](https://render.com) and sign up.
2. Click "New Web Service", then connect your GitHub backend repo.
3. Select Python environment.
4. Set build command if needed: `pip install -r requirements.txt`
5. Set start command: `uvicorn main:app --host 0.0.0.0 --port 8000`
6. Render also gives a public URL.

---

## 3. CloudConvert API
**Purpose:** Turns PDF or DOCX files into plain text.

**Steps:**
1. Go to [cloudconvert.com](https://cloudconvert.com) and sign up.
2. Get your free API key from your dashboard.
3. In your backend code, send a file to their API and receive the converted text.
4. Example: POST a file to CloudConvert → get back .txt.

---

## 4. Hugging Face Embeddings API
**Purpose:** Converts text into vectors (for searching and context).

**Steps:**
1. Go to [huggingface.co](https://huggingface.co) and create an account.
2. Go to Access Tokens → create a token.
3. Use their hosted inference endpoint:
   - Model: `sentence-transformers/all-MiniLM-L6-v2`
   - Endpoint: `https://api-inference.huggingface.co/pipeline/feature-extraction/...`
4. Send your text chunks to this API using your token.

---

## 5. Qdrant Cloud
**Purpose:** Stores and searches your vectorized document chunks.

**Steps:**
1. Go to [qdrant.tech](https://qdrant.tech) → "Start for Free".
2. Create a new project and note the API key and endpoint.
3. From your backend:
   - Create a "collection" (like a folder).
   - Send vectors (from Hugging Face) and metadata (e.g., filename).
   - Later, use Qdrant to search vectors based on queries.

---

## 6. OpenRouter.ai (LLM)
**Purpose:** Generates insights or summaries using LLMs (like GPT-4, Claude, Mixtral).

**Steps:**
1. Go to [openrouter.ai](https://openrouter.ai) and sign up.
2. Go to "API Keys" and generate a new one.
3. Use this key to call an LLM endpoint like:

   ```http
   POST https://openrouter.ai/api/v1/chat/completions
   Authorization: Bearer YOUR_API_KEY
   ```
   Provide user questions + document context (from Qdrant).

---

## 7. Plotly for Charts
**Purpose:** Turns your structured data (like financials) into charts.

**Steps:**
1. Install Plotly in your backend: `pip install plotly pandas`
2. In your FastAPI code:
   - Process parsed numbers using Pandas.
   - Generate graphs using Plotly.
   - Return chart JSON to the frontend, or base64 image.

---

## Final Flow Overview
1. User uploads a file on your React app.
2. File goes to FastAPI backend via API.
3. Backend sends file to CloudConvert → gets text.
4. Text is broken into chunks → sent to Hugging Face for embeddings.
5. Embeddings go to Qdrant Cloud.
6. When user asks a question:
   - Backend finds matching vectors in Qdrant.
   - Sends context to OpenRouter → gets AI output.
   - Analytics data is processed using Pandas + Plotly → sent to frontend. 