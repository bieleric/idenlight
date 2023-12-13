import logging
from flask import Response, request
from . import frontend_api_blueprint

logger = logging.getLogger(__name__)

@frontend_api_blueprint.route("/status", methods=["GET"])
def get_status():
    if request.method == "GET":
        logger.info(f"status requested")
        return Response({"status": "ok"})
