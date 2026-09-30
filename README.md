# Sanifit

A full-stack **MERN e-commerce web application** built as a Final Year Project (FYP). Customers can browse products, add them to a cart, place orders and pay online, while admins manage the store through a dedicated dashboard with analytics and a live support chat.

## Features

**Customers**
- Register, log in and manage profile
- Browse products by category, search, sort and filter
- Product details with image gallery and zoom
- Ratings and reviews
- Shopping cart and order placement
- PayPal payment integration
- Order history and order details
- Live chat with support (Socket.IO)

**Admin**
- Manage products (create, edit, delete, upload up to 3 images at a time)
- Manage categories and attributes
- Manage users
- View and update orders (mark as delivered)
- Sales analytics charts
- Live chat with customers

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 17, Redux, React Router 6, React Bootstrap, Axios, Recharts |
| Backend | Node.js, Express, Socket.IO, JWT (cookie-based auth), bcryptjs, express-fileupload |
| Database | MongoDB with Mongoose |
| Payments | PayPal JS SDK |

## Project Structure

```
sanifit-fyp/
├── backend/
│   ├── config/        # Database connection, pagination
│   ├── controllers/   # Route logic (products, orders, users, categories)
│   ├── middleware/    # Auth token verification
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API routes
│   ├── seeder/        # Sample data for the database
│   ├── utils/         # Helpers (token, password hashing, image validation)
│   └── server.js      # Express + Socket.IO server
└── frontend/
    ├── public/
    └── src/
        ├── components/
        ├── pages/     # Customer, admin and user pages
        ├── redux/     # Store, actions, reducers
        └── utils/
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or newer)
- [MongoDB](https://www.mongodb.com/) running locally, or a free MongoDB Atlas cluster

### 1. Clone the repository
```bash
git clone https://github.com/Danish3431-code/sanifit-fyp.git
cd sanifit-fyp
```

### 2. Install dependencies
```bash
cd backend
npm install
cd ../frontend
npm install
```

### 3. Set up environment variables
In the `backend` folder, copy `.env.example` to `.env` and fill in your values:

```bash
cd ../backend
cp .env.example .env        # on Windows: copy .env.example .env
```

| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET_KEY` | Secret used to sign JWT tokens |
| `NODE_ENV` | `development` or `production` |
| `PORT` | Backend port (default `5000`) |

### 4. (Optional) Load sample data
From the `backend` folder:
```bash
npm run seed:data      # import sample categories, products, users, reviews and orders
npm run seed:data-d    # delete all data
```
The seeder creates an admin user (`admin@admin.com`) and a normal user. See `backend/seeder/users.js`.

> Note: the seeder clears existing data in the collections before importing.

### 5. Run the app
From the `backend` folder, this starts the API and the React app together:
```bash
npm run dev
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

To run them separately:
```bash
# backend
npm run server-dev

# frontend (in another terminal)
cd ../frontend
npm start
```

## API Overview

All routes are prefixed with `/api`.

| Route | Purpose |
|---|---|
| `/api/products` | List, search, filter, bestsellers, product details, admin CRUD and image upload |
| `/api/categories` | Get, create and delete categories, save attributes |
| `/api/users` | Register, login, profile, reviews, admin user management |
| `/api/orders` | Create orders, mark paid or delivered, admin orders and analytics |
| `/api/get-token`, `/api/logout` | Session check and logout |

## Payments (PayPal)
The PayPal client ID is set in `frontend/src/pages/user/UserOrderDetailsPage.js`. Replace it with your own PayPal (sandbox) client ID for testing.

## Author

**Danish Nadeem**
GitHub: [@Danish3431-code](https://github.com/Danish3431-code)
