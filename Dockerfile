FROM node:10

WORKDIR /smi-mobile

RUN yarn global add @quasar/cli

USER root
