# Airline Backend System

## Overview

The Airline Backend System is designed to handle core airline operations such as managing cities, airports, airplanes, and flights. This backend provides endpoints for creating, retrieving, updating, and deleting entities while maintaining structured relationships in the database.

---

## Tech Stack

- **Backend:** Node.js with Express.js
- **Database:** PostgreSQL (via Sequelize ORM)
- **Validation & Security:** Express middleware
- **Environment Variables:** dotenv for managing sensitive data

---

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x.x)
- PostgreSQL (>= 12.x.x)
- npm or yarn package manager

### Clone the Repository

```sh
git clone <repository_url>
cd airline-backend-system
```

### Install Dependencies

```sh
npm install
```

### Run Database Migrations & Seed Data

```sh
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### Start the Server

```sh
npm start
```

The server will run at `http://localhost:3000`

---

## Database Schema & Relationships

### Tables & Relationships

The system consists of the following core tables:

1. **City** (Stores city details)
2. **Airport** (Stores airport details and links to a city)
3. **Airplane** (Stores airplane details)
4. **Flight** (Stores flight details and links to an airplane and airports)

### Entity Relationship Diagram (ERD)

```
City (1) ----- (∞) Airport
Airport (1) ----- (∞) Flight
Flight (∞) ----- (1) Airplane
```

### Tables Structure

#### **1. City Table**

| Column     | Data Type | Constraints                 |
| ---------- | --------- | --------------------------- |
| id         | INT       | Primary Key, Auto-increment |
| name       | STRING    | Unique, Not Null            |
| created_at | TIMESTAMP | Default: CURRENT_TIMESTAMP  |
| updated_at | TIMESTAMP | Default: CURRENT_TIMESTAMP  |

#### **2. Airport Table**

| Column     | Data Type | Constraints                      |
| ---------- | --------- | -------------------------------- |
| id         | INT       | Primary Key, Auto-increment      |
| name       | STRING    | Not Null                         |
| address    | STRING    | Not Null                         |
| city_id    | INT       | Foreign Key (References City.id) |
| created_at | TIMESTAMP | Default: CURRENT_TIMESTAMP       |
| updated_at | TIMESTAMP | Default: CURRENT_TIMESTAMP       |

#### **3. Airplane Table**

| Column      | Data Type | Constraints                 |
| ----------- | --------- | --------------------------- |
| id          | INT       | Primary Key, Auto-increment |
| modelNumber | STRING    | Not Null                    |
| capacity    | INT       | Not Null, Default: 200      |
| created_at  | TIMESTAMP | Default: CURRENT_TIMESTAMP  |
| updated_at  | TIMESTAMP | Default: CURRENT_TIMESTAMP  |

#### **4. Flight Table**

| Column             | Data Type | Constraints                          |
| ------------------ | --------- | ------------------------------------ |
| id                 | INT       | Primary Key, Auto-increment          |
| flightNumber       | STRING    | Unique, Not Null                     |
| airplaneId         | INT       | Foreign Key (References Airplane.id) |
| departureAirportId | INT       | Foreign Key (References Airport.id)  |
| arrivalAirportId   | INT       | Foreign Key (References Airport.id)  |
| departureTime      | DATETIME  | Not Null                             |
| arrivalTime        | DATETIME  | Not Null                             |
| price              | INT       | Not Null                             |
| boardingGate       | STRING    | Optional                             |
| totalSeats         | INT       | Not Null                             |
| created_at         | TIMESTAMP | Default: CURRENT_TIMESTAMP           |
| updated_at         | TIMESTAMP | Default: CURRENT_TIMESTAMP           |

---

## API Endpoints

### **City Routes**

| Method | Endpoint    | Description           |
| ------ | ----------- | --------------------- |
| POST   | `/city`     | Create a new city     |
| GET    | `/city/:id` | Get details of a city |
| GET    | `/city`     | Get all cities        |
| PATCH  | `/city/:id` | Update city details   |
| DELETE | `/city/:id` | Delete a city         |

### **Airport Routes**

| Method | Endpoint        | Description               |
| ------ | --------------- | ------------------------- |
| POST   | `/airports`     | Create a new airport      |
| GET    | `/airports/:id` | Get details of an airport |
| GET    | `/airports`     | Get all airports          |
| PATCH  | `/airports/:id` | Update airport details    |
| DELETE | `/airports/:id` | Delete an airport         |

### **Airplane Routes**

| Method | Endpoint         | Description                |
| ------ | ---------------- | -------------------------- |
| POST   | `/airplanes`     | Create a new airplane      |
| GET    | `/airplanes/:id` | Get details of an airplane |
| GET    | `/airplanes`     | Get all airplanes          |
| PATCH  | `/airplanes/:id` | Update airplane details    |
| DELETE | `/airplanes/:id` | Delete an airplane         |

### **Flight Routes**

| Method | Endpoint   | Description         |
| ------ | ---------- | ------------------- |
| POST   | `/flights` | Create a new flight |
| GET    | `/flights` | Get all flights     |

---

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-xyz`)
3. Commit changes (`git commit -m "Added new feature"`)
4. Push to branch (`git push origin feature-xyz`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.
