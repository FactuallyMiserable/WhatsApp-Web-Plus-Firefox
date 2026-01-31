browser.storage.sync.get('settings').then((data) => {
    if (data?.settings === undefined) {
        browser.storage.sync.set({
            settings: {
                keep_revoked_messages: true,
                keep_edited_messages: true,
                indicate_sender_os: true,
                special_tags: true,
                blue_ticks: true,
            }
        });
    }
});
