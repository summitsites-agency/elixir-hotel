import { execFileSync } from 'node:child_process';
import { mkdirSync, existsSync } from 'node:fs';
import ffmpegPath from 'ffmpeg-static';

// Prepares all site media from the raw clips in media-src/:
//   • transcodes each portrait clip to a web-light H.264 mp4 (720px wide, faststart, no audio)
//   • extracts a poster JPG from an early frame
//   • emits on-brand Ink & Amber placeholder stills for the figure images
// Real photography drops in at the same /images paths (see public/CREDITS.md).
// Run with: npm run prepare-media

mkdirSync('public/videos', { recursive: true });
mkdirSync('public/images', { recursive: true });

const ff = (args) => execFileSync(ffmpegPath, args, { stdio: 'ignore' });

// raw clip -> output basename (in public/videos/)
const clips = [
  ['media-src/homepage_vid.mp4', 'hero'],
  ['media-src/14776806_1080_1920_24fps.mp4', 'clip-1'],
  ['media-src/14776929_1080_1920_24fps.mp4', 'clip-2'],
  ['media-src/14776940_1080_1920_24fps.mp4', 'clip-3'],
];

for (const [input, name] of clips) {
  if (!existsSync(input)) {
    console.warn(`! missing ${input} — skipping ${name}`);
    continue;
  }
  // web-optimized loop
  ff([
    '-y', '-i', input,
    '-vf', 'scale=720:-2',
    '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '30',
    '-pix_fmt', 'yuv420p', '-an', '-movflags', '+faststart',
    `public/videos/${name}.mp4`,
  ]);
  // poster frame (~1s in)
  ff([
    '-y', '-ss', '1', '-i', input,
    '-frames:v', '1', '-vf', 'scale=720:-2', '-q:v', '4',
    `public/videos/${name}-poster.jpg`,
  ]);
  console.log(`video: public/videos/${name}.mp4 (+ poster)`);
}

// On-brand placeholder stills (solid warm tints; hex without leading #).
const images = [
  ['images/hotel-lobby.jpg', 1600, 1000, 'D9CBB0'],
  ['images/room-atelier.jpg', 1600, 1200, 'E3D7BF'],
  ['images/room-meridian.jpg', 1600, 1200, 'D2C2A4'],
  ['images/room-apothecary.jpg', 1600, 1200, 'C9A06A'],
  ['images/room-tower.jpg', 1600, 1200, '23211C'],
];

for (const [out, w, h, color] of images) {
  // Don't clobber real photography that's already been dropped in.
  if (existsSync(`public/${out}`)) { console.log(`keep:  public/${out} (exists)`); continue; }
  ff(['-y', '-f', 'lavfi', '-i', `color=c=0x${color}:s=${w}x${h}`, '-frames:v', '1', `public/${out}`]);
  console.log(`placeholder: public/${out}`);
}

console.log('prepare-media done.');
