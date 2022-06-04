FROM node
COPY myapp /home/node

WORKDIR /home/node/myapp

EXPOSE 8080
RUN npm install
ENTRYPOINT npm start
