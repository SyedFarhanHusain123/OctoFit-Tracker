# OctoFit Tracker - Development Guide

## Using GitHub Copilot Agent Mode for Development

This guide outlines best practices for rapid prototyping using GitHub Copilot Agent Mode.

### 1. Development Workflow

#### Phase 1: Database Models
- Define schema structure
- Use Copilot to generate Mongoose models
- Ask for validation logic

#### Phase 2: Backend Endpoints
- Create CRUD operations
- Implement authentication middleware
- Add error handling

#### Phase 3: Frontend Components
- Build React components
- Connect to backend APIs
- Add state management

#### Phase 4: Testing & Refinement
- Write unit tests
- Test API endpoints
- Fix bugs and optimize

### 2. Effective Copilot Prompts

**For Models:**
```
"Create a Mongoose schema for Activity with fields: type, distance, duration, calories, startTime, endTime, and userId reference"
```

**For Routes:**
```
"Create Express POST route for creating a new activity with validation and error handling"
```

**For Components:**
```
"Create a React component to display a list of activities with loading state and error handling"
```

### 3. Project Structure

```
backend/
├── src/
│   ├── server.js          # Express app setup
│   ├── config/            # Configuration files
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API routes
│   ├── controllers/       # Route handlers
│   ├── middleware/        # Custom middleware
│   └── utils/             # Utility functions
├── .env.example           # Environment template
└── package.json

frontend/
├── src/
│   ├── index.js           # React entry point
│   ├── App.js             # Main component
│   ├── components/        # Reusable components
│   ├── pages/             # Page components
│   ├── services/          # API services
│   ├── hooks/             # Custom hooks
│   └── utils/             # Utility functions
├── public/                # Static files
└── package.json
```

### 4. Key Features to Build

#### Priority 1 (MVP)
- [ ] User authentication (Register, Login)
- [ ] Create/Read activities
- [ ] Basic user profile
- [ ] Simple leaderboard

#### Priority 2 (Enhancement)
- [ ] Update/Delete activities
- [ ] Follow users
- [ ] Like/Comment on activities
- [ ] Achievement system

#### Priority 3 (Advanced)
- [ ] Real-time notifications
- [ ] File uploads (activity images)
- [ ] Advanced leaderboard filters
- [ ] Mobile app (React Native)

### 5. Technology Stack Details

**Backend:**
- Express.js: HTTP server framework
- MongoDB: NoSQL database
- Mongoose: MongoDB object modeling
- JWT: Authentication tokens
- bcryptjs: Password hashing

**Frontend:**
- React.js: UI library
- Axios: HTTP client
- React Router: Client-side routing
- CSS/Bootstrap: Styling

### 6. Getting Started

```bash
# Terminal 1 - Backend
cd backend
npm install
npm run dev

# Terminal 2 - Frontend
cd frontend
npm install
npm start
```

### 7. Testing with Copilot

Ask Copilot to:
- Generate API tests with Jest
- Create unit tests for utility functions
- Write React component tests
- Generate mock data for testing

### 8. Common Copilot Commands

```
"Review this code for errors and suggest improvements"
"Create a test file for this function"
"Add error handling to this route"
"Convert this to async/await"
"Create documentation for this API endpoint"
```

## Tips for Success

1. **Start Small**: Build MVP features first
2. **Test Frequently**: Use Copilot to generate tests
3. **Code Review**: Have Copilot review your code
4. **Document**: Ask Copilot to document your code
5. **Refactor**: Use Copilot to suggest improvements
6. **Learn**: Read what Copilot generates and learn from it

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://react.dev/)
- [JWT Introduction](https://jwt.io/introduction)

## Next Steps

1. Set up MongoDB connection
2. Create User model and authentication routes
3. Build activity management endpoints
4. Create React components for main features
5. Implement leaderboard logic
