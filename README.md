### Setup

1. clone the repository.
2. Navigate to the project directory:
   ```bash
   cd nest-crud
   ```
3. Start a PostgreSQL database using Docker:
   ```bash
   docker run -d \
       --name testdb \
       -e POSTGRES_USER=testuser \
       -e POSTGRES_PASSWORD=testpassword \
       -e POSTGRES_DB=testdatabase \
       -p 5432:5432 \
       postgres
   ```
   based on this command the connection url will be
   ```
   DATABASE_URL=postgresql://testuser:testpassword@localhost:5432/testdatabase?schema=public
   ```
4. Create a `.env` file based on the `.env.example` file and configure the `DATABASE_URL` with your postgreSQL connection string.
5. Install dependencies:
   ```bash
   npm install
   ```
6. Run database migrations:
   ```bash
   npx prisma generate
   ```
7. Start the development server:
   ```bash
   npm run start:dev
   ```

## Usage

- GET `https://localhost:3000/user` -> Get all users
- GET `https://localhost:3000/user/:id` -> Get user by id
- POST `https://localhost:3000/user` -> Create a user

```json
{
  "username": "user12",
  "email": "test@test.com"
}
```

- PATCH `https://localhost:3000/user/:id` -> Update user
- DELETE `https://localhost:3000/user/:id` -> Delete user

---

All same for wallet

- POST `https://localhost:3000/wallet` -> Create a wallet address

```json
{
  "address": "address12-11-22",
  "userId": "user12"
}
```
