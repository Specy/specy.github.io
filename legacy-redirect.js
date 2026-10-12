// Sends browser visitors with no saved data on this old site to the new apps.
// Browser storage belongs to this address and would not follow people to the new one, so anyone
// with songs, folders, themes or keybinds stays, and so does anyone running the installed PWA or
// the Play Store TWA. Anything uncertain (old browser, storage error) counts as "stay".
//
// The root page loads this directly. After replacing genshinMusic/ or skyMusic/ with a new build,
// run `npm run inject-legacy-redirect` to add it to their pages.
(function () {
    var prefix = location.pathname.split('/').slice(0, 2).join('/');
    var target;
    if (prefix === '/genshinMusic') {
        target = { apps: ['Genshin'], origin: 'https://genshin-music.specy.app' };
    } else if (prefix === '/skyMusic') {
        target = { apps: ['Sky'], origin: 'https://sky-music.specy.app' };
    } else if (location.pathname === '/' || location.pathname === '/index.html') {
        prefix = '';
        target = { apps: ['Genshin', 'Sky'], origin: 'https://specy.app' };
    } else {
        return;
    }

    try {
        // A TWA launch only carries this referrer on its first page, so remember it for the session
        if (document.referrer.indexOf('android-app://') === 0) {
            sessionStorage.setItem('legacy_installed', '1');
        }
        if (sessionStorage.getItem('legacy_installed')) return;
        for (var a = 0; a < target.apps.length; a++) {
            if (localStorage.getItem(target.apps[a] + '_keybinds') !== null) return;
        }
    } catch (e) {
        return;
    }
    if (navigator.standalone) return;
    var installedModes = ['fullscreen', 'standalone', 'minimal-ui', 'window-controls-overlay'];
    for (var i = 0; i < installedModes.length; i++) {
        if (matchMedia('(display-mode: ' + installedModes[i] + ')').matches) return;
    }
    if (!window.indexedDB || !indexedDB.databases) return;

    function hasSavedData(app, databases) {
        var exists = databases.some(function (db) {
            return db.name === app;
        });
        if (!exists) return Promise.resolve(false);
        return new Promise(function (resolve) {
            var request = indexedDB.open(app);
            request.onerror = request.onblocked = function () {
                resolve(true);
            };
            request.onsuccess = function () {
                var db = request.result;
                var stores = ['songs', 'folders', 'themes'].filter(function (name) {
                    return db.objectStoreNames.contains(name);
                });
                if (stores.length === 0) {
                    db.close();
                    return resolve(false);
                }
                var tx = db.transaction(stores, 'readonly');
                var pending = stores.length;
                var total = 0;
                stores.forEach(function (name) {
                    var count = tx.objectStore(name).count();
                    count.onsuccess = function () {
                        total += count.result;
                        if (--pending === 0) {
                            db.close();
                            resolve(total > 0);
                        }
                    };
                    count.onerror = function () {
                        db.close();
                        resolve(true);
                    };
                });
            };
        });
    }

    indexedDB
        .databases()
        .then(function (databases) {
            return Promise.all(
                target.apps.map(function (app) {
                    return hasSavedData(app, databases);
                })
            );
        })
        .then(function (results) {
            if (results.indexOf(true) !== -1) return;
            // GitHub Pages serves /composer from composer.html; the new apps use clean URLs
            var path = location.pathname.slice(prefix.length).replace(/(index)?\.html$/, '') || '/';
            var keep = prefix ? location.search + location.hash : '';
            location.replace(target.origin + path + keep);
        })
        .catch(function () {});
})();
