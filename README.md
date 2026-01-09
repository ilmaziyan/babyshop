# Babyshop – E‑commerce demo for baby items

This is a simple e‑commerce demo site for a baby items shop, built with **React + Vite + TypeScript**.

It includes:

- A cozy **homepage** hero section
- A **product catalog** with featured baby essentials
- A slide‑in **cart drawer** with quantity controls and totals
- An on‑site **AI‑style assistant chatbot named Tally** for common Q&A

## Running the site

1. **Install dependencies**

   ```bash
   cd babyshop
   npm install
   ```

2. **Start the dev server**

   ```bash
   npm run dev
   ```

3. Open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

## Using Tally, the chatbot

- Tally appears as a floating **“Chat with Tally”** button in the bottom‑right corner.
- Click it to open the chat window, then:
  - Type a question, or
  - Click a **suggested question chip** (e.g. shipping time, ages, returns).
- Tally matches your question to a small FAQ set and replies immediately.

Currently, Tally runs fully in the browser and does not call an external AI API.  
If you’d like, you can later connect `TallyChatbot` to a real backend or AI service (OpenAI, etc.) by swapping out the `answerWithFaq` function with an API call.
