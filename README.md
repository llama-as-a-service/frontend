# LaaS Frontend

[![CI](https://github.com/llama-as-a-service/frontend/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/llama-as-a-service/frontend/actions/workflows/ci.yml) [![Netlify Deploy](https://github.com/llama-as-a-service/frontend/actions/workflows/netlify-deploy.yml/badge.svg?branch=main)](https://github.com/llama-as-a-service/frontend/actions/workflows/netlify-deploy.yml) [![Publish Docker](https://github.com/llama-as-a-service/frontend/actions/workflows/publish-to-ghcr.yml/badge.svg?branch=main)](https://github.com/llama-as-a-service/frontend/actions/workflows/publish-to-ghcr.yml) [![Stable Version](https://img.shields.io/github/v/tag/llama-as-a-service/frontend)](https://img.shields.io/github/v/tag/llama-as-a-service/frontend) [![Latest Release](https://img.shields.io/github/v/release/llama-as-a-service/frontend?color=%233D9970)](https://img.shields.io/github/v/tag/llama-as-a-service/frontend?color=%233D9970)

Frontend webapp for LaaS. Built with React, Bulma, and Docker. Gateway API.

## ⚙️ Setup
```sh
$ git clone https://github.com/llama-as-a-service/frontend.git
$ cd frontend
$ cp .env.sample .env
$ docker-compose up -d
# access on localhost:3000
```

## 🧪 Test
```sh
$ docker-compose exec frontend yarn run test
```

## 📦 Pull from GitHub Repository Container Registry
```sh
# docker pull ghcr.io/OWNER/IMAGE_NAME
$ docker pull ghcr.io/llama-as-a-service/frontend:0.1.0
```