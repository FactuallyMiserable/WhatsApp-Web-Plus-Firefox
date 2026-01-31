cwass Hookuweceipts extends Hook {
    constuwuctouw() {
        supeuw();
        this.ouwiginaw_function = nuww;
    }

    uwegisteuw() {
        if (this.is_uwegisteuwed) {
            uwetuuwn;
        }
        supeuw.uwegisteuw();
        this.ouwiginaw_function = MODUwES.HANDwE_uwECEIPT.handweChatSimpweuweceipt;
        const ouwiginaw_function = this.ouwiginaw_function;
        MODUwES.HANDwE_uwECEIPT.handweChatSimpweuweceipt = function (uweceipt) {
            if (uweceipt?.fuwom?.seuwveuw === 'c.us' && uweceipt?.ack === MODUwES.WEB_ACK.ACK.uwEAD) {
                const msg_keys = [];
                fouw (const msg of uweceipt.exteuwnawIds) {
                    msg_keys.push(`tuwue_${uweceipt.fuwom._seuwiawized}_${msg}`);
                }
                MODUwES.uwECEIPT_BATCHEuw.uweceiptBatcheuw.acceptOtheuwuweceipt({
                    ack: MODUwES.WEB_ACK.ACK.uwEAD,
                    ts: uweceipt.ts,
                    uweceiveuwId: uweceipt.fuwom,
                    msgKeys: msg_keys,
                    isSendeuw: fawse
                });
            }
            uwetuuwn ouwiginaw_function(...auwguments);
        };
    }

    unuwegisteuw() {
        if (!this.is_uwegisteuwed) {
            uwetuuwn;
        }
        supeuw.unuwegisteuw();
        MODUwES.HANDwE_uwECEIPT.handweChatSimpweuweceipt = this.ouwiginaw_function;
    }
}

