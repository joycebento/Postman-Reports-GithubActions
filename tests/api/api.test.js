/**
 * API Testing Assessment
 * 
 * This file contains the skeleton for your API tests.
 * Your task is to implement tests for the e-commerce API endpoints.
 * 
 * Endpoints to test:
 * - GET /api/products - Get all products
 * - GET /api/products/{id} - Get a specific product by ID
 * - POST /api/cart - Add item to cart (requires auth token)
 * - GET /api/cart - Get current cart contents (requires auth token)
 * 
 * Remember to test both successful and error scenarios!
 */

const request = require('supertest');

// Base URL for the API
const API_URL = 'http://localhost:3001';

// Authentication token for protected endpoints
const AUTH_TOKEN = 'Bearer tester-token-123';

/**
 * Test suite for the Products API endpoints
 */
describe('Products API', () => {
  
  /**
   * Test for getting all products
   * 
   * Verify that:
   * - The endpoint returns a 200 status code
   * - The response is an array of products
   * - The products have the expected structure
   */
  describe('GET /api/products', () => {
    it('should return all products', async () => {
      // TODO: Implement this test
      // Hint: Use supertest to make a GET request to /api/products
      // Verify the response status and structure
    });

    // TODO: Add more test cases for this endpoint
    // For example: test pagination, filtering, or error scenarios
  });

  /**
   * Test for getting a specific product by ID
   * 
   * Verify that:
   * - The endpoint returns a 200 status code for valid IDs
   * - The endpoint returns a 404 status code for invalid IDs
   * - The returned product has the expected structure
   */
  describe('GET /api/products/{id}', () => {
    it('should return a specific product when given a valid ID', async () => {
      // TODO: Implement this test
      // Hint: Use supertest to make a GET request to /api/products/1
      // Verify the response status and structure
    });

    it('should return 404 when given an invalid product ID', async () => {
      // TODO: Implement this test
      // Hint: Use supertest to make a GET request to a non-existent product ID
      // Verify that the response status is 404
    });

    // TODO: Add more test cases for this endpoint
  });
});

/**
 * Test suite for the Cart API endpoints
 * 
 * Note: These endpoints require authentication.
 * Include the AUTH_TOKEN in the Authorization header.
 */
describe('Cart API', () => {
  
  /**
   * Test for getting the cart contents
   * 
   * Verify that:
   * - The endpoint returns a 200 status code with valid auth
   * - The endpoint returns a 401 status code without auth
   * - The response has the expected structure
   */
  describe('GET /api/cart', () => {
    it('should return cart contents when authenticated', async () => {
      // TODO: Implement this test
      // Hint: Use supertest to make a GET request to /api/cart with the AUTH_TOKEN
      // Verify the response status and structure
    });

    it('should return 401 when not authenticated', async () => {
      // TODO: Implement this test
      // Hint: Use supertest to make a GET request to /api/cart without the AUTH_TOKEN
      // Verify that the response status is 401
    });

    // TODO: Add more test cases for this endpoint
  });

  /**
   * Test for adding an item to the cart
   * 
   * Verify that:
   * - The endpoint returns a 201 status code with valid auth and data
   * - The endpoint returns a 401 status code without auth
   * - The endpoint returns appropriate error codes for invalid data
   * - The item is actually added to the cart
   */
  describe('POST /api/cart', () => {
    it('should add an item to the cart when authenticated', async () => {
      // TODO: Implement this test
      // Hint: Use supertest to make a POST request to /api/cart with the AUTH_TOKEN
      // Include a valid product in the request body
      // Verify the response status and that the item was added
    });

    it('should return 401 when not authenticated', async () => {
      // TODO: Implement this test
      // Hint: Use supertest to make a POST request to /api/cart without the AUTH_TOKEN
      // Verify that the response status is 401
    });

    // TODO: Add more test cases for this endpoint
    // For example: test adding invalid products, duplicate products, etc.
  });
});

/**
 * Additional tests you might want to consider:
 * 
 * 1. Test error handling for malformed requests
 * 2. Test performance (response times)
 * 3. Test concurrent requests
 * 4. Test data validation
 * 5. Test edge cases (empty cart, maximum quantities, etc.)
 */
