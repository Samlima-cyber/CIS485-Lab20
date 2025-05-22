const fs = require('fs');
const jwt = require('jsonwebtoken');

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.error('Usage: node generate-token.js <payloadFile.json> <secret key>');
  process.exit(1);
}

const payloadFile = args[0];
const secretKey = args[1];

try {
  const payload = JSON.parse(fs.readFileSync(payloadFile, 'utf-8'));
  const token = jwt.sign(payload, secretKey, { algorithm: 'HS256', expiresIn: '1h' });
  console.log('Generated JWT:', token);
} catch (error) {
  console.error('Error generating JWT:', error.message);
}