import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./public/images";      // pasta original
const outputDir = "./public/images-webp"; // pasta de saída
const quality = 70;                       // ajuste a qualidade entre 60 e 80

function convertAndCompress(dir, outDir) {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.readdirSync(dir).forEach(async (file) => {
    const filePath = path.join(dir, file);
    const outputFile = path.join(outDir, file.replace(/\.(png|jpg|jpeg)$/i, ".webp"));

    if (fs.lstatSync(filePath).isDirectory()) {
      convertAndCompress(filePath, path.join(outDir, file));
    } else {
      try {
        await sharp(filePath)
          .webp({ quality })
          .toFile(outputFile);
        console.log(`✅ Convertido e comprimido: ${filePath} → ${outputFile}`);
      } catch (err) {
        console.error(`❌ Erro ao processar: ${filePath}`, err);
      }
    }
  });
}

convertAndCompress(inputDir, outputDir);
