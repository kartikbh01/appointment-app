# 📅 Angular Appointment Manager

A simple Angular application to create, view, and manage appointments. This project was built as a hands-on introduction to Angular fundamentals.

![alt text](/src/assets/image.png)

---

## 🚀 Features

- Add new appointments with title and date
- View a list of all appointments
- Remove appointments
- Persist data using `localStorage`

---

## 🧠 Concepts Learned

This project helped in understanding core Angular concepts:

- **Two-way Data Binding (`[(ngModel)]`)**
  - Syncs input fields with component state

- **Lifecycle Hook (`ngOnInit`)**
  - Used to initialize data when the component loads

- **Structural Directives**
  - `*ngFor` → Loop through appointments
  - `*ngIf` → Conditional rendering (empty state)

- **FormsModule**
  - Enables working with form inputs in Angular

- **Event Binding (`(click)`)**
  - Handles user actions like adding/removing appointments

- **Local Storage Integration**
  - Save and retrieve data persistently

---

## 📁 Project Structure
src/
│
├── app/
│ ├── appointment-list/
│ │ ├── appointment-list.component.html
│ │ ├── appointment-list.component.ts
│ │ ├── appointment-list.component.css
│ │
│ ├── models/
│ │ └── appointment.ts
│ │
│ ├── app.component.ts
│ ├── app.module.ts
│
├── index.html
├── main.ts
├── styles.css

---

## 🛠️ Setup & Run

### Install dependencies:

`npm install`

### Run the app:

`ng serve`

### Open in browser:

`http://localhost:4200`