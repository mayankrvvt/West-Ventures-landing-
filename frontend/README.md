# West Ventures

This repository contains a Vite/React frontend and an Express/MongoDB backend:

- `frontend/` — Vite, React, public assets, and frontend environment settings.
- `backend/` — Express API, MongoDB models, routes, and backend environment settings.

## Local development

Terminal 1:

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Terminal 2:

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Set a working `MONGODB_URI`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `JWT_SECRET` in `backend/.env` before starting the API. The frontend is available at `http://localhost:5173`; careers are at `/careers`, and the admin pages are at `/admin/login` and `/admin/leads`.

The frontend command starts only Vite on `http://localhost:5173`. Start the backend separately from `backend/`; its API uses port 5050. This avoids starting the backend twice and colliding on its port.

## Production configuration

Set `VITE_API_URL` in the frontend deployment to the deployed backend URL and set `CLIENT_URL` in the backend to the deployed frontend origin. Configure the frontend deployment's root directory as `frontend/`; deploy the backend separately from `backend/`.
