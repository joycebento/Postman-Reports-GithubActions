# QA Engineering Assessment: API Testing

## Overview

This assessment evaluates your QA engineering skills through practical testing of a simple e-commerce API. You'll be writing and executing API tests against a working RESTful backend.

**Time Limit:** 40 minutes

**Environment:** You'll be working in a pre-configured VS Code environment with all necessary dependencies installed. You can execute your tests to verify your work.

## The Application

The assessment environment includes a simple e-commerce application with:

1. **Backend API Server**: A REST API built with JSON Server that provides product data, cart functionality, and checkout processes
2. **Frontend Web Application**: A simple HTML/CSS/JavaScript application that consumes the API

### Starting the Application

1. Open a terminal in VS Code
2. Start the API server:
   ```
   npm run api:server
   ```
3. In a new terminal, start the web server:
   ```
   npm run ui:server
   ```
4. The web application will be available at http://localhost:3000
5. The API will be available at http://localhost:3001

## Your Task

Your task is to write a focused test suite for the e-commerce API using Jest and Supertest.

### API Testing

Create a test suite for the core e-commerce API endpoints:

```
GET    /api/products                # Get all products
GET    /api/products/{id}           # Get a specific product by ID
POST   /api/cart                    # Add item to cart (requires auth token)
GET    /api/cart                    # Get current cart contents (requires auth token)
```

Your API tests should:
1. Verify these key endpoints work as expected
2. Include both positive and negative test cases
3. Validate response codes and data structures
4. Handle authentication for protected endpoints
5. Include clear assertions with descriptive error messages

**File to complete:** `/tests/api/api.test.js`

## Running Your Tests

To run your API tests:
```
npm run test:api
```

## Authentication

For endpoints requiring authentication, include an `Authorization` header with the value:
```
Bearer tester-token-123
```

## Project Structure

```
/project
  /api
    - db.json             # API data source
    - routes.json         # API route configuration
    - server.js           # API server startup script
  /tests
    /api
      - api.test.js       # ** Complete this file **
  - package.json          # Dependencies and scripts
  - README.md             # More detailed instructions
```

## Evaluation Criteria

Your solution will be evaluated based on:

1. **Test Coverage**: Testing of key API functionality
2. **Code Quality**: Readability and organization of your test code
3. **Testing Best Practices**: Appropriate use of assertions and test structure
4. **Error Handling**: How your tests handle failure cases
5. **Execution**: Whether your tests run successfully
6. **Efficiency**: Ability to create effective tests within the time constraint

## Additional Notes

- Focus on quality over quantity - well-structured tests for key functionality are better than many simple tests
- We've provided a simplified API to allow you to focus on testing fundamentals
- The authentication token for protected endpoints is: `Bearer tester-token-123`

## Hints

- Review the provided test skeleton which includes helpful comments and structure
- Test both successful and error scenarios for each endpoint
- Remember to use descriptive test names that explain what you're testing
- Organize related tests using Jest's describe blocks

Good luck!
