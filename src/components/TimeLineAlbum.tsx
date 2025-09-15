import Image from "next/image";

// ===== Imagens 213 =====
import img213_01 from "/public/images-webp/timeline/213/timeline-image-01.webp";
import img213_02 from "/public/images-webp/timeline/213/timeline-image-02.webp";
import img213_03 from "/public/images-webp/timeline/213/timeline-image-03.webp";
import img213_04 from "/public/images-webp/timeline/213/timeline-image-04.webp";
import img213_05 from "/public/images-webp/timeline/213/timeline-image-05.webp";

// ===== Imagens 212 =====
import img212_01 from "/public/images-webp/timeline/212/timeline-image-01.webp";
import img212_02 from "/public/images-webp/timeline/212/timeline-image-02.webp";
import img212_03 from "/public/images-webp/timeline/212/timeline-image-03.webp";
import img212_04 from "/public/images-webp/timeline/212/timeline-image-04.webp";

// ===== Imagens 211 =====
import img211_01 from "/public/images-webp/timeline/211/timeline-image-01.webp";
import img211_02 from "/public/images-webp/timeline/211/timeline-image-02.webp";
import img211_03 from "/public/images-webp/timeline/211/timeline-image-03.webp";
import img211_04 from "/public/images-webp/timeline/211/timeline-image-04.webp";
import img211_05 from "/public/images-webp/timeline/211/timeline-image-05.webp";
import img211_06 from "/public/images-webp/timeline/211/timeline-image-06.webp";
import img211_07 from "/public/images-webp/timeline/211/timeline-image-07.webp";

// ===== Imagens 210 =====
import img210_01 from "/public/images-webp/timeline/210/timeline-image-01.webp";
import img210_02 from "/public/images-webp/timeline/210/timeline-image-02.webp";
import img210_03 from "/public/images-webp/timeline/210/timeline-image-03.webp";
import img210_04 from "/public/images-webp/timeline/210/timeline-image-04.webp";
import img210_05 from "/public/images-webp/timeline/210/timeline-image-05.webp";
import img210_06 from "/public/images-webp/timeline/210/timeline-image-06.webp";

// ===== Imagens 209 =====
import img209_01 from "/public/images-webp/timeline/209/timeline-image-01.webp";
import img209_02 from "/public/images-webp/timeline/209/timeline-image-02.webp";
import img209_03 from "/public/images-webp/timeline/209/timeline-image-03.webp";
import img209_04 from "/public/images-webp/timeline/209/timeline-image-04.webp";

// ===== Imagens 208 =====
import img208_01 from "/public/images-webp/timeline/208/timeline-image-01.webp";
import img208_02 from "/public/images-webp/timeline/208/timeline-image-02.webp";
import img208_03 from "/public/images-webp/timeline/208/timeline-image-03.webp";
import img208_04 from "/public/images-webp/timeline/208/timeline-image-04.webp";
import img208_05 from "/public/images-webp/timeline/208/timeline-image-05.webp";
import img208_06 from "/public/images-webp/timeline/208/timeline-image-06.webp";
import img208_07 from "/public/images-webp/timeline/208/timeline-image-07.webp";

// ===== Imagens 207 =====
import img207_01 from "/public/images-webp/timeline/207/timeline-image-01.webp";
import img207_02 from "/public/images-webp/timeline/207/timeline-image-02.webp";
import img207_03 from "/public/images-webp/timeline/207/timeline-image-03.webp";

// ===== Imagens 206 =====
import img206_01 from "/public/images-webp/timeline/206/timeline-image-01.webp";
import img206_02 from "/public/images-webp/timeline/206/timeline-image-02.webp";
import img206_03 from "/public/images-webp/timeline/206/timeline-image-03.webp";
import img206_04 from "/public/images-webp/timeline/206/timeline-image-04.webp";
import img206_05 from "/public/images-webp/timeline/206/timeline-image-05.webp";
import img206_06 from "/public/images-webp/timeline/206/timeline-image-06.webp";
import img206_07 from "/public/images-webp/timeline/206/timeline-image-07.webp";

interface TimeLineAlbumProps {
  year: number;
}

