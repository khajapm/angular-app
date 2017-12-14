FROM mhart/alpine-node:8

# Create app directory
RUN mkdir -p usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app
#COPY package.json package-lock.json /usr/src/app

#RUN npm cache clean --force
RUN cd /user/src/app
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 4200/tcp

CMD ["npm", "start", "--", "--host", "0.0.0.0"]
