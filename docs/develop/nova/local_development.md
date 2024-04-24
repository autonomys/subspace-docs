---
title: Pengembangan lokal
sidebar_position: 9
description: Panduan tentang pengembangan lokal Subruang Simpul dan Petani
keywords:
  - local development
  - subspace network
---



### Menyiapkan lingkungan pengembangan lokal

**Anda selalu dapat menyiapkan jaringan lokal untuk menguji dan menggunakan smart contract Anda!

Untuk membangun jaringan lokal penuh, Anda perlu menjalankan node lokal, domain Core-EVM, dan farmer.

Pertama, kunjungi halaman **[Subspace releases](https://github.com/subspace/subspace/releases)** dan mengunduh versi stabil terbaru dari node dan petani.

:::tip
Untuk setiap rilis, ada dua versi:

1. skylake: untuk prosesor yang lebih baru dari sekitar tahun 2015 dan seterusnya
2. x86-64-v2: untuk prosesor yang lebih lama dari sekitar tahun 2009 dan beberapa VM yang lebih tua

Prosesor / VM yang lebih lama tidak lagi didukung oleh rilis resmi, tetapi mereka masih bisa [compiled manually](https://github.com/subspace/subspace/blob/main/docs/development.md) jika diinginkan.
:::

Setelah mengunduh kedua berkas yang sesuai dengan sistem Anda, mulai sebuah hos menggunakan terminal pilihan Anda. Jika Anda ingin memulai domain EVM pada mesin lokal, Anda perlu menentukan:

- Port server RPC lokal Anda
- Port RPC soket web lokal Anda
Anda dapat melakukan ini dengan perintah berikut:

```bash
./your_subspace_node_path run --dev --rpc-listen-on 127.0.0.1:9944 -- --domain-id 3 --dev --rpc-listen-on 127.0.0.1:8545
```

Ini akan membuat RPC lokal pada port **8545**.

Kedua, Anda perlu memulai petani dengan menjalankan perintah berikut:

```bash
 ./your_subspace_farmer_path farm --reward-address [YOUR REWARD ADDRESS] path=tmp-farm,size=100M
```

Anda dapat menentukan ukuran petak yang diinginkan, tetapi 100 juta seharusnya sudah cukup.

**Dengan memulai **node lokal** dan **farmer**, Anda telah memiliki **RPC lokal** yang siap untuk menguji dan menerapkan kontrak pintar Anda! Anda dapat dengan mudah menghubungkan akun [MetaMask] (https://metamask.io/) Anda ke jaringan pengembangan lokal, serta menggunakan [Remix] (https://remix.ethereum.org/) atau [Foundry] (https://book.getfoundry.sh/) untuk menguji dan menerapkan smart contract di jaringan lokal! 
