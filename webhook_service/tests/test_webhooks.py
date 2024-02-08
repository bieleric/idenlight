def test_connection_webhook(client):
    response = client.post("/webhooks/topic/connections/", json={
        "foo": "bar"
    })
    assert '200 OK' in response.status

def test_issue_credential_webhook(client):
    response = client.post("/webhooks/topic/issue_credential/", json={
        "foo": "bar"
    })
    assert '200 OK' in response.status

def test_present_proof_webhook(client):
    response = client.post("/webhooks/topic/present_proof/", json={
        "foo": "bar"
    })
    assert '200 OK' in response.status