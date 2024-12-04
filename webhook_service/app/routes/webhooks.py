import logging
from flask import redirect, render_template, url_for, request, Blueprint, Response
from . import webhook_api_blueprint


logger = logging.getLogger(__name__)

@webhook_api_blueprint.route("/webhooks/topic/connections/", methods=["POST"])
def connections():
    if request.method == "POST":
        logger.info("POST to /webhooks/topic/connections/")
        from app import socketio
        socketio.emit("connection_status", request.json)

    return Response(response={}, status=200,  mimetype="application/json")

@webhook_api_blueprint.route("/webhooks/topic/issue_credential/", methods=["POST"])
def issue_credential_v1_0():
    if request.method == "POST":
        logger.info("POST to /webhooks/topic/issue_credential/")
        from app import socketio
        socketio.emit("issuance_status", request.json)

    return Response(response={}, status=200,  mimetype="application/json")

@webhook_api_blueprint.route("/webhooks/topic/present_proof/", methods=["POST"])
def present_proof_v1_0():
    if request.method == "POST":
        logger.info("POST to /webhooks/topic/present_proof/")
        from app import socketio
        socketio.emit("presentation_status", request.json)

    return Response(response={}, status=200,  mimetype="application/json")

@webhook_api_blueprint.route("/webhooks/topic/out_of_band/", methods=["POST"])
def out_of_band_v1_1():
    if request.method == "POST":
        logger.info("POST to /webhooks/topic/out_of_band/")
        #from app import socketio
        #socketio.emit("presentation_status", request.json)

    return Response(response={}, status=200,  mimetype="application/json")

@webhook_api_blueprint.route("/webhooks/topic/issue_credential_v2_0/", methods=["POST"])
def issue_credential_v2_0():
    if request.method == "POST":
        logger.info("POST to /webhooks/topic/issue_credential_v2_0/")
        #from app import socketio
        #socketio.emit("presentation_status", request.json)

    return Response(response={}, status=200,  mimetype="application/json")

@webhook_api_blueprint.route("/webhooks/topic/issuer_cred_rev/", methods=["POST"])
def issuer_credential_revocation():
    if request.method == "POST":
        logger.info("POST to /webhooks/topic/issuer_cred_rev/")
        #from app import socketio
        #socketio.emit("presentation_status", request.json)

    return Response(response={}, status=200,  mimetype="application/json")