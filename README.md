
# Round-Robin Coupon Distribution

A full-stack web application that distributes coupons to users in a round-robin manner, with an admin panel for managing coupons and tracking claims.

---

## Features

### User Side
- Claim coupons sequentially without repetition.
- Abuse prevention via IP and browser session tracking.
- Real-time feedback for successful claims or errors.

### Admin Side
- Secure JWT-based authentication.
- View all coupons (available/claimed).
- Track claim history (IP, session, timestamp).
- Responsive UI for easy management.

---

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Deployment**: Vercel (Frontend), Render/Heroku (Backend)

---

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- MongoDB (Local or Atlas)
- Git

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/anirudhxmishra/CouponDistributionApp.git
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file:
   ```env
   MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/coupon-app
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```
4. Start the app:
   ```bash
   npm start
   ```

---

## API Endpoints

### User Endpoints
| Method | Endpoint                | Description                     |
|--------|-------------------------|---------------------------------|
| GET    | `/api/coupons/next`     | Get next available coupon       |
| POST   | `/api/coupons/claim`    | Claim a coupon                  |

### Admin Endpoints
| Method | Endpoint                | Description                     |
|--------|-------------------------|---------------------------------|
| POST   | `/api/admin/login`      | Admin login                     |
| GET    | `/api/admin/coupons`    | Get all coupons                |
| GET    | `/api/admin/claim-history` | Get claim history             |

---

## Deployment
1. **Backend**: Deploy to [Render](https://render.com/).
   - Set environment variables: `MONGO_URI`, `JWT_SECRET`, `PORT`
2. **Frontend**: Deploy to [Vercel](https://vercel.com/).
   - Set environment variable: `REACT_APP_API_URL`

---

## Environment Variables
| Variable           | Description                     |
|--------------------|---------------------------------|
| `MONGO_URI`        | MongoDB connection string       |
| `JWT_SECRET`       | Secret key for JWT tokens       |
| `REACT_APP_API_URL`| Backend API base URL            |

---

## Usage
1. **User**:
   - Visit `http://localhost:3000`
   - Click **Claim Coupon** to get a coupon.

2. **Admin**:
   - Visit `http://localhost:3000/admin/login`
   - Login with credentials (default: `admin`/`admin123`)
   - View coupons and claim history in the admin panel.

---

## Contributing
1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

## License
Distributed under the MIT License. See `LICENSE` for details.

---

## Contact
- **Anirudh** - [anirudhmishra112233@gmail.com](mailto:your.email@example.com)
- **GitHub**: [@anirudhxmishra](https://github.com/yourusername)
```

