FROM node:26-bookworm-slim

WORKDIR /opt/application-template
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --chown=node:node bin/application-template.mjs ./bin/application-template.mjs
COPY --chown=node:node src ./src

USER node
CMD ["node", "bin/application-template.mjs"]
