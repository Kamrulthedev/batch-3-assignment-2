# E-commerce API

This is an E-commerce API built with MongoDB, Node.js, Express, Mongoose, and TypeScript. It supports CRUD operations for products and orders and includes input validation with Zod.

## Features

- Product Management (Create, Read, Update, Delete)
- Order Management (Create, Read, Read With Email)
- Inventory Management
- Input Validation with Zod
- Mostly Error Handling

## Prerequisites

- Node.js
- npm  yarn 
- MongoDB 
- Eslint

## Getting Started

### Clone the Repository

```sh
git clone 
cd ecommerce-api
Install Dependencies

   npm install

using yarn
     yarn install

Set Up Environment Variables

Create a .env file 
 PORT=5000


Using npm:  npm run dev



## API Endpoints
Products
Create a Product

Endpoint: `/api/products`
Method: `POST`
Request Body: 
      {
      "name": "Product Name",
          "description": "Product Description",
          "price": 100,
          "category": "Category",
          "tags": ["tag1", "tag2"],
          "variants": [
              {
                  "type": "Color",
                  "value": "Red"
              }
          ],
          "inventory": {
              "quantity": 10,
              "inStock": true
          }
   }      



 Get All Products

 Endpoint: `/api/products`
 Method: `GET`



  Get a Single Product
  Endpoint: `/api/products/:productId`
  Method: `GET`


    Update a Product
    Endpoint: `/api/products/:productId`
    Method: `PUT`

    Delete a Product
    Endpoint: `/api/products/:productId`
    Method: `DELETE`





