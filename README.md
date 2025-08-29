#  Book Store API

A RESTful **backend API** built with **Node.js, Express, and MongoDB (Mongoose)** to manage a collection of books.  
This project demonstrates **CRUD operations**, **routing**, **MongoDB Atlas connection**, and follows a clean **MVC architecture** — making it perfect for learning and showcasing backend development skills.

---

##  Features

-  Add new books  
-  Get all books  
-  Get a single book by ID  
-  Update book details  
-  Delete a book  
-  Input validation with **Mongoose Schema**  
-  Cloud database using **MongoDB Atlas**  
-  Express.js middleware for JSON handling  

---

## Tech Stack

- **Node.js** – Runtime environment  
- **Express.js** – Web framework  
- **MongoDB Atlas** – Cloud NoSQL database  
- **Mongoose** – ODM for MongoDB  
- **dotenv** – Environment variable management  
- **Postman** – API testing  

---

## Installation & Setup

### Step 1: Clone the repository
```bash
git clone https://github.com/X-RugvedCodes-X/Book-Store-API.git
cd Book-Store-API
```

### Step 2: Clone the repository
```bash
npm install
```

### Step 3: Configure Environment Variables
#### Create a `.env` file in the root directory and add:
```bash
PORT=3000
MONGODB_CONNECTION_URL=<your-mongodb-connection-string>
```

### Step 4: Run the server
#### For Production:
```bash
npm start
```
#### For development (with hot reload using nodemon):
```bash
npm run dev
```
#### Server will start at http://localhost:3000

---

## API Endpoints
### Base URL: 
```bash
http://localhost:3000/api/books
```

```pgsql
| Method | Endpoint       | Description             |
|--------|----------------|-------------------------|
| GET    | `/get`         | Get all books           |
| GET    | `/get/:id`     | Get a single book by ID |
| POST   | `/add`         | Add a new book          |
| PUT    | `/update/:id`  | Update a book           |
| DELETE | `/delete/:id`  | Delete a book           |
```

---

## Project Structure
```bash
Book-Store-API/
│-- controllers/      # Controller functions (CRUD logic)
│-- database/         # MongoDB connection
│-- models/           # Mongoose schemas
│-- routes/           # Express routes
│-- index.js          # Entry point
│-- package.json      # Project dependencies and scripts
│-- .gitignore        # Ignored files (node_modules, .env, etc.)
```

---

### [Use This VS Code Extension for Better Code Readablity](https://marketplace.visualstudio.com/items?itemName=ParthR2031.colorful-comments)

## Author
### Rugved Raorane - [Github Profile](https://github.com/X-RugvedCodes-X) 