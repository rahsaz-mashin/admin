# Stage 1: Build the app
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app code and build the Next.js app
COPY . .
RUN npm run build

# Stage 2: Serve the Next.js app
FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app ./

# Run Next.js in production mode
CMD ["npm", "start"]