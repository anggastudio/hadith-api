FROM node:18-alpine

WORKDIR /app

# Copy package files first
COPY package.json ./

# Install both production dependencies and type definitions
RUN npm install --production \
    && npm install --save-dev typescript ts-node @types/node @types/express @types/cors

# Copy the entire application including books
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3300

# Expose the port
EXPOSE 3300

# Start the application
CMD ["npm", "start"]