import requests
import json

# First, let's try to register a test user
register_url = "http://localhost:8080/api/auth/register"
register_data = {
    "username": "testuser",
    "email": "test@example.com",
    "password": "testpass123",
    "firstName": "Test",
    "lastName": "User"
}

print("Attempting to register test user...")
try:
    response = requests.post(register_url, json=register_data)
    print(f"Register Status Code: {response.status_code}")
    print(f"Register Response: {response.text}")
    
    if response.status_code == 200:
        print("\nUser registered successfully! Now testing login...")
        
        # Test login with the registered user
        login_url = "http://localhost:8080/api/auth/login"
        login_data = {
            "username": "testuser",
            "password": "testpass123"
        }
        
        login_response = requests.post(login_url, json=login_data)
        print(f"Login Status Code: {login_response.status_code}")
        print(f"Login Response: {login_response.text}")
        
except Exception as e:
    print(f"Error: {e}")
