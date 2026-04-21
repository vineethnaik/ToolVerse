import requests
import json

# Test the login API
url = "http://localhost:8080/api/auth/login"
headers = {"Content-Type": "application/json"}
data = {
    "username": "test",
    "password": "test"
}

try:
    response = requests.post(url, headers=headers, json=data)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"Error: {e}")
