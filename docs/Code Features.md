# AI-Powered Document Analytics Platform (POC) -- Code Features

This project is a proof-of-concept (POC) for an application that accepts uploaded business documents, analyzes their content using AI and vector search, and returns analytics across multiple business domains such as finance, sales, operations, HR, and compliance.

---

## Features

- Upload documents (PDF, DOCX, etc.)
- Automatic text extraction and chunking
- Vector embeddings and storage
- Question-answering via LLMs
- Business analytics visualization

---

## Tech Stack

- **Frontend**: React (Vite) deployed on Vercel
- **Backend**: FastAPI deployed on Railway or Render
- **Document Conversion**: CloudConvert API
- **Embeddings**: Hugging Face Inference API
- **Vector Database**: Qdrant Cloud
- **LLM Provider**: OpenRouter (e.g., GPT-4, Mixtral)
- **Visualization**: Plotly (optional)

---

## 1. Frontend (React via Vite)

**Code the following:**
- Upload form to select and send document files
- Input field to ask questions
- Output view for AI-generated answers
- Navigation for switching between Upload, Ask, and Analytics pages
- Logic to call backend API endpoints for file upload and question submission

---

## 2. Backend API (FastAPI)

**Code the following:**
- `/upload` endpoint to receive and process uploaded files
- `/ask` endpoint to process user questions
- Function to extract text from documents using CloudConvert
- Function to split text into chunks
- Function to send text chunks to Hugging Face for embeddings
- Function to store text and vectors in Qdrant
- Function to query Qdrant for top-matching chunks
- Function to send retrieved context + question to OpenRouter and return the answer

---

## 3. CloudConvert API

**Code the following:**
- Upload file to CloudConvert for conversion to `.txt`
- Wait for conversion to finish
- Download and return the plain text result

---

## 4. Hugging Face Inference API

**Code the following:**
- Send text chunks to Hugging Face embedding model (e.g., `all-MiniLM-L6-v2`)
- Receive vector embeddings for each chunk

---

## 5. Qdrant Cloud

**Code the following:**
- Store chunks with associated embeddings into a Qdrant collection
- Search the collection by sending a new query embedding and returning top matches

---

## 6. OpenRouter API

**Code the following:**
- Send a prompt with relevant context + user question to OpenRouter
- Return the generated response from the selected LLM (e.g., GPT-4, Mixtral)

---

## 7. Plotly (Optional)

**Code the following:**
- Parse uploaded document content into structured metrics (e.g., revenue, headcount, customer segments)
- Generate visual charts (line, bar, pie) using Plotly
- Return chart data to the frontend as JSON

---

## Notes

- Use `.env` files to manage API keys and secrets
- Secure all endpoints and sanitize inputs
- All components are installable and runnable locally without cloud lock-in