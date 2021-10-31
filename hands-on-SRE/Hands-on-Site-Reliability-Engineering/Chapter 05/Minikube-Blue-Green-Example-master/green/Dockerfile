FROM python:3.6.1-alpine
WORKDIR /sample_image
ADD . /sample_image
RUN pip install --upgrade pip
RUN pip install Flask
CMD ["python","flask_docker_example.py"]
