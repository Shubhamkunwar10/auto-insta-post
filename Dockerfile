# Use the official Node.js image as a base
FROM node:latest

# Install ffmpeg
RUN apt-get update && apt-get install -y ffmpeg

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD ["node", "app.js"]
