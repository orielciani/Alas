# Create image based on the official Node 6 image from dockerhub
FROM node:10

# Create a directory where our app will be placed
RUN mkdir -p /alasApp

# Change directory so that our commands run inside this new directory
WORKDIR /alasApp

# Copy dependency definitions
COPY package.json /alasApp

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /alasApp

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]
