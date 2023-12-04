# School-Management-System
Welcome to the School Management System (SMS), an interactive web application designed to manage and display information for the Racoon City School District. This project utilizes HTML, CSS, Bootstrap and vanilla JavaScript to present a user-friendly interface for managing students, classes, teachers, and grades.

## Goals:
- [x] - Creation of navigation structure.
- [x] - Creation of navigation styles.
- [ ] - Creation of main content structure.
- [ ] - Creation of main content styles.
- [ ] - Creation of students page.
- [ ] - Creation of students styling.
- [ ] - Creation of teachers page.
- [ ] - Creation of teachers styling.
- [ ] - Creation of classes page.
- [ ] - Creation of classes styling.
- [ ] - Creation of grades page.
- [ ] - Creation of grades styling.
- [ ] - Creation of notes page.
- [ ] - Creation of notes styling.
- [ ] - Creation of footer structure.
- [ ] - Creation of footer styles.
- [ ] - Add of localStorage.
- [ ] - Adjustements for different viewports.
Optional:
- [ ] - Creation of mobile version of the application.

## Features - Navbar
* Responsive Navigation Bar
* Elegant Design with Custom Separator
* Dynamically Rendered Menu Items
* Localized Font Import from Google Fonts
* Utilization of Bootstrap framework

## Development - Navbar
This project uses JavaScript with the Bootstrap framework.

* The navigation bar dynamically creates the following links based on the array of objects in data.js - LINKS:
    * students,
    * classes,
    * teachers,
    * grades,
    * notes,
    * login (non-functional).
* The logo and the name of the school are a link to /home.html.
* Menu collapses on screens smaller than lg (992px) in order to keep the slick design while providing an easily readable and accessible UI.

## File Structure

SMS/
* css/
    * styles.css # The main stylesheet for the project
* images/ # Directory for images used for the project
* js/
    * data.js # Data file, containing constants
    * main.js # The main JavaScript entry point
    * navigation.js # Script for navigation-related functionality
    * render.js # Script for rendering UI components
    * spacer.js # Script to create visual separators
* home.html # The main HTML file for the School Management System
* package.json # Project metadata and dependency management
* README.md # The README file for the project documentation
