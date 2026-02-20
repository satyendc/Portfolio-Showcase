# Portfolio Showcase

A full-stack portfolio website built with React, Vite, Express, and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5000`.

## Publish your portfolio (recommended: Render)

This app can run **without a database** (messages are stored in memory). For persistent contact messages, add `DATABASE_URL`.

### 1) Push this repo to GitHub

```bash
git add .
git commit -m "Prepare portfolio for deployment"
git push origin <your-branch-or-main>
```

### 2) Deploy on Render

1. Go to https://render.com and create a **Web Service**.
2. Connect your GitHub repository.
3. Configure:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run start`
4. (Optional) Add environment variable:
   - `DATABASE_URL=<your_postgres_connection_string>`
5. Click **Create Web Service**.

Your portfolio will be live at a `https://*.onrender.com` URL.

## Alternative platforms

### Railway

- Build: `npm install && npm run build`
- Start: `npm run start`
- Optional env var: `DATABASE_URL`

### Fly.io / VPS / Docker host

Use the same build and start commands above.

## Notes

- Without `DATABASE_URL`, contact form submissions work during runtime but are not persisted after restart.
- With `DATABASE_URL`, messages are stored in Postgres.
