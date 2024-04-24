---
title: Masalah Umum
sidebar_position: 6
description: Masalah umum dan cara mengatasinya
keywords:
- Error
- Problem
- Isu
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';


Meskipun Subspace berusaha merilis perangkat lunak bebas bug, pengguna mungkin mengalami beberapa kesalahan. Beberapa di antaranya bisa diabaikan dengan aman, sementara yang lain memerlukan perhatian.


# Masalah Umum dan Cara Mengatasinya


### Kesalahan saat menelepon telemetri dns
```
Error while dialing /dns/telemetry.subspace.network/tcp/443/x-parity-wss/%2Fsubmit%2F
Custom { kind: Other, error: Timeout }
```
Kesalahan ini terkait hanya dengan server telemetri. Ini sesuatu yang kadang-kadang bisa terjadi, tetapi tidak memengaruhi penanaman. Anda bisa mengabaikannya dengan aman.


### Petani terjebak pada plotting, tidak ada kemajuan yang dibuat dalam beberapa jam
Coba restart node atau petani Anda. Kami perhatikan bahwa kadang-kadang, saat membuat plot yang lebih besar, proses tersebut mungkin terlihat terhenti, tetapi secara otomatis akan berlanjut setelah beberapa waktu.


### Instruksi ilegal (inti ditumpahkan)


Kesalahan ini disebabkan oleh CPU lama tanpa dukungan instruksi yang diperlukan (misalnya, ADX 4). Dapat diperbaiki dengan mengkompilasi perangkat lunak dari sumber pada mesin tersebut.


Meskipun prosesor tanpa instruksi ADX didukung, kinerja mereka akan terpengaruh secara signifikan dibandingkan dengan prosesor yang mendukung instruksi ADX.


Sebagian besar prosesor desktop modern mulai dari Broadwell di sisi Intel dan Ryzen (ZEN 1) di sisi AMD mendukung dukungan instruksi ADX yang diperlukan dan seharusnya tidak terpengaruh oleh kesalahan ini.


### Tidak ada reward setelah beberapa hari penanaman



Pastikan untuk:
- Gunakan rilis stabil terbaru kami, seperti yang ditunjukkan di [rilis Github kami](https://github.com/subspace/space-acres/releases)
- Verifikasi bahwa petani Anda ada dan pada blok tertinggi di [server telemetri kami](https://telemetry.subspace.network/)
- Verifikasi saldo Anda menggunakan [penjelajah Polkadot](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-0.gemini-3g.subspace.network%2Fws#/explorer)

:::note
Pastikan untuk memilih testnet yang benar dalam dropdown dan tab, misalnya gemini-3g
:::


### Pemulihan kehilangan potongan gagal


```
ERROR single_disk_plot{disk_farm_index=0}:
subspace_farmer_components::segment_reconstruction: Recovering missing piece failed. missing_piece_index=135
```


Ini bukan kesalahan penting dan bisa diabaikan.


### Kesalahan konsensus impor blok


```
Error importing block "block_number", consensus error: Import failed: Database
```


PC Anda kemungkinan kehabisan ruang. Pertimbangkan untuk membebaskan sebagian ruang dengan menghapus file yang tidak perlu, lalu coba lagi. Atau, Anda dapat menyesuaikan jumlah plot untuk cocok dengan ruang disk yang tersedia.


### Tidak dapat membuat blok di slot. Tidak ada header blok terbaik


```
Unable to author block in slot. No best block header: Chain lookup failed: Failed to get header for hash
```


PC Anda kemungkinan kehabisan ruang. Pertimbangkan untuk membebaskan sebagian ruang dengan menghapus file yang tidak perlu, lalu coba lagi. Atau, Anda dapat menyesuaikan jumlah plot untuk cocok dengan ruang disk yang tersedia.


### Tidak dapat membuat blok di slot. Tidak ada header blok terbaik

Ketika ukuran database bertambah dan blok menjadi lebih besar (saat petani mulai menghasilkan suara), diharapkan kecepatan sinkronisasi akan menurun pada angka yang lebih kecil. Kami telah melakukan beberapa peningkatan kinerja di Gemini 3e dan akan melakukan lebih banyak penyesuaian kinerja ketika protokol telah selesai secara fungsional.


### subspace_farmer::single_disk_plot::piece_receiver: Tidak dapat memperoleh bagian dari DSN.


```
subspace_farmer::single_disk_plot::piece_receiver: Couldn't get a piece from DSN. Retrying... piece_index=57
```


Ini bukan bug melainkan peringatan, ini adalah sesuatu yang diharapkan pada Jaringan Penyimpanan Terdesentralisasi. Anda tidak perlu melakukan apa pun terhadap peringatan ini, kemungkinan besar peringatan ini akan muncul sesekali, tetapi selama tidak ada kesalahan lain yang lebih berbahaya, peringatan ini dapat diabaikan.


### Kesalahan impor blok: Potensi serangan jarak jauh: blok tidak dalam rantai yang diselesaikan.


```
WARN sc_service::client::client: Block import error: Potential long-range attack: block not in finalized chain.
```
Node tersebut entah bagaimana berakhir di percabangan, coba hapus dan mulai dari awal.

### Masih Menghadapi Masalah? Lihatlah forum kami di bawah ini

<iframe src="https://forum.subspace.network/search?expanded=false&q=tags%3Afaq%20order%3Alatest" width="100%" height="600px" frameborder="0" scrolling="auto"></iframe>

