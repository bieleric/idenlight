import logging
from app import create_app, socketio


logger = logging.getLogger(__name__)
app = create_app()
local_host = "127.0.0.1"
net_host = "0.0.0.0"
port = 5001

if __name__ == '__main__':
    logger.info(f"Running on http://{ net_host }:{ port }")

    # uses gevent as production server gevent https://flask-socketio.readthedocs.io/en/latest/deployment.html
    socketio.run(app, host=net_host, port=port)
