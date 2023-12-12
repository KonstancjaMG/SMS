# School-Management-System
Welcome to the School Management System (SMS), an interactive web application designed to manage and display information for the Racoon City School District. This project utilizes HTML, CSS, Bootstrap and vanilla JavaScript to present a user-friendly interface for managing students, classes, teachers, and grades.

https://konstancjamg-sms.netlify.app/

## Goals:
- [x] - Creation of navigation structure.
- [x] - Creation of navigation styles.
- [x] - Creation of main content structure.
- [x] - Creation of main content styles.
- [x] - Creation of students page.
- [x] - Creation of students styling.
- [x] - Creation of teachers page.
- [x] - Creation of teachers styling.
- [x] - Creation of classes page.
- [x] - Creation of classes styling.
- [x] - Creation of footer structure.
- [x] - Creation of footer styles.
- [x] - Add of localStorage.
- [x] - Add students.
- [x] - Remove students.
- [x] - Search students.
- [x] - Edit students.
- [x] - Add teachers.
- [x] - Remove teachers.
- [x] - Search teachers.
- [x] - Edit teachers.
- [x] - Add classes.
- [x] - Remove classes.
- [x] - Search classes.
- [x] - Edit classes.

## Features - Navbar
* Responsive Navigation Bar
* Elegant Design with Custom Separator
* Dynamically Rendered Menu Items
* Localized Font Import from Google Fonts
* Utilization of Bootstrap framework
* Dynamic student search
* Add/Edit/Remove students functionalities
* Add/Edit/Remove students functionalities
* Add/Edit/Remove classes functionalities
* Show students/teachers assigned to class

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

## Developments - Content

The students pages dynamically creates cards with students data. The leftmost card is the add student functionality and contains validation for input. Each student card offers remove and edit options.
The top of the page contains a dynamically updated search functions.

## File Structure

SMS/
* css/
    * styles.css # The main stylesheet for the project
* images/ # Directory for images used for the project
* js/
    * data.js # Data file, containing constants
    * main.js # The main JavaScript entry point
    * navigation.js # Script for navigation-related functionality
    * footer.js # Footer render
    * render.js # Script for rendering UI components
        * /event_listeners
            * /classes
                * add.event.js # Add new classes event listeners
                * create.event.js # Renders all classes related event listeners
                * edit.event.js # Edit classes event listeners
                * remove.event.js # Remove classes event listeners
                * search.event.js # Search classes event listeners
                * show.students.js # Show assignes students
                * show.teachers.js # Show assigned teachers
            * /students
                * add.event.js # Add new student event listeners
                * create.event.js # Renders all students related event listeners
                * edit.event.js # Edit student event listeners
                * remove.event.js # Remove student event listeners
                * search.event.js # Search student event listeners
            * /teachers
                * add.event.js # Add new teachers event listeners
                * create.event.js # Renders all teachers related event listeners
                * edit.event.js # Edit teachers event listeners
                * remove.event.js # Remove teachers event listeners
                * search.event.js # Search teachers event listeners
            * content_event_listeners.js # All event listeners for main page
            * navbar_event_listeners.js # All event listeners for navbar
        * /local_storage
            * local_storage_upload.js # Script handling load/add/remove from localStorage
        * /pages
            * /classes
                * classes.data.js # Data retrieval and manipulation for classes page
                * classes.page.js # Render of the classes page
                * classes.template.js # HTML template for the classes page
                * show.students.template.js # Show assignes students template
                * show.teachers.template.js # Show assigned teachers template
            * /edit
                * /classes
                    * classes.data.js # Data retrieval and manipulation for classes edit page
                    * classes.page.js # Render of the classes edit page
                    * classes.template.js  # HTML template for classes edit page
                * /students
                    * students.data.js # Data retrieval and manipulation for students edit page
                    * students.page.js # Render of the students edit page
                    * students.template.js  # HTML template for students edit page
                * /teachers
                    * teachers.data.js # Data retrieval and manipulation for teachers edit page
                    * teachers.page.js # Render of the teachers edit page
                    * teachers.template.js  # HTML template for teachers edit page    
            * /home
                * home.data.js # Data retrieval and manipulation for home page
                * home.page.js  # Render of the home page
                * home.template.js # HTML template for home page
            * /students
                * students.data.js # Data retrieval and manipulation for students page
                * students.page.js # Render of the students page
                * students.template.js # HTML template for the students page
            * teachers
                * teachers.data.js # Data retrieval and manipulation for teachers page
                * teachers.page.js # Render of the teachers page
                * teachers.template.js # HTML template for the teachers page
        * /utils
            * clear_content.js # Script to clear content of the page
            * spacer.js # Script to create visual separators
            * dom.js # Script to access the main container of the content part
* index.html # The main HTML file for the School Management System
* package.json # Project metadata and dependency management
* README.md # The README file for the project documentation