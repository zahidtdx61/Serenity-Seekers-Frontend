# Serenity Seekers - A South Asian Tourist Spot Site

Welcome to Serenity Seekers, a comprehensive platform dedicated to showcasing the beauty of South Asian tourist spots.

## Live Preview

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fserenity-seekers.web.app%2F)](https://serenity-seekers.web.app/)
You can visit our live site at [Serenity Seekers](https://serenity-seekers.web.app/).

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fserenity-seekers.vercel.app%2F)](https://serenity-seekers.vercel.app/)
You can also check out our live site (mirror) at [Serenity Seekers Vercel](https://serenity-seekers.vercel.app/).


## Backend API

[![Backend API](https://img.shields.io/website?url=https%3A%2F%2Fserenity-seekers-backend.vercel.app)](https://serenity-seekers-backend.vercel.app)

Our backend API is hosted at [Serenity Seekers Backend](https://serenity-seekers-backend.vercel.app).

Our Backend repository [Serenity Seekers Backend](https://github.com/zahidtdx61/Serenity-Seekers-Backend).

## Installation

To run the website locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/zahidtdx61/Serenity-Seekers-Frontend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Serenity-Seekers-Frontend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Make an .env file and add these credentials:

   ```env
   VITE_apiKey=<get_this_from_firebase>
   VITE_authDomain=<get_this_from_firebase>
   VITE_projectId=<get_this_from_firebase>
   VITE_storageBucket=<get_this_from_firebase>
   VITE_messagingSenderId=<get_this_from_firebase>
   VITE_appId=<get_this_from_firebase>
   ```

5. Start the development server:
   ```sh
   npm run dev
   ```

## Features

#### 1. User Authentication

- Users can securely sign up using their email address or quickly sign in using their Google or GitHub accounts through OAuth integration.
- Authentication is managed and verified by our backend services to ensure secure access to user-specific functionalities.

#### 2. CRUD Operations

- Signed-in users have the ability to perform CRUD (Create, Read, Update, Delete) operations on their tourist spot entries.
- Users can add new tourist spots, update existing information, and delete spots they have added.
- Backend APIs facilitate these operations, ensuring data integrity and user-specific access controls.

#### 3. Tourist Spot Exploration

- Users can explore a curated list of various tourist spots across different countries in Southeast Asia.
- The platform showcases a wide range of tourist attractions, offering users a glimpse into the diverse travel opportunities in the region.

#### 4. Country-specific Spots

- The homepage features an interactive country section, allowing users to navigate and explore available tourist spots categorized by country.
- Users can click on country cards to view specific tourist spots associated with each country, facilitating targeted exploration based on geographic preferences.

#### 5. Detailed Spot Information

- Each tourist spot entry provides comprehensive details accessible through the 'View Details' button.
- Users can access detailed information about a specific tourist spot, including location, description, average cost, best season to visit, travel time, and annual visitors.
- This feature enables users to make informed decisions and plan their travel experiences based on specific spot details.

## Technologies Used

#### Frontend

- **React**: Frontend development framework for building user interfaces.
- **React Router**: For declarative routing within the React application.
- **React DOM**: Enables rendering of React components in the DOM.
- **Material-UI (MUI)**: React UI framework for implementing Material Design components.
- **React Data Table Component**: Library for displaying tabular data in React applications.
- **Firebase**: Backend-as-a-Service platform for hosting and managing application data and authentication.
- **Axios**: HTTP client for making API requests.

#### State Management and Hooks

- **React Hook Form**: Library for building forms in React with easy form validation.
- **Lottie React**: Used for rendering Lottie animations in React components.
- **React Icons**: Library for popular icon packs as React components.

#### Other Libraries and Tools

- **React Helmet Async**: Library for managing document head contents in React applications.
- **React Hot Toast**: Toast notifications library for React applications.
- **React Tooltip**: Library for creating tooltips in React components.
- **Swiper**: Modern touch slider library for building interactive carousels and sliders.

#### NPM Packages Used

- **`@mui/material`**: Material-UI's core components.
- **`axios`**: Promise-based HTTP client for the browser and Node.js.
- **`react-simple-typewriter`**: Simple typewriter effect component for React.
- **`react-tooltip`**: Simple tooltips for React components.
- **`lottie-react`**: Library for rendering Lottie animations in React components.
- **`firebase`**: Official Firebase JavaScript SDK.
- **`react-data-table-component`**: DataTable component for React.
- **`react-hook-form`**: Performant and flexible form validation library for React.
- **`react-hot-toast`**: Lightweight toast notifications for React.
- **`react-icons`**: Popular icon library for React applications.
- **`react-router-dom`**: DOM bindings for React Router.
- **`react-spinners`**: Loading spinner components for React.
- **`swiper`**: Modern touch slider library.
- **`use-async-effect`**: Custom React hook for managing asynchronous effects.

#### Development Tools and Build Process

- **Vite**: Frontend build tool that serves the React application with hot module replacement (HMR) during development.
- **Tailwind CSS**: Utility-first CSS framework used for styling.
- **DaisyUI**: Tailwind CSS component library for rapid UI development.

## Contributing

We welcome contributions! Please see our contributing guidelines for more details.

