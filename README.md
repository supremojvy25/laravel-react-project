# Laravel + React Product Manager

A simple web application built using **Laravel (API)** and **React.js (Frontend)**.  
The app allows users to **add, view, and delete products**.

---

## Features

- Add product
- View product list
- Delete product
- Laravel REST API
- React frontend

---

## Tech Stack

Backend
- Laravel
- MySQL / SQLite

Frontend
- React.js
- Axios

---

## Project Structure

```
project-folder
│
├── product-api   (Laravel backend)
└── product-ui    (React frontend)
```

---

## Backend Setup (Laravel)

1. Go to the backend folder

```
cd product-api
```

2. Install dependencies

```
composer install
```

3. Copy environment file

```
cp .env.example .env
```

4. Generate application key

```
php artisan key:generate
```

5. Configure your database in `.env`

Example:

```
DB_DATABASE=products
DB_USERNAME=root
DB_PASSWORD=
```

6. Run migrations

```
php artisan migrate
```

7. Start the Laravel server

```
php artisan serve
```

Backend will run at:

```
http://127.0.0.1:8000
```

---

## Frontend Setup (React)

1. Go to the frontend folder

```
cd product-ui
```

2. Install dependencies

```
npm install
```

3. Start React app

```
npm start
```

Frontend will run at:

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|------|------|------|
| GET | /api/products | Get all products |
| POST | /api/products | Create product |
| PUT | /api/products/{id} | Update product |
| DELETE | /api/products/{id} | Delete product |

---
