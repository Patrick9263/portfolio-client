# "dockerBuild": "docker build -t \"react-app\" ./",

###### dev environment ######
# FROM node:alpine
# WORKDIR /usr/src/app

# COPY package.json ./
# COPY package-lock.json ./

# RUN npm install
# COPY . .
# # RUN npm rebuild node-sass

# EXPOSE 3000
# CMD ["npm", "start"]
#############################

###### production environment ######
FROM node:alpine as build
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm ci
# RUN npm install react-scripts@4.0.3 -g

COPY . ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
####################################
