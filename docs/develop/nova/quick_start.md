---
title: Quick Start
sidebar_position: 2
description: Mulai cepat satu halaman
keywords:
  - subspace network
  - quickstart
---

## Satu-satunya alat yang dibutuhkan untuk memulai
---
Quick Start dirancang dengan anggapan bahwa Anda bukan pengembang pemula dan memiliki pemahaman atau pengalaman dasar. Quick Start juga mengantisipasi agar Anda mencari inisiasi yang mudah untuk menyiapkan lingkungan pengembangan jarak jauh.

Subspace menggunakan EVM (Ethereum Virtual Machine) sehingga alat apa pun yang tersedia untuk pengembangan Ethereum kompatibel dengan Subspace.

### Siapkan Dompet MetaMask (atau dompet lain yang kompatibel dengan EVM) dan sambungkan ke EVM khusus kami
---
```
Network Name: Subspace EVM
New RPC URL: https://nova.gemini-3g.subspace.network/ws
Chain ID: 1002
Currency Symbol: TSSC
```

### Dapatkan token ke dompet Anda menggunakan faucet kami
---
Ikuti instruksi [di sini] (faucet.md) untuk menggunakan **Faucet** kami untuk mendapatkan TSSC.

### Menguji dan menerapkan kontrak pintar Anda
---
Anda dapat menggunakan **[Remix](https://remix.ethereum.org/)**, **[Foundry](https://book.getfoundry.sh/)** atau alat lain yang sudah Anda kenal untuk menguji dan menggunakan smart contract Anda. Pastikan Anda menggunakan domain EVM khusus kami dan Anda sudah siap.

Jika ada hal di atas yang terdengar asing, Anda dapat kembali ke panduan lengkap kami. 

---
### Catatan penting tentang mengirimkan transaksi

Harap hindari upaya untuk mempercepat transaksi dengan menyertakan tip di samping biaya bensin. Antrian transaksi beroperasi secara berbeda dengan Subspace, sehingga ada kemungkinan dua transaksi berbagi nonce yang sama. Hal ini dapat mengakibatkan biaya gas dibebankan dua kali - satu kali untuk eksekusi dan penyimpanan pada transaksi pertama, dan hanya untuk penyimpanan pada transaksi kedua. Untuk mencegah skenario ini, pastikan Anda tidak menambahkan tip untuk mempercepat transaksi.

---

### Punya pertanyaan? Jangan ragu untuk mempostingnya di [forum kami] (https://forum.subspace.network/) atau di [Obrolan Pengembang di Discord] (https://discord.gg/EAw6B48r).
---

Untuk mendapatkan akses ke obrolan pengembang yang dibatasi peran:
1. Gabung [Discord](https://discord.gg/vhv5cEZN)
2. Klik Subspace Network di sudut kiri atas dan pilih **Linked Roles**.

   ![Discord-1](/img/developers/Discord-1.png)

3. Tautkan akun GitHub Anda untuk mendapatkan peran sebagai pengembang dan dapatkan akses ke **developer-chat**. 
   ![Discord-2](/img/developers/Discord-2.png)
