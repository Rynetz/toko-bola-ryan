<h3>Nama: Muhammad Indi Ryan Pratama</h3>
<h3>NPM: 2406432160</h3>
<h3>Kelas: PBP F</h3>
<h3>Nama Proyek: toko_bola_ryan</h3>

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
