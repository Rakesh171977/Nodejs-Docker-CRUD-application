# 🚀 Node.js + MySQL CRUD App (Dockerized)

![Node.js](https://img.shields.io/badge/Node.js-18-green)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![MySQL](https://img.shields.io/badge/MySQL-8-orange)
![Status](https://img.shields.io/badge/Status-Running-success)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 📌 Project Overview

This is a **Dockerized full-stack CRUD application** built using:

- Node.js (Express)
- MySQL
- Docker & Docker Compose

It demonstrates **real-world DevOps practices** such as:
- Multi-container architecture
- Service networking
- Container orchestration
- Debugging runtime issues

---

## 🧠 Architecture Diagram
       ┌──────────────┐
       │   Browser    │
       └──────┬───────┘
              │
              ▼
    ┌───────────────────┐
    │  Node.js App      │
    │ (Express Server)  │
    └────────┬──────────┘
             │
             ▼
    ┌───────────────────┐
    │   MySQL Database  │
    │   (Container)     │
    └───────────────────┘

    
---

## 🐳 Docker Architecture

docker-compose
│
├── node-app (Port 3000)
│
└── mysql-db (Port 3307 → 3306)



---

## ⚙️ Tech Stack

| Layer        | Technology        |
|-------------|------------------|
| Backend     | Node.js, Express |
| Database    | MySQL            |
| Template    | EJS              |
| DevOps      | Docker, Compose  |

---

## 📁 Project Structure
.
├── src/
│ ├── controllers/
│ ├── routes/
│ ├── views/
│ ├── db.js
│ ├── app.js
│ └── index.js
│
├── Dockerfile
├── docker-compose.yml
├── package.json
├── .gitignore
└── README.md



---

## 🚀 Getting Started

### 🔧 Prerequisites

- Docker
- Docker Compose

---

### ▶️ Run the Application

```bash
docker-compose up --build

```

🌐 Access App
http://localhost:3000


Database Setup 

Login to MySQL container:

docker exec -it mysql-db mysql -u root -p
Password:

1234

Run:

USE database_links;

CREATE TABLE customer (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  address VARCHAR(255),
  phone VARCHAR(20)
);


🔥 API Endpoints
Method	Endpoint	Description
GET	/	List customers
POST	/add	Add customer
GET	/update/:id	Edit page
POST	/update/:id	Update customer
GET	/delete/:id	Delete customer


🐳 Docker Details
Services
Service	Description	Port
node-app	Express server	3000
mysql-db	MySQL database	3307


⚠️ Challenges Faced
❌ Database connection refused (container timing issue)
❌ MySQL table not found
❌ Port mismatch confusion (3000 vs 4000)
❌ ESM import/export issues


🛠️ Solutions Implemented
✅ Fixed DB host using container name
✅ Corrected MySQL port (3306 inside container)
✅ Manual DB initialization
✅ Debugged container logs
✅ Fixed module exports


📸 Screenshots
<img width="1919" height="911" alt="Screenshot 2026-03-22 191108" src="https://github.com/user-attachments/assets/00e130e1-aa67-42ce-a3f7-5dfb648cf09b" />

