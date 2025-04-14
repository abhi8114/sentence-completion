# 🧠 Sentence Construction Tool

This is a **Sentence Completion Web Application** built as part of the **CA MONK Frontend Internship Assignment**. The app challenges users to construct grammatically correct sentences by choosing the right word order under a time limit.

## 🔧 Role

**Frontend Intern**

## 🚀 Live Demo

👉 https://sentence-completion-ore7.vercel.app/

---

## 📝 Task Overview

The application presents users with incomplete sentences and four word options. Users must drag or click the correct words into the blanks before the timer ends.

### ✅ Features Implemented

- Displays incomplete sentences with blank spaces.
- Offers 4 options per question to complete the sentence.
- Allows unselecting a word by clicking on a filled blank.
- Implements a 30-second countdown timer per question.
- Automatically moves to the next question when time is up.
- “Next” button is enabled only when all blanks are filled.
- Fetches sentence data from a local JSON API using JSON Server.
- Manages quiz state and flow effectively with React hooks.
- Displays a **result screen** at the end showing:
  - All attempted answers (correct/incorrect)
  - The correct answers for mistakes
  - Final score out of 10

---

## 💻 Tech Stack

| Tech         | Usage                          |
|--------------|--------------------------------|
| **React.js** | Frontend framework             |
| **TypeScript** | Type safety & better dev experience |
| **Tailwind CSS** | Styling and layout         |
| **Vite**     | Build tool for fast dev env    |
| **React Router DOM** | Page navigation         |
| **JSON Server** | Local API for mock data     |

> ⚠️ Did **not** use `shadcn/ui` in this project.

---

## 📱 Responsive Design

The app is fully responsive and optimized for mobile, tablet, and desktop devices using Tailwind's utility-first approach.

---

## 📦 How to Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/your-username/sentence-construction-app.git
cd sentence-construction-app
