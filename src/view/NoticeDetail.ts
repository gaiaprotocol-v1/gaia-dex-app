import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "./Layout";


export default class NoticeDetail implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "공지사항";
        Layout.current.content.append(this.container = el(".notice-detail-view",
            el("section",
                el("article",
                    el(".title-container",
                        el("h2", "[공지] 가상자산 거래에 관한 위험 고지"),
                        el(".date-container",
                            el("p", "등록일 2022.06.15 15:00"),
                            el("i", "|"),
                            el("p", "조회수 815761"),
                        ),
                    ),
                    el(".content",
                        el("p", `본 고지는 회원님들이 가상자산을 거래하거나 보유할 때 발생할 수 있는 대표적인 위험을 안내하기 위함입니다.

가상자산거래는 손실에 대한 위험이 매우 클 수 있으므로 회원님의 가상자산거래시 본인의 투자목적, 재산상황, 거래(투자)경험 등을 감안하시고 아래 유의 사항을 충분히 인지 후 거래 하시기 바랍니다.

[가상자산 투자 유의사항]

                    1) 가상자산은 법정화폐가 아니므로 특정주체가 가치를 보장하지 않습니다.
2) 가상자산은 365일 24시간 전 세계에서 거래되며, 시장의 수요 및 공급, 각 가상자산의 정책, 국가별 법령 및 제도, 네트워크 상황 등 다양한 요인으로 급격한 시세 변동이 발생할 수 있습니다.
3) 가상자산은 가격 변동폭에 제한이 없으므로, 원금손실 가능성이 있음을 특히 유의하시기 바랍니다.
4) 가상자산은 초고위험 상품으로 투자자 자기책임 원칙이 우선되는 만큼, 회원님이 투자하려는 가상자산의 정보를 백서 또는 평가보고서 등을 통해 충분히 확인한 후에 신중히 투자 결정하시기 바랍니다.
5) 본 거래소도 회원님들에게 안전한 투자환경을 제공하기 위해 가상자산의 거래지원에 보다 유의하고, 회원님들께 최신의 정보를 제공하기 위해 노력하겠습니다.

위 사항들은 가상자산 거래에 수반되는 위험 등에 대해 회원님이 알아야 할 사항을 간략하게 서술한 것으로 가상자산 거래와 관련된 모든 위험을 기술 한 것은 아닙니다.또한 본 고지 내용은 거래소의 이용약관이나 국내외 관련법규 등에 우선하지 못한다는 점을 양지하여 주시기 바랍니다`
                        ),
                    ),
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
