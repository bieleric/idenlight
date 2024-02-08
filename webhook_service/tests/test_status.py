def test_status_of_webhook_service(client):
    response = client.get("/status")
    assert '200 OK' in response.status