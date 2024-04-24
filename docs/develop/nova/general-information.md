---
title: Informasi umum tentang alat bantu pengembangan dan Subspace EVM
sidebar_position: 3
description: Panduan tentang pengaturan
keywords:
  - metamask
  - subspace network
---

### Alat bantu apa saja yang tersedia untuk pengembang?
---
Mengembangkan kontrak pintar melibatkan serangkaian alat yang membantu dalam menulis, menguji, dan menerapkan kode pada blockchain. **Subspace menggunakan instance dari Mesin Virtual Ethereum. Oleh karena itu, setiap alat yang digunakan untuk membangun, menguji, dan menggunakan kontrak pintar di Ethereum juga tersedia untuk Subspace!

Pertama, Solidity adalah bahasa pemrograman utama untuk menulis smart contract. Bahasa ini diketik secara statis, mendukung pewarisan, pustaka, dan tipe yang ditentukan pengguna yang kompleks, sehingga familiar bagi pengembang dengan latar belakang bahasa yang diketik secara statis seperti C++, Java, atau JavaScript.

Integrated Development Environments (IDE) seperti [Remix IDE] (https://remix.ethereum.org/) sering digunakan untuk membantu menulis smart contract. Remix IDE adalah sebuah IDE berbasis browser yang memungkinkan Anda untuk menulis, menggunakan, dan berinteraksi dengan smart contract Solidity. IDE ini memiliki alat analisis statis bawaan yang memeriksa kode Anda untuk kesalahan umum.

Untuk pengembangan dan pengujian lokal, Anda memiliki beberapa opsi. Anda dapat membuat Subspace Developer Node dan farmer versi Anda sendiri untuk menyebarkan kontrak, mengembangkan aplikasi, dan menjalankan pengujian. Atau, Anda dapat menggunakan alat pengembangan Ethereum seperti [Hardhat] (https://hardhat.org/hardhat-network/docs/overview) atau [Anvil] (https://book.getfoundry.sh/anvil/), yang sepenuhnya kompatibel dengan Subspace karena kompatibilitas EVM-nya.

Untuk menerapkan dan berinteraksi dengan smart contract, penyedia JavaScript seperti yang disuntikkan oleh ekstensi peramban [MetaMask](https://metamask.io/) digunakan. Penyedia ini memungkinkan aplikasi JavaScript untuk berkomunikasi dengan jaringan Subspace atau jaringan yang kompatibel dengan Ethereum. Ini kompatibel dengan [ethers.js] (https://docs.ethers.org/v5/), [web3.js] (https://web3js.readthedocs.io/en/v1.10.0/) dan [Web3.py] (https://web3py.readthedocs.io/en/stable/), yang memungkinkan para pengembang untuk menggunakan salah satu pustaka untuk operasi blockchain mereka.

Semua alat ini bersama-sama menyediakan ekosistem untuk pengembangan smart contract yang kompatibel dengan EVM, membuat prosesnya lebih mudah dikelola dan efisien.

### Kontrak Cerdas
---
Kontrak pintar adalah perjanjian digital yang dikodekan ke dalam jaringan blockchain, yang dirancang untuk secara otomatis mengeksekusi atau menegakkan ketentuan kontrak. Kontrak yang dapat dijalankan sendiri ini, terutama dikembangkan pada sistem komputer terdesentralisasi, menghilangkan kebutuhan akan perantara dengan melakukan transaksi secara langsung antara para pihak. Smart contract bersifat transparan, dapat dilacak, dan tidak dapat diubah, memberikan kepastian langsung mengenai hasil setelah syarat-syarat yang telah ditentukan terpenuhi. Kontrak pintar merampingkan berbagai aplikasi, mulai dari keuangan hingga manajemen rantai pasokan, dengan mengotomatiskan alur kerja dan memfasilitasi interaksi tanpa kepercayaan.

### Perbedaan dengan Ethereum
---
Token Subspace (TSSC) adalah satu-satunya metode pembayaran untuk gas dalam proses kerja Subspace EVM.
Akan ada jembatan untuk mengubah token yang ditambang menjadi token yang kompatibel dengan EVM untuk menutupi biaya gas, namun, saat ini satu-satunya pilihan yang layak untuk mendapatkan TSSC di dompet Anda adalah melalui Subspace [faucet] (faucet.md)

### Apa itu Soliditas? 
---
Solidity adalah bahasa tingkat tinggi yang diketik secara statis, berorientasi pada kontrak, dan terutama digunakan untuk mengimplementasikan kontrak pintar pada platform blockchain seperti Ethereum. Sintaksnya mirip dengan JavaScript dan C++, yang membuatnya relatif mudah bagi para pengembang dari latar belakang bahasa tersebut untuk memahaminya. Fitur-fiturnya seperti kelas kontrak, pewarisan, tipe yang ditentukan pengguna yang kompleks, dan pustaka membawa kemampuan pemrograman berorientasi objek untuk pengembangan blockchain.


Salah satu fitur utama Solidity adalah dukungan kelas satu untuk "kontrak". Kontrak ini mirip dengan kelas dalam bahasa berorientasi objek tetapi digunakan pada blockchain Ethereum, yang memungkinkannya untuk mempertahankan status persisten dari waktu ke waktu dan berinteraksi dengan kontrak lain, dengan cara yang sama seperti objek berinteraksi dalam pemrograman tradisional.


Selain itu, Solidity dilengkapi dengan fitur keamanan, seperti sistem tipe yang kuat dan struktur kontrol, yang membantu mencegah bug. Solidity juga menyediakan berbagai fungsi bawaan untuk melakukan operasi seperti hashing kriptografi, verifikasi tanda tangan, dan pengecekan alamat, sehingga lebih mudah untuk menulis kode yang aman.


The popularity of Solidity is primarily due to its design for Ethereum, the leading smart contract platform. As Ethereum gained traction for decentralized applications (dApps), Solidity became the go-to language for writing smart contracts for these applications. Furthermore, its resemblance to widely-used languages like JavaScript and C++ helped its adoption amongst developers.


Lastly, Solidity is continually evolving with frequent updates, new features, and improvements that address the unique needs of blockchain development. This responsive development and the thriving community around it further solidify its position as the leading language for smart contract development.

Solidity has a great community of developers and extensive documentation is available on the official [website](https://soliditylang.org/).
