# Next.js MongoDB Web Application for internship assignment

This project is a Next.js and MongoDB web application designed for simplicity and real-world applications. It features full API routes implementation and is serverless-ready. The project follows a middleware pattern and is compatible with the Express ecosystem, powered by next-connect.

## Features

- Fast and lightweight, no bulky or slow dependencies.
- Full API Routes implementation.
- Middleware pattern with compatibility for Express.
- No complex technologies like GraphQL, SASS, or Redux.
- Documentation and blog posts to help you get started.
- Adaptable to different databases besides MongoDB.

## Authentication and Account

- Session-based authentication using Passport.js.
- Sign-up, log-in, and log-out functionality.
- Authentication via email/password.
- Email verification, password change, and reset.

## Profile

- User profile with picture, username, name, and bio.
- Ability to update user profile.

## Social

- View other users' profiles.
- Post and comment features.

## Dependencies

This project uses various dependencies, including Next.js, React, SWR, MongoDB, Passport, and more. You can find a full list in the project's documentation.

## Environmental Variables

Set up the following environmental variables for your project:

- `MONGODB_URI`: MongoDB Connection String.
- `WEB_URI`: The URL of your web app.
- `CLOUDINARY_URL` (optional, for Cloudinary only): Cloudinary environment variable.
- `NODEMAILER_CONFIG` (optional, if using nodemailer): JSON stringified nodemailer config.

## Development

To start the development server, run `pnpm dev` or `npm run dev`. Make sure to create a `.env.local` file with the required environmental variables.

## Deployment

![Deploy with Vercel](https://vercel.com/button)

Deploy the project wherever Next.js can be deployed. Ensure that you set the necessary environmental variables using the options provided by your hosting provider. After building with `npm run build`, start the server with `npm run start`. Serverless deployment is also possible with the right configuration.
