const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Pasta com suas imagens WebP originais
const imagesFolder = path.join(__dirname, "public/images-webp");

// Função para comprimir imagens recursivamente
function compressFolder(folder) {
  const files = fs.readdirSync(folder);

  files.forEach((file) => {
    const fullPath = path.join(folder, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      compressFolder(fullPath);
    } else if (file.endsWith(".webp")) {
      // Sobrescreve a própria imagem com versão comprimida
      sharp(fullPath)
        .webp({ quality: 75 }) // ajuste a qualidade conforme desejar
        .toBuffer()
        .then((data) => fs.writeFileSync(fullPath, data))
        .then(() => console.log(`Comprimido: ${fullPath}`))
        .catch((err) => console.error(err));
    }
  });
}

// Executa a compressão
compressFolder(imagesFolder);
