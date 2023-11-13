# School-Management-System
Welcome to the School Management System (SMS), an interactive web application designed to manage and display information for the Racoon City School District. This project utilizes HTML, CSS, and vanilla JavaScript to present a user-friendly interface for managing students, classes, teachers, and grades.

## Goals:
- [x] - Creation of navigation structure.
- [x] - Creation of navigation styles.
- [ ] - Creation of content structure.
- [ ] - Creation of content styles.
- [ ] - Creation of footer structure.
- [ ] - Creation of footer styles.
- [ ] - Adjustements for different viewports.
Optional:
- [ ] - Creation of mobile version of the application.

## Features - Navbar
* Responsive Navigation Bar
* Elegant Design with Custom Separator
* Dynamically Rendered Menu Items
* Localized Font Import from Google Fonts

## Development - Navbar
This project uses vanilla JavaScript without any frameworks or libraries (for now). Styles are pre-compiled using CSS.

* Functions addLogo(), addSchoolName(), and createLogoAndSchoolLink() have values (id, textContent, and the image) inserted directly since they won't be changing a lot of times and don't need a dynamic approach.
* The navigation bar dynamically creates the following links based on the array of objects in data.js - LINKS:
    * students,
    * classes,
    * teachers,
    * grades,
    * notes,
    * login (non-functional).
* The logo and the name of the school are a link to /home.html.

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
