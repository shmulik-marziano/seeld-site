// Mock Prisma Client for build time when DB is not available
const fs = require('fs');
const path = require('path');

const mockPrismaClient = `
export const PrismaClient = class PrismaClient {
  constructor() {}
  $connect() { return Promise.resolve(); }
  $disconnect() { return Promise.resolve(); }
};

export default { PrismaClient };
`;

const clientPath = path.join(__dirname, 'node_modules', '.prisma', 'client');

// Create directories if they don't exist
if (!fs.existsSync(clientPath)) {
  fs.mkdirSync(clientPath, { recursive: true });
}

// Write mock client
fs.writeFileSync(path.join(clientPath, 'index.js'), mockPrismaClient);
fs.writeFileSync(path.join(clientPath, 'index.d.ts'), 'export * from "@prisma/client";');

console.log('Mock Prisma client created successfully');
