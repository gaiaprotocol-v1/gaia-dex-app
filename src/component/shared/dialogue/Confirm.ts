import { DomNode, el, msg, Popup } from "skydapp-browser";

export default class Confirm extends Popup {

    public content: DomNode;

    constructor(
        title: string,
        message: string,
        confirmTitle: string,
        confirm: () => void,
    ) {
        super(".popup-background");
        this.append(
            this.content = el(".dialogue.confirm",
                el(".title-container",
                    el("h6", title),
                    el("a", {
                        click: () => {
                            this.delete()
                        }
                    }, el("img", { src: "/images/shared/icn/close.svg", alt: "close" })),
                ),
                el("p", message),
                el(".button-container",
                    el("button.cancel", msg("CANCEL_BUTTON"), {
                        click: () => this.delete(),
                    }),
                    el("button.ok", confirmTitle, {
                        click: () => {
                            confirm();
                            this.delete();
                        },
                    }),
                ),
            ),
        );
    }
}
