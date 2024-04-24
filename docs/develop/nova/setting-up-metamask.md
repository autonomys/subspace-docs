---
title: Menyiapkan MetaMask
sidebar_position: 4
description: Panduan tentang pengaturan MetaMask untuk tujuan pengembangan
keywords:
  - metamask
  - subspace network
---

### Adding Subspace RPC menggunakan MetaMask
---
Anda dapat menggunakan dompet yang kompatibel dengan EVM, panduan ini akan menggunakan dompet [**MetaMask**](https://metamask.io/).

Pertama, mari kita siapkan dompet MetaMask dan kemudian menghubungkannya ke Subspace Development Network.

1. Buka [Situs Web MetaMask](https://metamask.io/) dan unduh ekstensi untuk peramban Anda.
   Pilih bahasa yang Anda inginkan di sudut kanan atas. 
   Baca dan setujui persyaratan penggunaan MetaMask.

  ![MetaMask-1](/img/developers/MetaMask-1.png)


2. Klik "Buat dompet baru".
  Baca catatan tentang pengumpulan data penggunaan dan setujui untuk mengumpulkan data anonim Anda, atau lewati langkah ini. Ini tidak memengaruhi pembuatan dompet. 

  ![MetaMask-2](/img/developers/MetaMask-2.png)

3. On the next screen you will be asked to create a password. Remember to always set a secure password that’s difficult to guess. Type your password twice before proceeding to the next step.

  ![MetaMask-3](/img/developers/MetaMask-3.png)

4. MetaMask secara otomatis menilai kekuatan kata sandi Anda. 
  :::tip
  Sebagai aturan praktis, Anda harus membuat kata sandi yang kuat, yang berarti kata sandi tersebut mencakup huruf besar, huruf kecil, angka, dan karakter khusus.
  :::

  ![MetaMask-4](/img/developers/MetaMask-4.png)

5. Tonton video untuk mempelajari lebih lanjut tentang Frasa Pemulihan Rahasia Anda sebelum melanjutkan ke langkah berikutnya. 

  ![MetaMask-5](/img/developers/MetaMask-5.png)

6. Lihatlah dan tuliskan frasa pemulihan 12 kata Anda. 
  :::info
  Dompet dengan frasa pemulihan untuk panduan ini akan dihapus segera setelah panduan ini selesai.
  ::: 

  ![MetaMask-6](/img/developers/MetaMask-6.png)

7. Konfirmasikan bahwa Anda telah menuliskan frasa pemulihan dengan mengisi kata-kata yang hilang dari frasa pemulihan Anda. 

  ![MetaMask-7](/img/developers/MetaMask-7.png)

8. Setelah wallet Anda dibuat, mari terhubung ke Subspace Core EVM. Klik pada logo Ethereum Mainnet dan pilih Add Network.

  ![MetaMask-8](/img/developers/MetaMask-8.png)

9. Pada pengaturan, klik "Tambahkan jaringan secara manual"

  ![MetaMask-9](/img/developers/MetaMask-9.png)

10. Untuk menyambung ke Subspace RPC, tentukan nilai di bawah ini

  ```
  Network Name: Subspace EVM
  New RPC URL: https://nova-0.gemini-3h.subspace.network/ws
  Chain ID: 490000
  Currency Symbol: TSSC
  ```

Anda sudah siap, **Anda telah berhasil mengonfigurasi dompet MetaMask Anda** dan menghubungkannya ke **Subspace Core EVM**. Untuk menggunakan smart contract Anda, pertama-tama Anda harus memasukkan sejumlah kecil token **TSSC** ke dalam dompet Anda. Pastikan untuk merujuk ke [bagian faucet](./faucet.md) dari panduan ini untuk mempelajari lebih lanjut tentang cara mendapatkan token uji. 
