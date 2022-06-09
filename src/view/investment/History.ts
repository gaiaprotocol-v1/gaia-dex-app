import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import SymbolItem from "../../component/symbol-item";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";


export default class History implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "거래내역";
        Layout.current.content.append(this.container = el(".history-view",
            el("section",
                el("article",
                    el(".tab-container",
                        el("a", "보유자산", { active: "", click: () => { ViewUtil.go("/investment/balance") } }),
                        el("a.active", "거래내역", { click: () => { ViewUtil.go("/investment/history") } }),
                        el("a", "미체결", { click: () => { ViewUtil.go("/investment/orders") } }),
                    ),
                    el(".my-container",
                        el(".history-table",
                            el(".filter-container",
                                el(".date-container",
                                    el(".title", "기간 (2022.05.01 ~ 2022.06.01)"),
                                    el("ul",
                                        el("li",
                                            el("button", "1주일"),
                                        ),
                                        el("li.active",
                                            el("button", "1개월"),
                                        ),
                                        el("li",
                                            el("button", "3개월"),
                                        ),
                                        el("li",
                                            el("button", "6개월"),
                                        ),
                                        el("li",
                                            el("button", "직접입력"),
                                        ),
                                    ),
                                ),
                                el(".category-container",
                                    el(".title", "종류"),
                                    el("ul",
                                        el("li.active",
                                            el("button", "전체"),
                                        ),
                                    ),
                                    el("ul",
                                        el("li",
                                            el("button", "매수"),
                                        ),
                                    ),
                                    el("ul",
                                        el("li",
                                            el("button", "매도"),
                                        ),
                                    ),
                                ),
                                el(".search-container",
                                    el(".title", "코인선택"),
                                    el("input", { placeholder: "전체" }),
                                ),
                            ),
                            el("table",
                                el("colgroup",
                                    el("col", { width: "94" }),
                                    el("col", { width: "64" }),
                                    el("col", { width: "48" }),
                                    el("col", { width: "62" }),
                                    el("col", { width: "122" }),
                                    el("col", { width: "144" }),
                                    el("col", { width: "144" }),
                                    el("col", { width: "98" }),
                                    el("col", { width: "120" }),
                                    el("col", { width: "94" }),
                                ),
                                el("thead",
                                    el("tr",
                                        el("th", "체결시간"),
                                        el("th", "코인"),
                                        el("th", "마켓"),
                                        el("th", "종류"),
                                        el("th", "거래수량"),
                                        el("th", "거래단가"),
                                        el("th", "거래금액"),
                                        el("th", "수수료"),
                                        el("th", "정산금액"),
                                        el("th", "주문시간"),
                                    ),
                                ),
                                el("tbody",
                                    el("tr",
                                        el("td", "2022.05.23 11:50"),
                                        el("td", "BTC"),
                                        el("td", "KRW"),
                                        el("td.sell", "매도"),
                                        el("td", "1.234", el("i", "BTC")),
                                        el("td", "538", el("i", "BTC")),
                                        el("td", "663.892", el("i", "BTC")),
                                        el("td", "1.892", el("i", "BTC")),
                                        el("td", "663.892", el("i", "BTC")),
                                        el("td", "2022.05.23 11:40"),
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
