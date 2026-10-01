FROM node:26-bookworm-slim

WORKDIR /opt/application-template
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --chown=node:node application.mjs ./
COPY --chown=node:node src ./src

USER node
CMD ["node", "application.mjs"]
