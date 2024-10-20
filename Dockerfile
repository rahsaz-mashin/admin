# Stage 1: Build the project
FROM node:18 AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json from the builder stage
COPY --from=builder /app/package.json /app/package-lock.json ./

# Install only production dependencies
RUN npm install --production

# Copy the build from the first stage
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
COPY --from=builder /app/next.config.mjs /app/next.config.mjs

# Start the application
CMD ["npm", "start"]
