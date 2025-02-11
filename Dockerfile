# Stage 1: Build the project
FROM node:18 AS builder

WORKDIR /info

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Pass build-time environment variables
ARG NEXT_PUBLIC_CORE_BASE_URL
ENV NEXT_PUBLIC_CORE_BASE_URL=$NEXT_PUBLIC_CORE_BASE_URL

ARG AUTH_SECRET
ENV AUTH_SECRET=$AUTH_SECRET

ARG NEXT_PUBLIC_BASE_PATH
ENV NEXT_PUBLIC_BASE_PATH=$NEXT_PUBLIC_BASE_PATH



# Build the application
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine

WORKDIR /info

# Copy package.json and package-lock.json from the builder stage
COPY --from=builder /info/package.json /info/package-lock.json ./

# Install only production dependencies
RUN npm install --production

# Copy the build from the first stage
COPY --from=builder /info .

# Start the application
CMD ["npm", "start"]
