# Use Node official image
FROM node:18-alpine

# Set work directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy app
COPY . .

# Build app
RUN npm run build

# Expose port
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]

