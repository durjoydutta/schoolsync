# 🏫 Next.js Full-Stack School-Management Application /w Video Conference Integration

This repository contains a full-stack School Management Application built using Next.js, Tailwind CSS, Node.js, and PostgreSQL, with Prisma ORM and Supabase for efficient data management and backend services. The platform provides a modern, scalable solution for streamlining school operations, featuring role-based dashboards for administrators, teachers, students, and parents.

---
![Screenshot 2025-02-05 204026](https://github.com/user-attachments/assets/247249a3-2090-42a2-b92c-eeae039f91d6)

## 🚀 Key Features

### 🔒 **Authentication & Authorization**
- Secure user authentication via **Clerk.dev**.
- Role-based access control:
  - Admin, Teacher, Student, Parent roles with granular permissions.
  - Protected routes ensuring secure access.

### 🗨️ **Parent Teacher Communication**
- Simple way to communicate with teacher via **Calendly** and Custom Form.
- Role-based access for parent and teacher
- Effective Communication:
    - Videon Conference
    - Chat Message
    - Custom Form

### 📊 **Admin Dashboard**
- Overview of user stats, events, and metrics.
- Interactive data visualization (charts and dashboards).
- User and role management with search, create, update, and delete capabilities.

### 📚 **Teacher Dashboard**
- Manage schedules, lesson plans, assignments, exams, and results.
- Monitor student performance and activities.

### 🎓 **Student Dashboard**
- View class schedules, assignments, exam results, and attendance records.

### 👪 **Parent Dashboard**
- Monitor children’s academic progress, schedules, and results.
- Communication tools for parent-teacher interaction.

### 🔄 **Data Management**
- CRUD operations for managing users, classes, subjects, assignments, exams, and results.
- Efficient data fetching and pagination.
- Advanced search and filtering for quick data retrieval.

### 📱 **Responsive Design**
- Fully optimized for all screen sizes and devices.

### ⚙️ **Modern Tech Stack**
- **Frontend:** Next.js, TypeScript, Tailwind CSS, Clerk.dev.
- **Backend:** Next.js, Prisma ORM, PostgreSQL with **Supabase**.

---

## 🛠️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/durjoydutta/schoolsync.git
   cd schoolsync


2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**

Create a `.env.local` file in the root directory and use the following as an example configuration:

```plaintext
  # Environment variables declared in this file are automatically made available to Prisma.
  # See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

  # Prisma connection string for PostgreSQL
  DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database>?pgbouncer=true&connection_limit=1"

  # Direct connection to the database for migrations
  DIRECT_URL="postgresql://<username>:<password>@<host>:<port>/<database>"
        
  DATABASE_PASSWORD="<database_password>"

  # Clerk configuration
  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_<your_clerk_publishable_key>
  CLERK_SECRET_KEY=sk_test_<your_clerk_secret_key>
  ```

4. **Run database migrations:**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Access the application:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## 📂 Project Structure

```
schoolsync/
├── app/
│   ├── admin/
│   ├── student/
│   ├── teacher/
│   ├── parent/
│   ├── signin/
│   ├── ... other pages
├── components/
│   ├── Menu.tsx
│   ├── Navbar.tsx
│   ├── CountChart.tsx
│   ├── ... other components
├── prisma/
│   ├── schema.prisma
├── public/
│   ├── images/
│   ├── ... other assets
├── server/
│   ├── actions/
│   │   ├── createUser.ts
│   │   ├── updateStudent.ts
│   ├── db/
│   │   ├── client.ts
├── styles/
│   ├── globals.css
├── ... other files
```

---

## 🚀 Deployment

### **Deploy to Vercel**
1. Push your code to a GitHub repository.
2. Connect your repository to Vercel.
3. Vercel will automatically build and deploy your application.

### **Deploy to Other Platforms**
Follow the instructions for your chosen platform (e.g., Netlify, AWS).

---

## 🤝 Contributing

Contributions are welcome! Submit issues or pull requests to improve this project.

---

## 📜 License

This project is licensed under the **MIT License**. See the LICENSE file for details.

---


**Crafted with ❤️ by Group-7**
