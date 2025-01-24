# Project File Structure

## Gold Chat V2

gold-chat-v2/
├── docker/
│ ├── Dockerfile.frontend
│ ├── Dockerfile.backend
│ └── docker-compose.yml
│
├── frontend/
│ ├── public/
│ │ ├── index.html
│ │ ├── favicon.ico
│ │ └── assets/
│ │
│ ├── src/
│ │ ├── components/
│ │ │ ├── auth/
│ │ │ │ ├── Login.jsx
│ │ │ │ ├── Register.jsx
│ │ │ │ └── PasswordReset.jsx
│ │ │ ├── chat/
│ │ │ │ ├── ChatWindow.jsx
│ │ │ │ ├── MessageList.jsx
│ │ │ │ ├── MessageInput.jsx
│ │ │ │ └── FileUpload.jsx
│ │ │ ├── friends/
│ │ │ │ ├── FriendsList.jsx
| | | | ├── SendFriendRequest.jsx
│ │ │ │ └── FriendRequests.jsx
│ │ │ └── common/
│ │ │ ├── Header.jsx
│ │ │ └── Sidebar.jsx
│ │ │
│ │ ├── contexts/
│ │ │ ├── AuthContext.js
│ │ │ └── ChatContext.js
│ │ │
│ │ ├── services/
│ │ │ ├── api.js
│ │ │ └── websocket.js
│ │ │
│ │ ├── styles/
│ │ │ ├── theme.js
│ │ │ └── global.css
│ │ │
│ │ ├── App.jsx
│ │ └── index.js
│ │
│ └── package.json
│
├── backend/
│ ├── app/
│ │ ├── init.py
│ │ ├── routes/
│ │ │ ├── auth.py
│ │ │ ├── chat.py
│ │ │ └── friends.py
│ │ │
│ │ ├── models/
│ │ │ ├── user.py
│ │ │ ├── message.py
│ │ │ └── friend.py
│ │ │
│ │ ├── services/
│ │ │ ├── auth_service.py
│ │ │ └── chat_service.py
│ │ │
│ │ └── websockets/
│ │ └── chat_handler.py
│ │
│ ├── config/
│ │ └── settings.py
│ │
│ ├── tests/
│ │ ├── test_auth.py
│ │ ├── test_chat.py
│ │ └── test_friends.py
│ │
| ├── oldmaterial/
| | ├──pages/
| |  ├── 1.tsx
| |  ├── 2.tsx
| |  ├── 3.tsx
| |  └── 4.tsx
| |
| |
│ └── requirements.md
│
├── database/
│ └── migrations/
│ └── initial.sql
│
├── .gitignore
├── README.md
├── ROADMAP.md
└── FILESTRUCTURE.md

---

## Directory Structure Overview

### Docker

- Configuration files for containerization
- Separate frontend and backend services
- Docker Compose for orchestration

### Frontend

- React-based SPA
- Component-based architecture
- Organized by feature (auth, chat, friends)
- Global styles and theming
- API and WebSocket services

### Backend

- Flask server
- RESTful API routes
- Database models
- WebSocket support
- Service layer
- Testing framework

### Database

- Migration scripts
- Initial schema setup
