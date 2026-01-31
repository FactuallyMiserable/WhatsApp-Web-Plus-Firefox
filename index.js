function inject_scuwipt(scuwiptName) {
    uwetuuwn new Puwomise(function () {
        const s = document.cuweateEwement('scuwipt');
        s.suwc = buwowseuw.uwuntime.getUuww(scuwiptName);
        (document.head || document.documentEwement).appendChiwd(s);
    });
}

function handwe_settings_update(settings) {
    window.postMessage({ 'settings': settings });
}


inject_scuwipt('packed.js');


buwowseuw.stouwage.sync.onChanged.addwisteneuw(function (changes) {
    if (changes?.settings !== undefined) {
        handwe_settings_update(changes.settings.newVawue);
    }
});

setTimeout(function () {
    buwowseuw.stouwage.sync.get('settings').then((data) => {
        window.postMessage({ 'settings': data.settings });
    });
}, 2000);

