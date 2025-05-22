# CIS485 - Lab 20: Forging, Decoding, and Validating Tokens

This lab demonstrates how to work with JSON Web Tokens (JWTs) using Node.js.

## 📦 Installation

```bash
npm init -y
npm install jsonwebtoken
📁 Files
payload.json – sample payload for token generation.

generate-token.js – generates a signed JWT using a payload and secret.

decode-token.js – decodes the header and payload from a JWT.

verify-token.js – verifies the JWT using the original secret key.

▶️ Usage
1. Generate a Token
bash
Copy
Edit
node generate-token.js payload.json secret123
2. Decode the Token
bash
Copy
Edit
node decode-token.js "PASTE_TOKEN_HERE"
3. Verify the Token
bash
Copy
Edit
node verify-token.js "PASTE_TOKEN_HERE" secret123
4. Forge a Token (Test Invalidity)
Base64 decode the payload.

Modify a claim (e.g., change snack-money to $9999).

Base64 encode the modified payload.

Replace the middle part of the token and run:

bash
Copy
Edit
node verify-token.js "forged.token.here" secret123
🧠 Concepts Covered
JWT structure (Header.Payload.Signature)

Base64 encoding and decoding

Token verification using jsonwebtoken

Demonstrating token tampering and detection

🔒 Notes
Tokens are signed, not encrypted. Anyone can read the payload.

Changing the payload invalidates the signature.

Keep your secrets safe. Do not use real passwords for testing.
