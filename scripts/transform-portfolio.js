// Cloudflare Pages build step for portfolio.specy.app (its build command runs this script).
// GitHub Pages serves this repository as it is at specy.github.io, the old site where the music
// apps used to live: there the home page is the "moved to specy.app" notice and the old apps send
// visitors on to the new ones. portfolio.specy.app is the portfolio: nothing redirects, and the
// whole site stays out of search results.
import fs from 'fs/promises';
import { resolve } from 'path';

async function run() {
    await fs.copyFile(resolve('portfolio.html'), resolve('index.html'));
    // Every page of the old app copies under /genshinMusic and /skyMusic loads this script
    await fs.writeFile(
        resolve('legacy-redirect.js'),
        '// Empty on portfolio.specy.app: only specy.github.io redirects (scripts/transform-portfolio.js)\n'
    );
    // Every response, the old app copies included. Cloudflare Pages reads _headers; GitHub Pages
    // never sees it, since it only exists in this build.
    await fs.writeFile(resolve('_headers'), '/*\n  X-Robots-Tag: noindex\n');
    console.log('transform-portfolio: portfolio home page, no redirects, X-Robots-Tag: noindex everywhere');
}
run()
