import logging

from flask import Flask
from flask_socketio import SocketIO
from logging.config import dictConfig

socketio = SocketIO()

dictConfig({
    'version': 1,
    'formatters': {
        'default': {
            'format': '[%(asctime)s] %(levelname)s in %(module)s: %(message)s',
        }
    },
    'handlers': {
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'formatter': 'default'
        }
    },
    'loggers': {
        'werkzeug': {
            'level': 'ERROR',
            'handlers': ['console'],
            'propagate': False
        }
    },
    'root': {
        'level': 'DEBUG',
        'handlers': ['console']
    }
})

logger = logging.getLogger(__name__)

def create_app():
    logger.info("Initialize app")
    app = Flask(__name__)

    # route imports
    logger.debug("Register blueprints")
    from .routes import frontend_api_blueprint
    from .routes import webhook_api_blueprint
    app.register_blueprint(frontend_api_blueprint)
    app.register_blueprint(webhook_api_blueprint)

    logger.debug("Initialize socketIO")
    socketio.init_app(app, cors_allowed_origins="*")

    return app
