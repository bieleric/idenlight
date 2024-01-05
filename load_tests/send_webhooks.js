import http from 'k6/http';
import { check, sleep } from 'k6';

const webhookURL = "http://185.237.14.115:5001";
const connectionWebhook = `${webhookURL}/webhooks/topic/connections/`;

export let options = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '20s', target: 30 }, 
        { duration: '10s', target: 30 }, // hold load for 10 seconds
        { duration: '10s', target: 0 },
    ],
};

export default function () {
    const payload = JSON.stringify({
        test: 'test',
    });

    // POST-Request an den Webhook-Endpoint senden
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let response = http.post(connectionWebhook, payload, params);

    // Überprüfe, ob die Antwort erfolgreich war
    check(response, {
        'status is 200': (r) => r.status === 200,
    });

    // Pausiere für eine kurze Zeit zwischen den Anfragen (simuliert das Verhalten von echten Nutzern)
    sleep(1);
}