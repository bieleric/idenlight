FROM python:3.9-slim-buster
WORKDIR /app
COPY ./requirements.txt /app

# install requirements.txt
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5001

# configure the container to run in an executed manner
ENTRYPOINT [ "python" ]
CMD [ "app.py" ]