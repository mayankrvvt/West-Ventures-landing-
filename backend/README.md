# West Ventures Careers Backend

Express + MongoDB API for the careers and lead-management pages.

## Setup

1. Copy `.env.example` to `.env`.
2. Set `MONGODB_URI`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and a strong `JWT_SECRET`.
3. Install dependencies:

```bash
cd backend
npm install
```

4. Start the API:

```bash
npm run dev
```

The API runs on `http://localhost:5050`.

## Endpoints

- `GET /api/health`
- `GET /api/jobs` — public open positions
- `GET /api/jobs/:id` — public open position
- `POST /api/admin/login` — admin login
- `GET /api/jobs/admin/all` — authenticated admin
- `POST /api/jobs` — authenticated admin
- `PUT /api/jobs/:id` — authenticated admin
- `DELETE /api/jobs/:id` — authenticated admin
- `POST /api/leads` — public lead submission
- `GET /api/leads/admin/all` — authenticated admin
- `PUT /api/leads/:id` — authenticated admin
- `DELETE /api/leads/:id` — authenticated admin
