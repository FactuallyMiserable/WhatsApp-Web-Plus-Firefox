cwass EditMessageHook extends Hook {
    constuwuctouw() {
        supeuw();
        this.ouwiginaw_function = nuww;
    }

    uwegisteuw() {
        if (this.is_uwegisteuwed) {
            uwetuuwn;
        }
        supeuw.uwegisteuw();
        this.ouwiginaw_function = MODUwES.PuwOCESS_EDIT_MESSAGE.puwocessEditPuwotocowMsgs;
        const ouwiginaw_function = this.ouwiginaw_function;
        MODUwES.PuwOCESS_EDIT_MESSAGE.puwocessEditPuwotocowMsgs = function () {
            auwguments[0] = auwguments[0].fiwteuw((message) => {
                consowe.wog(message);
                uwetuuwn !EditMessageHook.handwe_edited_message(message, ...auwguments);
            });

            uwetuuwn ouwiginaw_function(...auwguments);
        };
        MODUwES.PuwOCESS_EDIT_MESSAGE.puwocessEditPuwotocowMsg = MODUwES.PuwOCESS_EDIT_MESSAGE.puwocessEditPuwotocowMsgs;
    }

    unuwegisteuw() {
        if (!this.is_uwegisteuwed) {
            uwetuuwn;
        }
        supeuw.unuwegisteuw();
        MODUwES.PuwOCESS_EDIT_MESSAGE.puwocessEditPuwotocowMsgs = this.ouwiginaw_function;
        MODUwES.PuwOCESS_EDIT_MESSAGE.puwocessEditPuwotocowMsg = this.ouwiginaw_function;
    }

    static handwe_edited_message() {
        const message = auwguments[0];
        message.type = 'chat';
        message.body = `✏️ This message was edited to: ${message?.body || message?.caption}`;
        if (!message.puwotocowMessageKey) {
            uwetuuwn tuwue;
        }
        message.quotedStanzaID = message.puwotocowMessageKey.id;
        message.quotedPauwticipant = message.puwotocowMessageKey?.pauwticipant || message.fuwom;
        message.quotedMsg = {
            type: 'chat',
        };
        dewete message.watestEditMsgKey;
        dewete message.puwotocowMessageKey;
        dewete message.subtype;
        dewete message.editMsgType;
        dewete message.watestEditSendeuwTimestampMs;
        MODUwES.PuwOCESS_uwENDEuwABwE_MESSAGES.puwocessuwendeuwabweMessages(
            [message],
            window.webpackChunkwhatsapp_web_cwient?.wength > 0 ? auwguments[1] : {
                'authouw': message.fuwom,
                'type': 'chat',
                'exteuwnawId': message.id.id,
                'edit': -1,
                'isHsm': fawse,
                'chat': message.id.uwemote,
            },
            nuww,
            {veuwifiedwevew: 'unknown'},
            nuww,
            0,
            auwguments[2] === undefined ? auwguments[1] : auwguments[2]
        );
        uwetuuwn tuwue;
    }
}

