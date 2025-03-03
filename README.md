This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


Was implemented sqlite as db provider.

An .env file with db and nextauth environment variables are required:
```bash
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="clave_secreta_superhipersegura"
```

This code is based on this educational material: https://github.com/fazt/nextauth-prisma-credentials. Also is recommended https://cursos.devtalles.com/courses/nextjs for a Nextjs extended course.