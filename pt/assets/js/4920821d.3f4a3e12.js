"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1949],{4375:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=i(74848),r=i(28453);const s={title:"Auto Drive",sidebar_position:3,description:"Utilities for creating and managing IPLD DAGs",slug:"/develop/auto-sdk/drive",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto Drive"]},t=void 0,l={id:"develop/auto_sdk/auto-drive",title:"Auto Drive",description:"Utilities for creating and managing IPLD DAGs",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/develop/auto_sdk/auto-drive.mdx",sourceDirName:"develop/auto_sdk",slug:"/develop/auto-sdk/drive",permalink:"/pt/develop/auto-sdk/drive",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/auto_sdk/auto-drive.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Auto Drive",sidebar_position:3,description:"Utilities for creating and managing IPLD DAGs",slug:"/develop/auto-sdk/drive",keywords:["Developers Documentation","DevDocs","SDK","Auto SDK","Auto Drive"]},sidebar:"tutorialSidebar",previous:{title:"Auto Consensus",permalink:"/pt/develop/auto-sdk/consensus"},next:{title:"Auto Utils",permalink:"/pt/develop/auto-sdk/utils"}},a={},d=[{value:"Auto-Drive Package Documentation",id:"auto-drive-package-documentation",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Features",id:"features",level:3},{value:"Auto Drive Dashboard",id:"auto-drive-dashboard",level:2},{value:"Getting an API Key",id:"getting-an-api-key",level:3},{value:"Sharing Files",id:"sharing-files",level:3},{value:"Installation",id:"installation",level:3},{value:"Importing the Package",id:"importing-the-package",level:3},{value:"Available Functions",id:"available-functions",level:2},{value:"Upload and Download Operations",id:"upload-and-download-operations",level:3},{value:"Utility Functions",id:"utility-functions",level:3},{value:"CID Utilities",id:"cid-utilities",level:3},{value:"Node Encoding and Decoding",id:"node-encoding-and-decoding",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"1. Uploading a File from Filepath",id:"1-uploading-a-file-from-filepath",level:3},{value:"2. Uploading a File from Input (Interface)",id:"2-uploading-a-file-from-input-interface",level:3},{value:"3. Uploading a file from Custom Interface",id:"3-uploading-a-file-from-custom-interface",level:3},{value:"4. Uploading a folder",id:"4-uploading-a-folder",level:3},{value:"5. Downloading files",id:"5-downloading-files",level:3},{value:"6. Usage example of <code>getRoots</code> (retrieve the root directories)",id:"6-usage-example-of-getroots-retrieve-the-root-directories",level:3},{value:"Notes",id:"notes",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"auto-drive-package-documentation",children:"Auto-Drive Package Documentation"}),"\n",(0,o.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"@autonomys/auto-drive"})," package provides utilities for creating and managing IPLD DAGs (InterPlanetary Linked Data Directed Acyclic Graphs) for files and folders. It facilitates chunking large files, handling metadata, and creating folder structures suitable for distributed storage systems like IPFS."]}),"\n",(0,o.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"File Chunking and DAG Creation"}),": Efficiently split large files into smaller chunks and create IPLD DAGs."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Folder Structure Creation"}),": Generate IPLD DAGs for directory structures."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Metadata Handling"}),": Add and manage metadata for files and folders."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"CID Management"}),": Utilities for working with Content Identifiers (CIDs)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"TypeScript Support"}),": Fully typed for enhanced developer experience."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"auto-drive-dashboard",children:"Auto Drive Dashboard"}),"\n",(0,o.jsx)(n.p,{children:"Logging in to Auto Drive will allow you to view your upload and download limits, access files uploaded by other users, and manage and share your submissions."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Log in to ",(0,o.jsx)(n.a,{href:"https://ai3.storage/",children:"Auto Drive"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Sign in via Google or Discord"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Auto-Drive-1",src:i(55349).A+"",width:"481",height:"328"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"On the landing page (dashboard) you will see:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Your upload limit (currently ",(0,o.jsx)(n.strong,{children:"100MB"})," per month)"]}),"\n",(0,o.jsxs)(n.li,{children:["Your download limit (currently ",(0,o.jsx)(n.strong,{children:"5GB"})," per month)"]}),"\n",(0,o.jsxs)(n.li,{children:["A list of ",(0,o.jsx)(n.strong,{children:"uploaded files"})," and their ",(0,o.jsx)(n.strong,{children:"CIDs"})]}),"\n",(0,o.jsxs)(n.li,{children:["Options to ",(0,o.jsx)(n.strong,{children:"Download"}),", ",(0,o.jsx)(n.strong,{children:"Share"}),", or ",(0,o.jsx)(n.strong,{children:"Remove"})," each file"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Auto-Drive-2",src:i(18622).A+"",width:"1511",height:"779"})}),"\n",(0,o.jsx)(n.admonition,{title:"NOTE",type:"tip",children:(0,o.jsx)(n.p,{children:"Removing a file does not delete it from the DSN, as it is permanent storage. It only removes the file from your dashboard."})}),"\n",(0,o.jsx)(n.p,{children:"You can use the in-browser environment to upload, download, or share files, or you can use the SDK functions (described later on this page) to upload files or folders via the CLI."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Auto-Drive-3",src:i(10759).A+"",width:"1236",height:"224"})}),"\n",(0,o.jsx)(n.h3,{id:"getting-an-api-key",children:"Getting an API Key"}),"\n",(0,o.jsxs)(n.p,{children:["Click on ",(0,o.jsx)(n.code,{children:"Profile"})," to create your ",(0,o.jsx)(n.code,{children:"API"})," key. You can then use this API key in the CLI to upload files or folders."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Auto-Drive-4",src:i(31144).A+"",width:"2297",height:"539"})}),"\n",(0,o.jsx)(n.h3,{id:"sharing-files",children:"Sharing Files"}),"\n",(0,o.jsxs)(n.p,{children:["To share a file, click the ",(0,o.jsx)(n.code,{children:"Share"})," button next to the file. You can share it using a link, or by providing the user\u2019s public ID. Each user\u2019s public ID is visible on their ",(0,o.jsx)(n.code,{children:"Profile"})," page."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Auto-Drive-5",src:i(63185).A+"",width:"2283",height:"769"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"Install the package via npm or yarn:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Using npm\nnpm install @autonomys/auto-drive\n\n# Using yarn\nyarn add @autonomys/auto-drive\n"})}),"\n",(0,o.jsx)(n.h3,{id:"importing-the-package",children:"Importing the Package"}),"\n",(0,o.jsxs)(n.p,{children:["Before using the functions provided by the ",(0,o.jsx)(n.code,{children:"auto-drive"})," package, you need to import them into your project:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"// Import specific functions\nimport { createFileIPLDDag, createFolderIPLDDag } from '@autonomys/auto-drive';\n\n// Or import everything\nimport * as drive from '@autonomys/auto-drive';\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"available-functions",children:"Available Functions"}),"\n",(0,o.jsx)(n.h3,{id:"upload-and-download-operations",children:"Upload and Download Operations"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"uploadFile(api, file, options): Promise<string>"})}),": Uploads a file (using a buffer, ",(0,o.jsx)(n.code,{children:"File"}),", or a custom interface) with optional encryption and compression. Returns the resulting CID as a string."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"uploadFileFromFilepath(api, filepath, options): Promise<string>"})}),": Uploads a file from a filesystem path."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"uploadFileFromInput(api, file, options): Promise<string>"})}),": Uploads a file obtained from a browser's ",(0,o.jsx)(n.code,{children:"File"})," API."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"uploadFolderFromFolderPath(api, folderPath, options): Promise<string>"})}),": Uploads a folder from a filesystem path."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"uploadFolderFromInput(api, fileList, options): Promise<string>"})}),": Uploads a folder from a browser's ",(0,o.jsx)(n.code,{children:"FileList"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"uploadFileWithinFolderUpload(api, uploadId, file, options): Promise<string>"})}),": Uploads a file within an existing folder upload session."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"downloadFile(api, cid, password?): AsyncIterable<Buffer>"})}),": Downloads a file from its CID, with optional decryption using a password."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"downloadObject(api, params): AsyncIterable<Buffer>"})}),": Downloads an object by its CID. ",(0,o.jsxs)(n.em,{children:["(Likely implemented as ",(0,o.jsx)(n.code,{children:"apiCalls.downloadObject"}),".)"]})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"utility-functions",children:"Utility Functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"uploadFileChunks(api, fileUploadId, asyncIterable, uploadChunkSize, onProgress): Promise<void>"})}),": Handles the chunked upload of files to the server."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"constructZipBlobFromTreeAndPaths(tree, filesMap): Promise<Blob>"})}),": Creates a zip archive from a file tree and corresponding file paths."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"constructFromInput(files): FolderTree"})}),": Constructs a folder tree from an array of files."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"fileToIterable(file): AsyncIterable<Buffer>"})}),": Converts a file into an async iterable of buffers."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"cid-utilities",children:"CID Utilities"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"cidOfNode(node): CID"})}),": Generates a CID from an IPLD node."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"cidToString(cid): string"})}),": Converts a CID to its string representation."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"stringToCid(cidString): CID"})}),": Parses a CID string back into a CID object."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"node-encoding-and-decoding",children:"Node Encoding and Decoding"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"encodeNode(node): Uint8Array"})}),": Encodes an IPLD node into a byte array."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"decodeNode(encodedNode): any"})}),": Decodes a byte array back into an IPLD node."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Note:"})," All asynchronous functions return a ",(0,o.jsx)(n.code,{children:"Promise"})," (or an async iterable in the case of ",(0,o.jsx)(n.code,{children:"downloadObject"}),"), and should be used with ",(0,o.jsx)(n.code,{children:"await"})," for proper execution flow."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,o.jsx)(n.h3,{id:"1-uploading-a-file-from-filepath",children:"1. Uploading a File from Filepath"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { uploadFileFromFilepath,createAutoDriveApi } from '@autonomys/auto-drive'\n\nconst api = createAutoDriveApi({ apiKey: 'your-api-key' }) // Initialize your API instance with API key\nconst filePath = 'path/to/your/file.txt' // Specify the path to your file\nconst options = {\n  password: 'your-encryption-password', // Optional: specify a password for encryption\n  compression: true,\n  // an optional callback useful for large file uploads\n  onProgress?: (progress: number) => {\n    console.log(`The upload is completed is ${progress}% completed`)\n  }\n}\n\nconst cid = await uploadFileFromFilepath(api, filePath, options)\n\nconsole.log(`The file is uploaded and its cid is ${cid}`)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2-uploading-a-file-from-input-interface",children:"2. Uploading a File from Input (Interface)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { uploadFileFromInput, createAutoDriveApi } from '@autonomys/auto-drive'\n\nconst api = createAutoDriveApi({ apiKey: 'your-api-key' }) // Initialize your API instance with API key\n\n// e.g Get File from object from HTML event\nconst file: File = e.target.value // Substitute with your file\nconst options = {\n  password: 'your-encryption-password', // Optional: specify a password for encryption\n  compression: true,\n}\nconst cid = await uploadFileFromInput(api, file, options)\n\nconsole.log(`The file is uploaded and its cid is ${cid}`)\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"3-uploading-a-file-from-custom-interface",children:"3. Uploading a file from Custom Interface"}),"\n",(0,o.jsx)(n.p,{children:"Some times you might have a custom interface that doesn't fit either File or filepath. For those cases exists the interface GenericFile:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export interface GenericFile {\n  read(): AsyncIterable<Buffer> // A buffer generator function that will output the bytes of the file\n  name: string\n  mimeType?: string\n  size: number\n  path: string // Could be ignored in file upload\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"You could upload any file that could be represented in that way. For example, uploading a file as a Buffer"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { createAutoDriveApi, uploadFile } from '@autonomys/auto-drive'\n\nconst api = createAutoDriveApi({ apiKey: 'your-api-key' }) // Initialize your API instance with API key\nconst buffer = Buffer.from(...);\nconst genericFile = {\n  read: async function *() {\n    yield buffer\n  },\n  name: \"autonomys-whitepaper.pdf\",\n  mimeType: \"application/pdf\",\n  size: 1234556,\n  path: \"autonomys-whitepaper.pdf\"\n}\n\nconst options = {\n  password: 'your-encryption-password', // Optional: specify a password for encryption\n  compression: true,\n  // an optional callback useful for large file uploads\n  onProgress?: (progress: number) => {\n    console.log(`The upload is completed is ${progress}% completed`)\n  }\n}\n\nconst cid = uploadFile(api, genericFile, options)\n\nconsole.log(`The file is uploaded and its cid is ${cid}`)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"4-uploading-a-folder",children:"4. Uploading a folder"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { createAutoDriveApi, uploadFolderFromFolderPath } from '@autonomys/auto-drive'\n\nconst api = createAutoDriveApi({ apiKey: 'your-api-key' }) // Initialize your API instance with API key\nconst folderPath = 'path/to/your/folder' // Specify the path to your folder\n\nconst options = {\n  uploadChunkSize: 1024 * 1024, // Optional: specify the chunk size for uploads\n  password: 'your-encryption-password', // Optional: If folder is encrypted\n  // an optional callback useful for large file uploads\n  onProgress: (progress: number) => {\n    console.log(`The upload is completed is ${progress}% completed`)\n  },\n}\n\nconst folderCID = await uploadFolderFromFolderPath(api, folderPath, options)\n\nconsole.log(`The folder is uploaded and its cid is ${folderCID}`)\n\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"When the folder is encrypted, a zip file would be generated first, and then that file would be encrypted and uploaded."})}),"\n",(0,o.jsx)(n.h3,{id:"5-downloading-files",children:"5. Downloading files"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { createAutoDriveApi, downloadFile } from '@autonomys/auto-drive'\n\nconst api = createAutoDriveApi({ apiKey: 'your-api-key' }) // Initialize your API instance with API key\n\ntry {\n  const cid = '..'\n  const stream = await downloadFile(api, cid)\n  let file = Buffer.alloc(0)\n  for await (const chunk of stream) {\n    file = Buffer.concat([file, chunk])\n  }\n  console.log('File downloaded successfully:', stream)\n} catch (error) {\n  console.error('Error downloading file:', error)\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"6-usage-example-of-getroots-retrieve-the-root-directories",children:["6. Usage example of ",(0,o.jsx)(n.code,{children:"getRoots"})," (retrieve the root directories)"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { createAutoDriveApi, apiCalls, Scope } from '@autonomys/auto-drive'\n\nconst api = createAutoDriveApi({ apiKey: 'your-api-key' }) // Initialize your API instance with API key\n\ntry {\n  const myFiles = await apiCalls.getRoots(api, {\n    scope: Scope.User,\n    limit: 100,\n    offset: 0,\n  })\n\n  console.log(`Retrieved ${myFiles.rows.length} files of ${myFiles.totalCount} total`)\n  for (const file of myFiles.rows) {\n    console.log(`${file.name} - ${file.headCid}: ${file.size}`)\n  }\n} catch (error) {\n  console.error('Error downloading file:', error)\n}\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Asynchronous Functions"}),": Use ",(0,o.jsx)(n.code,{children:"await"})," with all promises for proper execution flow."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Error Handling"}),": Wrap asynchronous calls in ",(0,o.jsx)(n.code,{children:"try...catch"})," blocks to handle potential errors gracefully."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"File System Operations"}),": Ensure that file paths are correct and accessible when reading from or writing to the file system."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},55349:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/Auto-Drive-1-8b32efa954a0f78d497c2ce6e0496b8b.png"},18622:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/Auto-Drive-2-58614af709bf15533543720079137e06.png"},10759:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/Auto-Drive-3-a88af21b9bb90b6a10162cab0c9f0c4d.png"},31144:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/Auto-Drive-4-f299f40d95919d160630f456808f104a.png"},63185:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/Auto-Drive-5-6efa9fd008f70e6b948b8ba7398325af.png"},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var o=i(96540);const r={},s=o.createContext(r);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);