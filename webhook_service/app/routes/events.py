import logging
from flask import request
from flask_socketio import emit
from app import socketio

logger = logging.getLogger(__name__)

@socketio.on('connect')
def connect_event():
    logger.info("Client connected: " + request.sid)

@socketio.on('disconnect')
def disconnect_event():
    logger.info("Client disconnected: " + request.sid)
