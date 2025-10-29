# CodeCraftHub

## Overview

This project is a Node.js application built with Express and MongoDB. It provides an API for managing users.

## Project Structure

```
.
├── src/
│   ├── index.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── middleware/
│   └── models/
├── .env
└── package.json
```

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your MongoDB URI
4. Run the application: `npm start`

## Dependencies

- Express: Web framework for Node.js
- Mongoose: MongoDB object modeling tool
- Dotenv: Load environment variables from .env file

## Routes

- `/api/users` - User management routes

## Environment Variables

- `MONGODB_URI` - MongoDB connection URI

## Development

- Run tests: `npm test`
- Start server: `npm start`