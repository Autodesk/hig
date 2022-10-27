FROM node:16

ENV NODE_OPTIONS=--max_old_space_size=4096

WORKDIR /usr/src/hig
COPY . .

RUN yarn
RUN yarn build
RUN cd packages/storybook && yarn storybook-build