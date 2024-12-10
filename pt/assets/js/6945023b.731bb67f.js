"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4428],{30117:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var o=a(74848),i=a(28453);const t={title:"Drive",sidebar_position:6,description:"Utilities for creating and managing IPLD DAGs",slug:"/develop/auto-sdk/drive",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto Drive"]},r=void 0,d={id:"develop/auto_sdk/auto-drive",title:"Drive",description:"Utilities for creating and managing IPLD DAGs",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/develop/auto_sdk/auto-drive.md",sourceDirName:"develop/auto_sdk",slug:"/develop/auto-sdk/drive",permalink:"/pt/develop/auto-sdk/drive",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/auto_sdk/auto-drive.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Drive",sidebar_position:6,description:"Utilities for creating and managing IPLD DAGs",slug:"/develop/auto-sdk/drive",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto Drive"]},sidebar:"tutorialSidebar",previous:{title:"Utils",permalink:"/pt/develop/auto-sdk/utils"},next:{title:"\u264a Auto EVM",permalink:"/pt/develop/auto-evm"}},s={},l=[{value:"Auto-Drive Package Documentation",id:"auto-drive-package-documentation",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Features",id:"features",level:3},{value:"Installation",id:"installation",level:3},{value:"Importing the Package",id:"importing-the-package",level:3},{value:"Available Functions",id:"available-functions",level:2},{value:"File and Folder DAG Creation",id:"file-and-folder-dag-creation",level:3},{value:"CID Utilities",id:"cid-utilities",level:3},{value:"Node Encoding and Decoding",id:"node-encoding-and-decoding",level:3},{value:"Metadata Handling",id:"metadata-handling",level:3},{value:"Upload and Download Operations",id:"upload-and-download-operations",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"1. Creating an IPLD DAG from a File",id:"1-creating-an-ipld-dag-from-a-file",level:3},{value:"2. Creating an IPLD DAG from a Folder",id:"2-creating-an-ipld-dag-from-a-folder",level:3},{value:"3. Working with CIDs",id:"3-working-with-cids",level:3},{value:"4. Encoding and Decoding Nodes",id:"4-encoding-and-decoding-nodes",level:3},{value:"5. Handling Metadata",id:"5-handling-metadata",level:3},{value:"6. Example: Creating a File DAG and Converting to CID",id:"6-example-creating-a-file-dag-and-converting-to-cid",level:3},{value:"7. Example: Converting Metadata to DAG",id:"7-example-converting-metadata-to-dag",level:3},{value:"8. Uploading a File from Filepath",id:"8-uploading-a-file-from-filepath",level:3},{value:"9. Uploading a File with Custom Interface",id:"9-uploading-a-file-with-custom-interface",level:3},{value:"10. Uploading a Folder",id:"10-uploading-a-folder",level:3},{value:"11. Tracking Upload Progress",id:"11-tracking-upload-progress",level:3},{value:"12. Downloading a File",id:"12-downloading-a-file",level:3},{value:"Notes",id:"notes",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"auto-drive-package-documentation",children:"Auto-Drive Package Documentation"}),"\n",(0,o.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"@autonomys/auto-drive"})," package provides utilities for creating and managing IPLD DAGs (InterPlanetary Linked Data Directed Acyclic Graphs) for files and folders. It facilitates chunking large files, handling metadata, and creating folder structures suitable for distributed storage systems like IPFS."]}),"\n",(0,o.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"File Chunking and DAG Creation"}),": Efficiently split large files into smaller chunks and create IPLD DAGs."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Folder Structure Creation"}),": Generate IPLD DAGs for directory structures."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Metadata Handling"}),": Add and manage metadata for files and folders."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"CID Management"}),": Utilities for working with Content Identifiers (CIDs)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"TypeScript Support"}),": Fully typed for enhanced developer experience."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"Install the package via npm or yarn:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Using npm\nnpm install @autonomys/auto-drive\n\n# Using yarn\nyarn add @autonomys/auto-drive\n"})}),"\n",(0,o.jsx)(n.h3,{id:"importing-the-package",children:"Importing the Package"}),"\n",(0,o.jsxs)(n.p,{children:["Before using the functions provided by the ",(0,o.jsx)(n.code,{children:"auto-drive"})," package, you need to import them into your project:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"// Import specific functions\nimport { createFileIPLDDag, createFolderIPLDDag } from '@autonomys/auto-drive';\n\n// Or import everything\nimport * as drive from '@autonomys/auto-drive';\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"available-functions",children:"Available Functions"}),"\n",(0,o.jsx)(n.h3,{id:"file-and-folder-dag-creation",children:"File and Folder DAG Creation"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"createFileIPLDDag(fileBuffer, fileName): IPLDDag"})}),": Creates an IPLD DAG for a file from its buffer and name."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"createFolderIPLDDag(childCIDs, folderName, folderSize): IPLDDag"})}),": Creates an IPLD DAG for a folder with given child CIDs, name, and size."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"cid-utilities",children:"CID Utilities"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"cidOfNode(node): CID"})}),": Generates a CID from an IPLD node."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"cidToString(cid): string"})}),": Converts a CID to its string representation."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"stringToCid(cidString): CID"})}),": Parses a CID string back into a CID object."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"node-encoding-and-decoding",children:"Node Encoding and Decoding"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"encodeNode(node): Uint8Array"})}),": Encodes an IPLD node into a byte array."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"decodeNode(encodedNode): any"})}),": Decodes a byte array back into an IPLD node."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"metadata-handling",children:"Metadata Handling"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"createMetadataNode(metadata): any"})}),": Creates a metadata node for an IPLD DAG."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"createMetadataIPLDDag(metadata): IPLDDag"})}),": Creates an IPLD DAG for metadata."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"upload-and-download-operations",children:"Upload and Download Operations"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"uploadFile(api, file, options): PromisedObservable<UploadFileStatus>"})}),": Uploads a file with optional encryption and compression."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"uploadFileFromFilepath(api, filepath, options): PromisedObservable<UploadFileStatus>"})}),": Uploads a file from a filesystem path."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"uploadFolderFromFolderPath(api, folderPath, options): PromisedObservable<UploadFolderStatus>"})}),": Uploads a folder from a filesystem path."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"downloadObject(api, params): AsyncIterable<Buffer>"})}),": Downloads an object by its CID."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Note:"})," All asynchronous functions return a ",(0,o.jsx)(n.code,{children:"Promise"})," and should be used with ",(0,o.jsx)(n.code,{children:"await"})," for proper execution flow."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,o.jsx)(n.h3,{id:"1-creating-an-ipld-dag-from-a-file",children:"1. Creating an IPLD DAG from a File"}),"\n",(0,o.jsx)(n.p,{children:"Create an IPLD DAG for a file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { createFileIPLDDag } from '@autonomys/auto-drive';\nimport fs from 'fs';\n\nconst fileBuffer = fs.readFileSync('path/to/your/file.txt');\n\nconst dag = createFileIPLDDag(fileBuffer, 'file.txt');\n\nconsole.log('File DAG created:', dag);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2-creating-an-ipld-dag-from-a-folder",children:"2. Creating an IPLD DAG from a Folder"}),"\n",(0,o.jsx)(n.p,{children:"Create an IPLD DAG for a folder:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { createFolderIPLDDag } from '@autonomys/auto-drive';\nimport { CID } from 'multiformats';\n\n// Example child CIDs and folder information\nconst childCIDs: CID[] = [\n  /* array of CIDs */\n];\nconst folderName = 'my-folder';\nconst folderSize = 1024; // size in bytes\n\nconst folderDag = createFolderIPLDDag(childCIDs, folderName, folderSize);\n\nconsole.log('Folder DAG created:', folderDag);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"3-working-with-cids",children:"3. Working with CIDs"}),"\n",(0,o.jsx)(n.p,{children:"Generate and manipulate CIDs:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { cidOfNode, cidToString, stringToCid } from '@autonomys/auto-drive';\n\n// Assuming you have an IPLD node\nconst node = { /* IPLD node data */ };\n\n// Create a CID from a node\nconst cid = cidOfNode(node);\n\n// Convert the CID to a string\nconst cidString = cidToString(cid);\nconsole.log('CID as string:', cidString);\n\n// Parse a string back into a CID\nconst parsedCID = stringToCid(cidString);\nconsole.log('Parsed CID:', parsedCID);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"4-encoding-and-decoding-nodes",children:"4. Encoding and Decoding Nodes"}),"\n",(0,o.jsx)(n.p,{children:"Encode and decode IPLD nodes:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { encodeNode, decodeNode } from '@autonomys/auto-drive';\n\n// Assume you have an IPLD node\nconst node = { /* IPLD node data */ };\n\n// Encode a node\nconst encodedNode = encodeNode(node);\n\n// Decode a node\nconst decodedNode = decodeNode(encodedNode);\n\nconsole.log('Decoded node:', decodedNode);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"5-handling-metadata",children:"5. Handling Metadata"}),"\n",(0,o.jsx)(n.p,{children:"Add metadata to a node:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { createMetadataNode } from '@autonomys/auto-drive';\n\nconst metadata = {\n  name: 'My File',\n  description: 'This is a sample file',\n  // ... other metadata fields\n};\n\nconst metadataNode = createMetadataNode(metadata);\n\nconsole.log('Metadata node created:', metadataNode);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"6-example-creating-a-file-dag-and-converting-to-cid",children:"6. Example: Creating a File DAG and Converting to CID"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { createFileIPLDDag, cidOfNode, cidToString } from '@autonomys/auto-drive';\nimport fs from 'fs';\n\nconst fileBuffer = fs.readFileSync('path/to/your/file.txt');\n\nconst dag = createFileIPLDDag(fileBuffer, 'file.txt');\n\n// Generate CID from the DAG\nconst cid = cidOfNode(dag.head);\n\n// Convert CID to string\nconst cidString = cidToString(cid);\n\nconsole.log(`CID of the file DAG: ${cidString}`);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"7-example-converting-metadata-to-dag",children:"7. Example: Converting Metadata to DAG"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import {\n  createMetadataIPLDDag,\n  cidOfNode,\n  cidToString,\n  type OffchainMetadata,\n} from '@autonomys/auto-drive';\nimport fs from 'fs';\n\nconst metadataContent = fs.readFileSync('path/to/your/metadata.json', 'utf-8');\nconst metadata: OffchainMetadata = JSON.parse(metadataContent);\n\nconst dag = createMetadataIPLDDag(metadata);\n\nconst cid = cidOfNode(dag.head);\nconst cidString = cidToString(cid);\n\nconsole.log(`CID of the metadata DAG: ${cidString}`);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"8-uploading-a-file-from-filepath",children:"8. Uploading a File from Filepath"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { uploadFileFromFilepath, createAutoDriveApi } from '@autonomys/auto-drive';\n\nconst api = createAutoDriveApi({ apiKey: 'your-api-key' });\nconst filePath = 'path/to/your/file.txt';\nconst options = {\n  password: 'your-encryption-password', // Optional\n  compression: true,\n};\n\nconst uploadObservable = uploadFileFromFilepath(api, filePath, options)\n  .then(() => {\n    console.log('File uploaded successfully!');\n  })\n  .catch((error) => {\n    console.error('Error uploading file:', error);\n  });\n"})}),"\n",(0,o.jsx)(n.h3,{id:"9-uploading-a-file-with-custom-interface",children:"9. Uploading a File with Custom Interface"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { uploadFile, createAutoDriveApi } from '@autonomys/auto-drive';\n\nconst api = createAutoDriveApi({ apiKey: 'your-api-key' });\nconst buffer = Buffer.from(/* ... */);\nconst genericFile = {\n  read: async function *() {\n    yield buffer;\n  },\n  name: \"autonomys-whitepaper.pdf\",\n  mimeType: \"application/pdf\",\n  size: 1234556,\n  path: \"autonomys-whitepaper.pdf\"\n};\n\nconst options = {\n  password: 'your-encryption-password',\n  compression: true,\n};\n\nconst uploadObservable = uploadFile(api, genericFile, options)\n  .then(() => {\n    console.log('File uploaded successfully!');\n  })\n  .catch((error) => {\n    console.error('Error uploading file:', error);\n  });\n"})}),"\n",(0,o.jsx)(n.h3,{id:"10-uploading-a-folder",children:"10. Uploading a Folder"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { uploadFolderFromFolderPath, createAutoDriveApi } from '@autonomys/auto-drive';\n\nconst api = createAutoDriveApi({ apiKey: 'your-api-key' });\nconst folderPath = 'path/to/your/folder';\n\nconst options = {\n  uploadChunkSize: 1024 * 1024,\n  password: 'your-encryption-password',\n};\n\nconst uploadObservable = uploadFolderFromFolderPath(api, folderPath, options);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"11-tracking-upload-progress",children:"11. Tracking Upload Progress"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { useState, useEffect } from 'react';\nimport { uploadFile, createAutoDriveApi } from '@autonomys/auto-drive';\n\nconst UploadComponent = () => {\n  const [progress, setProgress] = useState<number>(0);\n\n  useEffect(() => {\n    const uploadFile = async () => {\n      const api = createAutoDriveApi({ apiKey: 'your-api-key' });\n      const finalStatus = await uploadFile(api, genericFile, options).forEach((status) => {\n        setProgress(status.progress);\n      });\n    };\n    uploadFile();\n  }, []);\n\n  return <div>Upload Progress: {progress}%</div>;\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"12-downloading-a-file",children:"12. Downloading a File"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { downloadObject, createAutoDriveApi } from '@autonomys/auto-drive';\nimport fs from 'fs';\n\nconst api = createAutoDriveApi({ apiKey: 'your-api-key' });\n\ntry {\n  const stream = fs.createWriteStream('/path/to/file');\n  const asyncBuffer = await downloadObject(api, { cid: 'your-cid' });\n  for await (const buffer of asyncBuffer) {\n    stream.write(buffer);\n  }\n} catch (error) {\n  console.error('Error downloading file:', error);\n}\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Asynchronous Functions"}),": Use ",(0,o.jsx)(n.code,{children:"await"})," with all promises for proper execution flow."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Error Handling"}),": Wrap asynchronous calls in ",(0,o.jsx)(n.code,{children:"try...catch"})," blocks to handle potential errors gracefully."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"File System Operations"}),": Ensure that file paths are correct and accessible when reading from or writing to the file system."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>d});var o=a(96540);const i={},t=o.createContext(i);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);