# IDEnlight Webhook Mircoservice
This is the Webhook Microservice of IDEnlight. It is written with the Python Web Framework _Flask_. It catches the webhooks of the Aries Cloud Agent Python (ACA-Py) and routes it via websockets to the frontend. 

## Project setup
1. **Create** and **activate** a virtual environment to install the dependencies (https://docs.python.org/3/library/venv.html)

2. Install the requirements from the requirements.txt
```sh
pip install -r requirements.txt
```

3. Change in _app.py_ the _host=net_host_ to _host=local_host_

4. Start the webhook microservice
```sh
python3 app.py
```

_ACA-Py webhooks will not reach the webhook microservice on localhost because ACA-Py searches for the webhook service as defined as on running the container. A local ACA-Py instance is probably useful or you deploy this service to your host after editing._