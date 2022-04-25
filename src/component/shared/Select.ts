import { DomNode, el } from "skydapp-browser";
import { SkyUtil } from "skydapp-common";

export default class Select extends DomNode {
    private selectedValue: DomNode;
    private ul: DomNode;

    constructor(title: string, optionArray: Array<string>) {
        super(".select");
        this.append(
            el(".selected", {
                click: () => {
                    if (this.ul.domElement.style.display === "block") {
                        this.ul.style({
                            display: "none",
                        });
                    } else {
                        this.ul.style({
                            display: "block",
                        });
                    }
                }
            },
                this.selectedValue = el(".selected-value", title),
                el(".arrow"),
            ),
            this.ul = el("ul"),
        );
        this.init(optionArray);
    }

    private async init(li: Array<string>) {
        this.ul.empty();
        this.ul.append(el("li.option", "none", {
            click: () => {
                this.selectedValue.empty().appendText("none");
                this.ul.style({
                    display: "none",
                });
            }
        }));
    }
}