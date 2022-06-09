import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import SymbolItem from "../../component/symbol-item";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";


export default class Orders implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "미체결";
        Layout.current.content.append(this.container = el(".balance-view",
            el("section",
                el("article",
                    el(".tab-container",
                        el("a", "보유자산", { active: "", click: () => { ViewUtil.go("/investment/balance") } }),
                        el("a", "거래내역", { click: () => { ViewUtil.go("/investment/history") } }),
                        el("a.active", "미체결", { click: () => { ViewUtil.go("/investment/orders") } }),
                    ),
                    el(".my-container",
                        el(".order-table",
                            el("table",
                                el("colgroup",
                                    el("col", { width: "95" }),
                                    el("col", { width: "90" }),
                                    el("col", { width: "70" }),
                                    el("col", { width: "140" }),
                                    el("col", { width: "140" }),
                                    el("col", { width: "140" }),
                                    el("col", { width: "140" }),
                                    el("col", { width: "*" }),
                                ),
                                el("thead",
                                    el("tr",
                                        el("th", "시간"),
                                        el("th", "마켓명"),
                                        el("th", "거래종류"),
                                        el("th", "감시가격"),
                                        el("th", "주문가격"),
                                        el("th", "주문수량"),
                                        el("th", "미체결량"),
                                        el("th", "주문취소"),
                                    ),
                                ),
                                el("tbody",
                                    el("tr",
                                        el("td", "2022.05.23 11:50"),
                                        el("td", "BTC/KRW"),
                                        el("td", "KRW"),
                                        el("td", "1,234", el("i", "KRW")),
                                        el("td", "1,234", el("i", "KRW")),
                                        el("td", "1.234", el("i", "BTC")),
                                        el("td", "1.234", el("i", "BTC")),
                                        el("td", el("a", "취소")),
                                    ),
                                ),
                            ),
                        ),
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
