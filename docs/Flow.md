# How It Works: From Document Upload to AI Responses

This guide explains in simple terms how the system processes your uploaded document, breaks it down, stores it, and finally uses AI to answer questions based on it.

---

## Step-by-Step Process

### 1. Uploading the Document
- **User Action**: You select a file (PDF, Word, etc.) in the web app and click "Upload".
- **Frontend Tool**: React (Vite) UI form
- **Backend Tool**: FastAPI (running on Railway)
- **What Happens**:
  - The file is sent to the backend via a secure POST request.

---

### 2. Converting to Text
- **Tool/Service**: CloudConvert API
- **What Happens**:
  - The uploaded document is sent to CloudConvert.
  - CloudConvert extracts the readable text from the file and sends it back.

---

### 3. Splitting the Text into Chunks
- **Tool**: Python code in FastAPI
- **What Happens**:
  - The returned text is too long for AI to handle all at once.
  - It’s broken into smaller, readable sections (called “chunks”).

---

### 4. Creating Embeddings (Vector Representation)
- **Service**: Hugging Face Inference API
- **What Happens**:
  - Each chunk of text is converted into a numeric format (called a “vector”).
  - This allows AI to later search and compare meaning, not just keywords.

---

### 5. Storing the Vectors
- **Tool**: Qdrant Cloud (Vector Database)
- **What Happens**:
  - The vector representations of each chunk, along with their original text, are saved in a database designed for fast semantic search.

---

### 6. Asking a Question
- **User Action**: You enter a question into the app (e.g., "What is the company’s net income?")
- **Frontend Tool**: React input form
- **Backend Tool**: FastAPI endpoint (`/ask`)

---

### 7. Finding Relevant Information
- **Tool**: Hugging Face (again) + Qdrant
- **What Happens**:
  - Your question is converted to a vector (like the document chunks).
  - Qdrant searches for the most relevant chunks from your document based on similarity to your question.

---

### 8. Generating a Response
- **Service**: OpenRouter API (LLM provider)
- **What Happens**:
  - The system sends the question and the most relevant chunks to OpenRouter.
  - A large language model (like GPT-4 or Mixtral) reads the information and generates a clear, human-like answer.

---

### 9. Showing the Answer
- **Frontend Tool**: React (Vite)
- **What Happens**:
  - The AI's answer is displayed on your screen.

---

## Summary of Tools Used

| Step                         | Tool / Service           | Purpose                                |
|-----------------------------|--------------------------|----------------------------------------|
| Upload                      | React + FastAPI          | File upload and API handling           |
| File conversion             | CloudConvert API         | Extract text from documents            |
| Text chunking               | FastAPI (Python)         | Split long text into readable parts    |
| Embeddings                  | Hugging Face API         | Turn text into searchable vectors      |
| Vector storage/search       | Qdrant Cloud             | Store and retrieve meaning-based data  |
| Question processing         | Hugging Face + Qdrant    | Convert question and search chunks     |
| Response generation         | OpenRouter API           | Use LLMs to answer based on context    |
| Display results             | React (Vite)             | Show answer to user                    |

---

This process runs every time a document is uploaded and queried, making it possible to turn raw files into intelligent, searchable insights.
