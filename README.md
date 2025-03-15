# FineBites

FineBites is a modern food delivery web application designed to offer a seamless experience for users to browse, order food, and manage their meals efficiently. It features a responsive UI, secure authentication, and smooth payment integration using Stripe.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

✔️ User authentication & authorization (JWT-based).  
✔️ Secure admin dashboard to manage orders, users, and menu items.  
✔️ Dynamic menu listing with add-to-cart functionality.  
✔️ Seamless checkout with **Stripe Payment Integration**.  
✔️ Order tracking system.  
✔️ Responsive UI for mobile and desktop views.  
✔️ Database integration with MongoDB for scalability.  

---

## Demo

🔗 **Live Demo**: [FineBites Live](https://finebites-frontend.onrender.com/)  
🔗 **Admin Dashboard**: [Admin Panel](https://finebites-admin.onrender.com/)  

## Tech Stack

**Frontend:**  
- React.js  
- Tailwind CSS  
- React Router  
- Axios  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT Authentication  
- Stripe Payment Gateway  

---

## Installation

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/Jyotiraditya077/finebites.git
cd finebites
```

### 2️⃣ Install Dependencies  
#### Frontend  
```bash
cd frontend
npm install
```

#### Backend  
```bash
cd ../backend
npm install
```

---

## Usage

### 1️⃣ Start the Backend Server  
```bash
cd backend
npm start
```
The backend runs at `http://localhost:3000`.

### 2️⃣ Start the Frontend Application  
```bash
cd ../frontend
npm start
```
The frontend runs at `http://localhost:5173`.

---

## Environment Variables

Create a `.env` file inside the `backend/` directory and add the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLIC_KEY=your_stripe_public_key
```
(Replace placeholders with actual values.)

---

## Contributing

We welcome contributions! Follow these steps:

1️⃣ Fork the repository  
   Click the Fork button on the top right of the repository page.

2️⃣ Create a new branch  
```bash
git checkout -b feature/your-feature-name
```

3️⃣ Commit your changes  
```bash
git commit -m "Added a new feature"
```

4️⃣ Push to the branch  
```bash
git push origin feature/your-feature-name
```

5️⃣ Create a Pull Request 🎉  

---

## License

This project is open-source and available under the MIT License.

---

## Contact

👤 **Jyotiraditya Swain**  
📍 **GitHub**: [Jyotiraditya077](https://github.com/Jyotiraditya077)  
📧 **Email**: jyotiradityaswain123@gmail.com  
