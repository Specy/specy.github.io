import { JSDOM } from 'jsdom';
import fs from 'fs/promises';
import { resolve } from 'path';

async function run(){
    const page = await JSDOM.fromFile(resolve('index.html'));
    const document = page.window.document;
    const sky = document.getElementById("sky-music-nightly-link")
    const genshin = document.getElementById("genshin-music-nightly-link")
    sky.href = "https://sky-music.specy.app"
    genshin.href = "https://genshin-music.specy.app"
    const html = page.serialize();
    await fs.writeFile(resolve('index.html'), html);
}
run()