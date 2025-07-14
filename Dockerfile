FROM node:22-alpine

RUN apk update \
  && apk add --no-cache \
    openssh \
    git \
    nano \
    tesseract-ocr \
    tesseract-ocr-data-eng \
    tesseract-ocr-data-tha \
  && rm -rf /var/cache/apk/*

EXPOSE 80
EXPOSE 443
WORKDIR /app
VOLUME ["/app"]