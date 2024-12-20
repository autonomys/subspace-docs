"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6182],{54090:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var o=i(74848),a=i(28453);const r={title:"Auto Drive",sidebar_position:3,description:"Utilities for creating and managing IPLD DAGs",slug:"/develop/auto-sdk/drive",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto Drive"]},t=void 0,d={id:"develop/auto_sdk/auto-drive",title:"Auto Drive",description:"Utilities for creating and managing IPLD DAGs",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/develop/auto_sdk/auto-drive.mdx",sourceDirName:"develop/auto_sdk",slug:"/develop/auto-sdk/drive",permalink:"/id/develop/auto-sdk/drive",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/auto_sdk/auto-drive.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Auto Drive",sidebar_position:3,description:"Utilities for creating and managing IPLD DAGs",slug:"/develop/auto-sdk/drive",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto Drive"]},sidebar:"tutorialSidebar",previous:{title:"Auto Consensus",permalink:"/id/develop/auto-sdk/consensus"},next:{title:"Auto Utils",permalink:"/id/develop/auto-sdk/utils"}},s={},l=[{value:"Auto-Drive Package Documentation",id:"auto-drive-package-documentation",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Features",id:"features",level:3},{value:"Auto Drive Dashboard",id:"auto-drive-dashboard",level:2},{value:"Getting an API Key",id:"getting-an-api-key",level:3},{value:"Sharing Files",id:"sharing-files",level:3},{value:"Installation",id:"installation",level:3},{value:"Importing the Package",id:"importing-the-package",level:3},{value:"Available Functions",id:"available-functions",level:2},{value:"File and Folder DAG Creation",id:"file-and-folder-dag-creation",level:3},{value:"CID Utilities",id:"cid-utilities",level:3},{value:"Node Encoding and Decoding",id:"node-encoding-and-decoding",level:3},{value:"Metadata Handling",id:"metadata-handling",level:3},{value:"Upload and Download Operations",id:"upload-and-download-operations",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"1. Uploading a File",id:"1-uploading-a-file",level:3},{value:"2. Creating an IPLD DAG from a Folder",id:"2-creating-an-ipld-dag-from-a-folder",level:3},{value:"3. Working with CIDs",id:"3-working-with-cids",level:3},{value:"4. Encoding and Decoding Nodes",id:"4-encoding-and-decoding-nodes",level:3},{value:"5. Handling Metadata",id:"5-handling-metadata",level:3},{value:"6. Example: Creating a File DAG and Converting to CID",id:"6-example-creating-a-file-dag-and-converting-to-cid",level:3},{value:"7. Example: Converting Metadata to DAG",id:"7-example-converting-metadata-to-dag",level:3},{value:"8. Uploading a File from Filepath",id:"8-uploading-a-file-from-filepath",level:3},{value:"9. Uploading a File with Custom Interface",id:"9-uploading-a-file-with-custom-interface",level:3},{value:"10. Uploading a Folder",id:"10-uploading-a-folder",level:3},{value:"11. Tracking Upload Progress",id:"11-tracking-upload-progress",level:3},{value:"12. Downloading a File",id:"12-downloading-a-file",level:3},{value:"Notes",id:"notes",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"auto-drive-package-documentation",children:"Auto-Drive Package Documentation"}),"\n",(0,o.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"@autonomys/auto-drive"})," package provides utilities for creating and managing IPLD DAGs (InterPlanetary Linked Data Directed Acyclic Graphs) for files and folders. It facilitates chunking large files, handling metadata, and creating folder structures suitable for distributed storage systems like IPFS."]}),"\n",(0,o.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"File Chunking and DAG Creation"}),": Efficiently split large files into smaller chunks and create IPLD DAGs."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Folder Structure Creation"}),": Generate IPLD DAGs for directory structures."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Metadata Handling"}),": Add and manage metadata for files and folders."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"CID Management"}),": Utilities for working with Content Identifiers (CIDs)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"TypeScript Support"}),": Fully typed for enhanced developer experience."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"auto-drive-dashboard",children:"Auto Drive Dashboard"}),"\n",(0,o.jsx)(n.p,{children:"Logging in to Auto Drive will allow you to view your upload and download limits, access files uploaded by other users, and manage and share your submissions."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Log in to ",(0,o.jsx)(n.a,{href:"https://auto-drive-demo.netlify.app/",children:"Auto Drive"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Sign in via Google or Discord"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Auto-Drive-1",src:i(55349).A+"",width:"481",height:"328"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"On the landing page (dashboard) you will see:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Your upload limit (currently ",(0,o.jsx)(n.strong,{children:"100MB"})," per month)"]}),"\n",(0,o.jsxs)(n.li,{children:["Your download limit (currently ",(0,o.jsx)(n.strong,{children:"5GB"})," per month)"]}),"\n",(0,o.jsxs)(n.li,{children:["A list of ",(0,o.jsx)(n.strong,{children:"uploaded files"})," and their ",(0,o.jsx)(n.strong,{children:"CIDs"})]}),"\n",(0,o.jsxs)(n.li,{children:["Options to ",(0,o.jsx)(n.strong,{children:"Download"}),", ",(0,o.jsx)(n.strong,{children:"Share"}),", or ",(0,o.jsx)(n.strong,{children:"Remove"})," each file"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Auto-Drive-2",src:i(18622).A+"",width:"1511",height:"779"})}),"\n",(0,o.jsx)(n.admonition,{title:"NOTE",type:"tip",children:(0,o.jsx)(n.p,{children:"Removing a file does not delete it from the DSN, as it is permanent storage. It only removes the file from your dashboard."})}),"\n",(0,o.jsx)(n.p,{children:"You can use the in-browser environment to upload, download, or share files, or you can use the SDK functions (described later on this page) to upload files or folders via the CLI."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Auto-Drive-3",src:i(10759).A+"",width:"1236",height:"224"})}),"\n",(0,o.jsx)(n.h3,{id:"getting-an-api-key",children:"Getting an API Key"}),"\n",(0,o.jsxs)(n.p,{children:["Click on ",(0,o.jsx)(n.code,{children:"Profile"})," to create your ",(0,o.jsx)(n.code,{children:"API"})," key. You can then use this API key in the CLI to upload files or folders."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Auto-Drive-4",src:i(31144).A+"",width:"2297",height:"539"})}),"\n",(0,o.jsx)(n.h3,{id:"sharing-files",children:"Sharing Files"}),"\n",(0,o.jsxs)(n.p,{children:["To share a file, click the ",(0,o.jsx)(n.code,{children:"Share"})," button next to the file. You can share it using a link, or by providing the user\u2019s public ID. Each user\u2019s public ID is visible on their ",(0,o.jsx)(n.code,{children:"Profile"})," page."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Auto-Drive-5",src:i(63185).A+"",width:"2283",height:"769"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"Install the package via npm or yarn:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Using npm\nnpm install @autonomys/auto-drive\n\n# Using yarn\nyarn add @autonomys/auto-drive\n"})}),"\n",(0,o.jsx)(n.h3,{id:"importing-the-package",children:"Importing the Package"}),"\n",(0,o.jsxs)(n.p,{children:["Before using the functions provided by the ",(0,o.jsx)(n.code,{children:"auto-drive"})," package, you need to import them into your project:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"// Import specific functions\nimport { createFileIPLDDag, createFolderIPLDDag } from '@autonomys/auto-drive';\n\n// Or import everything\nimport * as drive from '@autonomys/auto-drive';\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"available-functions",children:"Available Functions"}),"\n",(0,o.jsx)(n.h3,{id:"file-and-folder-dag-creation",children:"File and Folder DAG Creation"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"createFileIPLDDag(fileBuffer, fileName): IPLDDag"})}),": Creates an IPLD DAG for a file from its buffer and name."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"createFolderIPLDDag(childCIDs, folderName, folderSize): IPLDDag"})}),": Creates an IPLD DAG for a folder with given child CIDs, name, and size."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"cid-utilities",children:"CID Utilities"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"cidOfNode(node): CID"})}),": Generates a CID from an IPLD node."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"cidToString(cid): string"})}),": Converts a CID to its string representation."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"stringToCid(cidString): CID"})}),": Parses a CID string back into a CID object."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"node-encoding-and-decoding",children:"Node Encoding and Decoding"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"encodeNode(node): Uint8Array"})}),": Encodes an IPLD node into a byte array."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"decodeNode(encodedNode): any"})}),": Decodes a byte array back into an IPLD node."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"metadata-handling",children:"Metadata Handling"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"createMetadataNode(metadata): any"})}),": Creates a metadata node for an IPLD DAG."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"createMetadataIPLDDag(metadata): IPLDDag"})}),": Creates an IPLD DAG for metadata."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"upload-and-download-operations",children:"Upload and Download Operations"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"uploadFile(api, file, options): PromisedObservable<UploadFileStatus>"})}),": Uploads a file with optional encryption and compression."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"uploadFileFromFilepath(api, filepath, options): PromisedObservable<UploadFileStatus>"})}),": Uploads a file from a filesystem path."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"uploadFolderFromFolderPath(api, folderPath, options): PromisedObservable<UploadFolderStatus>"})}),": Uploads a folder from a filesystem path."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"downloadObject(api, params): AsyncIterable<Buffer>"})}),": Downloads an object by its CID."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Note:"})," All asynchronous functions return a ",(0,o.jsx)(n.code,{children:"Promise"})," and should be used with ",(0,o.jsx)(n.code,{children:"await"})," for proper execution flow."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,o.jsx)(n.h3,{id:"1-uploading-a-file",children:"1. Uploading a File"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { createAutoDriveApi, uploadFileFromFilepath } from '@autonomys/auto-drive';\nimport fs from 'fs';\n\nconst filePath = fs.readFileSync('path/to/your/file.txt');\nconst api = createAutoDriveApi({ apiKey: 'Your_API_Key' });\n\n/// passing options is optional, provide `password` if you prefer to ensrypt your file\nconst options = {\n  password: 'password'\n  compression: true,\n};\n\nconst upload = uploadFileFromFilepath(api, filePath, options);\n\nconsole.log('Upload:', upload);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2-creating-an-ipld-dag-from-a-folder",children:"2. Creating an IPLD DAG from a Folder"}),"\n",(0,o.jsx)(n.p,{children:"Create an IPLD DAG for a folder:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { createFolderIPLDDag } from '@autonomys/auto-drive';\nimport { CID } from 'multiformats';\n\n// Example child CIDs and folder information\nconst childCIDs: CID[] = [\n  /* array of CIDs */\n];\nconst folderName = 'my-folder';\nconst folderSize = 1024; // size in bytes\n\nconst folderDag = createFolderIPLDDag(childCIDs, folderName, folderSize);\n\nconsole.log('Folder DAG created:', folderDag);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"3-working-with-cids",children:"3. Working with CIDs"}),"\n",(0,o.jsx)(n.p,{children:"Generate and manipulate CIDs:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { cidOfNode, cidToString, stringToCid } from '@autonomys/auto-drive';\n\n// Assuming you have an IPLD node\nconst node = { /* IPLD node data */ };\n\n// Create a CID from a node\nconst cid = cidOfNode(node);\n\n// Convert the CID to a string\nconst cidString = cidToString(cid);\nconsole.log('CID as string:', cidString);\n\n// Parse a string back into a CID\nconst parsedCID = stringToCid(cidString);\nconsole.log('Parsed CID:', parsedCID);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"4-encoding-and-decoding-nodes",children:"4. Encoding and Decoding Nodes"}),"\n",(0,o.jsx)(n.p,{children:"Encode and decode IPLD nodes:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { encodeNode, decodeNode } from '@autonomys/auto-drive';\n\n// Assume you have an IPLD node\nconst node = { /* IPLD node data */ };\n\n// Encode a node\nconst encodedNode = encodeNode(node);\n\n// Decode a node\nconst decodedNode = decodeNode(encodedNode);\n\nconsole.log('Decoded node:', decodedNode);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"5-handling-metadata",children:"5. Handling Metadata"}),"\n",(0,o.jsx)(n.p,{children:"Add metadata to a node:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { createMetadataNode } from '@autonomys/auto-drive';\n\nconst metadata = {\n  name: 'My File',\n  description: 'This is a sample file',\n  // ... other metadata fields\n};\n\nconst metadataNode = createMetadataNode(metadata);\n\nconsole.log('Metadata node created:', metadataNode);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"6-example-creating-a-file-dag-and-converting-to-cid",children:"6. Example: Creating a File DAG and Converting to CID"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { createFileIPLDDag, cidOfNode, cidToString } from '@autonomys/auto-drive';\nimport fs from 'fs';\n\nconst fileBuffer = fs.readFileSync('path/to/your/file.txt');\n\nconst dag = createFileIPLDDag(fileBuffer, 'file.txt');\n\n// Generate CID from the DAG\nconst cid = cidOfNode(dag.head);\n\n// Convert CID to string\nconst cidString = cidToString(cid);\n\nconsole.log(`CID of the file DAG: ${cidString}`);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"7-example-converting-metadata-to-dag",children:"7. Example: Converting Metadata to DAG"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import {\n  createMetadataIPLDDag,\n  cidOfNode,\n  cidToString,\n  type OffchainMetadata,\n} from '@autonomys/auto-drive';\nimport fs from 'fs';\n\nconst metadataContent = fs.readFileSync('path/to/your/metadata.json', 'utf-8');\nconst metadata: OffchainMetadata = JSON.parse(metadataContent);\n\nconst dag = createMetadataIPLDDag(metadata);\n\nconst cid = cidOfNode(dag.head);\nconst cidString = cidToString(cid);\n\nconsole.log(`CID of the metadata DAG: ${cidString}`);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"8-uploading-a-file-from-filepath",children:"8. Uploading a File from Filepath"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { uploadFileFromFilepath, createAutoDriveApi } from '@autonomys/auto-drive';\n\nconst api = createAutoDriveApi({ apiKey: 'your-api-key' });\nconst filePath = 'path/to/your/file.txt';\nconst options = {\n  password: 'your-encryption-password', // Optional\n  compression: true,\n};\n\nconst uploadObservable = uploadFileFromFilepath(api, filePath, options)\n  .then(() => {\n    console.log('File uploaded successfully!');\n  })\n  .catch((error) => {\n    console.error('Error uploading file:', error);\n  });\n"})}),"\n",(0,o.jsx)(n.h3,{id:"9-uploading-a-file-with-custom-interface",children:"9. Uploading a File with Custom Interface"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { uploadFile, createAutoDriveApi } from '@autonomys/auto-drive';\n\nconst api = createAutoDriveApi({ apiKey: 'your-api-key' });\nconst buffer = Buffer.from(/* ... */);\nconst genericFile = {\n  read: async function *() {\n    yield buffer;\n  },\n  name: \"autonomys-whitepaper.pdf\",\n  mimeType: \"application/pdf\",\n  size: 1234556,\n  path: \"autonomys-whitepaper.pdf\"\n};\n\nconst options = {\n  password: 'your-encryption-password',\n  compression: true,\n};\n\nconst uploadObservable = uploadFile(api, genericFile, options)\n  .then(() => {\n    console.log('File uploaded successfully!');\n  })\n  .catch((error) => {\n    console.error('Error uploading file:', error);\n  });\n"})}),"\n",(0,o.jsx)(n.h3,{id:"10-uploading-a-folder",children:"10. Uploading a Folder"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { uploadFolderFromFolderPath, createAutoDriveApi } from '@autonomys/auto-drive';\n\nconst api = createAutoDriveApi({ apiKey: 'your-api-key' });\nconst folderPath = 'path/to/your/folder';\n\nconst options = {\n  uploadChunkSize: 1024 * 1024,\n  password: 'your-encryption-password',\n};\n\nconst uploadObservable = uploadFolderFromFolderPath(api, folderPath, options);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"11-tracking-upload-progress",children:"11. Tracking Upload Progress"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { useState, useEffect } from 'react';\nimport { uploadFile, createAutoDriveApi } from '@autonomys/auto-drive';\n\nconst UploadComponent = () => {\n  const [progress, setProgress] = useState<number>(0);\n\n  useEffect(() => {\n    const uploadFile = async () => {\n      const api = createAutoDriveApi({ apiKey: 'your-api-key' });\n      const finalStatus = await uploadFile(api, genericFile, options).forEach((status) => {\n        setProgress(status.progress);\n      });\n    };\n    uploadFile();\n  }, []);\n\n  return <div>Upload Progress: {progress}%</div>;\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"12-downloading-a-file",children:"12. Downloading a File"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { downloadObject, createAutoDriveApi } from '@autonomys/auto-drive';\nimport fs from 'fs';\n\nconst api = createAutoDriveApi({ apiKey: 'your-api-key' });\n\ntry {\n  const stream = fs.createWriteStream('/path/to/file');\n  const asyncBuffer = await downloadObject(api, { cid: 'your-cid' });\n  for await (const buffer of asyncBuffer) {\n    stream.write(buffer);\n  }\n} catch (error) {\n  console.error('Error downloading file:', error);\n}\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Asynchronous Functions"}),": Use ",(0,o.jsx)(n.code,{children:"await"})," with all promises for proper execution flow."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Error Handling"}),": Wrap asynchronous calls in ",(0,o.jsx)(n.code,{children:"try...catch"})," blocks to handle potential errors gracefully."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"File System Operations"}),": Ensure that file paths are correct and accessible when reading from or writing to the file system."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},55349:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/Auto-Drive-1-8b32efa954a0f78d497c2ce6e0496b8b.png"},18622:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/Auto-Drive-2-58614af709bf15533543720079137e06.png"},10759:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/Auto-Drive-3-a88af21b9bb90b6a10162cab0c9f0c4d.png"},31144:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/Auto-Drive-4-f299f40d95919d160630f456808f104a.png"},63185:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/Auto-Drive-5-6efa9fd008f70e6b948b8ba7398325af.png"},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var o=i(96540);const a={},r=o.createContext(a);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);