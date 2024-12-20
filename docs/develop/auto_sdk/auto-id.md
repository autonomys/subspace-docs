---

title: Auto ID  
sidebar_position: 6  
description: Functions to build on Auto ID domain
slug: /develop/auto-sdk/auto-id
keywords:
- Developers Documentation
- DevDocs
- SDK
- Auto SDK
- Auto ID

--- 

## Auto-ID Package Documentation

:::warning
Auto ID domain is not yet available on Taurus Network or Autonomys Mainnet
:::

### Introduction

The `@autonomys/auto-id` package provides functionalities for managing certificates, authenticating users, and integrating Zero-Knowledge Proofs (ZKPs) on the Autonomys Network. It enables developers to:

- **Authenticate Users**: Verify user identities using their Auto IDs.
- **Manage Certificates**: Create, issue, and handle x509 certificates associated with Auto IDs.
- **Integrate Zero-Knowledge Proofs (ZKPs)**: Utilize ZKP claims for enhanced privacy and authentication.

### Features

- **Certificate Management**: Create and manage x509 certificates linked to Auto IDs.
- **Zero-Knowledge Proof Integration**: Implement privacy-preserving claims using ZKPs.
- **User Authentication**: Authenticate users through their Auto IDs and certificates.
- **TypeScript Support**: Fully typed for enhanced developer experience.
- **Blockchain Interaction**: Interact with the Autonomys Network without dealing with low-level blockchain complexities.

---

## Installation

Install the package via npm or yarn:

```bash
# Using npm
npm install @autonomys/auto-id

# Using yarn
yarn add @autonomys/auto-id
```

---

## Importing the Package

Before using the functions provided by the `auto-id` package, you need to import them into your project:

```typescript
// Import specific functions
import { selfIssueCertificate, authenticateAutoIdUser } from '@autonomys/auto-id';

// Or import everything
import * as autoId from '@autonomys/auto-id';
```

---

## Available Functions

### Auto ID Functions

- **`addDaysToCurrentDate(days: number): Date`**: Returns current date plus specified days.
- **`authenticateAutoIdUser(api, autoId, challenge, signature): Promise<boolean>`**: Verifies an Auto ID user by signature over a challenge.
- **`AutoIdError`**: Enum of possible Auto ID errors.
- **`checkCertificateAndRevocationList(api, autoIdIdentifier, getCertificate): Promise<AutoIdX509Certificate>`**: Checks if a certificate exists and is not revoked.
- **`convertX509CertToDerEncodedComponents(certificate): [Uint8Array, Uint8Array]`**: Converts an X.509 certificate to DER-encoded components.
- **`decryptPem(pem, password): string`**: Decrypts an encrypted PEM key using a password.
- **`deactivateAutoId(api, autoIdIdentifier, signature): Promise<SubmittableExtrinsic>`**: Creates a transaction to deactivate an Auto ID.
- **`derEncodeSignatureAlgorithmOID(oid, parameters?): Uint8Array`**: DER-encodes a signature algorithm OID.
- **`getCertificate(api, autoIdIdentifier): Promise<AutoIdX509Certificate | undefined>`**: Retrieves a certificate from the blockchain.
- **`getCertificateRevocationList(api, autoIdIdentifier): Promise<string[]>`**: Gets the revocation list for an Auto ID.
- **`getCertificateSubjectPublicKey(api, autoIdIdentifier): Promise<CryptoKey>`**: Retrieves the public key from a stored certificate.
- **`hexStringToU8a(hexString): Uint8Array`**: Converts a hex string to a `Uint8Array`.
- **`identifierFromX509Cert(issuerId, certificate): string`**: Generates an Auto ID identifier from a certificate.
- **`mapErrorCodeToEnum(errorCode): AutoIdError | null`**: Maps an error code to an `AutoIdError`.
- **`pemToCryptoKeyForSigning(pem, algorithm): Promise<CryptoKey>`**: Converts a PEM key to a `CryptoKey` for signing.
- **`pemToHex(pem): string`**: Converts a PEM key to a hex string.
- **`registerAutoId(api, certificate, issuerId?): SubmittableExtrinsic`**: Creates a transaction to register an Auto ID.
- **`renewAutoId(api, autoIdIdentifier, newCertificate): Promise<SubmittableExtrinsic>`**: Creates a transaction to renew an Auto ID.
- **`revokeCertificate(api, autoIdIdentifier, signature): Promise<SubmittableExtrinsic>`**: Creates a transaction to revoke a certificate.
- **`validateCertificatePublicKey(certPublicKey, derivedPublicKey): Promise<boolean>`**: Validates if a derived public key matches the certificate's.

### Certificate Management

