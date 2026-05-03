# Krist E-Commerce Client

React frontend application for the Krist e-commerce platform, providing a modern and responsive shopping experience.

## Live Site
The frontend is deployed on [Netlify](https://ecommerce-website-mern-stack.netlify.app/)

## Overview

The client is a React-based single-page application that serves as the user interface for the e-commerce platform. It features product browsing, user authentication, shopping cart management, and order tracking with a clean, material design-inspired interface.

Key features include:
- Product catalog with advanced filtering
- User authentication and profile management
- Persistent shopping cart and favorites
- Order history and tracking
- Responsive design for devices

## Getting Started

### Prerequisites
- Node.js 
- npm 

### Installation

1. Navigate to the client directory:
    ```bash
    cd client
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    ```bash
    cp .env.example .env
    ```

4. Edit `.env` and configure the API base URL:
    ```
    REACT_APP_API_BASE_URL=http://localhost:8080/api
    ```  

5. Start the development server:
    ```bash
    npm start
    ```

The application will open at `http://localhost:3000`

### Available Scripts
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Architecture & Tech Stack

### Project Structure
```
client/
├── public/
├── src/
│   ├── api/           # API client layer
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components
│   ├── redux/         # Redux store and slices
│   ├── utils/         # Utility functions
│   ├── App.js         # Main application component
│   └── index.js       # Application entry point
├── package.json
└── README.md
```

### Technology Stack

| Technology | Purpose |
|------------|---------|
| React | Core UI framework |
| Redux Toolkit | State management |
| React Router | Client-side routing |
| Material-UI | UI component library |
| Styled Components | CSS-in-JS styling |
| Axios | HTTP client |

### Key Architectural Patterns

**API Client Layer**
- Centralized Axios instance with base URL configuration
- Bearer token authentication for protected routes
- Domain-specific API functions (Auth, Products, Cart, Orders)

**State Management**
- Redux Toolkit for global state
- Persistent storage for user session and cart
- Slice-based organization for different features

**Component Architecture**
- Page-level components for routes
- Reusable UI components
- Custom hooks for API interactions

### API Integration
The client communicates with the backend through a centralized API layer located in `src/api/index.js`. All API calls use the configured Axios instance with automatic token injection for authenticated requests.
