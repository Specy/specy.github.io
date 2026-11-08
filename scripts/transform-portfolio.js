import { JSDOM } from 'jsdom';
import fs from 'fs/promises';
import { resolve } from 'path';

async function run(){
    const page = await JSDOM.fromFile(resolve('index.html'));
    const document = page.window.document;
    const sky = document.getElementById("sky-music-nightly-link")
    const genshin = document.getElementById("genshin-music-nightly-link")
    // Only the old portfolio page had these links. The "moved to specy.app" page that replaced it
    // already points at the new apps, so leave it as it is: throwing here fails the Cloudflare
    // Pages build, which then keeps serving the last good deploy (the old portfolio).
    if (!sky || !genshin) {
        console.log("transform-portfolio: no nightly links in index.html, leaving it unchanged")
        return
    }
    sky.href = "https://sky-music.specy.app"
    genshin.href = "https://genshin-music.specy.app"
    const html = page.serialize();
    await fs.writeFile(resolve('index.html'), html);
}
run()