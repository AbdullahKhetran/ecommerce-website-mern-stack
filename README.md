# Krist E-Commerce Platform

A full-stack e-commerce application built with the MERN stack, providing a complete shopping experience with user authentication, product catalog, shopping cart, and order management.

## Live Site
- Backend is deployed or [Render](https://ecommerce-website-mern-stack-cye5.onrender.com/)
- Fronted is deployed on [Netlify](https://ecommerce-website-mern-stack.netlify.app/)

## Overview

This monorepo contains two main applications:
- **client/**: React frontend application
- **server/**: Node.js/Express backend API

The platform handles the complete e-commerce lifecycle from user registration to order fulfillment, with a clear separation between the responsive React frontend and RESTful Express backend.

## Getting Started

### Prerequisites
- Node.js
- MongoDB database
- Git

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/AbdullahKhetran/ecommerce-website-mern-stack
    cd ecommerce-website-mern-stack
    ```

2. Install dependencies for both client and server:
    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies  
    cd client
    npm install
    ```

3. Set up environment variables:
    - Copy `server/.env.example` to `server/.env` and configure MongoDB connection and JWT secret 
    - Copy `client/.env.example` to `client/.env` and configure API base URL  

4. Start the development servers:
    ```bash
    # Start server
    cd server
    npm run dev

    # Start client
    cd client
    npm start
    ```

The server runs on port 8080 and the client on port 3000.

## Architecture & Tech Stack

### System Architecture
```
├── client/          # React frontend
│   ├── src/
│   │   ├── api/     # API client layer
│   │   ├── pages/   # React components
│   │   └── App.js   # Main application
│   └── package.json
├── server/          # Express backend
│   ├── controllers/ # API controllers
│   ├── models/      # Mongoose models
│   ├── routes/      # Express routers
│   └── index.js     # Server entry point
└── README.md
```

### Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | React | Component-based UI   |
| | Redux Toolkit | Global state management   |
| | Material-UI | UI component library   |
| | Styled Components | CSS-in-JS styling   |
| | Axios | HTTP client for API calls   |
| **Backend** | Node.js/Express | REST API server   |
| | MongoDB/Mongoose | Database and ODM   |
| | JWT | Authentication tokens   |
| | Bcrypt | Password hashing   |
| | CORS | Cross-origin resource sharing   |

### Key Features
- User authentication with JWT
- Product catalog with filtering
- Shopping cart management
- Order processing and history
- Responsive design
- RESTful API architecture
