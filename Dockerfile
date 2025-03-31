FROM node:18-alpine

WORKDIR /app

# Copy package files first
COPY package.json ./

# Install dependencies (excluding crawler dependencies for production)
RUN npm install

# Copy the rest of the application
COPY . .

# Create books directory if it doesn't exist
RUN mkdir -p ./books

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3300

# Expose the port
EXPOSE 3300

# Start the application
CMD ["npm", "start"]