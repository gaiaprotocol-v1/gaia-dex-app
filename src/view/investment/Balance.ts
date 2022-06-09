import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import { Chart, registerables } from "chart.js";
import SymbolItem from "../../component/symbol-item";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";


export default class Balance implements View {

    private container: DomNode;
    private chartDisplay: DomNode<HTMLCanvasElement>;

    constructor() {
        Layout.current.title = msg("BALANCE_TITLE");
        Layout.current.content.append(this.container = el(".balance-view",
            el("section",
                el("article",
                    el(".tab-container",
                        el("a.active", "보유자산", { active: "", click: () => { ViewUtil.go("/investment/balance") } }),
                        el("a", "거래내역", { click: () => { ViewUtil.go("/investment/history") } }),
                        el("a", "미체결", { click: () => { ViewUtil.go("/investment/orders") } }),
                    ),
                    el(".my-container",
                        el(".amount-container",
                            el(".trade-amount-total",
                                el("dl",
                                    el("dt", el("span", "보유 KRW")),
                                    el("dd",
                                        el("span", "0"),
                                        el("i", "krw"),
                                    ),
                                ),
                                el("dl",
                                    el("dt", el("span", "총 보유자산")),
                                    el("dd",
                                        el("span", "0"),
                                        el("i", "krw"),
                                    ),
                                ),
                            ),
                            el(".trade-amount",
                                el("dl",
                                    el("dt", el("span", "총매수금액")),
                                    el("dd",
                                        el("span", "0"),
                                        el("i", "krw"),
                                    ),
                                ),
                                el("dl",
                                    el("dt", el("span", "총평가손익")),
                                    el("dd",
                                        el("span", "0"),
                                        el("i", "krw"),
                                    ),
                                ),
                            ),
                            el(".trade-amount",
                                el("dl",
                                    el("dt", el("span", "총평가금액")),
                                    el("dd",
                                        el("span", "0"),
                                        el("i", "krw"),
                                    ),
                                ),
                                el("dl",
                                    el("dt", el("span", "총평가수익률")),
                                    el("dd",
                                        el("span", "0"),
                                        el("i", "%"),
                                    ),
                                ),
                            ),
                        ),
                        el(".chart-container",
                            this.chartDisplay = el("canvas"),
                        ),
                    ),
                    el(".amount-table",
                        el(".amount-title", "보유자산 목록"),
                        el("table",
                            el("colgroup",
                                el("col", { width: "*" }),
                                el("col", { width: "140" }),
                                el("col", { width: "140" }),
                                el("col", { width: "140" }),
                                el("col", { width: "140" }),
                                el("col", { width: "135" }),
                                el("col", { width: "100" }),
                            ),
                            el("thead",
                                el("tr",
                                    el("th", "보유자산"),
                                    el("th", "보유수량"),
                                    el("th", "매수평균가"),
                                    el("th", "매수금액"),
                                    el("th", "평가금액"),
                                    el("th", "평가손익"),
                                ),
                            ),
                            el("tbody",
                                el("tr",
                                    el("td.amount-name",
                                        el("img.logo", { src: "/images/shared/logo/btc.svg", alt: "btc" }),
                                        el(".name",
                                            "비트코인",
                                            el(".subName", "BTC")
                                        ),
                                    ),
                                    el("td",
                                        el(".count",
                                            "0.00130805",
                                            el("i", "BTC")
                                        )
                                    ),
                                    el("td",
                                        el(".count",
                                            "11,040",
                                            el("i", "KRW")
                                        )
                                    ),
                                    el("td",
                                        el(".count",
                                            "15",
                                            el("i", "KRW")
                                        )
                                    ),
                                    el("td",
                                        el(".count",
                                            "4",
                                            el("i", "KRW")
                                        )
                                    ),
                                    el("td",
                                        el(".count.decrease",
                                            "-65.67",
                                            el("i", "%")
                                        )
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
        this.loadAmountChart()
    }

    public loadAmountChart(): void {
        const chartData: any = {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: [],
            }],
        };

        chartData.labels.push("BTC");
        chartData.datasets[0].data.push(100);
        chartData.datasets[0].backgroundColor.push("#B19C76");

        Chart.register(...registerables);

        new Chart(this.chartDisplay.domElement.getContext("2d"), {
            type: "pie",
            data: chartData,
            option: {
                responsive: true,
                color: "#ffffff",
            },
        });
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
