from flask import Blueprint

frontend_api_blueprint = Blueprint('frontend_api_blueprint', __name__, template_folder='templates')
webhook_api_blueprint = Blueprint('webhook_api_blueprint', __name__, template_folder='templates')

from . import frontend_api, webhooks, events