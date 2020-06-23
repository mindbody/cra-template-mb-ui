FROM node:12.14-alpine as base
RUN apk update && apk add git && apk add bash && apk add curl

# Copy all files over
FROM base as prep
WORKDIR /prepping-ui
COPY . .

# Install depencencies
RUN yarn install --pure-lockfile

# Build packages
RUN yarn build:ui

FROM base as artifact
WORKDIR /ui

RUN mkdir -p /ui/arcusOutput

COPY --from=prep /prepping-ui/build /ui/arcusOutput

COPY --from=prep /prepping-ui/ /ui

ENTRYPOINT ["sh", "./ci.tests.sh"]