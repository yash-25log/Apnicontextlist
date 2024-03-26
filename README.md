# Todo App with Context API and Local Storage

This project is a simple Todo List application built using React, implementing the Context API for state management and local storage to persist the todos even after a page refresh. This allows users to create, read, update, and delete todo items.
![image](https://github.com/yash-25log/context/assets/58944204/774155a0-9a09-4028-b438-32355108d4b1)


## Features

- Add a new todo item
- Mark todo items as completed
- Edit existing todo items
- Delete todo items
- Local storage to persist todos

## Technologies Used

- React
- Context API
- React Hooks
- Local Storage

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-app.git

2.Navigate into the project directory:

  ```bash
  cd todo-app
  ```

3.Install dependencies:
  ```
  npm install
  ```

4.Start the development server:
  ```
  npm start
  ```

5.Open http://localhost:3000 to view it in the browser.

## How to Use

- **Adding a Todo**:
  - Type your todo item into the input field.
  - Press `Enter` or click the "Add Todo" button.

- **Marking a Todo as Completed**:
  - Click on the checkbox to mark the todo item as completed.

- **Editing a Todo**:
  - Double click on a todo item to enter edit mode.
  - Edit the text and press `Enter` to save changes.

- **Deleting a Todo**:
  - Hover over a todo item to reveal the delete button (`X`).
  - Click on the delete button to remove the todo.

## Implementation Details

- The Todo state is managed using the Context API provided by React.
- Todos are stored in the browser's local storage, allowing them to persist across sessions.
- Use of React Hooks (`useState`, `useContext`, `useReducer`) for managing state and actions.
- Components are structured in a reusable and maintainable way for easy scaling.
