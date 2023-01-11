FROM python:3.11.0-slim-buster

WORKDIR /app
COPY requirements.txt ./
RUN pip3 install -r requirements.txt
COPY . ./

ENV PYTHONUNBUFFERED=1
EXPOSE 8000