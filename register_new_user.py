import requests
import json

# Create a new test user with different username
register_url = "http://localhost:8080/api/auth/register"
register_data = {
    "username": "testuser2",
    "email": "test2@example.com",
    "password": "testpass123",
    "firstName": "Test",
    "lastName": "User2"
}

print("Registering new test user...")
try:
    response = requests.post(register_url, json=register_data)
    print(f"Register Status Code: {response.status_code}")
    print(f"Register Response: {response.text}")
    
    if response.status_code == 200:
        print("\nUser registered successfully! Now testing login...")
        
        # Test login with the new user
        login_url = "http://localhost:8080/api/auth/login"
        login_data = {
            "username": "testuser2",
            "password": "testpass123"
        }
        
        login_response = requests.post(login_url, json=login_data)
        print(f"Login Status Code: {login_response.status_code}")
        print(f"Login Response: {login_response.text}")
        
        if login_response.status_code == 200:
            print("SUCCESS! Login is working with valid credentials!")
        else:
            print("Login still failed")
        
except Exception as e:
    print(f"Error: {e}")