- **`certificateToPem(cert): string`**: Converts a certificate to PEM format.
- **`createAndSignCSR(subjectName, keyPair): Promise<Pkcs10CertificateRequest>`**: Creates and signs a CSR.
- **`createCSR(subjectName, keyPair): Promise<Pkcs10CertificateRequest>`**: Creates a Certificate Signing Request.
- **`getCertificateAutoId(certificate): string | undefined`**: Extracts Auto ID from a certificate's SAN extension.
- **`getSubjectCommonName(subject): string | undefined`**: Retrieves the common name from a certificate subject.
- **`issueCertificate(csr, issuerCertificateData, validityPeriodDays?): Promise<X509Certificate>`**: Issues a certificate based on a CSR.
- **`pemToCertificate(pem): X509Certificate`**: Converts a PEM string to a certificate object.
- **`prettyPrintCertificate(cert): void`**: Prints certificate details to the console.
- **`saveCertificate(certificate, filePath): Promise<void>`**: Saves a certificate to a file in PEM format.
- **`selfIssueCertificate(subjectName, keyPair, validityPeriodDays?): Promise<X509Certificate>`**: Generates a self-signed certificate.
- **`signCSR(csr, keyPair): Promise<Pkcs10CertificateRequest>`**: Signs a CSR using a private key.

### Key Management

- **`cryptoKeyPairFromPrivateKey(privateKey, algorithm, password?): Promise<CryptoKeyPair>`**: Generates a key pair from a private key.
- **`cryptoKeyToPem(key, password?): Promise<string>`**: Converts a `CryptoKey` to PEM format.
- **`doPublicKeysMatch(publicKey1, publicKey2): Promise<boolean>`**: Checks if two public keys are identical.
- **`generateEd25519KeyPair(): Promise<CryptoKeyPair>`**: Generates an Ed25519 key pair.
- **`generateRsaKeyPair(keySize?): Promise<CryptoKeyPair>`**: Generates an RSA key pair.
- **`keyToHex(key): Promise<string>`**: Converts a `CryptoKey` to a hex string.
- **`loadPrivateKey(filePath, algorithm, password?): Promise<CryptoKey>`**: Loads a private key from a file.
- **`loadPublicKey(filePath, algorithm): Promise<CryptoKey>`**: Loads a public key from a file.
- **`pemToPrivateKey(pemData, algorithm, password?): Promise<CryptoKey>`**: Converts a PEM private key to a `CryptoKey`.
- **`pemToPublicKey(pemData, algorithm): Promise<CryptoKey>`**: Converts a PEM public key to a `CryptoKey`.
- **`rawToPrivateKey(arrayBuffer, algorithm): Promise<CryptoKey>`**: Imports a private key from raw data.
- **`rawToPublicKey(rawKey, algorithm): Promise<CryptoKey>`**: Imports a public key from raw data.
- **`saveKey(key, filePath, password?): Promise<void>`**: Saves a `CryptoKey` to a file.

---

## Usage Examples

Below are examples demonstrating how to use the functions provided by `@autonomys/auto-id`.

### 1. User Authentication

#### **Authenticate a User with Auto ID**

Verify a user's identity using their Auto ID, challenge message, and signature.

```typescript
import { authenticateAutoIdUser } from '@autonomys/auto-id';
import { activate } from '@autonomys/auto-utils';

(async () => {
  // Activate the network API
  const api = await activate({ networkId: 'mainnet' });

  // User's Auto ID
  const autoId = 'user-auto-id'; // Replace with the user's Auto ID

  // Challenge message that the user needs to sign
  const challengeMessage = 'Please sign this message to authenticate.';
  const challenge = new TextEncoder().encode(challengeMessage);

  // Assume the user provides the signature
  const signature = new Uint8Array([...]); // User's signature as Uint8Array

  // Authenticate the user
  const isAuthenticated = await authenticateAutoIdUser(api, autoId, challenge, signature);

  if (isAuthenticated) {
    console.log('User authenticated successfully.');
  } else {
    console.log('Authentication failed.');
  }

  // Disconnect when done
  await api.disconnect();
})();
```

**Parameters:**

- `api`: Connected API instance.
- `autoId`: User's Auto ID.
- `challenge`: The challenge message (`BufferSource`).
- `signature`: User's signature over the challenge (`BufferSource`).

**Returns:**

- `Promise<boolean>` indicating authentication success.

---

### 2. Certificate Management

#### **Self-Issuing a Certificate**

Generate a self-signed x509 certificate for an Auto ID.

```typescript
import { selfIssueCertificate } from '@autonomys/auto-id';
import { generateKeyPair } from '@autonomys/auto-utils';

(async () => {
  // Generate a key pair
  const keyPair = await generateKeyPair();

  // Subject name for the certificate
  const subjectName = 'CN=User Name'; // Replace with appropriate subject

  // Generate a self-signed certificate
  const certificate = await selfIssueCertificate(subjectName, keyPair);

  console.log('Certificate created:', certificate);

  // Optionally, save the certificate to a file or store it securely
})();
```

