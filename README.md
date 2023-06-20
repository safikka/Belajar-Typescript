# Belajar Typescript

Ini adalah repository hasil belajar Typescript. Repository ini berisi rangkuman penggunaan Typescript, mulai dari penggunaan interface dan type hingga pengaturan proyek dan lingkungan pengembangan.

<br/>

## Penggunaan Interface dan Type

Typescript memiliki fitur Interface dan Type yang memungkinkan kita untuk mendefinisikan struktur data. Interface digunakan untuk mendefinisikan kontrak bagi objek, sedangkan Type digunakan untuk membuat alias tipe atau membuat tipe baru.

Contoh penggunaan Interface:

```typescript
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John Doe",
  age: 25,
};

console.log(`Name: ${person.name}, Age: ${person.age}`);
```

<br/>

## Pengaturan Typescript

Berikut adalah langkah-langkah pengaturan awal proyek Typescript: </br>

``1. Install Typescript sebagai dependency pengembangan:``
```bash
npm i --save-dev typescript
```

``2. Inisialisasi file tsconfig.json dengan menjalankan perintah:``
```bash
npx tsc --init          #untuk yang belum install typescript local
tsc --init              #untuk yang sudah install typescript local
```

``3. Edit tsconfig.json:``
```json
{
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "build"
  }
}
```

``4. Buat folder build & src:``
```bash
mkdir build src
```