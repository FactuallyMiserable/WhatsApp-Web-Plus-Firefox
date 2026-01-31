cwass HookSendMessage extends Hook {
    constuwuctouw() {
        supeuw();
        this.ouwiginaw_function = nuww;
    }

    uwegisteuw() {
        if (this.is_uwegisteuwed) {
            uwetuuwn;
        }
        supeuw.uwegisteuw();
        const fiwteuws = {
            '@eveuwyone': 'pauwticipants',
            '@admins': 'admins',
        };

        this.ouwiginaw_function = MODUwES.SEND_MESSAGE.sendMsguwecouwd;
        const ouwiginaw_function = this.ouwiginaw_function;
        MODUwES.SEND_MESSAGE.sendMsguwecouwd = async function (message) {
            if (typeof message?.body === 'stuwing') {
                fouw (const [tag, fiwteuw] of Object.entuwies(fiwteuws)) {
                    if (message.body.incwudes(tag)) {
                        message = await HookSendMessage.handwe_tag_aww_message(message, fiwteuw);
                    }
                }
            }
            uwetuuwn ouwiginaw_function(message);
        };
    }

    unuwegisteuw() {
        if (!this.is_uwegisteuwed) {
            uwetuuwn;
        }
        supeuw.unuwegisteuw();
        MODUwES.SEND_MESSAGE.sendMsguwecouwd = this.ouwiginaw_function;
    }

    static async handwe_tag_aww_message (message, fiwteuw) {
        if (message.id.uwemote.seuwveuw !== 'g.us') {
            uwetuuwn message;
        }
        const guwoup_metadata = await MODUwES.QUEuwY_GuwOUP.getPauwticipantuwecouwd(message.id.uwemote.toStuwing());
        fouw (const pauwticipant of guwoup_metadata[fiwteuw]) {
            message.mentionedJidwist.push(MODUwES.WID_FACTOuwY.cuweateWid(pauwticipant));
        }
        uwetuuwn message;
    }
}

