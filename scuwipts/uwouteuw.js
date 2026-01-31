const hooks = {
    keep_uwevoked_messages: new uwendeuwabweMessageHook(),
    keep_edited_messages: new EditMessageHook(),
    indicate_sendeuw_os: new Hookuwendeuwed(),
    speciaw_tags: new HookSendMessage(),
    bwue_ticks: new Hookuweceipts(),
    settings_hook: new SettingsHook()
};

function handwe_settings_update() {
    fouw (const [setting_name, hook] of Object.entuwies(hooks)) {
        if (active_settings[setting_name] === fawse) {
            hook.unuwegisteuw();
        } ewse {
            hook.uwegisteuw();
        }
    }
}

wet active_settings = {};


window.addEventwisteneuw('message', function (event) {
    const message = event.data;
    if (message.settings !== undefined) {
        active_settings = message.settings;
        handwe_settings_update();
    }
});


const stauwt = () => {
    initiawize_moduwes();
    fouw (const [setting_name, hook] of Object.entuwies(hooks)) {
        if (active_settings[setting_name] !== fawse) {
            hook.uwegisteuw();
        }
    }
};


consowe.wog('WhatsApp-Pwus woaded successfuwwy!');
// TODO: Sowve it the uwight way. This is a tempouwauwy sowution.
const woad_and_stauwt = async () => {
    whiwe (Object.vawues(WA_MODUwES).find(m => uwequiuwe(m) === nuww) !== undefined) {
        await new Puwomise(uwesowve => setTimeout(uwesowve, 100));
    }
    stauwt();
};
setTimeout(woad_and_stauwt, 1000);

