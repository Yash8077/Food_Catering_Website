# श्री Sahiram Caterers - Food Catering Service Project
![image](https://github.com/user-attachments/assets/cf83ce79-7b48-4a3a-a617-a355ab6ff1b4)

## Overview

श्री Sahiram Caterers is a web-based platform designed to showcase and manage the services of a vegetarian catering business based in Dehradun, Uttarakhand. The project includes a fully functional website with features such as menu display, service packages, contact forms, and payment integration. The website is built using HTML, CSS, JavaScript, and Bootstrap for the frontend, and Node.js with Express.js for the backend. MongoDB is used as the database to store user and contact form data.

## Features

### 1. **Home Page**
   - **Hero Section**: A visually appealing hero section with a slider showcasing the catering services.
   - **Event Catering Experience**: A section describing the catering experience and services offered.
   - **Services Overview**: A brief overview of the services provided, including birthday parties, corporate events, and family gatherings.
   - **Customer Testimonials**: A carousel displaying testimonials from satisfied customers.

### 2. **About Us Page**
   - **Our Story**: A section detailing the history and journey of श्री Sahiram Caterers.
   - **Why Choose Us**: Highlights the strengths of the catering service, including hygienic food, skilled chefs, and event management.

### 3. **Menu Page**
   - **Menu Categories**: The menu is divided into categories such as Starters, Chaat Station, Beverages, Main Course, and Desserts.
   - **Filtering**: Users can filter menu items by category using a filter menu.

### 4. **Services Page**
   - **Pricing Plans**: Different catering packages for various events like weddings, birthdays, and corporate events.
   - **Interactive Buttons**: Users can switch between different event types to view corresponding pricing plans.
   - **Payment Integration**: Users can make payments for selected plans using Razorpay.

### 5. **Contact Page**
   - **Contact Form**: A form for users to submit their event details, including event type, date, time, and number of guests.
   - **Contact Information**: Display of contact details, including phone number and email.

### 6. **Gallery Page**
   - **Image Gallery**: A collection of images showcasing past events and food presentations.

### 7. **Backend Features**
   - **User Authentication**: Users can register and log in to access certain features.
   - **Contact Form Submission**: The contact form data is stored in a MongoDB database.
   - **Payment Integration**: Integration with Razorpay for processing payments for catering services. (Currently in Beta)

## Technologies Used

### Frontend
- **HTML5**: For structuring the web pages.
- **CSS3**: For styling the web pages.
- **Bootstrap**: For responsive design and pre-built components.
- **JavaScript**: For interactive features like sliders, filters, and payment integration.

### Backend
- **Node.js**: For server-side scripting.
- **Express.js**: For building the web application and handling routes.
- **MongoDB**: For storing user and contact form data.
- **Mongoose**: For MongoDB object modeling.
- **Razorpay**: For payment processing.

### Other Tools
- **Dotenv**: For managing environment variables.
- **Body-parser**: For parsing incoming request bodies.
- **Express-session**: For managing user sessions.
- **Connect-mongodb-session**: For storing sessions in MongoDB.

## Installation

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Yash8077/Food_Catering_Website.git
   cd Food_Catering_Website
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   MONGO_URL=mongodb://localhost:27017/sahiram-caterers
   PORT=8000
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

4. **Run the Application**:
   ```bash
   npm start
   ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:8000`.

## Usage

- **Home Page**: Navigate through the website to explore services, view the menu, and read testimonials.
- **About Us**: Learn more about the history and strengths of श्री Sahiram Caterers.
- **Menu**: Browse through the menu items and filter by category.
- **Services**: View different catering packages and make payments using Razorpay.
- **Contact**: Submit your event details through the contact form.
- **Gallery**: View images of past events and food presentations.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

**श्री Sahiram Caterers** - Crafting unforgettable vegetarian culinary experiences since 1972.
