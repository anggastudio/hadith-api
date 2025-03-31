FROM node:18-alpine

WORKDIR /app

# Copy package files first
COPY package.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy the entire application including books
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3300

# Expose the port
EXPOSE 3300

# Start the application
CMD ["npm", "start"]