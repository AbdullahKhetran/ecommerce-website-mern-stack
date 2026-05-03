# Krist E-Commerce Server

Node.js/Express backend API for the Krist e-commerce platform, providing RESTful endpoints for user management, products, cart, and orders.

## Live Site
The backend is deployed on [Render](https://ecommerce-website-mern-stack-cye5.onrender.com/)

## Overview

The server is a RESTful API built with Express.js that handles all backend operations for the e-commerce platform. It provides secure endpoints for user authentication, product management, shopping cart operations, and order processing.

Key features include:
- JWT-based user authentication
- RESTful API design
- MongoDB data persistence
- Secure password hashing
- Error handling middleware
- CORS support for frontend integration

## Getting Started

### Prerequisites
- Node.js
- MongoDB database
- npm

### Installation

1. Navigate to the server directory:
    ```bash
    cd server
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    ```bash
    cp .env.example .env
    ```

4. Edit `.env` and configure:
    ```
    MONGO_DB=<your-mongodb-connection-string>
    JWT_SECRET=<your-jwt-secret-key>
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

The server will start on port 8080

### Available Scripts
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm test` - Run tests

## Architecture & Tech Stack

### Project Structure
```
server/
├── controllers/    # API route controllers
├── models/         # Mongoose data models
├── routes/         # Express route definitions
├── middleware/     # Custom middleware
├── utils/          # Utility functions
├── index.js        # Server entry point
├── package.json
└── README.md
```

### Technology Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express |  Web framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| JWT | Authentication tokens |
| Bcrypt | Password hashing |
| CORS | Cross-origin requests |

### Server Architecture

**Entry Point (`index.js`)**
The server initializes with Express middleware configuration, MongoDB connection, and route mounting:

```javascript
// Middleware setup
app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true}));

// Route mounting
app.use("/api/user", UserRouter);
app.use("/api/products", ProductRouter);
```  

**Database Connection**
MongoDB connection with error handling and strict query mode.

**Error Handling**
Global error handling middleware for consistent API responses.

### API Endpoints

**Authentication Routes (`/api/user`)**
- `POST /signup` - User registration
- `POST /signin` - User login with JWT token

**Product Routes (`/api/products`)**
- `GET /` - Get all products with filtering
- `GET /:id` - Get product details
- `POST /add` - Add Products

**Protected Routes** (require JWT token)
- Cart management endpoints
- Favorites management endpoints
- Order processing endpoints

### Data Models
- User Model
- Product Model
- Order Model