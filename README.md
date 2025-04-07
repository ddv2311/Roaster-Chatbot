# Roaster-Chatbot


A MERN stack web application that uses AI to generate savage, hilarious roasts on demand. Input a target—like "my friend Jake who loves video games"—and watch the Roastmaster deliver a unique, dynamically generated burn every time. Powered by generative AI and built with MongoDB, Express.js, React, and Node.js.

---

## Features

- **Dynamic Roasts:** AI crafts fresh, context-aware roasts based on user input—no static templates.
- **Simple UI:** Clean React interface with an input field and instant roast output.
- **Scalable Backend:** Express server integrates with Hugging Face's Inference API for AI generation.
- **Fun & Interactive:** Perfect for roasting friends, objects, or anything you can think of!

---

## Tech Stack

- **Frontend:** React, CSS, Axios
- **Backend:** Node.js, Express.js, Hugging Face API (GPT-2)
- **Database:** MongoDB (optional, not implemented yet)
- **Tools:** npm, Git, Nodemon

---



## Prerequisites

- **Node.js:** v16+ (includes npm)
- **Git:** For cloning and version control
- **Hugging Face API Key:** Sign up at [huggingface.co](https://huggingface.co) to get one

---

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/ddv2311/Roaster-Chatbot.git
cd Roaster-Chatbot
```

### 2. Create a .env file with content
```bash
PORT=5000
HUGGING_FACE_API_KEY=your_hugging_face_api_key_here
```

### 3.install dependencies and run app
```bash
npm i
npm run dev


