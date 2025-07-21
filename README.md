[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19955917&assignment_repo_type=AssignmentRepo)
# Testing and Debugging MERN Applications

This assignment focuses on implementing comprehensive testing strategies for a MERN stack application, including unit testing, integration testing, and end-to-end testing, along with debugging techniques.

## Assignment Overview

You will:
1. Set up testing environments for both client and server
2. Write unit tests for React components and server functions
3. Implement integration tests for API endpoints
4. Create end-to-end tests for critical user flows
5. Apply debugging techniques for common MERN stack issues

## Project Structure

```
mern-testing/
├── client/                 # React front-end
│   ├── src/                # React source code
│   │   ├── components/     # React components
│   │   ├── tests/          # Client-side tests
│   │   │   ├── unit/       # Unit tests
│   │   │   └── integration/ # Integration tests
│   │   └── App.jsx         # Main application component
│   └── cypress/            # End-to-end tests
├── server/                 # Express.js back-end
│   ├── src/                # Server source code
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── middleware/     # Custom middleware
│   └── tests/              # Server-side tests
│       ├── unit/           # Unit tests
│       └── integration/    # Integration tests
├── jest.config.js          # Jest configuration
└── package.json            # Project dependencies
```

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week6-Assignment.md` file
4. Explore the starter code and existing tests
5. Complete the tasks outlined in the assignment

## Files Included

- `Week6-Assignment.md`: Detailed assignment instructions
- Starter code for a MERN application with basic test setup:
  - Sample React components with test files
  - Express routes with test files
  - Jest and testing library configurations
  - Example tests for reference

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Basic understanding of testing concepts

## Testing Tools

- Jest: JavaScript testing framework
- React Testing Library: Testing utilities for React
- Supertest: HTTP assertions for API testing
- Cypress/Playwright: End-to-end testing framework
- MongoDB Memory Server: In-memory MongoDB for testing

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required tests (unit, integration, and end-to-end)
2. Achieve at least 70% code coverage for unit tests
3. Document your testing strategy in the README.md
4. Include screenshots of your test coverage reports
5. Demonstrate debugging techniques in your code

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [Cypress Documentation](https://docs.cypress.io/)
- [MongoDB Testing Best Practices](https://www.mongodb.com/blog/post/mongodb-testing-best-practices) 

## Testing Strategy & Debugging Approach

### Testing Strategy
- **Unit Tests:** Written for both client (React components, utilities) and server (utilities, middleware) using Jest and React Testing Library. Located in `client/src/tests/unit/` and `server/tests/unit/`.
- **Integration Tests:** Test component interactions and API endpoints. Client integration tests are in `client/src/tests/integration/`, server integration tests in `server/tests/integration/` using Supertest and in-memory MongoDB.
- **End-to-End (E2E) Tests:** Cypress is used for E2E tests, located in `client/cypress/integration/`, simulating real user flows.
- **Coverage:** Aim for at least 70% code coverage. Run `npm test` or `npm run test:unit`/`test:integration`/`test:e2e` as needed.

### Debugging Approach
- **Server:**
  - Global error handler middleware logs errors and returns structured responses.
  - Logger middleware logs all incoming requests.
  - Use `console.log` and stack traces for debugging during development.
- **Client:**
  - ErrorBoundary component wraps the app to catch and display UI errors.
  - Use browser developer tools (Console, React DevTools) for inspecting state and errors.
- **General:**
  - Test failures and stack traces are used to quickly identify and fix issues.
  - All errors are handled gracefully to avoid crashing the app.

### How to Run Tests
- **Unit/Integration:**
  - `npm test` or `npm run test:unit`/`test:integration` (see package.json scripts)
- **E2E:**
  - Start the client app, then run `npx cypress open` in the client directory

### Screenshots
- Add screenshots of your test coverage reports here after running tests.

--- 