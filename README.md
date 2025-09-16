<h1>Tugas 2</h1>
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

<h1>Tugas 3</h1>
<h1>1. Jelaskan mengapa kita memerlukan data delivery dalam pengimplementasian sebuah platform?</h1>
Data delivery memiliki peran penting dalam pengembangan sebuah platform karena menjadi sarana utama pertukaran informasi antara server dan klien. Melalui mekanisme ini, aplikasi dapat menampilkan serta memperbarui data secara dinamis dengan cara yang efisien, aman, dan kompatibel lintas sistem, termasuk saat melakukan komunikasi dengan API eksternal. Keberadaan data delivery juga memungkinkan pengguna merasakan pengalaman interaktif tanpa harus memuat ulang seluruh halaman, sekaligus mengoptimalkan penggunaan bandwidth dan meningkatkan skalabilitas sistem. Tanpa data delivery, platform tidak akan mampu menghadirkan informasi real-time, integrasi dengan layanan pihak ketiga, maupun penerapan kontrol akses yang efektif

<h1>2. Menurutmu, mana yang lebih baik antara XML dan JSON? Mengapa JSON lebih populer dibandingkan XML?</h1>
Menurut saya, JSON lebih unggul dibandingkan XML karena formatnya lebih sederhana, ringkas, dan mudah dipahami, serta secara alami sesuai dengan struktur objek di banyak bahasa pemrograman populer seperti JavaScript, Python, maupun Java. JSON menggunakan pola key-value yang menyerupai dictionary pada Python, sehingga memudahkan pembacaan oleh manusia sekaligus pengolahan oleh mesin. Sebaliknya, XML cenderung lebih panjang dan repetitif karena setiap elemen memerlukan tag pembuka dan penutup, yang membuat ukuran data lebih besar dan proses parsing lebih lambat. Walaupun XML tetap relevan dalam situasi tertentu, misalnya ketika dibutuhkan validasi skema yang ketat atau dokumen dengan struktur yang kompleks, JSON kini lebih banyak digunakan berkat efisiensinya, kemudahan integrasi dengan API, serta dukungan luas di dunia pengembangan web modern

<h1>3. Jelaskan fungsi dari method is_valid() pada form Django dan mengapa kita membutuhkan method tersebut?</h1>
Dalam Django, method is_valid() berfungsi untuk memeriksa apakah data yang dikirimkan melalui form sudah sesuai dengan aturan validasi yang ditentukan. Saat pengguna mengisi dan mengirim form, data tersebut ditampung dalam sebuah objek form. Ketika kita memanggil form.is_valid(), Django akan melakukan serangkaian pengecekan otomatis, seperti memastikan setiap field memiliki nilai yang benar (misalnya tipe data, panjang input, dan aturan lain), menjalankan proses cleaning, serta validasi tambahan yang mungkin kita definisikan sendiri. Jika seluruh data lolos, maka akan mengembalikan True, sedangkan jika ada kesalahan akan menghasilkan False. Method ini penting karena hanya data yang sudah tervalidasi yang aman untuk diproses lebih lanjut, misalnya disimpan ke database atau dikirim ke layanan eksternal. Tanpa menggunakan is_valid(), ada kemungkinan data yang salah, kosong, atau tidak sesuai format ikut tersimpan dan menimbulkan bug maupun celah keamanan pada aplikasi Django

<h1>4. Mengapa kita membutuhkan csrf_token saat membuat form di Django? Apa yang dapat terjadi jika kita tidak menambahkan csrf_token pada form Django? Bagaimana hal tersebut dapat dimanfaatkan oleh penyerang?</h1>
csrf_token adalah mekanisme keamanan yang digunakan untuk melindungi aplikasi dari serangan Cross-Site Request Forgery (CSRF). Token ini berupa nilai acak dan unik pada setiap sesi pengguna, yang disisipkan ke dalam form HTML ketika data dikirim melalui metode POST atau request yang berfungsi mengubah data. Saat form dikirim, server akan memverifikasi apakah token yang diterima sesuai dengan token yang sebelumnya diberikan kepada pengguna tersebut. Jika csrf_token tidak ada, server tidak bisa memastikan bahwa permintaan benar-benar berasal dari pengguna yang sah. Kondisi ini dapat dimanfaatkan penyerang dengan membuat situs atau tautan palsu yang secara diam-diam mengirim request ke server menggunakan identitas korban yang sedang login. Dengan demikian, csrf_token berfungsi mencegah aksi berbahaya di mana penyerang menipu browser korban untuk melakukan tindakan tanpa sepengetahuannya, sehingga menjaga keamanan serta integritas data aplikasi

<h1>5. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).</h1>
1. Menambahkan fungsi di views.py untuk menampilkan data produk dalam format XML, JSON, serta XML by ID dan JSON by ID, sekaligus membuat fungsi untuk menambahkan produk baru dan menampilkan produk.

2. Membuat file forms.py di dalam folder main yang berisi ProductForm dengan field-field yang diperlukan untuk proses penambahan produk.

3. Mengatur urls.py pada direktori main dengan menambahkan routing URL untuk setiap view yang sudah dibuat.

4. Mengisi main.html di direktori main/templates dengan menambahkan tombol Add Product yang mengarahkan ke halaman form penambahan produk, tombol Detail untuk melihat deskripsi lengkap produk, serta menyesuaikan tampilan halaman utama.

5. Membuat dua file baru di dalam direktori main/templates, yaitu create_product.html untuk halaman penambahan produk baru dan product_details.html untuk menampilkan detail produk secara lengkap.

<h1>6. Apakah ada feedback untuk asdos di tutorial 2 yang sudah kalian </h1>
Tidak ada. Asdos sudah menjelaskan secara baik dan langsung menjawab pertanyaan saya dengan jelas

<h1>Screenshot Postman</h1>
1. JSON
<img width="1470" height="956" alt="Screenshot 2025-09-17 at 03 42 36" src="https://github.com/user-attachments/assets/8bad95b4-5370-4e01-9a49-6365fe6c78c4" />

2. XML
<img width="1470" height="956" alt="Screenshot 2025-09-17 at 03 42 43" src="https://github.com/user-attachments/assets/fd2e83b2-3a44-4f4b-afb5-3ea3f1cc6e4c" />

3. JSON by Id
<img width="1470" height="956" alt="Screenshot 2025-09-17 at 03 42 52" src="https://github.com/user-attachments/assets/373ee9a3-799b-42eb-af4c-ea31de749487" />

4. XML by Id
<img width="1470" height="956" alt="Screenshot 2025-09-17 at 03 42 59" src="https://github.com/user-attachments/assets/fd4a3cd0-6ba5-4202-ac56-32615db0e867" />
