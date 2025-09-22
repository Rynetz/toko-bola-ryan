<h3>Nama: Muhammad Indi Ryan Pratama</h3>
<h3>NPM: 2406432160</h3>
<h3>Kelas: PBP F</h3>
<h3>Nama Proyek: toko_bola_ryan</h3>

<h1>Tugas 2 </h1>
<h1>1. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).</h1>
Saya membuat repository baru di GitHub dengan nama tugas-individu-2, lalu menyambungkan reponya ke repo lokal dengan nama yang sama dengan command git init. Setelah itu, saya membuat sekaligus mengaktifkan virtual environment agar terpisah dari proyek lain, kemudian menginstal semua dependencies yang diperlukan. Selanjutnya, saya membuat proyek Django bernama toko_bola_ryan, lalu menambahkan konfigurasi untuk lingkungan development maupun production menggunakan file .env dan .env.prod, serta menyesuaikan file settings.py untuk pengaturan akses.
Kemudian, saya membuat aplikasi main di dalam direktori coach-gear dengan perintah python manage.py startapp main dan mendaftarkannya ke proyek toko_bola_ryan. Pada aplikasi tersebut, saya menambahkan folder templates dan membuat file main.html sebagai bagian dari Tugas 2. Setelah itu, saya mengatur routing di toko_bola_ryan/urls.py agar terhubung ke aplikasi main, serta membuat fungsi show_main di main/views.py untuk menampilkan template berisi nama aplikasi, npm, nama, dan kelas. Untuk melengkapinya, saya juga menambahkan file main/urls.py sebagai pemetaan fungsi show_main ke aplikasi.
Berikutnya, saya membuat model Product dengan atribut id (UUIDField), name (CharField), price (IntegerField), description (TextField), thumbnail (URLField), category (CharField), dan is_featured (BooleanField). Setelah model selesai, saya membuat project baru di PWS dan menyesuaikan environment dengan .env.prod. Pada settings.py, saya juga menambahkan URL deployment muhammad-indi41-toko-bola-ryan.pbp.cs.ui.ac.id. Setelah itu, saya menjalankan perintah python manage.py makemigrations dan python manage.py migrate untuk menyiapkan database.
Terakhir, saya menghubungkan repository dengan PWS, menjalankan project command, melakukan build, dan mendorong kode dengan perintah git push pws master untuk melakukan deployment.

<h1>2. Buatlah bagan yang berisi request client ke web aplikasi berbasis Django beserta responnya dan jelaskan pada bagan tersebut kaitan antara 'urls.py', 'views.py', 'models.py', dan berkas html.</h1>
<img width="1023" height="414" alt="Screenshot 2025-09-10 at 02 46 48" src="https://github.com/user-attachments/assets/fd46db6a-f3ee-4dcd-a1e2-3743288cd726" />
Saat client mengirimkan HTTP request ke server Django, sistem akan memeriksa urls.py untuk mencocokkan permintaan dengan pola URL yang sudah ditentukan. 
File ini berfungsi sebagai pengatur jalur (routing) yang menghubungkan URL tertentu dengan fungsi pada aplikasi main.
Setelah pola URL ditemukan, permintaan diteruskan ke views.py, yang berperan menjalankan logika aplikasi seperti sebuah fungsi.
Pada tahap ini, views.py bisa mengambil atau memproses data melalui models.py, yaitu komponen yang menangani pengelolaan data aplikasi dengan basis data.
Setelah data yang diperlukan tersedia, views.py akan mengirimkannya ke template HTML untuk dirender.
Hasil render inilah yang kemudian dikirim kembali ke client dalam bentuk response HTML, dan ditampilkan di browser.

<h1>3. Jelaskan peran 'settings.py' dalam proyek Django!</h1>
settings.py merupakan file konfigurasi utama dalam proyek Django yang menyimpan seluruh pengaturan inti, mulai dari konfigurasi database, daftar aplikasi di INSTALLED_APPS, pengaturan ALLOWED_HOSTS, hingga opsi tambahan untuk keperluan deployment.
Secara sederhana, file ini menjadi pusat kontrol yang menentukan cara sebuah proyek Django dijalankan, baik pada lingkungan pengembangan maupun produksi.

