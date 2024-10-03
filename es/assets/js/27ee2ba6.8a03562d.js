"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[7821],{1340:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(4848),n=t(8453);const s={title:"Auto ID",sidebar_position:3,description:"Functions to build on Auto ID domain",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto ID"]},a=void 0,o={id:"develop/auto_sdk/auto-id",title:"Auto ID",description:"Functions to build on Auto ID domain",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/develop/auto_sdk/auto-id.md",sourceDirName:"develop/auto_sdk",slug:"/develop/auto_sdk/auto-id",permalink:"/es/docs/develop/auto_sdk/auto-id",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/auto_sdk/auto-id.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Auto ID",sidebar_position:3,description:"Functions to build on Auto ID domain",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto ID"]},sidebar:"tutorialSidebar",previous:{title:"Auto Consensus",permalink:"/es/docs/develop/auto_sdk/auto-consensus"},next:{title:"Auto XDM",permalink:"/es/docs/develop/auto_sdk/auto-xdm"}},c={},d=[{value:"Available Functions",id:"available-functions",level:2},{value:"Auto ID Functions",id:"auto-id-functions",level:3},{value:"Certificate Management",id:"certificate-management",level:3},{value:"Key Management",id:"key-management",level:3}];function l(e){const i={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"available-functions",children:"Available Functions"}),"\n",(0,r.jsx)(i.h3,{id:"auto-id-functions",children:"Auto ID Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"addDaysToCurrentDate(days: number): Date"}),": Returns a new Date object representing the current date plus a specified number of days."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"authenticateAutoIdUser(api: ApiPromise, autoId: string, challenge: BufferSource, signature: BufferSource): Promise<boolean>"}),": Authenticates an AutoID user by verifying a signature over a challenge."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"AutoIdError"}),": Enum representing possible AutoID errors, such as ",(0,r.jsx)(i.code,{children:"UnknownIssuer"}),", ",(0,r.jsx)(i.code,{children:"InvalidCertificate"}),", etc."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"checkCertificateAndRevocationList(api: ApiPromise, autoIdIdentifier: string, getCertificate: (id: string) => Promise<AutoIdX509Certificate | undefined>): Promise<AutoIdX509Certificate>"}),": Checks if a certificate exists and is not revoked."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"convertX509CertToDerEncodedComponents(certificate: x509.X509Certificate): [Uint8Array, Uint8Array]"}),": Converts an X509 certificate to DER-encoded OID and TBS (To Be Signed) certificate components."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"decryptPem(pem: string, password: string): string"}),": Decrypts an encrypted PEM-formatted key using the provided password."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"deactivateAutoId(api: ApiPromise, autoIdIdentifier: string, signature: Signature): Promise<SubmittableExtrinsic>"}),": Creates a transaction to deactivate an AutoID."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"derEncodeSignatureAlgorithmOID(oid: string, parameters?: ArrayBuffer | null): Uint8Array"}),": DER-encodes a signature algorithm OID with optional parameters."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"getCertificate(api: ApiPromise, autoIdIdentifier: string): Promise<AutoIdX509Certificate | undefined>"}),": Retrieves a certificate from the blockchain given an AutoID identifier."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"getCertificateRevocationList(api: ApiPromise, autoIdIdentifier: string): Promise<string[]>"}),": Retrieves the certificate revocation list for a given AutoID identifier."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"getCertificateSubjectPublicKey(api: ApiPromise, autoIdIdentifier: string): Promise<CryptoKey>"}),": Retrieves the subject's public key from a certificate stored on the blockchain."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"hexStringToU8a(hexString: string): Uint8Array"}),": Converts a hexadecimal string to a ",(0,r.jsx)(i.code,{children:"Uint8Array"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"identifierFromX509Cert(issuerId: string | null | undefined, certificate: x509.X509Certificate): string"}),": Generates an AutoID identifier from an X509 certificate and optional issuer ID."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"mapErrorCodeToEnum(errorCode: string): AutoIdError | null"}),": Maps an error code to the corresponding ",(0,r.jsx)(i.code,{children:"AutoIdError"})," enum value."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"pemToCryptoKeyForSigning(pem: string, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams): Promise<CryptoKey>"}),": Converts a PEM key to a CryptoKey suitable for signing operations."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"pemToHex(pem: string): string"}),": Converts a PEM-formatted key to a hexadecimal string."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"registerAutoId(api: ApiPromise, certificate: x509.X509Certificate, issuerId?: string): SubmittableExtrinsic"}),": Creates a transaction to register an AutoID on the blockchain."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"renewAutoId(api: ApiPromise, autoIdIdentifier: string, newCertificate: x509.X509Certificate): Promise<SubmittableExtrinsic>"}),": Creates a transaction to renew an AutoID with a new certificate."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"revokeCertificate(api: ApiPromise, autoIdIdentifier: string, signature: Signature): Promise<SubmittableExtrinsic>"}),": Creates a transaction to revoke a certificate on the blockchain."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"validateCertificatePublicKey(certPublicKey: x509.PublicKey, derivedPublicKey: CryptoKey): Promise<boolean>"}),": Validates whether a derived public key matches the public key in a certificate."]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"certificate-management",children:"Certificate Management"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"certificateToPem(cert: x509.X509Certificate): string"}),": Converts a certificate object to a PEM-formatted string."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"createAndSignCSR(subjectName: string, keyPair: CryptoKeyPair): Promise<x509.Pkcs10CertificateRequest>"}),": Creates and signs a CSR in one step."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"createCSR(subjectName: string, keyPair: CryptoKeyPair): Promise<x509.Pkcs10CertificateRequest>"}),": Creates a Certificate Signing Request (CSR) with the given subject name and key pair."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"getCertificateAutoId(certificate: x509.X509Certificate): string | undefined"}),": Extracts the AutoID from the certificate's Subject Alternative Name (SAN) extension."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"getSubjectCommonName(subject: x509.Name): string | undefined"}),": Retrieves the common name (CN) from a certificate subject."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"issueCertificate(csr: x509.Pkcs10CertificateRequest, issuerCertificateData: CertificateData, validityPeriodDays?: number): Promise<x509.X509Certificate>"}),": Issues a certificate based on a CSR, issuer's certificate data, and validity period."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"pemToCertificate(pem: string): x509.X509Certificate"}),": Converts a PEM-formatted certificate string to a certificate object."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"prettyPrintCertificate(cert: x509.X509Certificate): void"}),": Prints detailed information about a certificate to the console."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"saveCertificate(certificate: x509.X509Certificate, filePath: string): Promise<void>"}),": Saves a certificate to a specified file in PEM format."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"selfIssueCertificate(subjectName: string, keyPair: CryptoKeyPair, validityPeriodDays?: number): Promise<x509.X509Certificate>"}),": Generates a self-signed certificate with the given subject name and key pair."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"signCSR(csr: x509.Pkcs10CertificateRequest, keyPair: CryptoKeyPair): Promise<x509.Pkcs10CertificateRequest>"}),": Signs a CSR using the provided private key."]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"key-management",children:"Key Management"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"cryptoKeyPairFromPrivateKey(privateKey: CryptoKey, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams, password?: string): Promise<CryptoKeyPair>"}),": Generates a key pair from a given private key."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"cryptoKeyToPem(key: CryptoKey, password?: string): Promise<string>"}),": Converts a CryptoKey to a PEM-formatted string. If a password is provided and the key is private, it will be encrypted."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"doPublicKeysMatch(publicKey1: CryptoKey, publicKey2: CryptoKey): Promise<boolean>"}),": Compares two public keys to determine if they are identical."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"generateEd25519KeyPair(): Promise<CryptoKeyPair>"}),": Generates an Ed25519 key pair for signing and verification."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"generateRsaKeyPair(keySize?: number): Promise<CryptoKeyPair>"}),": Generates an RSA key pair with the specified key size (default is 2048 bits)."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"keyToHex(key: CryptoKey): Promise<string>"}),": Converts a CryptoKey to a hexadecimal string representation."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"loadPrivateKey(filePath: string, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams, password?: string): Promise<CryptoKey>"}),": Loads a private key from a file and converts it to a CryptoKey. Supports encrypted keys with a password."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"loadPublicKey(filePath: string, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams): Promise<CryptoKey>"}),": Loads a public key from a file and converts it to a CryptoKey."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"pemToPrivateKey(pemData: string, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams, password?: string): Promise<CryptoKey>"}),": Converts a PEM-formatted private key string to a CryptoKey. Supports encrypted keys with a password."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"pemToPublicKey(pemData: string, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams): Promise<CryptoKey>"}),": Converts a PEM-formatted public key string to a CryptoKey."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"rawToPrivateKey(arrayBuffer: Uint8Array, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams): Promise<CryptoKey>"}),": Imports a private key from raw binary data into a CryptoKey."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"rawToPublicKey(rawKey: Uint8Array, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams): Promise<CryptoKey>"}),": Imports a public key from raw binary data into a CryptoKey."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"saveKey(key: CryptoKey, filePath: string, password?: string): Promise<void>"}),": Saves a CryptoKey to a file in PEM format. If a password is provided, the private key will be encrypted."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsxs)(i.p,{children:["All functions that return a ",(0,r.jsx)(i.code,{children:"Promise<T>"})," should be awaited to retrieve the desired data. Functions returning a ",(0,r.jsx)(i.code,{children:"SubmittableExtrinsic"})," can be signed and submitted to the blockchain."]})})]})}function u(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>o});var r=t(6540);const n={},s=r.createContext(n);function a(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);