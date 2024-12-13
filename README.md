# CNPM_HCMUT_SSPS

Welcome to our HCMUT_SSPS.

## Overview

HCMUT_SSPS is a smart printing service for HCMUT students to use the printing facilities in HCMUT more efficiently. The students can use this system to pre-order their printing needs without having to wait in a line in traditional method. The system also provides a feature of storing your printing information, such as the metadata of the document, amount, date, time, location... of each of your order. Students can then view all the details of their system usage in the history.

The system is managed by the Student Printing Service Officer (SPSO). They are responsible for configuring the system, managing the printers and viewing the statistics and performance of the HCMUT_SSPS. SPSO can also view users' printing history.

## Technology Stack

-   Front-end: ReactJS, Bootstrap, and other additional libraries provided by npm.
-   Back-end: NodeJS (v20), ExpressJS.
-   Database: MySQL.

## Drawbacks

-   Payment methods not integrated

## Installation

To use the application, you can follow the following steps:

### Clone the repository

### Install dependencies

First, if you haven't installed [NodeJS](https://nodejs.org/), please visit <https://nodejs.org/> and download it.

Next, you will have to install all the dependencies of our project. Let's go to the "server" directory first and enter these commands:

```bash
  cd server
  npm install
```

Then, go to the "client" directory and do the same thing by entering these commands:

```bash
  cd client
  npm install
```

You have installed all the dependencies.

### Set up a database server

The application will also need a MySQL server for the backend to connect to the database. If your machine does not have any MySQL server, install one of your preference ([MySQL official website](https://www.mysql.com/) or [XAMPP](https://www.apachefriends.org/download.html)). Start the server at port 3306 (this port is mostly chosen by default). Import the file "hcmut_ssps.sql" to initialize the database.

<!-- Create a database called "hcmut_ssps" and add some data to it. -->

You are ready now. Let's start the application.

### Run the application

There are two ways to start the application.

#### Start each folder separately

Start two terminal instances in the **CNPM_HCMUT_SSPS** directory. For the first instance, run these commands:

```bash
  cd server
  npm run dev
```

For the second one, run these commands:

```bash
  cd client
  npm start
```

The application should be starting. The ReactJS application will run on [http://localhost:3000](http://localhost:3000) and the Express application will run on [http://localhost:8080](http://localhost:8080).

To log in as a student:

-   Email: `son.tran@hcmut.edu.vn`
-   Password: `2114672`

To log in as an admin:

-   Username: `admin_transon`
-   Password: `2114672`

You are now ready to explore our application!

## Contributor

This project is developed by a group of Computer Science students from Ho Chi Minh University of Technology (HCMUT).
