# Top Performing Student Recognition System

## Introduction
The **Top Performing Student Recognition System** is a software solution designed to identify and rank top-performing students based on various criteria such as academic performance, core course excellence, hackathon participation, paper presentations, and teacher contributions. The system provides a user-friendly interface for entering student data, and it calculates the top three students using logistic regression for accuracy determination. The project consists of two main components:
- A **desktop application** built using Electron.
- A **web page** created using Flask with Python as the backend.

## Table of Contents
- [Installation](#installation)
  - [Electron Application](#for-electron-application)
  - [Flask Web Application](#for-web-page-flask-application)
- [Usage](#usage)
  - [Electron Application](#electron-application)
  - [Flask Web Page](#web-page-flask-application)
- [Features](#features)
- [Dependencies](#dependencies)
- [System Overview](#system-overview)
  
## Installation

### For Electron Application
1. Clone the repository to your local machine.
2. Navigate to the project directory and install the Electron dependency using npm:
   ```bash
   npm install electron --save-dev
### After installing the dependencies, you can start the Electron application using the following command:
bash
Copy code
npm start
### For Web Page (Flask Application) 
Make sure Python is installed.
Clone the repository and navigate to the web application folder.
Install the required Python packages using:
### bash
Copy code
### pip install -r requirements.txt
Start the Flask server by running:
bash
Copy code
python app.py
### Access the application on your browser at http://127.0.0.1:5000/.
Usage
### Electron Application
Run the Electron app using npm start.

Enter the student details in the form as shown below:


Submit the data to store it in the database.

After submission, you'll see two options:

### View All Data: Displays all students' data.
### View Top 3 Students: Displays the top 3 students based on their calculated performance.

### vWeb Page (Flask Application)
Run the Flask server using python app.py.

### Access the web page at http://127.0.0.1:5000/.

Fill in the form fields with the student's data:


Once submitted, it shows two options:

View All Data: Displays all student data from the database.
View Top 3 Students: Displays the top 3 students.

### Features
Input student data including name, batch year, academic performance, core course excellence, hackathon participation, paper presentations, and teacher contributions.
### View complete student data.
Rank and view the top 3 students based on performance metrics.
Uses logistic regression for performance ranking and accuracy checking.
### Dependencies
Electron Application
Electron
Node.js
Flask Application
Flask
Python
Logistic Regression (scikit-learn)
