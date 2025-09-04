# Blog App (Node.js + Vue 3)

A simple CRUD application for managing blog posts using **Node.js** (Express) for the backend and **Vue 3** (Vite + Tailwind CSS) for the frontend.

> 📚 This project was created for learning purposes to practice backend API development with Express and frontend interaction with Vue.

---

## 🛠️ Technologies

- **Frontend**: Vue 3, Vite, Vue Router, Axios, Tailwind CSS
- **Backend**: Node.js, Express, Nodemon, CORS
- **Data Storage**: Mock js file (`mockData.js`)
- **Environment**: Node.js v20.19.0 or higher / v22.12.0 or higher

---

## 📁 Project Structure
```plaintext
blog-app/
├── backend/              # Backend server (Express)
│   ├── app.js            # Main server file
│   ├── controllers/      # API controllers
│   ├── routes/           # API routes
│   └── mockData.json     # Mock data (posts)
│
└── frontend/             # Frontend (Vue 3)
    ├── src/              # Vue source code
    ├── index.html        # Main HTML
    └── vite.config.js    # Vite configuration
```

---

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone git@github.com:Grinch3214/blog-api-without-bd.git
cd blog-api-without-bd

cd frontend

npm install
npm run dev

cd ../backend

npm install
npm run dev
```

# 🌐 API Endpoints

All requests are sent to `http://localhost:5000/api/posts`

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/posts`     | Get all posts     |
| GET    | `/api/posts/:id` | Get a post by ID  |
| POST   | `/api/posts`     | Create a new post |
| PUT    | `/api/posts/:id` | Update a post     |
| DELETE | `/api/posts/:id` | Delete a post     |
