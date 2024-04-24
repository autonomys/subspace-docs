---
title: Dasbor Grafana
sidebar_position: 2
description: Cara mengonfigurasi dasbor Grafana untuk simpul Jaringan Subruang
keywords:
    - node
    - farmer
    - monitoring
    - grafana
    - prometheus
---

# Dasbor Grafana

## Prasyarat

Instalasi pertama [Grafana](https://grafana.com/) dan [Prometheus](https://prometheus.io/) pada mesin Anda.

:::note
You can also use [Grafana Cloud](https://grafana.com/products/cloud/) instead of installing it locally.
:::

## Mengaktifkan metrik

Untuk mengaktifkan metrik, Anda harus memodifikasi argumen CLI node dan petani Anda dengan menambahkan opsi Prometheus:

untuk node:
`--prometheus-listen-on 127.0.0.1:9080`

untuk farmer:
`--metrics-endpoints 127.0.0.1:9081`

Untuk menerapkan perubahan, Anda perlu memulai ulang node dan farmer Anda. Anda kemudian harus memiliki kemampuan untuk mencapai metrik di `http://localhost:9080` dan `http://localhost:9081`.

## Mengkonfigurasi target Prometheus

Cari lokasi `prometheus.yml` dan tambahkan entri pekerjaan berikut di bawah `scrape_configs` bagian:
```
- job_name: "subspace"
  static_configs:
    - targets: ["localhost:9080"]
      labels:
        group: 'node'
    - targets: ["localhost:9081"]
      labels:
        group: 'farmer'
```
Pada mesin Linux, Anda biasanya dapat menemukan file `prometheus.yml` di jalur berikut: `/etc/prometheus/prometheus.yml`

Mulai ulang Prometheus dengan konfigurasi baru.

:::note
Prometheus dapat memuat ulang konfigurasinya tanpa memulai ulang dengan menggunakan sinyal SIGHUP. Jika Anda berjalan pada Linux, hal ini dapat dilakukan dengan menggunakan `kill -s SIGHUP <PID>`, mengganti `<PID>` dengan ID proses Prometheus Anda.
:::

## Mengkonfigurasi Grafana

Secara default, Grafana biasanya berjalan pada port 3000. Anda dapat mengakses Grafana dengan menavigasi ke URL berikut: `http://localhost:3000`.

Nama pengguna dan kata sandi default adalah `admin`.

Tambahkan Sumber Data Prometheus Anda:

![grafana-config.png](/img/doc-imgs/additional-guides/grafana-config.png)

Klik `Save & test` untuk menguji konfigurasi, jika semuanya baik-baik saja, Anda akan melihat pesan hijau "Sumber data berfungsi".

## Impor dasbor Grafana

Salin dan tempelkan file [Grafana Dashboard ID](https://grafana.com/grafana/dashboards/20433) `20433` dan klik `Load` untuk menyelesaikan impor:

![grafana-import.png](/img/doc-imgs/additional-guides/grafana-import.png)

Pilih `Prometheus` sebagai Sumber Data dan klik `Import`.

Pada titik ini, Anda seharusnya dapat memonitor node Anda.

![grafana-dashboard.png](/img/doc-imgs/additional-guides/grafana-dashboard.png)
