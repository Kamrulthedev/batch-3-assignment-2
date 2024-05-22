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

1.Endpoint: `/api/products`
. Method: `POST`
. Request Body: 
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



 2 Get All Products
 . Endpoint: `/api/products`
 . Method: `GET`



3. Get a Single Product
. Endpoint: `/api/products/:productId`
. Method: `GET`


4. Update a Product
. Endpoint: `/api/products/:productId`
. Method: `PUT`

5. Delete a Product
. Endpoint: `/api/products/:productId`
. Method: `DELETE`


5. Search Products

. Endpoint: `/api/products/search?Term=searchTerm`
. Method: `GET`



2.Orders

1 Create an Order
  . Endpoint: /api/orders
  . Method: POST
  . Request Body:
                {
               "email": "kmc@example.com",
               "productId": "productId",
               "price": 100,
               "quantity": 2
           }

2. Get All Orders
. Endpoint: /api/orders
. Method: GET

. Get Orders by Email
3.Endpoint: /api/orders?email=user@example.com
. Method: GET


Lat`s Gooooooooooooooooooooo


