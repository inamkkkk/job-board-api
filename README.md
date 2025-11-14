# Job Board API

This is a Node.js API for a job board with job listings, applications, and company profiles.

## Features

- User authentication and authorization (JWT)
- Job listing management
- Company profile management
- Application submission and tracking

## Technologies

- Node.js
- Express.js
- Mongoose
- MongoDB
- JWT
- bcryptjs

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Install dependencies:

    
    npm install
    

3.  Configure environment variables:

    Create a `.env` file in the root directory and add the following variables:

    
    PORT=3000
    MONGODB_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    

4.  Run the application:

    
    npm start
    

## API Endpoints

### Users

-   `POST /api/users/register`: Register a new user
-   `POST /api/users/login`: Login user
-   `GET /api/users/profile`: Get user profile (requires authentication)
-   `PUT /api/users/profile`: Update user profile (requires authentication)

### Jobs

-   `POST /api/jobs`: Create a new job listing (requires authentication and authorization as employer or admin)
-   `GET /api/jobs`: Get all job listings
-   `GET /api/jobs/:id`: Get a specific job listing by ID
-   `PUT /api/jobs/:id`: Update a job listing (requires authentication and authorization as employer or admin)
-   `DELETE /api/jobs/:id`: Delete a job listing (requires authentication and authorization as employer or admin)

### Companies

-   `POST /api/companies`: Create a new company profile (requires authentication and authorization as employer or admin)
-   `GET /api/companies`: Get all company profiles
-   `GET /api/companies/:id`: Get a specific company profile by ID
-   `PUT /api/companies/:id`: Update a company profile (requires authentication and authorization as employer or admin)
-   `DELETE /api/companies/:id`: Delete a company profile (requires authentication and authorization as employer or admin)

### Applications

-   `POST /api/applications`: Create a new job application (requires authentication)
-   `GET /api/applications`: Get all applications for the logged-in user (requires authentication)
-   `GET /api/applications/:id`: Get a specific application by ID (requires authentication)
-   `PUT /api/applications/:id`: Update an application (requires authentication)
-   `DELETE /api/applications/:id`: Delete an application (requires authentication)