<h1>4. Bagaimana cara kerja migrasi database di Django?</h1>
Migrasi di Django adalah mekanisme untuk memastikan struktur database tetap selaras dengan definisi model pada aplikasi. Saat kita menambah, mengubah, atau menghapus atribut di dalam models.py, Django tidak langsung mengubah database, melainkan membuat file migrasi sebagai catatan berisi instruksi perubahan skema.
Proses ini dimulai dengan menjalankan python manage.py makemigrations, yang akan membandingkan kondisi model terbaru dengan migrasi sebelumnya lalu menghasilkan file migrasi baru.
File tersebut belum mengubah database, melainkan hanya mendokumentasikan rencana perubahan. Selanjutnya, perintah python manage.py migrate digunakan untuk mengeksekusi file migrasi dengan menerjemahkannya menjadi query SQL sesuai database yang dipakai.
Dengan cara ini, setiap perubahan pada model dapat diterapkan secara bertahap, terkelola dengan baik, dan memungkinkan rollback atau pengulangan bila diperlukan.

<h1>5. Menurut Anda, dari semua framework yang ada, mengapa framework Django dijadikan permulaan pembelajaran pengembangan perangkat lunak?</h1>
Menurut saya, Django dipilih sebagai framework awal untuk belajar karena sudah lama digunakan di berbagai perusahaan dan terbukti stabil. 
Basis bahasanya juga adalah Python, bahasa yang sudah saya pelajari sejak semester pertama, sehingga lebih mudah untuk dipahami. Django juga termasuk framework yang menangani sisi backend sekaligus menyediakan fitur templating untuk menampilkan HTML di frontend. 
Dengan begitu, Django menjadi pilihan yang tepat untuk memahami proses pengembangan perangkat lunak secara utuh, mulai dari pengelolaan data hingga penyajian tampilan ke pengguna.

<h1>6. Apakah ada feedback untuk asisten dosen tutorial 1 yang telah kamu kerjakan sebelumnya?</h1>
Tidak ada. Sejauh ini asdos telah menjelaskan tutorial 1 secara jelas sehingga saya dapat memahaminya.


<h1>Tugas 3</h1>
<h1>1. Jelaskan mengapa kita memerlukan data delivery dalam pengimplementasian sebuah platform?.</h1>
Dalam pengimplementasian sebuah platform, data delivery diperlukan agar pertukaran informasi antar pengguna dan sistem berjalan lancar. Misalnya saat pengguna melakukan transaksi, data harus segera diteruskan ke server, divalidasi, lalu diterima oleh pihak terkait tanpa hambatan. Tanpa mekanisme data delivery yang baik, proses bisa terlambat, tidak akurat, atau bahkan gagal. Karena itu, data delivery penting untuk menjaga kecepatan, keandalan, dan kepercayaan pengguna terhadap platform.

<h1>2. Menurutmu, mana yang lebih baik antara XML dan JSON? Mengapa JSON lebih populer dibandingkan XML?</h1>
Menurut saya, JSON lebih unggul dibandingkan XML karena strukturnya lebih sederhana, ringan, dan mudah dibaca baik oleh manusia maupun mesin. JSON tidak memerlukan tag pembuka dan penutup yang panjang seperti XML sehingga ukuran data menjadi lebih kecil dan proses pengiriman lebih efisien. Selain itu, JSON terintegrasi secara alami dengan JavaScript dan mudah digunakan di hampir semua bahasa pemrograman modern, membuatnya lebih praktis dalam pengembangan API. Sementara XML masih relevan pada sistem lama atau kebutuhan dengan validasi data yang kompleks, popularitas JSON jauh lebih tinggi karena kesederhanaan dan kecepatan yang ditawarkannya dalam pertukaran data di web.

<h1>3. Jelaskan fungsi dari method is_valid() pada form Django dan mengapa kita membutuhkan method tersebut?</h1>
Method is_valid() pada form Django berfungsi untuk memeriksa apakah data yang dikirimkan melalui form sesuai dengan aturan validasi yang sudah ditentukan, baik dari sisi field bawaan Django (misalnya tipe data, panjang maksimal, apakah field wajib diisi) maupun validasi tambahan yang kita definisikan sendiri di dalam form.

