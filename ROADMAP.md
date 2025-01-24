# ROADMAP.md

## Project Overview  

Gold Chat Refurbished (V2) is a browser-accessible messaging app featuring a sleek gold-and-black theme. It includes private messaging, a friends system, and file-sharing capabilities in its initial release. The app will be deployable as a single Docker package with minimal environment variables and use a database compatible with Docker or render.com deployment.

---

## Project Phases

### Phase 1: Setup and Environment Configuration  

1. **Dockerized Development Environment**  
   - Set up Docker for front-end and back-end services.  
   - Create a single Docker Compose file for deployment.  

2. **Database Selection and Setup**  
   - Use a database compatible with Docker (e.g., PostgreSQL or *MySQL*).  
   - Configure database schema for users, friends, messages, and file storage metadata.  

3. **Codebase Initialization**  
   - Front-end: Configure HTML, CSS, JavaScript with *React*.  
   - Back-end: Set up Flask server and API structure.  

---

### Phase 2: Core Features Development  

#### User Authentication and Profiles  

1. **Sign-Up and Login System**  
   - Create a form for username, email, password, and name.  
   - Use token-based authentication (e.g., JWT) for secure sessions.  

2. **User Profiles**  
   - Add basic profile customization options (username, status).  
   - Store user statuses (e.g., Online, Offline).  

#### Friends System  

1. **Friend Requests**  
   - Allow users to send, accept, and decline friend requests.  
   - Display friend lists and statuses.  

2. **Private Messaging**  
   - Enable direct messaging between friends.  
   - Implement WebSockets or polling for real-time updates.  

#### Messaging Features  

1. **File Sharing**  
   - Enable users to send files in private chats.  
   - Store file metadata in the database and files in a compatible storage solution.  

2. **Chat Enhancements**  
   - Message read receipts.  
   - Typing indicators.  

3. **Group Chat Functionality**  
   - Expand the messaging system to support group chats with file sharing.  

4. **Notifications**  
   - Add browser push notifications for new messages or friend requests.  

5. **Search Functionality**  
   - Implement search features to quickly find friends or messages.  

6. **Custom Notifications**  
   - Advanced notification settings for each chat or group.  

7. **Pinned Messages**  
   - Enable users to pin important messages in chats or groups.  

8. **Polls and Surveys**  
   - Allow group members to create polls or surveys within chats.  

9. **Gamification Features**  
   - Add leaderboards, badges, or activity points to encourage user engagement.  

10. **Admin Management Tools**  
    - Basic admin panel to monitor user activity and manage accounts.  

---

### Phase 3: UI/UX Design and Theming  

1. **Theme Implementation**  
   - Apply a gold-and-black minimalistic theme.  
   - Ensure a consistent, sleek design across all components.  

2. **Responsive Design**  
   - Optimize for various screen sizes, including Chromebooks.  

3. **Smooth Animations**  
   - Add transitions and interactions for an engaging user experience.  

---

### Phase 4: Deployment and Testing  

1. **Docker Deployment**  
   - Ensure all components (front-end, back-end, database) are included in a single Docker image.  
   - Optimize Docker image size and configurations.  

2. **Render.com Deployment**  
   - Test compatibility and deploy app on render.com.  
   - Basically would use Docker images to deploy with Render.

3. **Functional Testing**  
   - Test messaging, file sharing, and friend system functionality.  
   - Optimize performance for low-latency interactions.  

4. **Security Testing**  
   - Validate file upload security.  
   - Ensure secure handling of user data and authentication.  

---

## Recommendations for Future Features  

1. **Offline Mode**  
   - Allow users to access recent chats and friends list while offline.  

2. **Message Scheduling**  
   - Allow users to schedule messages to be sent at a later time.  

3. **Language Localization**  
   - Support multiple languages for a broader audience.
   - Current support for only English.

4. **End-to-End Encryption**  
   - Implement encryption for private and group chats to enhance privacy.
