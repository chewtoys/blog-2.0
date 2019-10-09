---
title: Lesson Learned from Building Tokopedia Anniversary Microsite
slug: lesson-learned-from-building-tokopedia-anniv-microsite
date: '2019-08-29'
minute2read: 15
description: Lessons we learned as a team when building a microsite for Tokopedia 10th Anniversary
categories: [programming, lesson-learned]
cover: https://www.mazipan.xyz/content-images/lesson-learned-from-building-tokopedia-anniv-microsite/tokopedia-anniv.png
---

> *Disclaimer: Tulisan ini adalah pandangan pribadi saya, tanpa mewakili Tokopedia secara resmi. Semua pekerjaan di dalam artikel ini adalah hasil kerja tim, semua pujian saya sampaikan terhadap keseluruhan anggota tim yang terlibat. Artikel ini dibuat dengan tujuan pembelajaran bersama tanpa ada tujuan untuk menyudutkan pihak manapun.

## Inroduction

Tokopedia baru saja berulang tahun ke-10, dan untuk merayakannya kami meyiapkan satu *microsite* untuk sebagai perantara menyampaikan pesan kepada para pengunjung setia kami. Kalian bisa melihat halaman tersebut di alamat [https://www.tokopedia.com/ulang-tahun/ ↗️](https://www.tokopedia.com/ulang-tahun/).

Pada artikel ini, saya akan bercerita dari sisi *Engineering*, terutama pelajaran yang kami dapatkan dari proses pembangunan *microsite* tersebut.

Kami percaya kalau hampir setiap lingkungan kerja itu unik, banyak hal yang bisa dengan mudah kita aplikasikan pada suatu lingkungan namun pada lingkungan lain malah serasa susah, sangat susah atau bahkan tidak mungkin untuk dilakukan (*paling tidak pada saat ini). Pelajaran selalu bisa diambil dari setiap fase, bukan hanya dari hal sukses bisa juga dari kegagalan yang telah kita lalui. Tidak perlu malu karena telah mengerjakan sesuatu dengan salah, tapi pastikan kita tidak akan mengulangi hal salah yang sama di masa yang akan datang.

Pun dalam proses membangun *microsite* kali ini. Bagi yang belum tau *microsite*, ini merupakan jenis website yang ringan dan memiliki alur logika yang sederhana. *Microsite* biasanya merupakan webuah website yang independen dan terlepas dari produk utama. Ini dilakukan agar bisa memaksimalkan tujuan utama dari *microsite* itu sendiri yang diharapkan agar bisa cepat diubah, cepat diperbaiki, cepat dibangun tanpa harus terkait dengan produk utama yang biasanya memiliki level kompleksitas yang lebih tinggi.

Dan mari kita bicarakan berbagai hal baik dan buruk yang bisa kita pelajari bersama-sama dari proses pembangunan *microsite* ini.

## Screenshots

Sebelum membicarakan lebih lanjut, mungkin teman-teman perlu melihat sekilas tampilan dari *microsite* tersebut.

### Desktop Web UI

<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/lesson-learned-from-building-tokopedia-anniv-microsite/anniv-desktop.gif" alt="Desktop Web" height="200" width="200px">

### Mobile Web UI

<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/lesson-learned-from-building-tokopedia-anniv-microsite/anniv-mobile.gif" alt="Mobile Web" height="200" width="200px">

## Timeline

Kami perlu berikan catatan sebelumnya dari sisi waktu pembangunan *microsite* ini, projek ini dibuat dengan mengikuti ilmu *Sangkuriang* dimana diminta dibangun dalam waktu satu sprint yang tidak lebih dari dua minggu termasuk segala *ceremony* persiapan deployment yang harus selesai dalam waktu tersebut. Hal ini karena tentu saja tanggal ulang tahun Tokopedia tidak mungkin diundur, yang harus bisa menyesuaikan adalah *development time*.

## Fancy Website Requirement

Setelah turun *requirement* dari tim produk, ternyata website yang akan dibangun merupakan *microsite* yang sangat-sangat *fancy*. Penuh dengan animasi menarik pada saat *scroll down*. Belum cukup *microsite* ini juga bertaburan gambar dan beberapa video dimana-mana, beberapa malah berada pada lokasi yang kritis yang akan memaksa pengguna untuk memuat di masa-masa awal. Ok, *requirement* sudah terlihat dan tidak bisa digoyang lagi soal kemauan membuat *microsite* yang super *fancy* ini.

Sebagai *engineer*, pilihan kita adalah banyak berdoa 😂 semoga *microsite* ini tidak akan menimbulkan kegaduhan dan bisa tetap bertahan dihajar traffic yang menggila nantinya.

## Concern from SRE

Selain kebutuhan dari tim produk, ada juga kebutuhan lain dari tim SRE dimana direncanakan bahwa *microsite* ini akan menerima traffic yang cukup tinggi terutama menjelang hari H dimana hampir semua platfom Tokopedia akan meletakan tautan ke *microsite* ini pada halaman beranda mereka.

## Platform Usage

Dipastikan bahwa *microsite* ini akan diakses lewat peramban baik desktop maupun mobile, sehingga dua jenis ini harus bisa bekerja sama baiknya. Menyusul adalah platfom Apps baik Android maupun iOS yang akan menampilkan *microsite* ini lewat WebView mereka.

## Technology Base

Pada akhirnya *engineer* yang mengerjakan *microsite* ini memutuskan untuk menggunakan `jQuery` dibantu dengan pustaka [ScrollMagic ↗️](https://scrollmagic.io/) dan [GSAP - TweenMax ↗️](https://greensock.com/docs/TweenMax) untuk membangun berbagai animasi interaksi ketika pengguna melakukan *scroll down*.

Tentu saja pemilihan `jQuery` bukanlah hal yang biasa di Tokopedia, dimana para *engineer* sudah terlalu #React dan pastinya susah untuk diminta melakukan coding di `jQuery`. Tapi melihat pada kebutuhan dan waktu yang dipunya, sepertinya tidak ada pilihan lain selain berharap pada kehebatan jQuery melakukan *DOM manipulation*.

## Development Process

### Preparation, Monorepo and Deployment Strategi Plan

Maka dimulailah pengerjaan pembangunan *microsite* ini dengan dasar teknologi menggunakan `jQuery`. Sayangnya dengan technology stack seperti ini kami jadi tidak bisa menggunakan keuntungan development tools yang biasa kami gunakan sehari-hari, katakanlah sebelumnya kami terbiasa dimanjakan dengan kemampuan untuk deploy feature branch ke puluhan virtual machine tanpa perlu berebutan atau bergantian dengan engineer lain, yang sayangnya cara deployment seperti ini masih sangat *couple* dengan technology stack dan folder structuring pada monorepo utama kami. Kami juga jadi tidak bisa memanfaatkan berbagai kemampuan hebat webpack seperti melakukan hot reload pada saat development, mengerjakan kompresi pada berkas, menyatukan berbagai berkas, memberikan hash pada nama berkas, menyisipkan environment variable, serta banyak hal yang biasanya kami kerjakan namun sangat bergantung pada webpack.

Kami punya pilihan untuk mengerjakan sebagai *microsite* statis yang tinggal cemplung saja ke CDN ketika proses deployment, tapi setelah berkonsultasi dengan berbagai pihak yang lebih berkompetensi pada akhirnya pilihan sederhana seperti ini tidak jadi kami ambil dengan pertimbangan kami tidak ingin projek ini menjadi contoh buruk dan bisa dijadikan alasan di masa yang akan datang untuk melakukan deployment semau sendiri tanpa mengikuti kaidah dan kebiasaan kita. Pun melihat bahwa kami memang belum punya platform yang baik ketika membutuhkan projek-projek seperti ini, maka kami putuskan untuk membuat projek ini bisa lebih baik dibandingkan sekedar projek sekali pukul menjadi projek yang bisa menjadi platform bagi banyak *microsite* semacam ini kedepannya, sehingga diharapkan bila ada lagi projek serupa di masa depan, kami cukup mengikuti kaidah dan arsitektur yang sudah dibuatkan pada projek ini.

Mengingat kemampuan deployment branch fitur kami yang masih sangat *couple* dengan struktur monorepo yang ada, maka kami putuskan pada saat itu bahwa projek ini pun harus bisa melakukan hal yang sama agar *engineer* bisa lebih mudah melakukan deployment tanpa harus merging branch ke satu branch utama. Hal ini menjadikan kami menempatkan projek ini sebagai bagian dari repository monorepo kami.

### CSS Pre-procesor

Menggunakan `jQuery` memang bukanlah halangan untuk tidak menggunakan webpack, dengan pengalaman kami selama ini menggunakan webpack maka bukan hal yang begitu sulit untuk membuatkan konfigurasi webpack untuk projek yang bahkan berbasiskan `jQuery`. Di projek lain kami, hampir semuanya menggunakan `Less` sebagai CSS Pre-processor sehingga kami pun meminta *engineer* untuk melakukan konversi dari yang sebelumnya menggunakan `SASS` menjadi `Less` agar bisa seragam dengan kebiasaan kami.

### HTML and Image Processing

Hal berikutnya yang menjadi tantangan adalah pada *image processing*, jika pada projek React hal seperti mudah saja ditangani oleh webpack maka pada projek statis seperti ini menjadi tantangan tersendiri karena image yang ada tidak melalui entry point JavaScript yang kami sematkan pada webpack melainkan langsung disematkan pada file HTML. Menjadi semakin runyam karena kami menggunakan `publicPath` yang berbeda antara proses development dengan rencana di production nantinya, menggunakan static absolute path tentu bukan pilihan yang bisa diambil.

Untuk `publicPath` pada akhirnya bisa diselesaikan dengan mengirimkan parameter di [HTMLWebpackPlugin ↗️](https://webpack.js.org/plugins/html-webpack-plugin/) yang kami gunakan, sedangkan masalah *image processing* kami memutuskan untuk membuat WebpackPlugin sendiri khusus untuk menghandle projek ini. Plugin sederhana, hanya membaca semua image yang ada meskipun tidak melalui entry point JavaScript untuk kemudian di proses seperti pemberian hash pada nama file. Kami sempat juga mencoba menggunakan [ImageWebpackLoader ↗️](https://github.com/tcoopman/image-webpack-loader) pada hari-hari terakhir untuk melakukan kompresi otomatis yang sayangnya ternyata image hasil dari loader ini tidak bisa di render dengan baik oleh browser berbasiskan Safari (hal terakhir ini kita *revert*).

### Node.js Things

Seperti kebanyakan projek kami yang lain yang menempatakan Node.JS di bagian paling depan sebagai pelayan bagi file HTML kami, projek inipun menempatkan Node.js sebagai pelayan utama dibagian depan. Sayangnya dengan cara ini, kita tidak bisa berharap kalau projek ini bisa bertahan dengan traffic yang tinggi, pun hal ini sudah terdeteksi pada saat Load Test dilakukan. Meskipun kami sebenarnya bisa menutup mata akan hal ini, karena pada dasarnya Server yang ada sudah bisa *auto scale up* dan *auto scale down*. Namun sebagai *engineer* kami harus memikirkan solusi yang lebih *proper* dibandingkan mengharapkan proses *auto scale* bisa berjalan lancar.

### Rendering Priority

Hal menantang pada projek dengan banyak image dan video adalah penanganan dan prioritas loading berbagai assets. Bukan hal yang mudah memastikan asset-asset yang pertama kali di request hanyalah asset-asset yang benar-benar kritis dan benar-benar dibutuhkan. Kami harus berulang kali mengecek satu persatu assets yang diminta pada berbagai platform. Awalnya *engineer* attach pada scroll dan resize event untuk melakukan deteksi visibility sebuah element image (*tentu dengan cara-cara `jQuery`), hal ini sudah tidak relevan ketika kita bisa dengan percaya diri menggunakan IntersectionObserver di production, makanya kami memutuskan untuk membuat ulang cara deteksi visibility dari sebuah image menggunakan VanillaJS dan IntersectionObserver.

### Aggressive Cache Usage

Kami memutuskan untuk menggunakan *Cache* secara agresif di beberapa level setelah dipertimbangkan soal tidak akan adanya perubahan lagi pada saat projek ini sudah di release nantinya. Di ALB kami menempatkan cache, di CDN kamipun memastikan semua sudah di cache, di Node.js kami juga menempatkan memory cache sehingga processing time bisa dipangkas ketika sebuah request masih sampai ke Node.js.

### Third Party Tracker

Penyakit terakhir yang sampai pada hari H tidak berhasil disembuhkan adalah penggunaan third-party yang tidak tepat guna. Kami menggunakan GTM sebagai pusat dari third-party tracking, yang ternyata ada banyak script yang ditanam di semua halaman termasuk halaman-halaman yang belum tentu membutuhkan spesifik script tersebut.

### Service Worker


Desktop web Tokopedia belum memasang Service Worker dengan tujuan yang benar, sehingga ketika kita berharap ada cache juga di level client browser belum bisa terwujud dengan kondisi sekarang. Memasang Service Worker di root URL Tokopedia jelas terlalu beresiko. Karenanya kami memutuskan untuk memasang Service Worker hanya pada scope `/ulang-tahun/`. Masalah kemudian timbul karena ternyata path yang digunakan di awal-awal tidak memiliki slash penutup yakni `/ulang-tahun` sehingga scope Service Worker tidak pernah bisa ketemu dan gagal terpasang dengan benar. Setelah berdiskusi dengan tim SEO dan tim Infrastruktur maka dibolehkan untuk melakukan *redirection* pada path `/ulang-tahun` ke `/ulang-tahun/`. Dengan begini, Service Worker bisa terpasang tanpa peduli pengguna datang dengan URL yang pertama maupun kedua.

Untuk membuat Service Worker kami menggunakan [Workbox ↗️](https://developers.google.com/web/tools/workbox/) agar lebih mudah pada saat melakukan kontrol pada *caching strategy* sesuai yang kami harapkan. Terdapat sedikit galat pada kami mencoba melakukan caching pada file video yang berformat `.webm` maupun `.mp4` di spesifik browser Safari, setelah ditelusuri ternyata hal ini memang galat yang sudah diketahui dan sudah ada solusinya, yakni dengan memasang pustaka [workbox-range-requests ↗️](https://developers.google.com/web/tools/workbox/modules/workbox-range-requests) pada berkas Service Worker.

## Known Issues

- Tidak melakukan dynamic image serving based on device, jadi kami masih menyajikan gambar dengan ukuran yang sama yang sama antara desktop dengan device mobile
- Beberapa gambar masih ada di kritikal rendering path meskipun below the fold
- Untuk device mobile iOS, kami melakukan *switch-off* pada fitur lazy loading image. Hal ini menyebabkan pengguna iOS akan butuh waktu lebih lama dalam memuat halaman tersebut

## Lessons Learned

- Tidak semua website harus *fancy*, karena biasanya *fancy website* membutuhkan banyak DOM manipulation dan pilihan untuk ini biasanya berujung pada `jQuery`. Pastikan ada alasan yang jelas dan masuk akal soal permintaan membuat *fancy* website.
- Setiap projek haruslah memiliki visi kedepan, seperti pada projek ini kami memproyeksikan sebagai platform untuk projek-projek lain serupa.
- Tidak perlu malu menggunakan teknologi lama, selama bisa dipelihara dengan baik dan menyelesaikan masalah kalian.
- Setiap keputusan dalam pemilihan teknologi selalu memiliki *trade-off*, pastikan kalian memahami baik dan buruknya.
- Melakukan kesalahan bukanlah hal yang haram dalam startup yang memiliki *hyper growth*, pastikan kita belajar dari setiap kesalahan yang dialami.
- GTM (Google Tag Manager) bisa jadi sangat *powerfull*, tapi bisa jadi beban besar ketika tidak dikelola dengan tepat guna.

### May useful for you...
