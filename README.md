# Social Media App 

A comprehensive, full-stack social media application built from scratch to simulate a modern, Twitter-style platform. This project demonstrates core competencies in modern web development, focusing on real-time data handling, user authentication, and responsive design.

## Features

*   **Authentication**: Secure user sign-up and login, including a specialized Guest Login feature for seamless access.
*   **Real-time Feed**: Ability to create, post, and display updates in real-time using Firestore.
*   **Interaction**: Full engagement suite including liking posts, commenting, and replying to discussions.
*   **Dynamic UI**: A highly responsive design built with Tailwind CSS, including adaptive layouts for mobile, tablet, and desktop viewports.
*   **Interactive Components**: Custom modal interfaces for login, sign-up, and comment threads using Material UI.

## Tech Stack

*   **Frontend**: React, Next.js (App Router), TypeScript, Tailwind CSS, Material UI
*   **State Management**: Redux Toolkit
*   **Backend & Database**: Firebase (Authentication & Cloud Firestore)
*   **Deployment**: Vercel

## Getting Started

1.  **Clone the repository**: `git clone https://github.com/DeveloperThierry/butterfly.git`
2.  **Install dependencies**: `npm install`
3.  **Setup Environment Variables**: Create a `.env.local` file in the root directory and add your Firebase configuration keys (API Key, Auth Domain, Project ID, etc.).
4.  **Run the development server**: `npm run dev`

## Project Highlights

*   **Secure Configuration**: Implemented environment variables to securely manage Firebase configurations and sensitive API keys.
*   **Reusable UI Logic**: Built scalable, reusable components such as `PostHeader` and `Sidebar` to maintain clean, DRY (Don't Repeat Yourself) code.
*   **Next.js Integration**: Leveraged the App Router for efficient page routing and server-side rendering capabilities.

## License

The MIT License (MIT)

Copyright (c) 2026 Thierry

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
