````md
# ⚡ Lightweight PostgreSQL ORM

A minimal and expressive ORM layer for PostgreSQL built on top of `pg`. Ideal for TypeScript and Node.js apps where you want flexibility, type safety, and custom query building — without the bloat of heavy ORMs.

---

## 🚀 Features

-   Lightweight and fast – no query overhead
-   Fluent query builder (chainable API)
-   Built-in PostgreSQL connection pooling
-   Clean structure with extendable `Model` base class
-   Supports filtering, pagination, sorting, population
-   Written in TypeScript

---
````

## 📦 Installation

```bash
npm install ark-orm
```

or

```bash
yarn add ark-orm
```

---

## 🛠 Setup

### 1. Initialize the PostgreSQL connection

```ts
import { initDB } from "ark-orm";

initDB({
    host: "localhost",
    user: "your_user",
    password: "your_password",
    database: "your_db",
    port: 5432,
    max: 20,
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 5000,
    ssl: false,
});
```

### 2. Create an instance of `Model` for your table

```ts
/**
 * Creates a new instance of the Model class for the "users" table.
 * This factory function ensures that each invocation returns a fresh instance,
 * providing isolation across different queries and operations.
 */
const UserModel = () => new Model("users");
```

> **Note:** Always define your models as factory functions rather than variables. This ensures that a new instance is created on each call, preventing shared state or unintended side effects across different operations.

---

## 🧩 Usage

```ts
const users = new UserModel();

// Basic select
const data = await users.select("id,name,email").find();

// Where condition
const filtered = await users.select("id,name").where({ status: "active" }).findAll();

// Pagination + Sorting
const paged = await users
    .select("id, name")
    .where(whereClause)
    .filter(filterObj)
    .pagination(pageIndex, pageSize)
    .sort(sortBy, sortOrder)
    .find();
```

---

## 📚 API

### Connection

| Method           | Description                |
| ---------------- | -------------------------- |
| `initDB(config)` | Initialize PostgreSQL pool |
| `getDB()`        | Get current pool instance  |
| `closeDB()`      | Close the pool gracefully  |

### Query Builder (`Model` methods)

| Method                     | Description                            |
| -------------------------- | -------------------------------------- |
| `select(fields)`           | Define columns to select               |
| `where({condition:values})` | Add WHERE clause                       |
| `pagination(page, limit)`    | Limit + offset handling                |
| `sort(field, order)`       | ORDER BY clause                        |
| `find(), createOne(payload), updateMany(payload)`                   | Execute built query and return results |

> More methods like `findIn()`, `countDocuments()`, `or()`, and `populate()` are also supported.

---

## 📁 Project Structure

```
src/
├── helpers/
│   └── connection.ts      # initDB(), getDB(), closeDB()
├── model/
│   └── base.ts            # Base Model class
│   └── query-builder.ts   # Query class
└── index.ts               # Package entrypoint
```

---


## 📝 License

MIT

---

## 👨‍💻 Author

Crafted by Amit Singh with ❤️ and SQL.

```

---

Let me know if you'd like me to:

- Add example for `transactions` or raw `client` usage
- Include badge icons (version, license, etc.)
- Auto-generate this from code comments

Or if you want to turn this into a `typedoc` site too.
```
