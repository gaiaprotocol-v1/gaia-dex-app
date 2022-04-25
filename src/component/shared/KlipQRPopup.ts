import { DomNode, el, msg, Popup } from "skydapp-browser";

export default class KlipQRPopup extends Popup {

    public content: DomNode;

    constructor(dataURL: string) {
        super(".popup-background");
        this.append(
            this.content = el(".klip-qr-popup",
                el(".title-container",
                    el("h6", msg("KLIP_POPUP_TITLE")),
                    el("a", {
                        click: () => {
                            this.delete()
                        }
                    }, el("img", { src: "/images/shared/icn/close.svg", alt: "close" })),
                ),
                el(".qr", el("img", { src: dataURL })),
                el("p", msg("KLIP_POPUP_DESC1")),
                el("p", msg("KLIP_POPUP_DESC2")),
                el("p", msg("KLIP_POPUP_DESC3")),
            ),
        );
    }
}
