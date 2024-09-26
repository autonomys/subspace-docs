---
title: Auto ID
sidebar_position: 3
description: Functions to build on Auto ID domain
keywords:
    - Developers Documentation
    - DevDocs
    - SDK
    - Auto SDK
    - Auto ID
---

### Certificate Management

- `prettyPrintCertificate(cert: x509.X509Certificate): void`: Prints detailed information about a certificate to the console.
- `certificateToPem(cert: x509.X509Certificate): string`: Converts a certificate object to a PEM-formatted string.
- `pemToCertificate(pem: string): x509.X509Certificate`: Converts a PEM-formatted certificate string to a certificate object.
- `getSubjectCommonName(subject: x509.Name): string | undefined`: Retrieves the common name (CN) from a certificate subject.
- `getCertificateAutoId(certificate: x509.X509Certificate): string | undefined`: Extracts the AutoID from the certificate's Subject Alternative Name (SAN) extension.
- `createCSR(subjectName: string, keyPair: CryptoKeyPair): Promise<x509.Pkcs10CertificateRequest>`: Creates a Certificate Signing Request (CSR) with the given subject name and key pair.
- `signCSR(csr: x509.Pkcs10CertificateRequest, keyPair: CryptoKeyPair): Promise<x509.Pkcs10CertificateRequest>`: Signs a CSR using the provided private key.
- `createAndSignCSR(subjectName: string, keyPair: CryptoKeyPair): Promise<x509.Pkcs10CertificateRequest>`: Creates and signs a CSR in one step.
- `issueCertificate(csr: x509.Pkcs10CertificateRequest, issuerCertificateData: CertificateData, validityPeriodDays?: number): Promise<x509.X509Certificate>`: Issues a certificate based on a CSR, issuer's certificate data, and validity period.
- `selfIssueCertificate(subjectName: string, keyPair: CryptoKeyPair, validityPeriodDays?: number): Promise<x509.X509Certificate>`: Generates a self-signed certificate with the given subject name and key pair.
- `saveCertificate(certificate: x509.X509Certificate, filePath: string): Promise<void>`: Saves a certificate to a specified file in PEM format.

### Key Management

- `generateRsaKeyPair(keySize?: number): Promise<CryptoKeyPair>`: Generates an RSA key pair with the specified key size (default is 2048 bits).
- `generateEd25519KeyPair(): Promise<CryptoKeyPair>`: Generates an Ed25519 key pair for signing and verification.
- `cryptoKeyToPem(key: CryptoKey, password?: string): Promise<string>`: Converts a CryptoKey to a PEM-formatted string. If a password is provided and the key is private, it will be encrypted.
- `cryptoKeyPairFromPrivateKey(privateKey: CryptoKey, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams, password?: string): Promise<CryptoKeyPair>`: Generates a key pair from a given private key.
- `saveKey(key: CryptoKey, filePath: string, password?: string): Promise<void>`: Saves a CryptoKey to a file in PEM format. If a password is provided, the private key will be encrypted.
- `pemToPrivateKey(pemData: string, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams, password?: string): Promise<CryptoKey>`: Converts a PEM-formatted private key string to a CryptoKey. Supports encrypted keys with a password.
- `rawToPrivateKey(arrayBuffer: Uint8Array, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams): Promise<CryptoKey>`: Imports a private key from raw binary data into a CryptoKey.
- `pemToPublicKey(pemData: string, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams): Promise<CryptoKey>`: Converts a PEM-formatted public key string to a CryptoKey.
- `rawToPublicKey(rawKey: Uint8Array, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams): Promise<CryptoKey>`: Imports a public key from raw binary data into a CryptoKey.
- `loadPrivateKey(filePath: string, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams, password?: string): Promise<CryptoKey>`: Loads a private key from a file and converts it to a CryptoKey. Supports encrypted keys with a password.
- `loadPublicKey(filePath: string, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams): Promise<CryptoKey>`: Loads a public key from a file and converts it to a CryptoKey.
- `keyToHex(key: CryptoKey): Promise<string>`: Converts a CryptoKey to a hexadecimal string representation.
- `doPublicKeysMatch(publicKey1: CryptoKey, publicKey2: CryptoKey): Promise<boolean>`: Compares two public keys to determine if they are identical.

