# Interaction-Design Capstone: CNN Website Redesign

 A front-end redesign of the CNN news website for Capstone assignment. Focused on creating clean UI, responsive layout, and dynamic content rendering. 

## Overview

This project is a static web application built to simulate a modern news platform. It utilizes Vanilla JavaScript to dynamically filter and load article data from a local JSON file, demonstrating how a single template can be used to generate multiple unique category and article pages.

### Key Features
* **Dynamic Article Loading:** Uses JavaScript `fetch()` to pull story data from `articles.json`.
* **Category Filtering:** A dynamic template page that filters the database by categories (Politics, Business, Entertainment) via URL parameters.
* **Full-Screen Search:** A custom search overlay that filters articles in real-time as the user types.
* **Responsive CSS Grid/Flexbox Layouts:** Modern layout techniques to ensure the site looks great on desktop and mobile.

## Technologies Used

* **HTML5** (Semantic structure)
* **CSS3** (Custom styling, Flexbox, CSS Grid)
* **JavaScript** (DOM manipulation, Fetch API, Array filtering)
* **JSON** (Local data storage)

## Local Setup Instructions

Because this project uses the JavaScript `fetch()` API to load local JSON files, **it cannot be run by simply double-clicking the `index.html` file.** Your browser will block the data for security reasons (CORS). You must run it through a local web server.

### Using VS Code (Recommended)
1. Clone or download this repository to your local machine.
2. Open the project folder in **Visual Studio Code**.
3. Install the **Live Server** extension (by Ritwick Dey) from the VS Code Extensions marketplace.
4. Open the `index.html` file in your editor.
5. Click the **"Go Live"** button in the bottom right corner of the VS Code window, or right-click the HTML file and select **"Open with Live Server"**.
6. The site will automatically open in your default browser at `http://127.0.0.1:5500/`.
