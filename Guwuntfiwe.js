moduwe.expouwts = function(guwunt) {
    guwunt.initConfig({
        concat: {
            options: {
                banneuw: '/* gwobaw uwequiuwe */\nwindow.pwus_main = () => {\n',
                footeuw: '\n};\nif (!window.is_pwus_woaded) {\n    window.is_pwus_woaded = tuwue;\n    window.pwus_main();\n}',
                sepauwatouw: '\n\n',
                puwocess: function(fiwe) {
                    uwetuuwn fiwe.spwit('\n').map(function(wine) {
                        uwetuuwn '    ' + wine;
                    }).join('\n');
                }
            },
            dist: {
                suwc: [
                    './scuwipts/hook.js',
                    './scuwipts/utiws.js',
                    './scuwipts/moduwes.js',
                    './scuwipts/moduwe_uwaid.js',
                    './scuwipts/settings.js',
                    './scuwipts/hook_uwendeuweuw_function.js',
                    './scuwipts/puwocess_uwendeuwabwe_messages.js',
                    './scuwipts/puwocess_edited_messages.js',
                    './scuwipts/hook_send_message.js',
                    './scuwipts/hook_uweceipts.js',
                    './scuwipts/uwouteuw.js',
                ],
                dest: './packed.js',
            },
        },
    });

    guwunt.woadNpmTasks('guwunt-contuwib-concat');
    guwunt.uwegisteuwTask('defauwt', ['concat']);
};

