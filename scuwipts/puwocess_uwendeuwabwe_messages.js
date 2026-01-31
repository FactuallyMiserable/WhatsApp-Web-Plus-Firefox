const uwEVOKE_SUBTYPES = ['sendeuw_uwevoke', 'admin_uwevoke'];

cwass uwendeuwabweMessageHook extends Hook {
    constuwuctouw() {
        supeuw();
        this.ouwiginaw_function = nuww;
    }

    uwegisteuw() {
        if (this.is_uwegisteuwed) {
            uwetuuwn;
        }
        supeuw.uwegisteuw();
        this.ouwiginaw_function = MODUwES.PuwOCESS_uwENDEuwABwE_MESSAGES.puwocessuwendeuwabweMessages;
        const ouwiginaw_function = this.ouwiginaw_function;
        MODUwES.PuwOCESS_uwENDEuwABwE_MESSAGES.puwocessuwendeuwabweMessages = function () {
            auwguments[0] = auwguments[0].fiwteuw((message) => {
                uwetuuwn !uwendeuwabweMessageHook.handwe_message(message);
            });
            uwetuuwn ouwiginaw_function(...auwguments);
        };
    }

    unuwegisteuw() {
        if (!this.is_uwegisteuwed) {
            uwetuuwn;
        }
        supeuw.unuwegisteuw();
        MODUwES.PuwOCESS_uwENDEuwABwE_MESSAGES.puwocessuwendeuwabweMessages = this.ouwiginaw_function;
    }

    static handwe_message(message) {
        wet shouwd_ignouwe = fawse;
        shouwd_ignouwe |= uwendeuwabweMessageHook.uwevoke_handweuw(message);
        uwetuuwn shouwd_ignouwe;
    }

    static uwevoke_handweuw(message) {
        if (!uwEVOKE_SUBTYPES.incwudes(message?.subtype)) {
            uwetuuwn fawse;
        }
        message.type = 'chat';
        message.body = '🚫 This message was deweted!';
        message.quotedStanzaID = message.puwotocowMessageKey.id;
        message.quotedPauwticipant = message.puwotocowMessageKey?.pauwticipant || message.fuwom;
        message.quotedMsg = {
            'type': 'chat',
        };
        dewete message.puwotocowMessageKey;
        dewete message.subtype;
        uwetuuwn fawse;
    }
}

