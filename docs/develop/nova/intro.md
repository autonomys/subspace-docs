---
title: Pendahuluan
sidebar_position: 1
description: Panduan pengembang untuk Jaringan Subspace
keywords:
    - Getting Started
    - Learn
    - Farming
    - Development
---

# Panduan Pengembang
---
Subspace adalah blockchain yang aman, dapat diskalakan, dan terdesentralisasi yang menyelesaikan **[blockchain trilemma](https://vitalik.ca/general/2017/12/31/sharding_faq.html#this-sounds-like-theres-some-kind-of-scalability-trilemma-at-play-what-is-this-trilemma-and-can-we-break-through-it)** tanpa membuat kompromi. Panduan ini akan membahas beberapa aspek utama Subspace, jika Anda ingin mempelajari lebih lanjut tentang teknologi di balik Subspace, lebih baik merujuk ke [Whitepaper - _Full-Length_](https://assets.website-files.com/61526a2af87a54e565b0ae92/617759c00edd0e3bd279aa29_Subspace_%20A%20solution%20to%20the%20farmer%27s%20dilemma.pdf) atau [Whitepaper - _Summarized_](https://subspace.network/news/subspace-network-whitepaper)

## Apa yang membuat protokol Subspace Network berbeda?
---
Beberapa protokol blockchain baru, yang dirancang agar lebih efisien, adil, dan terdesentralisasi, menggunakan sebuah sistem yang disebut Proof-of-Capacity (PoC) yang memprioritaskan penambagan intensif penyimpanan daripada penambangan intensif komputasi. Akan tetapi, hal ini menimbulkan sebuah tantangan yang dikenal sebagai dilema petani, di mana pengguna harus memutuskan apakah akan mengalokasikan penyimpanan mereka yang terbatas untuk menjaga status dan riwayat blockchain, atau menggunakannya untuk konsensus. Hal ini dapat mengarah pada sentralisasi farming di antara beberapa operator tepercaya. Subspace, sebuah blockchain Proof-of-Archival-Storage (PoAS) yang baru, menyelesaikan masalah ini dengan mengizinkan para petani untuk menyimpan riwayat blockchain secara kolektif, memisahkan proses konsensus dan perhitungan. Hal ini menghasilkan pengurangan biaya overhead dan memfasilitasi partisipasi oleh pengguna biasa, bahkan dalam model eksekusi yang kompleks.

Eksekusi yang terpisah membuat farming tetap ringan dan tahan terhadap penggabungan, sementara jaringan penyimpanan petani memungkinkan blockchain untuk menskalakan secara besar-besaran tanpa menjadi terpusat.

![Intro-1](/img/developers/Intro-1.png)

## Apa yang dimaksud dengan Penyimpanan Bukti Arsip?
---
Di Subspace, kami menerapkan protokol Penyimpanan Bukti Arsip berdasarkan yang berikut ini:
- Protokol konsensus Nakamoto (atau rantai terpanjang)
- Menggunakan teka-teki sumber daya bukti-kapasitas untuk resistensi Sybil yang terikat ruang
- Ruang tersebut mencerminkan beberapa penyimpanan yang berguna (seperti pada Proof-of-Replication)
- Dan data spesifik yang direplikasi adalah riwayat arsip dari rantai Subspace

Dalam bentuk yang paling sederhana, konsensus Proof-of-Archival-Storage kami adalah protokol 3 fase:
- **Fase pengarsipan**: dengan adanya blok-blok baru pada rantai, buatlah sejarah kanonik.
- **Fase perencanaan**: diberikan sejarah kanonik blockchain, buat replika unik (plot) dan simpan pada disk.
- Fase konsensus**: diberikan sebuah tantangan dari sebuah mercusuar keacakan yang aman, audit plot untuk sebuah solusi yang memenuhi ambang batas, kembalikan bukti, dan ajukan sebuah blok.

Jika Anda ingin membaca lebih lanjut tentang konsensus kami, [here] (https://blog.subspace.network/dilithium-the-subspace-consensus-v2-3c5df0759e72) adalah rangkuman yang bagus yang ditulis oleh salah satu peneliti kami, Dariia Porechna.

## Beberapa kata tentang protokol konsensus Subspace **Dilithium**
---
Ketika kami bertransisi ke konsensus Dilithium v2, kami menyadari peran penting skema polinomial yang akan dimainkan di era desain blockchain berikutnya, seperti halnya fungsi hash, pohon Merkle, dan tanda tangan ECC pada dekade sebelumnya. Subspace memiliki kemampuan khusus untuk menggunakan skema ini secara efektif karena konsensus proof-of-archival-storage (PoAS) kami, yang memungkinkan loop umpan balik yang dapat diatur sendiri untuk biaya penyimpanan, sehingga membantu kami menyesuaikan dengan permintaan. Hal ini memungkinkan kami untuk memanfaatkan skema polinomial untuk penskalaan ruang blok linier yang sebanding dengan jumlah peserta jaringan. Kami secara khusus menggunakan pengkodean penghapusan Reed-Solomon dan komitmen Kate-Zaverucha-Goldberg (KZG) dalam konsensus v2 kami, yang memungkinkan pemulihan dan otentikasi data yang efisien.

Ketika mengarsipkan sejarah Subspace, kami mengganti akar Merkle dengan komitmen KZG. Petani kemudian dapat memberikan bukti Kate berukuran konstan kepada klien Distributed Storage Network (DSN) sebagai saksi untuk ruang penyimpanan arsip yang dijaminkan. Kami membangun bukti replikasi umum (PoR) dari skema RS-KZG dan memperluasnya menjadi bukti penyimpanan arsip yang sangat sederhana dan efisien (PoAS).

## Apakah sulit untuk membangun aplikasi di Subspace Network?
---

Tujuan utama kami adalah untuk mempertahankan penghalang minimum untuk masuk bagi petani dan pengembang kami. Pemasangan node Subspace Network dapat dilakukan dalam waktu kurang dari 15 menit dan kompatibel dengan beragam sistem komputer karena persyaratan minimum perangkat keras yang sangat mudah diakses.

Dalam hal pengembangan di Subspace Network, kami menawarkan berbagai opsi yang fleksibel. Saat ini, Anda dapat menggunakan beberapa domain Ethereum Virtual Machine (EVM) kami untuk mendapatkan pengalaman yang familiar. Dalam waktu dekat, kami juga akan menyediakan fungsionalitas bagi Anda untuk membuat mesin virtual khusus lokal Anda sendiri jika itu yang Anda inginkan. Kami bangga dengan kemungkinan tak terbatas yang kami sediakan - tidak ada batasan!
