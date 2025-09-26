# 💬 SonicChat - Real-Time Web Application

A **full-stack real-time chat application** with authentication, instant messaging, file uploads, notifications, and more. Built with **Node.js, Express, MongoDB, Socket.io, React, and Tailwind CSS**.

---

## ✨ Features

- **🔐 Custom JWT Authentication** (No 3rd-party auth)
- **⚡ Real-time Messaging** via Socket.io
- **🟢 Online/Offline Presence Indicators**
- **🔔 Notifications & Typing Sounds** (toggle on/off)
- **📨 Welcome Emails** on Signup (via Resend)
- **🗂️ File & Image Uploads** (Cloudinary)
- **🧰 REST API** with Node.js & Express
- **🧱 MongoDB for Data Persistence**
- **🚦 API Rate-Limiting** (Arcjet)
- **🎨 Modern UI** with React, Tailwind CSS & DaisyUI
- **🧠 Global State Management** with Zustand
- **🧑‍💻 GitHub Workflow** (branches, PRs, merges)
- **🚀 Easy Deployment** (Sevalla, Vercel, Netlify)
- **🧪 .env Setup for Configuration**

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS + DaisyUI
- Zustand (State Management)

**Backend**
- Node.js
- Express.js
- MongoDB
- JWT (Authentication)
- Socket.io (Realtime Communication)
- Arcjet (Rate Limiting)

**Other Tools**
- Cloudinary (Image/File Uploads)
- Resend (Transactional Emails)
- Git & GitHub (Version Control)

---

## ⚙️ Backend Setup

Create a `.env` file inside `/backend`:

```env
PORT=3000
MONGO_URI=your_mongo_uri_here

NODE_ENV=development

JWT_SECRET=your_jwt_secret

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email_from_address
EMAIL_FROM_NAME=your_email_from_name

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

## ▶️ Run Backend
```bash
cd backend
npm install
npm run dev
```

## ▶️Run Frontend
```bash
cd frontend
npm install
npm run dev
```
## 🚀 Deployment

Fully deployed on **Sevalla** as a combined web application (Frontend + Backend).

## 📸 Features in Action

- ✅ Signup & Login with JWT  
- ✅ Realtime Chat & Online Users  
- ✅ Profile Update with Cloudinary Uploads  
- ✅ Notifications + Sounds  
- ✅ API Rate Limiting  


