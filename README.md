Ordermaadi
Ordermaadi is a food ordering website developed using React JS, MongoDB, Express, and Node JS. It includes a comprehensive Admin Panel to manage food items and order statuses.

Features
User Authentication: Users can create accounts, log in, and manage their profiles.
Shopping Cart: Users can add food items to their cart and place orders seamlessly.
Order Status Updates: Users can track the status of their orders in real-time.
Admin Panel: Admins can add new food items, update existing items, and manage order statuses.
RESTful APIs: Efficient HTTP request and response handling using Node.js and Express.js.


Technologies Used
Frontend: React JS
Backend: Node.js, Express.js
Database: MongoDB


Installation
Clone the repository:

sh
Copy code
git clone https://github.com/yourusername/ordermaadi.git
cd ordermaadi
Install the dependencies:

sh
Copy code
npm install
cd client
npm install
cd ..
Set up the environment variables:

Create a .env file in the root directory.
Add the following environment variables:
makefile
Copy code
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret_key
Start the development server:

sh
Copy code
npm run dev
Usage
User Authentication:

Sign up for a new account or log in with existing credentials.
Manage your profile information.
Shopping Cart:

Browse the menu and add items to your cart.
View your cart and proceed to checkout.
Place your order and track its status.
Admin Panel:

Log in as an admin to access the admin panel.
Add new food items with relevant details.
Update or delete existing food items.
View and update order statuses.
API Endpoints
User Routes
POST /api/users/register - Register a new user
POST /api/users/login - Log in a user
GET /api/users/profile - Get user profile
PUT /api/users/profile - Update user profile
Food Item Routes
GET /api/foods - Get all food items
POST /api/foods - Add a new food item (Admin only)
PUT /api/foods/:id - Update a food item (Admin only)
DELETE /api/foods/:id - Delete a food item (Admin only)
Order Routes
POST /api/orders - Place a new order
GET /api/orders - Get all orders (Admin only)
GET /api/orders/:id - Get order details
PUT /api/orders/:id - Update order status (Admin only)
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch:
sh
Copy code
git checkout -b feature/your-feature-name
Make your changes.
Commit your changes:
sh
Copy code
git commit -m 'Add some feature'
Push to the branch:
sh
Copy code
git push origin feature/your-feature-name
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

