FROM node:latest
WORKDIR /mizpah-coaching

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application files
COPY ./ ./

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]