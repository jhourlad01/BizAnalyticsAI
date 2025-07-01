# Deployment & Tooling Guide

This guide outlines the tools and deployment steps for each part of the BizAnalyticsAI stack.

---

## 1. Frontend (React App)
**Tool:** Vercel

**Use:** Host your React.js UI

**Steps:**
1. Sign up with GitHub
2. Push your React app to GitHub
3. Connect repo to Vercel → Auto-deploy

---

## 2. Backend (API Server)
**Tool:** Railway or Render

**Use:** Run Python code (e.g. FastAPI) that handles uploads and analysis

**Steps:**
1. Sign up with GitHub
2. Create a new Python project
3. Deploy your FastAPI code from GitHub
4. Add secrets (API keys)

---

## 3. Document Parsing
**Tool:** CloudConvert or local unstructured

**Use:** Convert PDFs, Word files, etc. into plain text

**Steps:**
1. Sign up
2. Get API key
3. Use API to extract text from uploaded files

---

## 4. Embeddings
**Tool:** Hugging Face Inference API

**Use:** Convert text into numeric form for search

**Steps:**
1. Sign up
2. Get API key
3. Use model like `sentence-transformers/all-MiniLM-L6-v2`

---

## 5. Vector Database
**Tool:** Qdrant Cloud

**Use:** Store and search embedded document chunks

**Steps:**
1. Sign up
2. Create a collection
3. Use REST API with your key

---

## 6. LLM (AI for answering & insight generation)
**Tool:** OpenRouter.ai or Groq

**Use:** Ask questions, summarize, generate analysis

**Steps:**
1. Sign up
2. Get API key
3. Call LLaMA3 or Mixtral models from backend

---

## 7. Charts & KPIs
**Tool:** Plotly in Python

**Use:** Generate visual analytics

**Steps:**
1. Use Pandas to clean data
2. Use Plotly to create charts
3. Return chart data to React frontend 