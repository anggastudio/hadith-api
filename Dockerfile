FROM node:18-alpine

WORKDIR /app

# Install development dependencies for TypeScript
COPY package.json package-lock.json* yarn.lock* ./
RUN npm install

# Copy source code
COPY . .

# Create books directory if it doesn't exist
RUN mkdir -p ./books

# Set environment variables
ENV NODE_ENV=development
ENV PORT=3300

# Expose the port
EXPOSE 3300

# Start the application in development mode for hot reloading
CMD ["npm", "run", "dev"]