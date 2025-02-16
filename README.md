# Quick Polling App - Backend

This is the backend for a **Quick Polling App** where users can create polls, vote, and view real-time results.

## 🚀 Features

- Create a poll with a question and multiple options.
- Vote on a poll.
- Fetch poll results in real-time.
- Uses **MongoDB** for data storage.

---

## 🛠️ Tech Stack

- **Node.js** with **Express.js**
- **MongoDB** (via **Mongoose**)
- **Deployed on Render**

---

## 📂 Project Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/aditya-narayan-sahoo/quick-polling-backend.git
cd quick-polling-backend
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add:

```sh
PORT=yout_port_number
MONGO_URI=your_mogo_uri
```

### 4️⃣ Run the Server

```sh
npm run start
```

The backend will start on `http://localhost:5000`

---

## 📌 API Endpoints

### **1️⃣ Create a Poll**

```http
POST /api/polls
```

### **2️⃣ Get All Polls**

```http
GET /api/polls
```

### **3️⃣ Vote on a Poll**

```http
POST /api/polls/:pollId/vote
```

### **4️⃣ Get a Single Poll**

```http
GET /api/polls/:pollId
```

### **5️⃣ Delete a Poll**

```http
DELETE /api/polls/:pollId
```

---

## 🗄️ Database Schema (MongoDB)

### **Poll Schema**

```js
const pollSchema = new mongoose.Schema({
  question: String,
  options: [
    {
      text: String,
      votes: { type: Number, default: 0 },
    },
  ],
});
```

---

## 🛠️ Tools Used

- **Postman** for API testing
- **MongoDB Atlas** for database hosting
- **Render** for backend deployment

---

## 📌 Future Enhancements

- User authentication (JWT-based login)
- Poll expiration feature
- WebSocket-based real-time voting updates
