import { DomNode, el } from "skydapp-browser";
import CommonUtil from "../CommonUtil";

export default class OrderItem extends DomNode {
    constructor(
        private price: number,
        private amount: number,
        private total: number,
    ) {
        super(".order-item");
        this.append(
            el(".price", `${CommonUtil.numberWithCommas(price.toString())}`),
            el(".amount", `${amount}`),
            el(".total", `${total}`),
        );
    }

    public delete() {
        super.delete();
    }
}