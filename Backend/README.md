# ToolVerse Backend

A Spring Boot application for managing AI tools, categories, and tool requests with MongoDB.

## 🚀 Quick Start

### 1. Configure MongoDB Connection

Edit the `.env` file in the backend root directory:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017
MONGODB_DATABASE=toolverse

# Server Configuration
SERVER_PORT=8080
```

### 2. Start MongoDB

Make sure MongoDB is running on the configured URI:
```bash
# For local MongoDB
mongod

# For MongoDB Atlas (replace with your connection string)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/toolverse
```

### 3. Run the Backend

```bash
mvn spring-boot:run
```

The application will start on `http://localhost:8080`

## 📡 API Endpoints

### Tools
- `GET /api/tools` - Get all tools (paginated)
- `GET /api/tools/{id}` - Get tool by ID
- `GET /api/tools/search?q=query` - Search tools
- `GET /api/tools/category/{category}` - Get tools by category
- `GET /api/tools/featured` - Get featured tools
- `GET /api/tools/free` - Get free tools
- `POST /api/tools` - Create new tool
- `PUT /api/tools/{id}` - Update tool
- `DELETE /api/tools/{id}` - Delete tool

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/{id}` - Get category by ID
- `POST /api/categories` - Create new category
- `PUT /api/categories/{id}` - Update category
- `DELETE /api/categories/{id}` - Delete category

### Tool Requests
- `GET /api/requests` - Get all requests
- `GET /api/requests/{id}` - Get request by ID
- `GET /api/requests/status/{status}` - Get requests by status
- `POST /api/requests` - Submit new request
- `PUT /api/requests/{id}?status=STATUS` - Update request status
- `DELETE /api/requests/{id}` - Delete request

## 🏗️ Project Structure

```
src/main/java/com/toolverse/
├── config/          # Configuration classes
├── controller/       # REST API controllers
├── model/           # MongoDB entities
├── repository/       # Data access layer
├── service/         # Business logic layer
└── ToolverseApplication.java  # Main application class
```

## 🔧 Configuration

The application uses the following configuration:

- **Database**: MongoDB with Spring Data MongoDB
- **Server**: Embedded Tomcat on port 8080
- **CORS**: Enabled for frontend (localhost:5173)
- **Logging**: DEBUG level for development

## 📊 Data Models

### Tool
```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "category": "string",
  "tags": ["string"],
  "pricingModel": "FREE|FREEMIUM|PAID",
  "free": boolean,
  "dailyCredits": number,
  "creditUnit": "string",
  "primaryUseCase": "string",
  "websiteUrl": "string",
  "logoUrl": "string",
  "pros": ["string"],
  "limitations": ["string"],
  "alternatives": ["string"],
  "status": "PENDING|APPROVED|REJECTED",
  "featured": boolean,
  "trending": boolean,
  "new": boolean
}
```

### Category
```json
{
  "id": "string",
  "name": "string",
  "icon": "string",
  "count": number,
  "color": "string"
}
```

### ToolRequest
```json
{
  "id": "string",
  "toolName": "string",
  "description": "string",
  "category": "string",
  "websiteUrl": "string",
  "email": "string",
  "status": "PENDING|APPROVED|REJECTED"
}
```

## 🧪 Testing

Once the backend is running, you can test the API endpoints:

```bash
# Get all tools
curl http://localhost:8080/api/tools

# Search tools
curl "http://localhost:8080/api/tools/search?q=chatgpt"

# Get all categories
curl http://localhost:8080/api/categories
```

## 📝 Notes

- MongoDB must be running before starting the application
- The application will automatically create collections on first run
- CORS is configured for frontend development server
- All timestamps are handled automatically by MongoDB
