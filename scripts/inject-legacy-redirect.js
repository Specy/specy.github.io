// Adds <script src="/legacy-redirect.js"> to every page of the legacy music apps.
// Run `npm run inject-legacy-redirect` after copying a new build into genshinMusic/ or skyMusic/.
// Safe to run more than once.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const TAG = '<script src="/legacy-redirect.js"></script>';
const FOLDERS = ['genshinMusic', 'skyMusic'];

function htmlFiles(dir) {
    return readdirSync(dir).flatMap((name) => {
        const path = join(dir, name);
        if (statSync(path).isDirectory()) return htmlFiles(path);
        return name.endsWith('.html') ? [path] : [];
    });
}

let injected = 0;
for (const folder of FOLDERS) {
    for (const file of htmlFiles(folder)) {
        const html = readFileSync(file, 'utf8');
        if (html.includes(TAG)) continue;
        const head = html.match(/<head[^>]*>/i);
        // Pages without a <head> are one-line redirects to a page that has one
        if (!head) continue;
        const at = head.index + head[0].length;
        writeFileSync(file, html.slice(0, at) + '\n    ' + TAG + html.slice(at));
        injected++;
    }
}
console.log(`legacy-redirect: injected into ${injected} pages`);