<h1>4. Mengapa kita membutuhkan csrf_token saat membuat form di Django? Apa yang dapat terjadi jika kita tidak menambahkan csrf_token pada form Django? Bagaimana hal tersebut dapat dimanfaatkan oleh penyerang?</h1>
Kita membutuhkan csrf_token saat membuat form di Django karena token ini berfungsi sebagai perlindungan terhadap serangan Cross-Site Request Forgery (CSRF). Serangan CSRF terjadi ketika penyerang mencoba membuat pengguna yang sudah login di suatu aplikasi secara tidak sadar mengirimkan permintaan berbahaya, misalnya mengubah password, menghapus data, atau melakukan transaksi, hanya dengan mengarahkan korban membuka link atau halaman yang berisi form tersembunyi.

<h1>5. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).</h1>
Saya membuat direktori templates baru yang berisi base.html, lalu menambahkannya ke dalam settings.py agar dapat dikenali sebagai template. Setelah itu, saya membuat file forms.py di dalam direktori main yang berisi ProductForm dengan field-field yang sesuai kebutuhan saat menambahkan produk.

Selanjutnya, saya menambahkan beberapa fungsi di views.py untuk menampilkan data produk dalam format XML, JSON, XML berdasarkan ID, dan JSON berdasarkan ID. Di dalam file ini juga saya menambahkan fungsi untuk menampilkan daftar produk sekaligus menambahkan produk baru.

Kemudian, saya melakukan konfigurasi pada urls.py di direktori main dengan menambahkan routing URL untuk setiap view yang sudah dibuat.

Pada tahap berikutnya, saya mengisi file main.html di dalam direktori main/templates. Di sini saya menambahkan tombol Add Product yang akan mengarahkan ke halaman form penambahan produk, tombol Detail untuk melihat deskripsi produk secara lengkap, serta menyesuaikan tampilan halaman utama.

Terakhir, saya membuat dua file baru di dalam direktori main/templates, yaitu create_product.html sebagai halaman untuk menambahkan produk baru, dan product_details.html untuk menampilkan detail lengkap dari sebuah produk.

<h1>6. Apakah ada feedback untuk asisten dosen tutorial 2 yang telah kamu kerjakan sebelumnya?</h1>
Tidak ada. Sejauh ini asdos telah menjelaskan tutorial 2 secara jelas sehingga saya dapat memahaminya.

<img width="1470" height="956" alt="Screenshot 2025-09-17 at 03 42 43" src="https://github.com/user-attachments/assets/ce7fe258-a027-4be4-9e99-fbc3b0f31d73" />
<img width="1470" height="956" alt="Screenshot 2025-09-17 at 03 42 59" src="https://github.com/user-attachments/assets/884789b6-d100-4852-8c58-323aebcefb72" />
<img width="1470" height="956" alt="Screenshot 2025-09-17 at 03 42 52" src="https://github.com/user-attachments/assets/3886c6ef-6b8c-4fcf-b842-4524c3bcb20f" />
<img width="1470" height="956" alt="Screenshot 2025-09-17 at 03 42 36" src="https://github.com/user-attachments/assets/6c71fd26-3534-4d00-aa62-1e4dff8f2228" />


<h1>Tugas 4</h1>
<h1>1. Apa itu Django AuthenticationForm? Jelaskan juga kelebihan dan kekurangannya.</h1>
AuthenticationForm di Django adalah sebuah form bawaan yang disediakan framework Django untuk menangani proses login pengguna. Form ini sudah terintegrasi dengan sistem autentikasi Django, sehingga kita tidak perlu menulis form login dari awal. Di dalamnya terdapat field username dan password, serta validasi otomatis yang memeriksa apakah kombinasi keduanya sesuai dengan data pengguna di database.

<h1>2. Apa perbedaan antara autentikasi dan otorisasi? Bagaiamana Django mengimplementasikan kedua konsep tersebut?</h1>
Autentikasi adalah proses memverifikasi identitas pengguna, yaitu memastikan apakah seseorang benar-benar adalah dirinya. Contohnya saat pengguna login dengan username dan password, sistem akan mencocokkan data tersebut dengan informasi di database. Jika cocok, pengguna dianggap terautentikasi.

Otorisasi, di sisi lain, adalah proses menentukan apa yang boleh dilakukan oleh pengguna yang sudah terautentikasi. Misalnya, seorang admin boleh menghapus data, sedangkan pengguna biasa hanya bisa melihat data.

