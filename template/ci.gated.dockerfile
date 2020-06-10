FROM node:12.14-alpine as base
RUN apk update && apk add git && apk add bash && apk add curl

# Install depencencies
FROM base as prep
COPY . ./prepping-ui/
WORKDIR /prepping-ui/
RUN yarn install --pure-lockfile

# Build packages
FROM prep as build

# Run tests
RUN yarn test:ci

# Build packages
RUN yarn gated:ui

FROM base as artifact
COPY --from=build /prepping-ui/build /ui/arcusOutput

ENTRYPOINT ["sh", "./ci.tests.sh"]
