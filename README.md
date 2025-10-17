# 🛍️ Digisoko

**Digisoko** is a modern e-commerce web application designed to connect vendors and buyers in a seamless digital marketplace experience.  
It focuses on simplicity, performance, and accessibility — enabling users to browse, shop, and manage their carts effortlessly.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Email & password authentication using Firebase Auth
  - Auth context for managing user sessions
  - Secure logout functionality

- 🛒 **Shopping Cart**
  - Real-time cart updates using Firebase
  - Cart data persists even after page refresh
  - Checkout confirmation system

- 🧭 **Product Browsing**
  - Dynamic product listing and filtering by category
  - Detailed product pages with related items suggestions
  - Pagination component for easier navigation

- 🧑‍💼 **User Profiles**
  - Simple and clean profile pages for buyers and vendors
  - Editable details for personalization

- 🌐 **Deployment**
  - Hosted on **Azure Static Web Apps**
  - Firebase backend integration

---

## 🧰 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React / Vite** | Frontend framework |
| **Tailwind CSS** | Styling and layout |
| **Framer Motion** | Animations and transitions |
| **Firebase** | Authentication and database |
| **Azure** | Hosting and deployment |
| **Lucide Icons / shadcn/ui** | Modern UI components and icons |

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/digisoko.git
cd digisoko
2. Install Dependencies
bash
Copy code
npm install
3. Configure Firebase
Create a Firebase project and add your configuration inside .env:

env
Copy code
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
4. Run the App
bash
Copy code
npm run dev
Your project will be running at http://localhost:5173

🧠 Project Architecture
bash
Copy code
src/
│
├── components/        # Reusable UI components
├── pages/             # Main application pages
├── providers/         # Auth context and providers
├── hooks/             # Custom hooks
├── assets/            # Images and static files
└── utils/             # Helper functions
✨ Future Improvements
Integrate AI-based product recommendations

Add third-party payment gateway

Vendor analytics dashboard

Advanced filtering & search using vector embeddings
