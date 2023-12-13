# IDEnlight

![Alt idenlight](frontend/public/idenlight_dark.png?raw=true "Title")

## Introduction

IDEnlight is a sofware to learn the concept of Self-Sovereign Identity. It acts as a controller for the Aries Cloud Agent Python (https://github.com/hyperledger/aries-cloudagent-python).

## Deployment

This application can be served as a multi container application. See figure below.

![Alt architecture](/public/Architecture.png?raw=true "Title")

The following containers are **required**:

* Aries Cloud Agent (ACA-Py)
* Indy Tails Server
* VON-Network (BCovrin Test Ledger will be used)
* Controller Frontend
* Controller Webhook Microservice

### Deploy ACA-Py
_ACA-Py will be served without a storage. It's probably useful to serve it with a storage to get access to e.g. credential definitions after restarting the Agent._
1. Pull the ACA-Py image
2. Run the container (Example of how to run the container below)

```sh
docker run --detach --name=acapy -p 11000:11000 -p <host_name>:8000:8000 bcgovimages/aries-cloudagent:py3.9-indy-1.16.0_0.9.0 start --label idenlight --tails-server-base-url http://<host_name>:6543 --webhook-url http://<host_name>:5001/webhooks -it http 0.0.0.0 8000 -ot http --admin 0.0.0.0 11000 --admin-insecure-mode --genesis-url http://test.bcovrin.vonx.io/genesis --seed <your_seed> --endpoint http://<host_name>:8000/ --debug-connections --auto-provision --wallet-type askar --wallet-name idenlight --wallet-key secret --auto-accept-invites --auto-accept-requests
```

In this example the indy tails server is running on http://<host_name>:6543. The webhook microservice is running on http://<host_name>:5001/webhooks. Furthermore we connecting to the BCovrin Test Ledger (http://test.bcovrin.vonx.io/). An own VON-Network can be served as well. 

### Deploy Indy Tails Server
The indy tails server is required to revoke credentials. You can deploy it as follows:

1. Clone the repository (https://github.com/bcgov/indy-tails-server)
```sh
git clone https://github.com/bcgov/indy-tails-server.git
```

2. Navigate to the folder, define the environment variable GENESIS_URL and start the docker script
```sh
cd indy-tails-server

GENESIS_URL=http://test.bcovrin.vonx.io/genesis ./docker/manage start
```

### Deploy IDEnlight Webhook Microservice
1. Clone this repository
```sh
git clone https://github.com/bieleric/idenlight.git
```

2. Navigate to the folder _webhook_service_ 
```sh
cd webhook_service
```

3. Build the container  
```sh
docker build -t idenlight/webhook_service
```

4. Run the container  
```sh
docker run --name=idenlight_webhook_service -p 5001:5001 -d idenlight/webhook_service
```

### Deploy IDEnlight Frontend
1. After cloning this repository, navigate to the folder _frontend_ 
```sh
cd frontend
```

2. Create a config.json with the following key values pairs. You probably have to change the ports if you expose the containers on others.
```json
{
    "acapy_api": "http://<host_name>:11000",
    "acapy_service_endpoint": "http://<host_name>:8000",
    "webhook_service": "ws://<host_name>:5001",
    "credential": {
        "credentialDefinitionID": "<cred_def_id>",
        "credentialSchemaID": "<cred_schema_id>",
        "schemaIssuerDID": "<schema_issuer_did>",
        "issuerDID": "<issuer_did>",
        "verkey": "<verkey>",
        "schemaName": "<schema_name>"
    }
}
```

3. Build the container  
```sh
docker build -t idenlight/frontend
```

4. Run the container  
```sh
docker run --detach --name=idenlight_frontend -p <host_name>:8080:8080 idenlight/frontend
```

_After deployment there could be an error due to the storage that is not used as mentioned above. Therefore you probably need to create a new credentials definition (and optionally save it in a database if you want to reuse it after a restart of ACA-Py) and add it to the config.json_

## Development
For development you should also deploy ACA-Py and the Indy Tails Server as described above and edit the config.json properly. 

For further informations see 

* [Develope IDEnlight Frontend](https://github.com/bieleric/idenlight/tree/main/frontend)
* [Develope IDEnlight Webhook Microservice](https://github.com/bieleric/idenlight/tree/main/webhook_service)