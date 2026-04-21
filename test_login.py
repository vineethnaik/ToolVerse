import requests
import json

# Test login with existing user
login_url = "http://localhost:8080/api/auth/login"
login_data = {
    "username": "testuser",
    "password": "testpass123"
}

print("Testing login with existing user...")
try:
    response = requests.post(login_url, json=login_data)
    print(f"Login Status Code: {response.status_code}")
    print(f"Login Response: {response.text}")
    
    if response.status_code == 200:
        print("Login successful!")
    else:
        print("Login failed - trying different password...")
        
        # Try with a different password
        login_data["password"] = "password"
        response2 = requests.post(login_url, json=login_data)
        print(f"Second attempt Status Code: {response2.status_code}")
        print(f"Second attempt Response: {response2.text}")
        
except Exception as e:
    print(f"Error: {e}")
