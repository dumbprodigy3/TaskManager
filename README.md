# Simple Task Manager

## Overview

The Task Manager project is a full-stack application built with **ASP.NET Core** for the backend API and **Angular** for the frontend. This project provides a simple task management system where users can create, view, edit, and delete tasks, each with a title, description, due date, and status.

## Features

- **Task Management**: Create, update, view, and delete tasks.
- **Task Status**: Track task statuses as Pending, In Progress, or Completed.
- **Due Date Picker**: Choose due dates with a convenient date picker.
- **Real-time Feedback**: Loading indicators for a responsive user experience.

## Technology Stack

- **Backend**: ASP.NET Core, Entity Framework Core
- **Frontend**: Angular, Angular Material
- **Database**: Entity Framework Core InMemory Database

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (for Angular)
- **Angular CLI**: Install with `npm install -g @angular/cli`
- **.NET SDK**: [.NET 8 Core](https://dotnet.microsoft.com/download)
- **Visual Studio**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dumbprodigy3/TaskManager.git
   cd task-manager
   ```

2. **Backend Setup** (ASP.NET Core):
   - Navigate to the API project directory:
     ```bash
     cd TaskManagerApi
     ```

   - Start the backend server:
     ```bash
     dotnet run
     ```
   - The API will be available at `https://localhost:7263` (or the port configured in `launchSettings.json`).

3. **Frontend Setup** (Angular):
   - Navigate to the Angular client directory:
     ```bash
     cd ClientApp
     ```
   - Install the required dependencies:
     ```bash
     npm install
     ```
   - Start the Angular development server:
     ```bash
     ng serve
     ```
   - The Angular app will be available at `http://localhost:4200`.

### Running the Application

Once both the backend and frontend servers are running, open `http://localhost:4200` in your browser. You should see the Task Manager application, where you can start creating and managing tasks.

---

## API Endpoints

The following endpoints are provided by the ASP.NET Core API:

- `GET /api/tasks` - Retrieve a list of tasks.
- `GET /api/tasks/{id}` - Retrieve a specific task by ID.
- `POST /api/tasks` - Create a new task.
- `PUT /api/tasks/{id}` - Update an existing task.
- `DELETE /api/tasks/{id}` - Delete a task by ID.

## Project Structure

```
task-manager/
├── ClientApp/                  # Angular frontend application
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── ...
├── TaskManagerApi/              # ASP.NET Core backend API
│   ├── Controllers/
│   ├── Models/
│   ├── Data/
│   ├── TaskManagerApi.csproj
│   └── ...
├── README.md
└── ...
```

- **ClientApp**: Contains the Angular application files.
- **TaskManagerApi**: Contains the ASP.NET Core Web API files.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

This project uses open-source libraries and frameworks, including:

- [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-8.0)
- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)

---

Feel free to reach out if you have any questions or suggestions to improve the project. Thank you for contributing!
