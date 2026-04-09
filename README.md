# Insolare — Operations Hub Landing Page

A unified landing page that connects the **Attendance System** and **O&M Module** from a single entry point. Built with Node.js and Express.

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- Attendance System running (default: `localhost:3000`)
- O&M Module running (default: `localhost:3001`)

---

## Getting Started

**1. Clone / copy the project and install dependencies:**

```bash
npm install
```

**2. Configure your environment:**

```bash
cp .env.example .env
```

Edit `.env` to match your setup (see [Configuration](#configuration) below).

**3. Start the landing page:**

```bash
npm start
```

Open [http://localhost:5000](http://localhost:5000) in your browser.

> For development with auto-reload on file changes:
> ```bash
> npm run dev
> ```

---

## Configuration

All ports are managed through the `.env` file. No code changes are needed when ports conflict — just update this file and restart the server.

| Variable          | Default     | Description                          |
|-------------------|-------------|--------------------------------------|
| `LANDING_PORT`    | `5000`      | Port this landing page runs on       |
| `ATTENDANCE_HOST` | `localhost` | Host where the Attendance System runs |
| `ATTENDANCE_PORT` | `3000`      | Port of the Attendance System        |
| `OM_HOST`         | `localhost` | Host where the O&M Module runs       |
| `OM_PORT`         | `3001`      | Port of the O&M Module               |

**Example `.env`:**

```env
LANDING_PORT=5000

ATTENDANCE_HOST=localhost
ATTENDANCE_PORT=3000

OM_HOST=localhost
OM_PORT=3001
```

---

## Project Structure

```
Landing_page/
├── public/
│   ├── index.html       # Landing page UI
│   └── style.css        # Styles
├── .env                 # Local environment config (not committed)
├── .env.example         # Environment template (committed)
├── .gitignore
├── package.json
├── README.md
└── server.js            # Express server
```

---

## Features

- **Service cards** — direct links to the Attendance System and O&M Module
- **Live status indicators** — each card shows a green/red dot based on whether the service is reachable
- **Global status bar** — header summarizes overall health of all services
- **Port-configurable** — change any service URL via `.env` without touching code
- **Responsive design** — works on desktop and mobile

---

## Scripts

| Command       | Description                              |
|---------------|------------------------------------------|
| `npm start`   | Start the server                         |
| `npm run dev` | Start with nodemon (auto-reload on save) |
