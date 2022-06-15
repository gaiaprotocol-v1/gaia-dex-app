import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";


export default class Orders implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "미체결";
        Layout.current.content.append(this.container = el(".notice-view",
            el("section",
                el("article",
                    el("h2", "공지사항"),
                    el("table",
                        el("colgroup",
                            el("col", { width: "*" }),
                            el("col", { width: "155" }),
                            el("col", { width: "130" }),
                        ),
                        el("thead",
                            el("tr",
                                el("th", "제목"),
                                el("th", "등록일"),
                                el("th", "조회수"),
                            ),
                        ),
                        el("tbody",
                            el("tr",
                                el("td", "[안내] 가이아프로토콜"),
                                el("td", "2022.06.15"),
                                el("td", "815761"),
                            ),
                        ),
                    )
                ),
            ),
        ));
        this.init();
    }

    public init(): void {
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
