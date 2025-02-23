# Backend for SPA App

This is the backend for a Multi Page Application (SPA) built with **Express.js** and **pg-promise**. It provides a RESTful API for managing orders and products, and connects to a **PostgreSQL** database for data storage.

## Features

- **RESTful API**: Endpoints for managing orders and products.
- **PostgreSQL Database**: Uses `pg-promise` for database connectivity and queries.
- **Environment Variables**: Secure configuration using `.env` files.
- **Error Handling**: Centralized error handling for consistent API responses.
- **CORS Support**: Allows cross-origin requests from the frontend.

## Technologies Used

- **Express.js**: A Node.js framework for building web applications and APIs.
- **pg-promise**: A PostgreSQL library for Node.js with promises support.
- **PostgreSQL**: A powerful, open-source relational database.
- **Render**: Hosting for the backend and PostgreSQL database.
- **CORS**: Middleware for enabling cross-origin requests.

## Getting Started

Follow these instructions to set up and run the backend locally.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. Download it from [nodejs.org](https://nodejs.org/).
- **PostgreSQL**: Ensure you have PostgreSQL installed and running. Download it from [postgresql.org](https://www.postgresql.org/).
- **npm**: npm is installed with Node.js. Alternatively, you can use **Yarn**.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/LadeMor/orders-products-server.git
   cd orders-products-server

2. **Install dependencies**:
   ```bash
   npm install

3. **Set up environment variables**:
   ```plaintext
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=shop
    DB_USER=postgres
    DB_PASS=0215

4. **Set up the database**:
   ```plaintext
    Create a new PostgreSQL database.

    Run the SQL scripts in the migrations/ folder to set up the database schema.

5. **Run the development server**
    ```bash
    npm start


**Available Scripts**

    npm start: Starts the development server.

    npm run dev: Starts the server in development mode with hot-reloading (if using nodemon).

    npm test: Runs the test suite (if applicable).

    npm run migrate: Runs database migrations (if applicable).

**Orders**
    GET /api/orders: Fetch a list of orders.

**Products**
    GET /api/products: Fetch a list of products.

    GET /api/order/:orderId: Fetch details of a specific product by order Id.

**Guarantees**
    GET /api/product/:productId: Fetch details of a specific guarantees by product Id.

**Prices**
    GET /api/product/:productId: Fetch details of a specific prices by product Id.

**Deployment**
    The backend is deployed on Render. To deploy:

    Push your code to a GitHub repository.

    Connect the repository to Render.

    Set the environment variables in the Render dashboard.

    Set the start command to npm start.


