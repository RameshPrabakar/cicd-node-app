# My Node.js Application

This is a simple Node.js application that demonstrates End-to-End CI/CD: Node.js → Docker → GitHub Actions → EC2. 

## Project Structure

```
my-node-app
├── Dockerfile
├── package.json
├── jest.config.js
├── app.js
├── test.app.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (Node package manager)
- Docker (for containerization)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd cicd-node-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To run the application locally, use the following command:
```
node app.js
```

### Docker

To build and run the application using Docker, follow these steps:

1. Build the Docker image:
   ```
   docker build -t my-node-app .
   ```

2. Run the Docker container:
   ```
   docker run -p 3000:3000 my-node-app
   ```

### Usage

Once the application is running, you can access it at `http://localhost:3000`.

### Setting Up GitHub Actions Secrets

To securely use sensitive values (like AWS credentials or DockerHub tokens) in your GitHub Actions workflows:

1. Go to your repository on GitHub.
2. Click on **Settings** > **Secrets and variables** > **Actions**.
3. Click **New repository secret**.
4. Enter a name (e.g., `AWS_ACCESS_KEY_ID`) and its value.
5. Repeat for each secret required by your workflow.

These secrets can be referenced in your workflow YAML using `${{ secrets.SECRET_NAME }}`.

### License

This project is licensed under the MIT License.