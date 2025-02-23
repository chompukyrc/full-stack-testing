# Fullstack testing @ Techsure

## Task

We need you to implement the following interface and API server using React and NestJS.

-   UI : [Figma](https://www.figma.com/design/ksMoiHRor5lWa7kfPFOdnf/Candidate-Test?node-id=0-1&t=TFSnf6uJXoGb1Huq-1)
-   API Spec : `./api/spec.yml`

1. `[POST] /user` to create user and save to database.
    - Validate rules
        - `first_name` (required)
        - `last_name` (required)
        - `age` (required); 15 >= age <= 120
        - `gender` (required); possible value `male`, `female` or `non-binary`
        - `phone_number` (optional)
        - `email` (required); check email format; can not duplicate with existing user
2. `[GET] /users` Retrieve users information
    - Validate rules
        - `limit` (optional) ; 0 >= limit <= 100
        - `offset` (optional) ; 0 >= offset
        - `sort_direction` (required); possible value: `asc` or `desc`
    - Business logic
        - retrieve list of user sort by `created_at` direction following `sort_direction`
3. `[GET] /user/{id}`
    - Validate rules
        - `id` (required)
    - Business logic
        - Get user by id
            - if not exist response status code `409` following API Spec
4. `[PUT] /user/{id}` Update user information
    - Validate rules
        - `id` (required)
        - `first_name` (required)
        - `last_name` (required)
        - `age` (required); 15 >= age <= 120
        - `gender` (required); possible value `male`, `female` or `non-binary`
        - `phone_number` (optional)
        - `email` (required); check email format; can not duplicate with existing user
5. `[DELETE] /user/{id}` Delete user hard delete
    - Validate rules
        - `id` (required)
    - Business logic
        - If user not exist response status code 409 following API Spec

##### Optional

1. `[POST] /user/{id}/profile_picture` Upload user profile picture; upload binary picture and save as base64 into database
    - Validation rules
        - `id` (required)
        - `picture` (required); file size must less than equal 5 MB.; support file type jpg, jpeg, png
2. `[GET] /user/{id}/profile_picture`
    - Validation rules
        - `id` (required)

---

## Tech Stack

-   **Backend**: NestJS, Prisma, PostgreSQL
-   **Frontend**: React.js, Tailwind CSS, Vite

---

## Start Backend

**Change to the backend directory**

```bash
cd backend
```

**Set Up Environment Variables**
Define schema

```env
DATABASE_URL="protocol://username:password@ip:port/database_name"
```

In use

```env
DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:5433/user_dev?schema=public"
```

**Run Prisma migrations to set up your database schema**

```bash
npx prisma migrate dev --name init
```

**Start the NestJS server**

```bash
npm run start:dev
```

**Access the Prisma Studio to interact with your database (optional)**

```bash
npx prisma studio
```

**Test Api**
If you have Bruno
(Bruno is a Git-friendly and offline-first open-source API client aimed at revolutionizing the status quo represented by tools like Postman and Insomnia.)

-   Open Bruno
-   Click open collection
-   Browse folder **/collecntion-api** in project

---

## Start Frontend

**Change to the frontend directory**

```bash
cd frontend
```

**Install frontend dependencies**

```bash
yarn
```

**Run the Development Server**

```bash
yarn dev
```

---
