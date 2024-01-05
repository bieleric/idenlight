import http from "k6/http";
import { check, sleep } from "k6";

const acapyURL = "http://185.237.14.115:11000";
const acapyServiceEndpoint = "http://185.237.14.115:8000";
const createInvitationEndpoint = `${acapyURL}/connections/create-invitation`;

export const options = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '20s', target: 30 }, 
        { duration: '10s', target: 30 }, // hold load for 10 seconds
        { duration: '10s', target: 0 },
      ],
};

export default function () {
    const payload = JSON.stringify({
        my_label: 'test',
        service_endpoint: acapyServiceEndpoint
    });

    const response = http.post(createInvitationEndpoint, payload);

    check(response, {
        'status is 200': (r) => r.status === 200,
    });

    // simulates real user interaction
    sleep(1);
}