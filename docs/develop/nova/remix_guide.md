---
title: Remix IDE - pengujian dan penerapan
sidebar_position: 6
description: Menguji dan Menerapkan Kontrak Cerdas menggunakan Remix IDE
keywords:
  - subspace network
  - remix ide
---

### Panduan IDE Remix
---
Remix adalah alat hebat yang memungkinkan Anda menulis, menguji, dan menggunakan smart contract dengan mudah pada blockchain yang kompatibel dengan EVM. Selain itu, integrasi dengan MetaMask memungkinkan pemanfaatan RPC apa pun, itulah sebabnya kami baru saja menyiapkan referensi ke Subspace core EVM di dompet MetaMask kami!

Remix memiliki [amazing documentation](https://remix-ide.readthedocs.io/en/latest/), tetapi panduan ini akan membahas semua yang diperlukan untuk membantu Anda memulai.

1. Dengan menggunakan peramban pilihan Anda, buka **[Situs web Remix.](https://remix.ethereum.org)**
Anda akan melihat penjelajah file dan antarmuka untuk membuat ruang kerja baru, integrasi dengan GitHub, Gist, IPFS, HTTPS, templat yang sudah dimuat sebelumnya, dan plugin.
Mari buat ruang kerja baru dengan mengklik tanda + di samping WORKSPACES.

 ![Remix-1](/img/developers/Remix-1.png)

2. Anda dapat memasukkan nama apa pun dan menggunakan templat ERC20.

 ![Remix-2](/img/developers/Remix-2.png)

3. Tepat setelah Anda membuat ruang kerja, Anda akan melihat beberapa folder yang dibuat untuk Anda.
Mari kita klik pada kontrak dan lihatlah `MyToken.sol`.

 ![Remix-3](/img/developers/Remix-3.png)

4. Di sini, Anda dapat mengubah nama kontrak Anda (dalam contoh, menjadi `Counter`), nama token (dalam contoh ini, kita menyebutnya `SubspaceTestToken`) dan simbol token (kita menggunakan `TSSCtest`).
Mari kita tambahkan smart contract sederhana yang memiliki tiga fungsi - `setNumber()`, `increment()`, dan `decrement()`.

 ```
  // SPDX-License-Identifier: MIT
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

 ![Remix-4](/img/developers/Remix-4.png)

5. Selanjutnya, mari kita mengkompilasi kontrak `Counter`. Untuk mengkompilasi, klik SOLIDITY COMPILER di sebelah kiri dan pilih versi kompiler yang sesuai dengan versi Solidity dari kontrak Anda. Dalam kasus kami, ini adalah versi 0.8.9.
Klik `Compile MyToken.sol` dan periksa apakah sudah terkompilasi dengan benar. Jika sudah, Anda akan melihat tanda centang hijau pada kompiler.

 ![Remix-5](/img/developers/Remix-5.png)

6. Menerapkan smart contract dapat menjadi sebuah prosedur yang mahal, berdasarkan biaya gas yang terkait dengan transaksi. Oleh karena itu, Anda disarankan untuk menguji kebenaran smart contract secara menyeluruh sebelum melanjutkan dengan penerapan.
Untuk menguji kontrak, mari kita buka folder tests dan lihatlah `MyToken.sol` yang telah dibuat untuk kita.      
Pertama-tama, mari kita coba untuk menjalankan pengujian apa adanya tanpa membuat perubahan apa pun.

 ![Remix-6](/img/developers/Remix-6.png)

7. Untuk menjalankan pengujian, pilih PENGUJIAN UNIT SOLIDITAS pada bilah di sebelah kiri dan klik Run (Jalankan).

 ![Remix-7](/img/developers/Remix-7.png)

8. Seperti yang diharapkan, pengujian gagal karena kami mengubah nama dan simbol token secara manual.
Ini adalah Test Driven Development (TDD) yang sedang beraksi! Untuk membuat pengujian berhasil, ganti bagian internal `MyToken.sol` dengan kode di bawah ini. Dalam pengujian, kita menambahkan beberapa pernyataan untuk fungsi `increment()` dan `decrement()`. Pada contoh ini, kita akan mengatur nilai awal `number` menjadi 2 dan `increment` lalu `decrement` dengan 1. Kita akan mengharapkan angka tersebut bertambah menjadi 3 dan kemudian berkurang kembali menjadi 2.

 ```bash
  pragma solidity >=0.7.0 <0.9.0;
  import "remix_tests.sol";
  import "../contracts/MyToken.sol";

  contract CounterTest is Counter {

     function testTokenInitialValues() public {
         Assert.equal(name(), "SubspaceTestToken", "token name did not match");
         Assert.equal(symbol(), "TSSCtest", "token symbol did not match");
         Assert.equal(decimals(), 18, "token decimals did not match");
         Assert.equal(totalSupply(), 0, "token supply should be zero");
     }

     Counter public counter;

     function setUp() public {
         counter = new Counter();
         counter.setNumber(2);
     }

     function testIncrement() public {
         counter.increment();
         Assert.equal(counter.number(), 3, "test increment did not match");
     }

     function testDecrement() public {
         counter.decrement();
         Assert.equal(counter.number(), 2, "test decrement did not match");
     }
  }
 ```

 ![Remix-8](/img/developers/Remix-8.png)

9. Hebat, semua tes sekarang sudah lulus yang berarti kontrak pintar `Counter` kami benar-benar berfungsi seperti yang kami harapkan.
Kita sudah siap untuk menerapkannya sekarang!

 ![Remix-9](/img/developers/Remix-9.png)

10. Untuk menerapkan, klik pada tab DEPLOY AND RUN TRANSACTIONS di sebelah kiri.
Remix memungkinkan Anda untuk menggunakan salah satu EVM yang sudah ada atau menyuntikkan penyedia Anda sendiri melalui integrasinya dengan MetaMask.
Karena kita sudah memiliki Akun MetaMask yang sudah disiapkan, mari gunakan opsi ini.

 ![Remix-10](/img/developers/Remix-10.png)

11. Anda akan diminta untuk mengonfirmasi kata sandi dengan MetaMask, pastikan bahwa jaringan yang Anda sambungkan adalah Subspace EVM.

 ![Remix-11](/img/developers/Remix-11.png)

12. Sesuaikan batas gas dan terapkan kontrak pintar Anda di Subspace Core EVM.
Sekarang transaksi Anda dicatat dan Anda dapat berinteraksi dengan kontrak pintar Anda di bagian bawah halaman - Anda dapat memanggil fungsi `increment () ` dan `decrement () ` serta `setNumber () `

:::caution
Jangan mencoba untuk mempercepat transaksi (jangan menyertakan tip di atas biaya bensin). Untuk membaca lebih lanjut mengenai hal ini, silakan lihat [this section](quick_start.md#important-note-about-submitting-the-transaction).
:::

 ![Remix-12](/img/developers/Remix-12.png)

Selamat, Anda baru saja menggunakan kontrak pintar Anda di Subspace Core EVM!

