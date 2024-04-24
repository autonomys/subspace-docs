---
title: Foundry - pengujian dan penerapan
sidebar_position: 7
description: Menguji dan Menerapkan Kontrak Cerdas menggunakan Foundry
keywords:
  - subspace network
  - book getfoundry
  - foundry
---

### Menguji dan menerapkan kontrak pintar menggunakan [Foundry](https://book.getfoundry.sh/)
---

1. Gunakan penginstalasi rantai alat `foundryup`
 ```bash
 curl -L https://foundry.paradigm.xyz | bash
 ```
 Ini akan menginstal `foundryup`, kemudian cukup ikuti instruksi pada layar, yang akan membuat perintah foundryup tersedia di CLI Anda.
 Menjalankan `foundryup` dengan sendirinya akan menginstal binari terbaru yang sudah dikompilasi: `forge`, `cast`, `anvil`, dan `chisel`. Lihat `foundryup --help` untuk opsi lainnya.

 :::note
 Jika Anda menggunakan Windows, Anda harus menginstal dan menggunakan [Git BASH](https://gitforwindows.org/) atau [WSL](https://learn.microsoft.com/en-us/windows/wsl/install), sebagai terminal Anda, karena Foundryup saat ini tidak mendukung `PowerShell` atau `Cmd`.
 :::

2.  Setelah terinstal, buatlah sebuah proyek. Beri nama `hello_subspace`.

    Untuk menginisialisasi proyek, jalankan 
    ```bash
    forge init hello_subspace
    ```
    cd ke dalam direktori `hello_subspace` dan mari kita lihat struktur proyek.

    ![Foundry-1](/img/developers/Foundry-1.png)

3. Semua struktur repo yang diperlukan dibuat secara otomatis, sehingga kita dapat mulai menulis dan menguji smart contract kita segera. Seperti yang dapat Anda lihat, ada direktori terpisah untuk menyimpan smart contract (src) dan menguji smart contract (test).
    Mari kita lihat smart contract `Counter.sol` dan tambahkan beberapa fungsi lagi ke dalam perilaku standar. Smart contract kita akan memiliki tiga fungsi: `setNumber()` yang menetapkan angka uint256 ke nilai yang disediakan, `increment()` yang menambah nilai sebesar 1 dan `decrement()` yang mengurangi nilai sebesar 1.

    ```
    // SPDX-License-Identifier: UNLICENSED
    pragma solidity ^0.8.13;

    contract Counter {
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

4. Mari kita pastikan bahwa semua fungsi bekerja dengan baik dengan menambahkan beberapa tes ke file tes `Counter.t.sol` dan periksa apakah tes tersebut lulus.

    ```
    // SPDX-License-Identifier: UNLICENSED
    pragma solidity ^0.8.13;

    import "forge-std/Test.sol";
    import "../src/Counter.sol";

    contract CounterTest is Test {
        Counter public counter;

        function setUp() public {
            counter = new Counter();
            counter.setNumber(2);
        }

        function testIncrement() public {
            counter.increment();
            assertEq(counter.number(), 3);
        }

        function testSetNumber(uint256 x) public {
            counter.setNumber(x);
            assertEq(counter.number(), x);
        }

        function testDecrement() public {
            counter.decrement();
            assertEq(counter.number(), 1);
        }
    }
    ```


5. Dalam pengujian kami, pertama-tama kami menetapkan nilai awal angka menjadi dua, kemudian memeriksa apakah fungsi `increment()` meningkatkan nilai sebesar 1 dan jika `decrement()` mengurangi nilai sebesar 1.
    Mari kita buat sebuah proyek dengan menjalankannya: 

    ```bash
    forge build
    ```

    dan memastikan bahwa pengujian bekerja seperti yang diharapkan dengan menjalankan 

    ```bash
    forge test
    ```

    ![Foundry-2](/img/developers/Foundry-2.png)

    Bagus, semua tes lulus, yang berarti kontrak pintar bekerja seperti yang diharapkan.

6. Selanjutnya, ada **dua hal** yang perlu kita atur, untuk **menerapkan kontrak pintar kita**:
    - Kita perlu menghubungkan dompet yang memiliki saldo TSSC yang cukup untuk menutupi biaya gas.
    - Kita perlu mengatur variabel lingkungan yang akan kita gunakan nanti.

    Untuk mempermudah pekerjaan kita, mari kita buat file `Makefile` dan juga file `.env` baru di root proyek kita.
    File `.env` biasanya digunakan untuk menyimpan variabel lingkungan untuk aplikasi Anda. File ini sangat berguna untuk mengelola pengaturan yang berubah di antara lingkungan penerapan (misalnya, pengembangan, pengujian, pementasan, dan produksi), dan untuk menyimpan informasi sensitif.

    Variabel lingkungan dapat mencakup detail koneksi basis data, kunci API, URI sumber daya eksternal, atau variabel konfigurasi lain yang mungkin berubah tergantung pada lingkungan tempat aplikasi berjalan. Dalam kasus kita, kita akan menggunakannya untuk mengarahkan ke url RPC Core-EVM kita dengan mengatur

    ```bash
    RPC_URL=https://nova.gemini-3g.subspace.network/ws
    ```

    Dan kemudian atur kunci pribadi untuk dompet yang kompatibel dengan EVM

    ```bash
    PRIVATE_KEY=”your_private_key_value”
    ```
    
    :::tip
    Penting untuk dicatat bahwa file .env tidak boleh dikomit ke kontrol sumber (seperti Git), terutama jika mengandung data sensitif, seperti kunci pribadi Anda. Untuk mencegah hal ini, tambahkan .env ke file .gitignore Anda. Ini membantu menjaga kunci sensitif tetap aman dan menghindari risiko mengeksposnya dalam kode aplikasi atau riwayat kontrol versi.
    :::

    Di dalam Makefile, mari kita buat pintasan ke fitur-fitur utama aplikasi

    ```bash
    # include .env file and export its env vars
    -include .env

    # Builds
    build:
	    @forge clean && forge build --optimize --optimizer-runs 1000000

    # Deployment
    deploy:
	    @forge create Counter --private-key ${PRIVATE_KEY} --rpc-url ${RPC_URL}
    ```

    Kita mengimpor nilai untuk `PRIVATE_KEY` dan `RPC_URL` dari berkas `.env`.

    Hal ini memungkinkan kita untuk menjalankan `make build` untuk membangun proyek dan `make deploy` untuk men-deploy proyek yang mengarah ke RPC yang disediakan dan menggunakan private_key yang disediakan.

    Mari kita jalankan 

    ```
    make build
    ```

    untuk memastikannya berfungsi dengan baik.

    ![Foundry-3](/img/developers/Foundry-3.png)

7. Untuk menerapkan kontrak Anda menggunakan **`RPC`** dan **`PRIVATE_KEY`** yang ditentukan, jalankan saja

    ```
    make deploy
    ```
    
    :::caution
    Jangan mencoba untuk mempercepat transaksi (jangan menyertakan tip di atas biaya bensin). Untuk membaca lebih lanjut mengenai hal ini, silakan lihat [this section](quick_start.md#important-note-about-submitting-the-transaction).
    :::

8. **Selamat.**, Anda telah berhasil menerapkan kontrak pintar Anda di Subspace EVM! 