### AutoID Functions

- `validateCertificatePublicKey(certPublicKey: x509.PublicKey, derivedPublicKey: CryptoKey): Promise<boolean>`: Validates whether a derived public key matches the public key in a certificate.
- `pemToHex(pem: string): string`: Converts a PEM-formatted key to a hexadecimal string.
- `pemToCryptoKeyForSigning(pem: string, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams): Promise<CryptoKey>`: Converts a PEM key to a CryptoKey suitable for signing operations.
- `decryptPem(pem: string, password: string): string`: Decrypts an encrypted PEM-formatted key using the provided password.
- `derEncodeSignatureAlgorithmOID(oid: string, parameters?: ArrayBuffer | null): Uint8Array`: DER-encodes a signature algorithm OID with optional parameters.
- `addDaysToCurrentDate(days: number): Date`: Returns a new Date object representing the current date plus a specified number of days.
- `AutoIdError`: Enum representing possible AutoID errors, such as `UnknownIssuer`, `InvalidCertificate`, etc.
- `mapErrorCodeToEnum(errorCode: string): AutoIdError | null`: Maps an error code to the corresponding `AutoIdError` enum value.
- `identifierFromX509Cert(issuerId: string | null | undefined, certificate: x509.X509Certificate): string`: Generates an AutoID identifier from an X509 certificate and optional issuer ID.
- `checkCertificateAndRevocationList(api: ApiPromise, autoIdIdentifier: string, getCertificate: (id: string) => Promise<AutoIdX509Certificate | undefined>): Promise<AutoIdX509Certificate>`: Checks if a certificate exists and is not revoked.
- `hexStringToU8a(hexString: string): Uint8Array`: Converts a hexadecimal string to a `Uint8Array`.
- `getCertificate(api: ApiPromise, autoIdIdentifier: string): Promise<AutoIdX509Certificate | undefined>`: Retrieves a certificate from the blockchain given an AutoID identifier.
- `getCertificateSubjectPublicKey(api: ApiPromise, autoIdIdentifier: string): Promise<CryptoKey>`: Retrieves the subject's public key from a certificate stored on the blockchain.
- `getCertificateRevocationList(api: ApiPromise, autoIdIdentifier: string): Promise<string[]>`: Retrieves the certificate revocation list for a given AutoID identifier.
- `convertX509CertToDerEncodedComponents(certificate: x509.X509Certificate): [Uint8Array, Uint8Array]`: Converts an X509 certificate to DER-encoded OID and TBS (To Be Signed) certificate components.
- `registerAutoId(api: ApiPromise, certificate: x509.X509Certificate, issuerId?: string): SubmittableExtrinsic`: Creates a transaction to register an AutoID on the blockchain.
- `revokeCertificate(api: ApiPromise, autoIdIdentifier: string, signature: Signature): Promise<SubmittableExtrinsic>`: Creates a transaction to revoke a certificate on the blockchain.
- `deactivateAutoId(api: ApiPromise, autoIdIdentifier: string, signature: Signature): Promise<SubmittableExtrinsic>`: Creates a transaction to deactivate an AutoID.
- `renewAutoId(api: ApiPromise, autoIdIdentifier: string, newCertificate: x509.X509Certificate): Promise<SubmittableExtrinsic>`: Creates a transaction to renew an AutoID with a new certificate.
- `authenticateAutoIdUser(api: ApiPromise, autoId: string, challenge: BufferSource, signature: BufferSource): Promise<boolean>`: Authenticates an AutoID user by verifying a signature over a challenge.

---

**Note:** All functions that return a `Promise<T>` should be awaited to retrieve the desired data. Functions returning a `SubmittableExtrinsic` can be signed and submitted to the blockchain.