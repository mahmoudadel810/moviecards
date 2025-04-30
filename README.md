<img width="1388" alt="Screenshot 2025-04-30 at 4 34 27 PM" src="https://github.com/user-attachments/assets/f381fde5-9aa0-495e-8e48-419ce98e1148" /><!-- @format -->

# 🎬 Movie Cards Application

A responsive React application that displays a collection of movie cards with details using Bootstrap for styling. Features include real-time search, detailed movie views, and movie management capabilities.

![Movie Cards Screenshot][Uploading Screenshot 2025-04-30 at 4.34.27 PM.png…]
0?text=Movie+Cards+App

## ✨ Features

- **Responsive Design**: Works seamlessly on all device sizes
- **Movie Cards**: Displays movie information in attractive card format
- **Real-time Search**: Search movies as you type
- **Detailed Movie Views**: Dedicated pages for each movie's full details
- **Movie Management**: Remove movies from your collection
- **Bootstrap Styling**: Modern UI with React Bootstrap components
- **Interactive Elements**: 
  - Hover effects on cards
  - Navigation buttons
  - Search functionality
  - Delete capabilities

## 🚀 Technologies Used

- React.js
- React Router DOM
- React Bootstrap
- Bootstrap 5
- CSS3
- JavaScript (ES6+)

## 🛠 Installation & Setup

1. Clone the repository:
   ```bash
   git clone [https://github.com/mahmoudadel810/moviecards.git]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 📱 Responsive Design

The application is fully responsive and works on:
- 📱 Mobile devices
- 💻 Tablets
- 🖥️ Desktop computers

## 🧩 Components

### Navbar
- Application title
- Real-time search functionality
- Responsive design

### MovieCard
Displays individual movie information including:
- Movie title
- Movie poster image
- Release date
- Rating
- Movie description
- View Details button
- Remove button

### MoviesList
- Arranges multiple MovieCard components in a responsive grid layout
- Handles movie filtering based on search
- Manages movie deletion

### MovieDetails
Dedicated page showing comprehensive movie information:
- Full-size movie poster
- Complete movie details
- Rating information
- Release date
- Navigation back to main list

## 📊 Data Structure

Each movie object contains:

```javascript
{
  id: 1,
  title: "Movie Title",
  details: "Movie description...",
  date: "YYYY-MM-DD",
  image: "image-url.jpg",
  rating: 8.5
}
```

## 🔍 Features In Detail

### Search Functionality
- Real-time character-by-character search
- Instant results display
- Clickable search results leading to movie details

### Movie Management
- View detailed information for each movie
- Remove movies from the collection
- Navigate between views

### Routing
- Dynamic routing for movie details
- Clean URLs with React Router
- Smooth navigation between pages

## 🔄 Future Enhancements

- Add movie creation functionality
- Implement filtering by genre, year, or rating
- Add user authentication
- Integrate with a movie API for real-time data
- Add favorite movies feature
- Implement movie categories
- Add user reviews and ratings

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🤝 Support

For support, email [your-email@example.com] or open an issue in the repository.
