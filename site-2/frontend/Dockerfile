FROM node:lts as build

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build


FROM node:lts

WORKDIR /app

# uncomment if using standalone builds
# COPY --from=build /app/.next/standalone ./
# COPY --from=build /app/.next/static ./.next/static

# for non-standalone builds
COPY --from=build /app/.next ./.next

COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules
COPY package.json ./package.json

ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000

# uncomment if using standalone builds
# CMD ["node", "server.js"]

# for non-standalone builds
CMD ["next", "start"]