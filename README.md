# Blog İçerik Listeleme ve Filtreleme Uygulaması

Bu proje, bir içerik listeleme ve filtreleme uygulamasıdır. Kullanıcılar, içerikleri görüntüleyebilir, belirli kategorilere göre filtreleme yapabilir ve başlıklarda arama yapabilir. Ayrıca, herhangi bir içeriğe tıkladığında detay sayfasına yönlendirilir.

## 🚀 Teknolojiler

- **Next.js** (v14.2.23)
- **TypeScript**
- **Tailwind CSS**

## 📌 Proje Özellikleri

### 1️⃣ İçerik Listesi

- Sabit bir içerik listesi görüntülenir.
- Her içerik; **başlık, açıklama ve kategori** bilgilerini içerir.
- Kategori bazlı sabit resimler kullanıldı.

### 2️⃣ Kategoriye Göre Filtreleme

- Kullanıcılar, içerikleri **kategoriye göre filtreleyebilir**.
- Filtreleme işlemi için **dropdown (açılır menü)** kullanılmıştır.
- Varsayılan olarak tüm içerikler görüntülenir, ancak bir kategori seçildiğinde yalnızca o kategoriye ait içerikler gösterilir.

### 3️⃣ Başlıkta Arama Yapma

- Kullanıcılar, içeriklerin **başlıklarında anlık arama** yapabilir.
- Arama sırasında **eşleşen içerikler dinamik olarak filtrelenir**.
- Arama kutusu, filtreleme ile uyumlu çalışır.

### 4️⃣ Detay Sayfası

- Kullanıcı bir içeriğe tıkladığında, ilgili **detay sayfasına yönlendirilir**.
- Detay sayfasında; **başlık, açıklama ve kategori bilgileri** yer alır.
- Kullanıcı **geri butonuna** basarak ana listeye dönebilir.
- Sayfa tasarımı **farklı cihazlara uyumludur** ve **karanlık tema** ile şık bir görünüm sunar.

## 📂 Proje Kurulumu

### 1️⃣ Depoyu Klonlayın

```sh
git clone https://github.com/taneracar/ist-code-taner-acar
cd ist-code-taner-acar
```

### 2️⃣ Bağımlılıkları Yükleyin

```sh
npm install
```

### 3️⃣ Geliştirme Ortamını Başlatın

```sh
npm run dev
```

- Proje [**http://localhost:3000**](http://localhost:3000) adresinde çalışacaktır.

## 🖼️ Proje Yapısı

```
├── app
│   ├── components
│   │   ├── BlogContent.tsx
│   │   ├── FilterDropdown.tsx
│   │   ├── SearchBar.tsx
│   ├── blog
│   │   ├── [id].tsx
│   ├── data
│   │   ├── dummy.json
│   ├── assets
│   ├── fonts
│   ├── favicon.ico
│   ├── global.css
│   ├── layout.tsx
│   ├── page.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```
