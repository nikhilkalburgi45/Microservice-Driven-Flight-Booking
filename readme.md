# Airline Backend System

## Database Design

### Tables & Relationships

The system consists of the following core tables:

1. **City** (Stores city details)
2. **Airport** (Stores airport details and links to a city)
3. **Airplane**
4. **Flight**

### **Tables Structure**

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

### **Relationships**

- A **City** has **many** Airports → `One-to-Many`
- An **Airport** belongs to **one** City → `Many-to-One`

#### **Entity Relationship Diagram (ERD)**

```
City (1) ----- (∞) Airport
```

- **One City** can have **multiple Airports**.
- **One Airport** belongs to **one City**.

---

- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belongs to a city
- One airport can have many flights but a flight belongs to one airport
