# Node.js + Express + EJS + PostgreSQL Website

A dynamic multi-page website built with Node.js, Express, EJS, and PostgreSQL. This project was built step by step as a learning exercise and is documented as a technical article.

## Stack

| Layer | Tool |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Template Engine | EJS |
| Database | PostgreSQL |
| Config | dotenv |
| Dev Tool | nodemon |

## Project Structure

```
nodejs-express-ejs-pg/
├── app.js
├── package.json
├── .env                  (not committed)
├── routes/
│   └── index.js
├── controllers/
│   └── pageController.js
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── home.ejs
│   ├── about.ejs
│   ├── blog.ejs
│   └── contact.ejs
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
├── db/
├── models/
└── docs/
    └── article-draft.md
```

## Getting Started

### Prerequisites

- Node.js (LTS)
- PostgreSQL installed locally

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd nodejs-express-ejs-pg
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file at the project root:
   ```
   PORT=3000
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=your_db_name
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser at `http://localhost:3000`

## Pages

| Route | Description |
|---|---|
| `/` | Home page |
| `/about` | About page |
| `/blog` | Blog posts list |
| `/blog/:id` | Single post detail |
| `/contact` | Contact page |

## Status

Work in progress — being built phase by phase.

- [x] Phase 1 — Project setup
- [x] Phase 2 — Express server and routing
- [x] Phase 3 — EJS templates
- [ ] Phase 4 — PostgreSQL integration
- [ ] Phase 5 — Dynamic content and CRUD
- [ ] Phase 6 — Authentication
- [ ] Phase 7 — Security basics
- [ ] Phase 8 — Deployment

## Article

The full step-by-step article documenting this build is in [`docs/article-draft.md`](docs/article-draft.md).

## License

MIT
