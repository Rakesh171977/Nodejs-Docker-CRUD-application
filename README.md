# 🚀 Node.js + MySQL CRUD App (Dockerized)

A full-stack CRUD application built with Node.js, Express, MySQL, and fully containerized using Docker and Docker Compose.

---

## 📌 Features

- Create, Read, Update, Delete (CRUD) operations
- Node.js + Express backend
- MySQL database
- EJS templating engine
- Dockerized application
- Multi-container setup using Docker Compose

---

## 🧠 Architecture
Browser → Node.js (Express) → MySQL


Dockerized version:


Browser → Node Container → MySQL Container


---

## 🐳 Tech Stack

- Node.js
- Express.js
- MySQL
- Docker
- Docker Compose
- EJS

---

## ⚙️ Setup & Run (Docker)

### 1️⃣ Clone repository


git clone https://github.com/Rakesh171977/nodejs-docker-crud-app.git

cd nodejs-docker-crud-app


---

### 2️⃣ Run containers


docker-compose up --build


---

### 3️⃣ Access application


http://localhost:3000


---

## 🗄️ Database Setup

Run this command:


docker exec -it mysql-db mysql -u root -p


Password:

1234


Then:

```sql
USE database_links;

CREATE TABLE customer (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  address VARCHAR(255),
  phone VARCHAR(20)
);


```

⚠️ Known Issues
Database table must be created manually
No retry mechanism if DB is not ready
Running in development mode inside container

🧑‍💻 Author
   Rakesh Verma
