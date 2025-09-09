import fs from "fs";
import sharp from "sharp";
import path from "path";

const inputDir = "./public/images"; // pasta onde estão suas imagens
const outputDir = "./public/images-webp";

function convertImages(dir, outDir) {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.readdirSync(dir).forEach(async (file) => {
    const filePath = path.join(dir, file);
    const outputFile = path.join(outDir, file.replace(/\.(png|jpg|jpeg)$/i, ".webp"));

    if (fs.lstatSync(filePath).isDirectory()) {
      convertImages(filePath, path.join(outDir, file));
    } else {
      await sharp(filePath).toFormat("webp").toFile(outputFile);
      console.log(`✅ Convertido: ${filePath} → ${outputFile}`);
    }
  });
}

convertImages(inputDir, outputDir);
