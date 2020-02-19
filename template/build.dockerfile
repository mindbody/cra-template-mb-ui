FROM node:12.14-alpine as base
RUN apk update && apk add git && apk add bash && apk add curl

# Install depencencies
FROM base as prep
COPY . ./prepping-ui/
WORKDIR /prepping-ui/
RUN yarn install --pure-lockfile

# Build packages
FROM prep as build

# Build packages
RUN yarn build:shared-ui

FROM base as artifact
COPY --from=build /prepping-ui/build /ui/arcusOutput