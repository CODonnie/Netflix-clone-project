# Netflix Clone Web App

## Overview
This project is a Netflix clone built using React JS, Firebase for authentication, and the TMDB API for fetching and displaying movie data. It allows users to browse through movies and their details, and create new or log in to their accounts.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Challenges](#challenges)
- [Improvements](#improvements)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication:** Sign up, log in, and log out with Firebase.
- **Movie Browsing:** Browse through movies fetched from the TMDB API.
- **Movie Details:** View detailed information about each movie.
- **Responsive Design:** A clean and responsive interface adaptable to various screen sizes.

## Technologies Used
- **Frontend:** React JS, CSS (or styled-components)
- **Backend Services:**
  - Firebase Authentication for user login and session management.
  - TMDB API for fetching movie details.

## Setup and Installation

### Prerequisites
- **Node.js** (version 10.x or higher)
- **NPM** or **Yarn** package manager
- **Firebase account** for authentication
- **TMDB API key**

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/CODonnie/Netflix-clone-project.git
    cd Netflix-clone-project
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your Firebase and TMDB credentials:
    ```bash
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_TMDB_API_KEY=your_tmdb_api_key
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Enable **Authentication** with Email/Password.
4. Get the Firebase config object and replace the values in the `.env` file.

### TMDB API Setup

1. Sign up for an API key at [TMDB](https://www.themoviedb.org/).
2. Use the API key in your project to fetch movie data.

## Usage
- **Browse Movies:** Once the app is running, you can browse through popular movies, view their details, and explore additional movie information.
- **Authentication:** Sign up or log in to save movie preferences.

## Project Structure
```
├── public/
│   └── index.html
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Main pages (e.g., Home, Login)
│   ├── services/      # API service files (e.g., TMDB, Firebase)
│   ├── App.js         # Main app component
│   ├── index.js       # Entry point
│   └── .env           # Environment variables
└── package.json
```

## Challenges
- **API Rate Limits:** Managing rate limits from TMDB while fetching movie data efficiently.
- **State Management:** Handling complex states, especially when managing user sessions and movie data fetching.
- **Authentication Integration:** Properly setting up Firebase for secure and smooth user authentication.

## Improvements
- **Performance:** Implementing better caching and lazy loading for movie data and images.
- **UX Enhancements:** Adding more fluid transitions, loading spinners, and improving error handling.
- **Watchlist Feature:** Adding the ability for users to save and manage their favorite movies.

## Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/CODonnie/Netflix-clone-project/issues) if you want to contribute.

1. Fork the repository
2. Create your feature branch:
    ```bash
    git checkout -b feature/my-feature
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/my-feature
    ```
5. Open a pull request

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.