Di Django, autentikasi diimplementasikan melalui sistem bawaan yang mencakup User model, AuthenticationForm, serta view login/logout. Django menggunakan backend autentikasi untuk memeriksa kredensial pengguna. Setelah berhasil login, identitas pengguna akan disimpan di session.

Untuk otorisasi, Django menyediakan sistem permission dan group. Setiap user bisa memiliki izin tertentu, misalnya add, change, atau delete pada model tertentu. Kita bisa melakukan pengecekan otorisasi dengan decorator seperti @login_required dan @permission_required.

<h1>3. Apa saja kelebihan dan kekurangan session dan cookies dalam konteks menyimpan state di aplikasi web?</h1>
Cookies disimpan langsung di browser pengguna. Kelebihannya, data bisa bertahan di sisi client meskipun server down, mudah dipakai untuk kebutuhan sederhana seperti mengingat preferensi user atau login ringan, dan tidak membebani server. Kekurangannya, ukuran penyimpanan terbatas, rawan dimanipulasi karena berada di sisi client, serta lebih rentan terhadap serangan seperti cookie theft atau cross-site scripting jika tidak diamankan dengan benar.

Session disimpan di sisi server, sementara browser hanya menyimpan session ID dalam bentuk cookie. Kelebihannya, lebih aman karena data asli tidak ada di client, bisa menyimpan informasi yang lebih kompleks, dan kontrol penuh ada pada server. Kekurangannya, session membutuhkan resource server lebih banyak karena setiap user yang aktif berarti ada data yang harus dijaga, dan kalau tidak dikelola dengan baik bisa memperbesar beban server pada aplikasi dengan traffic tinggi.


<h1>4. Apakah penggunaan cookies aman secara default dalam pengembangan web, atau apakah ada risiko potensial yang harus diwaspadai? Bagaimana Django menangani hal tersebut?</h1>
Penggunaan cookies dalam pengembangan web tidak sepenuhnya aman karena ada risiko seperti pencurian data melalui XSS, CSRF, atau penyadapan ketika dikirim lewat koneksi yang tidak terenkripsi. Namun, Django sudah menyediakan perlindungan bawaan untuk meminimalisir risiko tersebut. Misalnya, cookie session diatur agar hanya bisa diakses oleh server dengan opsi HttpOnly, serta dapat dikonfigurasi agar hanya terkirim melalui HTTPS. Selain itu, Django juga menambahkan mekanisme csrf_token untuk melindungi form dari serangan CSRF. Dengan demikian, meskipun cookies memiliki potensi risiko, Django membantu memastikan penggunaannya tetap aman jika dikombinasikan dengan pengaturan yang tepat.


<h1>5. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).</h1>
1. Membuat Fungsi dan Form Registrasi
Saya membuat form registrasi menggunakan model User bawaan Django. Form ini berisi data seperti username dan password. Django sudah menyediakan UserCreationForm yang bisa saya pakai. Saat user mendaftar, password akan otomatis di-hash oleh Django. Setelah berhasil, saya bisa langsung login-kan user dengan login(request, user).

2. Membuat Fungsi Login
Untuk login, saya menggunakan AuthenticationForm bawaan Django atau membuat view kustom dengan authenticate() dan login(). Jika berhasil, Django akan membuat session dan mengirimkan cookie sessionid ke browser. Dengan begitu, saya bisa mengenali siapa yang sedang login hanya dengan memeriksa session.

3. Membuat Fungsi Logout
Saya menggunakan fungsi logout(request) untuk mengakhiri sesi. Django akan otomatis menghapus data session dari database dan menghapus cookie sessionid di browser. Setelah logout, saya mengarahkan user ke halaman login.

4. Merestriksi Akses Halaman Main dan News Detail
Saya ingin halaman Main dan Product Detail hanya bisa dibuka oleh user yang sudah login. Untuk itu, saya bisa menambahkan @login_required pada function-based view. Kalau ada user yang mencoba mengakses tanpa login, mereka akan otomatis diarahkan ke halaman login.

5. Menggunakan Data dari Cookies
Django secara otomatis menggunakan cookie untuk session dan CSRF token.

6. Menghubungkan Model Product dengan User
Saya akan membuat model Product yang punya relasi ForeignKey ke model User. Dengan begitu, setiap produk akan punya pemilik yang jelas. User bisa melihat semua produk dan produk yang mereka buat sendiri.