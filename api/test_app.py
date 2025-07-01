import requests

BASE_URL = "http://localhost:8000"

def test_root():
    resp = requests.get(f"{BASE_URL}/")
    assert resp.status_code == 200
    assert resp.text.strip('"') == "Hello, BizAnalyticsAIAPI"
    print("Root endpoint OK.")

def test_health():
    resp = requests.get(f"{BASE_URL}/health")
    assert resp.status_code == 200
    assert resp.json().get("status") == "ok"
    print("Health endpoint OK.")

if __name__ == "__main__":
    test_root()
    test_health()
    print("All tests passed.") 