# TaskTrackerCLI

TaskTrackerCLI is a command-line interface tool designed to help you manage your tasks efficiently. It allows you to track what's to do, in progress, and done, making it perfect for practicing CLI and programming basics.

## Features

* Add new tasks
* Update existing tasks
* Delete tasks
* Mark tasks as in progress or done
* List all tasks or filter by status

## Installation

**Important:** Use the following code with caution.

1. Clone this repository:

    ```bash
    git clone https://github.com/galileo28/TaskTrackerCli.git
    ```

2. Navigate to the project directory:

    ```bash
    cd tasktrackercli
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Link the package globally:

    ```bash
    npm link
    ```

## Usage

After installation, you can use the `task-cli` command to manage your tasks:

    task-cli <command> [options]

### Available Commands

* `add <description>`: Add a new task
* `update <id> <new-description>`: Update an existing task
* `delete <id>`: Delete a task
* `mark-done <id>`: Mark a task as done
* `mark-in-progress <id>`: Mark a task as in progress
* `list [status]`: List all tasks or filter by status (todo, in-progress, done)

## Project Structure

* `bin/index.js`: Entry point of the CLI application
* `commands/`: Contains individual command modules
* `lib/taskManager.js`: Core task management logic
* `utils/fileHandler.js`: Handles file operations for task persistence

## Challenge Solution

This project is a solution to a challenge from [roadmap.sh](https://roadmap.sh/projects/task-tracker). It is designed to demonstrate CLI and task management concepts in a practical application.
