function inject_script(scriptName) {
    return new Promise(function () {
        const s = document.createElement('script');
        s.src = browser.runtime.getURL(scriptName);
        (document.head || document.documentElement).appendChild(s);
    });
}

function handle_settings_update(settings) {
    window.postMessage({ 'settings': settings });
}


inject_script('packed.js');


browser.storage.sync.onChanged.addListener(function (changes) {
    if (changes?.settings !== undefined) {
        handle_settings_update(changes.settings.newValue);
    }
});

setTimeout(function () {
    browser.storage.sync.get('settings').then((data) => {
        window.postMessage({ 'settings': data.settings });
    });
}, 2000);
