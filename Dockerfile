# Use the Node.js 20 base image
FROM node:20

# Set the working directory inside the container
WORKDIR /Angular18Practice

# Copy package.json and package-lock.json first to leverage Docker's caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Expose the port your Angular app runs on
EXPOSE 4200

# Start the Angular development server, binding it to 0.0.0.0 to make it accessible from outside the container
CMD ["npm", "start", "--", "--host", "0.0.0.0"]