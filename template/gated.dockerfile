FROM node:12.14-alpine
RUN apk update && apk add git && apk add bash && apk add curl

# Copy all files over
RUN mkdir -p /prepping-ui
COPY . ./prepping-ui/

# Install depencencies
WORKDIR /prepping-ui
RUN yarn install --pure-lockfile

# Run tests
RUN yarn test:ci

# Build packages
RUN yarn build:ui
