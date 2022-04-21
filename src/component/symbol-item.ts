import { DomNode, el } from "skydapp-browser";
import CommonUtil from "../CommonUtil";

export default class SymbolItem extends DomNode {
    constructor(
        private title: string,
        private symbol: string,
        private price: number,
        private previousPercent: string,
        private previousPrice: number,
        private deal: number,
    ) {
        super(".symbol-item");
        this.append(
            el(".title",
                el("p", `${title}`),
                el(".sub", `${symbol}`),
            ),
            el(".price", `${CommonUtil.numberWithCommas(price.toString())}`),
            el(".previous",
                el(".percent", `${previousPercent}%`),
                el(".price", `${CommonUtil.numberWithCommas(previousPrice.toString())}`),
            ),
            el(".deal",
                el("p", `${CommonUtil.numberWithCommas(deal.toString())}`),
                el("span", "백만"),
            ),
        );
    }

    public delete() {
        super.delete();
    }
}