# 🎵 Sportify Clone

A music streaming web application backend built with **Node.js, Express.js, and MongoDB**. The project focuses on user authentication, role-based authorization, and music upload functionality for artist accounts.

## 🚀 Features

- **User Authentication** — Register and log in users.
- **JWT Authorization** — Secure protected routes using JSON Web Tokens.
- **Cookie-Based Authentication** — Handle authentication tokens through cookies.
- **Role-Based Access Control** — Restrict artist-specific functionality to authorized users.
- **Music Upload** — Allow artist accounts to upload music.
- **MongoDB Integration** — Store user and music information using Mongoose.
- **File Upload Handling** — Process uploaded files using Multer and integrate with a file-hosting service.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB | Database |
| Mongoose | Database modeling |
| JWT | Authentication |
| bcrypt | Password hashing, if configured |
| Multer | File upload handling |
| ImageKit | Media storage, if configured |

## 📁 Project Structure

```text
sportify-clone/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── app.js
├── server.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

*The folder structure may vary depending on your implementation.*

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Sourabhpatel358/sportify_clone.git
cd sportify_clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and configure the variables required by your application.

Example:

```env
PORT=3000
MONGO_API=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Use the exact variable names referenced in your source code. Never commit your real `.env` file or private credentials.

### 4. Start the server

Use the start script configured in your `package.json`. For example:

```bash
npm start
```

If you use Nodemon during development:

```bash
npm run dev
```

## 🔑 Core Functionalities

### Authentication
- User registration and login.
- Token-based authentication.
- Protected routes for authenticated users.

### Artist Functionality
- Role-based access for artist accounts.
- Music upload endpoints.
- Store music metadata, such as title, artist reference, and media URL.

## 🧪 API Testing

Use **Postman** to test the API endpoints.

Test the following workflows:
- Register a new user.
- Log in and verify authentication.
- Access a protected route.
- Assign or authorize an artist role.
- Upload a music file as an authorized artist.
- Verify the saved music metadata.

Refer to the source code for the exact endpoint URLs, request formats, and required fields.

## 🔒 Security Considerations

- Keep API keys and database credentials in environment variables.
- Hash passwords before storing them.
- Validate uploaded files and restrict file types and sizes.
- Protect artist-only routes with authentication and authorization middleware.
- Never expose private storage keys or JWT secrets in source code.

## 📌 Project Status

Under development. Features and API endpoints may change as the project evolves.

## 👨‍💻 Author

**Sourabh Patel**

GitHub: [@Sourabhpatel358](https://github.com/Sourabhpatel358)
