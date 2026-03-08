# How to Build a Website Using Node.js, Express, EJS, and PostgreSQL

> Status: In progress — update this file as each phase is completed.

---

## Introduction

In this article I'll walk you through building a complete dynamic website using Node.js, Express, EJS, and PostgreSQL. This is a practical, hands-on guide aimed at developers who are familiar with front-end development and want to understand how backend architecture works.

By the end of this guide you will have built a working multi-page website with:

- A home page, about page, blog/posts page, post detail page, and contact page
- Dynamic content rendered with EJS templates
- A PostgreSQL database connected to Node.js
- Clean, modular folder structure following real-world conventions

**Stack used:**

| Layer | Tool |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Template Engine | EJS |
| Database | PostgreSQL |
| Config | dotenv |
| Dev Tool | nodemon |

---

## Project Architecture

The request lifecycle flows like this:

```
Browser → Express (router) → Controller → DB query → EJS template → HTML response
```

### Folder Structure

```
nodejs-express-ejs-pg/
│
├── app.js                  → Entry point, Express configuration
├── package.json            → Project metadata and dependencies
├── .env                    → Environment variables (never commit this)
│
├── routes/                 → URL path definitions
├── controllers/            → Business logic per route
├── views/                  → EJS templates
│   ├── layouts/            → Base HTML wrapper
│   └── partials/           → Reusable snippets (header, footer, nav)
├── public/                 → Static files served directly
│   ├── css/
│   └── js/
├── db/                     → Database connection
└── models/                 → Data shape definitions
```

---

## Step-by-Step Implementation

---

### Phase 1 — Project Setup

#### What each tool does

- **Node.js** — JavaScript runtime that executes code on the server
- **Express.js** — Framework that handles HTTP requests, routing, and middleware
- **EJS** — Template engine that generates HTML dynamically from JavaScript data
- **PostgreSQL** — Relational database for storing and querying structured data
- **dotenv** — Loads `.env` variables into `process.env` so secrets stay out of code
- **nodemon** — Watches for file changes and restarts the server automatically

#### Steps

1. Create the project folder and subfolder structure manually or via terminal
2. Initialize the Node project: `npm init -y`
3. Install production dependencies: `npm install express ejs pg dotenv`
4. Install dev dependency: `npm install --save-dev nodemon`
5. Add scripts to `package.json`:
   ```json
   "scripts": {
     "start": "node app.js",
     "dev": "nodemon app.js"
   }
   ```
6. Create `.env` at project root:
   ```
   PORT=3000
   ```

#### Key concept: package.json

`package.json` is the identity card of your Node project. It tracks:
- The project name, version, and description
- All installed dependencies and their versions
- Custom scripts you can run with `npm run <name>`

---

### Phase 2 — Express Server (app.js)

#### Key concepts

- `require('dotenv').config()` must be called before anything else so `.env` values are loaded
- `app.set('view engine', 'ejs')` tells Express to use EJS when `res.render()` is called
- `express.static('public')` serves files from `/public` directly without a route
- `express.urlencoded()` parses HTML form POST data
- `app.listen(PORT, callback)` starts the HTTP server

#### app.js explained

```js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

**To run during development:** `npm run dev`

---

### Phase 3 — Server Architecture: Routes and Controllers

> [ ] To be completed

---

### Phase 4 — Template Engine: EJS

> [ ] To be completed

---

### Phase 5 — PostgreSQL Integration

> [ ] To be completed

---

### Phase 6 — Dynamic Content and CRUD

> [ ] To be completed

---

### Phase 7 — Authentication (Optional)

> [ ] To be completed

---

### Phase 8 — Security Basics

> [ ] To be completed

---

### Phase 9 — Deployment Concepts

> [ ] To be completed

---

## Lessons Learned

> Fill this section at the end of the project.

-
-
-

---

## Possible Improvements

> Ideas for extending the project after the core is complete.

- Add an admin panel to create/edit/delete posts
- Add image upload support
- Add pagination to the blog posts page
- Add search functionality
- Convert to a REST API and use a front-end framework

---

## References

- [Node.js documentation](https://nodejs.org/en/docs)
- [Express.js documentation](https://expressjs.com)
- [EJS documentation](https://ejs.co)
- [node-postgres (pg) documentation](https://node-postgres.com)
- [PostgreSQL documentation](https://www.postgresql.org/docs)
