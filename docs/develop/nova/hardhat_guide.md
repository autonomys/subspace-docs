---
title: Hardhat
sidebar_position: 8
description: Menguji dan Menerapkan Kontrak Cerdas menggunakan HardHat
keywords:
  - subspace network
  - hardhat
---

### Pengujian dan penerapan Hardhat
---
Hardhat adalah alat luar biasa yang memfasilitasi pembangunan di atas Mesin Virtual Ethereum. Hardhat membantu pengembang mengelola dan mengotomatiskan tugas-tugas berulang yang melekat pada proses pembuatan kontrak pintar dan dApps, dan memungkinkan mereka untuk dengan mudah memperkenalkan lebih banyak fungsionalitas di sekitar alur kerja ini. Ini termasuk kompilasi dan pengujian pada intinya. Opsi penerapan yang fleksibel juga memungkinkan Anda untuk mengarahkan ke RPC domain Subspace EVM untuk menerapkan kontrak dan dApps Anda.

Dokumentasi resmi untuk Hardhat tersedia [di situs web mereka] (https://hardhat.org/docs), tetapi panduan ini akan mencakup semua yang diperlukan untuk membantu Anda memulai.

Prasyarat **Prasyarat**
Pastikan Anda telah menginstal [NodeJS] (https://nodejs.org/en) versi >=16.0.

1. Buka terminal baru dan jalankan perintah berikut untuk membuat folder baru untuk proyek. 

```
mkdir subspace-hardhat
cd subspace-hardhat
```

2. Kemudian inisialisasi proyek npm seperti yang ditunjukkan di bawah ini. Anda akan diminta untuk menjawab beberapa pertanyaan.

```
npm install --save-dev hardhat
npm install --save-dev @openzeppelin/contracts
npx hardhat
```

Pilih "Buat Proyek JavaScript" dari daftar pilihan yang tersedia. Pilih folder root proyek dan pilih untuk membuat file .gitignore (opsional). 

![Hardhat-1](/img/developers/Hardhat-1.png)

3. Tepat setelah Anda membuat ruang kerja, Anda akan melihat beberapa folder. Semua kontrak Anda akan berada di dalam folder `contracts`, skrip penerapan tersedia di dalam folder `scripts`, dan tes dapat ditemukan di dalam folder `test`. Klik pada folder kontrak dan buka `Lock.sol`.

![Hardhat-3](/img/developers/Hardhat-3.png)

4. Ketika berada di dalam `Lock.sol`, Anda dapat mengubah nama kontrak Anda (dalam contoh, menjadi `Counter`), nama token (dalam contoh ini, kita menyebutnya `SubspaceTestToken`) dan simbol token (kita menggunakan `TSSCtest`).

Mari kita tambahkan smart contract sederhana yang memiliki tiga fungsi - `setNumber()`, `increment()`, dan `decrement()`.

```
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Counter is ERC20 {
    constructor() ERC20("SubspaceTestToken", "TSSCtest") {}

    uint256 public number;

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }

    function decrement() public {
        number--;
    }
}
```

Mari kita juga mengganti nama file menjadi `Counter.sol` untuk konsistensi. 


5. Menerapkan smart contract dapat menjadi sebuah prosedur yang mahal karena biaya gas yang terkait dengan transaksi. Oleh karena itu, disarankan untuk menguji kebenaran smart contract secara menyeluruh sebelum melanjutkan dengan penerapan. Untuk menguji kontrak, buka folder tests dan periksa file Lock.js yang dibuat untuk kita. Ganti bagian dalam file tersebut dengan kode berikut:

```
const { expect } = require("chai");

describe("Counter", function() {
let Counter;
let counter;
let owner;
let addr1;

beforeEach(async function() {
    Counter = await ethers.getContractFactory("Counter");
    [owner, addr1] = await ethers.getSigners();

    counter = await Counter.deploy();
});

describe("Counter operations", function() {
    it("Should return initial value of zero", async function() {
    expect(await counter.number()).to.equal(0);
    });

    it("Should set number to a new value", async function() {
    await counter.setNumber(5);
    expect(await counter.number()).to.equal(5);
    });

    it("Should increment the number", async function() {
    await counter.setNumber(5);
    await counter.increment();
    expect(await counter.number()).to.equal(6);
    });

    it("Should decrement the number", async function() {
    await counter.setNumber(5);
    await counter.decrement();
    expect(await counter.number()).to.equal(4);
    });
});
});
```

Untuk konsistensi, mari kita ganti juga nama `Lock.js` menjadi `CounterTest.js`

7. Untuk menjalankan tes, cukup ketik `npx hardhat test`

 ![Hardhat-4](/img/developers/Hardhat-4.png)

Bagus, sepertinya semuanya berjalan seperti yang diharapkan. Kami sudah siap untuk penerapan!

8. Untuk menerapkan kontrak, kita perlu mengatur jaringan penerapan untuk hardhat. 
Buka berkas `hardhat.config.js` dan tambahkan subruang ke daftar jaringan. 

```
require("@nomicfoundation/hardhat-toolbox");
module.exports = {
solidity: "0.8.19",
networks: {
    subspace: {
    url: "https://nova.gemini-3g.subspace.network/ws",
    accounts: ["private_key_to_your_account"]
    }
}
};
```

:::tip
Berhati-hatilah untuk tidak melakukan komit pada berkas hardhat.config.js karena berkas ini berisi kunci privat Anda. Anda dapat menggunakan alat NPM seperti [dotenv](https://www.npmjs.com/package/dotenv) untuk menyimpan kunci privat Anda dengan aman di berkas `.env`.
:::

9. Buka file `deploy.js` dan ganti kontennya dengan kode. 

![Hardhat-5](/img/developers/Hardhat-5.png)

```
const hre = require("hardhat");

async function main() {
const Contract = await hre.ethers.getContractFactory("Counter");
const contract = await Contract.deploy();

console.log("Contract deployed to:", contract.target);
}

main().catch((error) => {
console.error(error);
process.exitCode = 1;
});
```

10. Anda sudah siap untuk menggunakan smart contract Anda di Subspace Network!
Untuk menerapkan, jalankan `npx hardhat run scripts/deploy.js --network subspace`. 

Perintah ini akan menyebarkan smart contract Anda di jaringan yang baru saja kita tentukan di file `hardhat.config.js`. 

Jika penerapan berhasil, Anda akan melihat `Contract deployed to: transaction hash`.  

![Hardhat-6](/img/developers/Hardhat-6.png)

11. **Selamat**, Anda telah berhasil menggunakan smart contract Anda pada domain Subspace EVM! 
