import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import SymbolItem from "../../component/symbol-item";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";


export default class History implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "거래내역";
        Layout.current.content.append(this.container = el(".balance-view",
            el("section",
                el("article",
                    el(".tab-container",
                        el("a", "보유자산", { active: "", click: () => { ViewUtil.go("/investment/balance") } }),
                        el("a.active", "거래내역", { click: () => { ViewUtil.go("/investment/history") } }),
                        el("a", "미체결", { click: () => { ViewUtil.go("/investment/orders") } }),
                    ),
                ),
            ),
            el("aside",
                el(".input-container",
                    el("input", { placeholder: "코인명/심볼검색" }),
                    el("img", { src: "/images/shared/icn/search.svg", alt: "search" })
                ),
                el("hr"),
                el("header",
                    el("p", "한글명"),
                    el("p", "현재가"),
                    el("p", "전일대비"),
                    el("p", "거래대금"),
                ),
                el("hr"),
                el("article",
                    new SymbolItem("비트코인", "BTC/KRW", 50330000, "+0.17", 8000, 300896)
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