export default function TimeLineAlbum({ year }: TimeLineAlbumProps) {
  return (
    <div className="w-full">
      {year === 213 && (
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <div className="relative  w-full max-w-[182px] aspect-[182/322] bg-primary">
              <Image src={img213_01} alt="Robopel 213 01" fill className="object-cover" placeholder="blur" />
            </div>
            <div className="relative  w-full max-w-[554px] aspect-[554/322] bg-primary">
              <video
                src="/images/timeline/213/timeline-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex gap-1">
            <div className="relative w-full max-w-[182px] aspect-[182/322] bg-primary">
              <Image src={img213_02} alt="Robopel 213 02" fill className="object-cover" placeholder="blur" />
            </div>
            <div className="relative w-full max-w-[182px] aspect-[182/322] bg-primary">
              <Image src={img213_03} alt="Robopel 213 03" fill className="object-cover" placeholder="blur" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="relative w-[367px] aspect-[367/158] bg-primary">
                <Image src={img213_04} alt="Robopel 213 04" fill className="object-cover" placeholder="blur" />
              </div>
              <div className="relative w-[367px] aspect-[367/158] bg-primary">
                <Image src={img213_05} alt="Robopel 213 05" fill className="object-cover" placeholder="blur" />
              </div>
            </div>
          </div>
        </div>
      )}


      {year === 212 && (
        <div className="flex gap-1">
          <div className="relative w-[360px] h-[649px] bg-primary">
            <video src="/images/timeline/212/timeline-video.mov" autoPlay muted loop playsInline className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-1">
            {[img212_01, img212_02, img212_03, img212_04].map((img, idx) => (
              <div key={idx} className="relative w-[185px] h-[322px] bg-primary">
                <Image src={img} alt={`Robopel 212 ${idx + 1}`} fill className="object-cover" placeholder="blur" />
              </div>
            ))}
          </div>
        </div>
      )}

      {year === 211 && (
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <div className="relative w-[551px] h-[322px] bg-primary">
              <Image src={img211_01} alt="Robopel 211 01" fill className="object-cover" placeholder="blur" />
            </div>
            <div className="relative w-[185px] h-[322px] bg-primary">
              <Image src={img211_02} alt="Robopel 211 02" fill className="object-cover" placeholder="blur" />
            </div>
          </div>
          <div className="flex gap-1">
            <div className="flex flex-col gap-1">
              {[img211_03, img211_04].map((img, idx) => (
                <div key={idx} className="relative w-[182px] h-[158px] bg-primary">
                  <Image src={img} alt={`Robopel 211 ${idx + 3}`} fill className="object-cover" placeholder="blur" />
                </div>
              ))}
            </div>
            {[img211_05, img211_06, img211_07].map((img, idx) => (
              <div key={idx} className="relative w-[182px] h-[322px] bg-primary">
                <Image src={img} alt={`Robopel 211 ${idx + 5}`} fill className="object-cover" placeholder="blur" />
              </div>
            ))}
          </div>
        </div>
      )}

      {year === 210 && (
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            {[img210_01, img210_02, img210_03, img210_04].map((img, idx) => (
              <div key={idx} className="relative w-[182px] h-[305px] bg-primary">
                <Image src={img} alt={`Robopel 210 ${idx + 1}`} fill className="object-cover" placeholder="blur" />
              </div>
            ))}
          </div>
          <div className="flex gap-1">
            {[img210_05, img210_06].map((img, idx) => (
              <div key={idx} className="relative w-[368px] h-[340px] bg-primary">
                <Image src={img} alt={`Robopel 210 ${idx + 5}`} fill className="object-cover" placeholder="blur" />
              </div>
            ))}
          </div>
        </div>
      )}

      {year === 209 && (
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <div className="relative w-[507px] h-[267px] bg-primary">
              <Image src={img209_01} alt="Robopel 209 01" fill className="object-cover" placeholder="blur" />
            </div>
            <div className="relative w-[224px] h-[267px] bg-primary">
              <Image src={img209_02} alt="Robopel 209 02" fill className="object-cover" placeholder="blur" />
            </div>
          </div>
          <div className="flex gap-1">
            {[img209_03, img209_04].map((img, idx) => (
              <div key={idx} className="relative w-[366px] h-[379px] bg-primary">
                <Image src={img} alt={`Robopel 209 ${idx + 3}`} fill className="object-cover" placeholder="blur" />
              </div>
            ))}
          </div>
        </div>
      )}

      {year === 208 && (
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <div className="relative w-[496px] h-[236px] bg-primary">
              <Image src={img208_01} alt="Robopel 208 01" fill className="object-cover" placeholder="blur" />
            </div>
            <div className="relative w-[239px] h-[236px] bg-primary">
              <Image src={img208_02} alt="Robopel 208 02" fill className="object-cover" placeholder="blur" />
            </div>
          </div>
          <div className="flex gap-1">
            <div className="relative w-[254px] h-[408px] bg-primary">
              <Image src={img208_03} alt="Robopel 208 03" fill className="object-cover" placeholder="blur" />
            </div>
            <div className="grid grid-cols-2 gap-1">
              {[img208_04, img208_05, img208_06, img208_07].map((img, idx) => (
                <div key={idx} className="relative w-[238px] h-[200px] bg-primary">
                  <Image src={img} alt={`Robopel 208 ${idx + 4}`} fill className="object-cover" placeholder="blur" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {year === 207 && (
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <div className="relative w-[524px] h-[288px] bg-primary">
              <video src="/images/timeline/207/timeline-video.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
            </div>
            <div className="relative w-[211px] h-[288px] bg-primary">
              <Image src={img207_01} alt="Robopel 207 01" fill className="object-cover" placeholder="blur" />
            </div>
          </div>
          <div className="flex gap-1">
            <div className="relative w-[280px] h-[357px] bg-primary">
              <Image src={img207_02} alt="Robopel 207 02" fill className="object-cover" placeholder="blur" />
            </div>
            <div className="relative w-[455px] h-[357px] bg-primary">
              <Image src={img207_03} alt="Robopel 207 03" fill className="object-cover" placeholder="blur" />
            </div>
          </div>
        </div>
      )}

      {year === 206 && (
        <div className="flex flex-col gap-1">
          <div className="grid grid-cols-3 gap-1">
            {[img206_01, img206_02, img206_03, img206_04, img206_05, img206_06].map((img, idx) => (
              <div key={idx} className="relative w-[243px] h-[163px] bg-primary">
                <Image src={img} alt={`Robopel 206 ${idx + 1}`} fill className="object-cover" placeholder="blur" />
              </div>
            ))}
          </div>
          <div className="flex gap-1">
            <div className="relative w-[183px] h-[312px] bg-primary">
              <Image src={img206_07} alt="Robopel 206 07" fill className="object-cover" placeholder="blur" />
            </div>
            <div className="relative w-[554px] h-[312px] bg-primary">
              <video src="/images/timeline/206/timeline-video.MOV" autoPlay muted loop playsInline className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
