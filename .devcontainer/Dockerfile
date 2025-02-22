# syntax=docker/dockerfile:1
FROM debian:bookworm-slim AS stainless

RUN apt-get update && apt-get install -y \
  nodejs \
  && apt-get clean autoclean

RUN corepack install pnpm

# Ensure UTF-8 encoding
ENV LANG=C.UTF-8
ENV LC_ALL=C.UTF-8

WORKDIR /workspace

COPY package.json pnpm-lock.yaml /workspace/

RUN pnpm install

COPY . /workspace
