import http from "k6/http";
import { check, sleep } from "k6";

const frontendURL = "http://185.237.14.115:8080/";

export const options = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '20s', target: 30 }, 
        { duration: '10s', target: 30 }, // hold load for 10 seconds
        { duration: '10s', target: 0 },
    ],
};

export default function () {
  const response = http.get(frontendURL);

  check(response, {
    'status is 200': (r) => r.status === 200,
  });

  // simulates real user interaction
  sleep(1);
}