**Parameters:**

- `subjectName`: The subject name for the certificate (e.g., `'CN=User Name'`).
- `keyPair`: The key pair for the certificate.

**Returns:**

- `Promise<x509.X509Certificate>`.

#### **Issuing a Certificate**

Issue a certificate based on a Certificate Signing Request (CSR).

```typescript
import {
  createAndSignCSR,
  issueCertificate,
  selfIssueCertificate,
} from '@autonomys/auto-id';
import { generateKeyPair } from '@autonomys/auto-utils';

(async () => {
  // Generate key pairs for the subject and issuer
  const subjectKeyPair = await generateKeyPair();
  const issuerKeyPair = await generateKeyPair();

  // Subject and issuer names
  const subjectName = 'CN=Subject Name';
  const issuerName = 'CN=Issuer Name';

  // Create issuer's self-signed certificate
  const issuerCertificate = await selfIssueCertificate(issuerName, issuerKeyPair);

  // Create and sign CSR for the subject
  const csr = await createAndSignCSR(subjectName, subjectKeyPair);

  // Issue certificate for the subject using issuer's certificate and key pair
  const issuedCertificate = await issueCertificate(csr, {
    certificate: issuerCertificate,
    keyPair: issuerKeyPair,
  });

  console.log('Issued Certificate:', issuedCertificate);
})();
```

**Parameters for `issueCertificate`:**

- `csr`: The CSR from the subject.
- `issuerCertificateData`: Contains the issuer's certificate and key pair.
- `validityPeriodDays` (optional): Certificate validity period in days.

**Returns:**

- `Promise<x509.X509Certificate>`.

---

### 3. Key Management

#### **Generating and Saving a Key Pair**

Generate a cryptographic key pair and save it to files.

```typescript
import { generateKeyPair, saveKey } from '@autonomys/auto-id';

(async () => {
  // Generate a key pair
  const keyPair = await generateKeyPair();

  // Save the private key
  await saveKey(keyPair.privateKey, 'path/to/privateKey.pem', 'your-password');

  // Save the public key
  await saveKey(keyPair.publicKey, 'path/to/publicKey.pem');

  console.log('Keys saved successfully.');
})();
```

**Parameters:**

- `key`: The `CryptoKey` to save.
- `filePath`: The file path where the key will be saved.
- `password` (optional): Password for encrypting the private key.

---

### 4. Zero-Knowledge Proofs (ZKPs)

#### **Creating a ZKP Claim**

Generate a Zero-Knowledge Proof claim using the Reclaim protocol.

```typescript
import { ReclaimZKPClaim, buildReclaimRequest } from '@autonomys/auto-id';
import { Proof } from '@reclaimprotocol/js-sdk';

(async () => {
  // Application ID from Reclaim Protocol
  const appId = 'your-app-id'; // Replace with your actual app ID

  // Supported claim type (e.g., 'GoogleEmail')
  const claimType = 'GoogleEmail';

  // Build a Reclaim proof request
  const reclaimRequest = await buildReclaimRequest(appId, claimType);

  // Start the Reclaim session (this may involve user interaction)
  reclaimRequest.startSession({
    onSuccessCallback: async (proofs: Proof[]) => {
      // Handle the proofs
      const proof = proofs[0];

      // Create a ZKP claim
      const zkpClaim = new ReclaimZKPClaim('your-service-id', proof);

      // Verify the proof validity
      const isValid = await zkpClaim.verify();

      if (isValid) {
        console.log('ZKP Claim is valid:', zkpClaim);
      } else {
        console.log('ZKP Claim verification failed.');
      }
    },
    onFailureCallback: (error: Error) => {
      console.error('Reclaim session failed:', error);
    },
  });
})();
```

**Parameters:**

- `serviceId`: An identifier for your service.
- `proof`: The proof object obtained from the Reclaim protocol.

**Returns:**

- `Promise<void>`.

---

## Notes

- **Asynchronous Functions**: Many functions return promises and should be used with `await` to ensure proper execution flow.

- **API Disconnection**: Always disconnect the API instance after your operations are complete to free up resources.

- **Error Handling**: Wrap your asynchronous calls in `try...catch` blocks to handle potential errors gracefully.

- **Security Considerations**:

  - **Private Keys**: Handle private keys securely. Do not expose them in your code or logs.

  - **Password Protection**: When saving private keys, use password protection to encrypt the key files.

  - **Certificate Validity**: Ensure that certificates have appropriate validity periods and are renewed before expiration.

---