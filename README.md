# TaskManager

SaaS-like mini application developed with Next.js (App Router) and TypeScript, focused on frontend architecture, separation of concerns, and browser-based persistence.

---

## Stack

- Next.js
- TypeScript
- localStorage
- Docker
- Makefile

---

## Goal

- Simulate authentication (fake login)
- Work with protected routes
- Separate UI, logic, and types
- Persist data without a backend
- Practice SaaS frontend project structure

---

## Features

- Fake login (stored in localStorage)
- Protected /dashboard route
- Project management
- Task management per project
- Mark tasks as completed
- Simple statistics (counters)

---

## Architecture

```text
src/
 ├─ app/        # Routes (App Router)
 ├─ components/ # UI components
 ├─ services/   # Domain logic (pure functions)
 ├─ types/      # TypeScript interfaces
 └─ utils/      # Helpers (storage / SSR-safe)
```

---

## Persistence

- Data is stored in localStorage
- Helpers prevent SSR-related errors

---

## Run locally

```bash
npm install
npm run dev
```

---

## Run with Docker

The project includes a Dockerfile and Makefile for containerized execution.

### Build image

```bash
make build
```

or

```bash
docker build -t task-manager .
```

### Run container

```bash
make run
```

or

```bash
docker run --rm -it -p 3000:3000 -v "$(PWD)":/app task-manager
```

The application will be available at:

```
http://localhost:3000
```

### Other commands

```bash
make stop
make clean
make bash
```

---

## Dockerfile (summary)

- Base image: node:20-alpine
- Installs dependencies
- Exposes port 3000
- Runs npm run dev

---

## Technical Notes

- No backend
- No real authentication
- Project focused on architecture and logic
- UI intentionally kept simple

---