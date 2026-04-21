import requests
import json
import time

# Create a completely new test user
register_url = "http://localhost:8080/api/auth/register"
register_data = {
    "username": "demo" + str(int(time.time())),
    "email": f"demo{int(time.time())}@example.com",
    "password": "demo123",
    "firstName": "Demo",
    "lastName": "User"
}

import time
username = "demo" + str(int(time.time()))
register_data["username"] = username
register_data["email"] = f"{username}@example.com"

print(f"Registering new user: {username}")
try:
    response = requests.post(register_url, json=register_data)
    print(f"Register Status Code: {response.status_code}")
    
    if response.status_code == 200:
        result = response.json()
        print(f"Registration successful! Token: {result.get('token', 'N/A')[:50]}...")
        
        # Test login
        login_url = "http://localhost:8080/api/auth/login"
        login_data = {
            "username": username,
            "password": "demo123"
        }
        
        login_response = requests.post(login_url, json=login_data)
        print(f"Login Status Code: {login_response.status_code}")
        
        if login_response.status_code == 200:
            login_result = login_response.json()
            print(f"Login successful! Token: {login_result.get('token', 'N/A')[:50]}...")
            print("Authentication system is working perfectly!")
        else:
            print(f"Login failed: {login_response.text}")
    else:
        print(f"Registration failed: {response.text}")
        
except Exception as e:
    print(f"Error: {e}")
