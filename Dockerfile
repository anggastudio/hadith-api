FROM node:18-alpine

WORKDIR /app

# Copy package files first
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the books directory specifically
COPY books/ ./books/

# Copy the rest of the application
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3300

# Expose the port
EXPOSE 3300

# Start the application
CMD ["npm", "start"]