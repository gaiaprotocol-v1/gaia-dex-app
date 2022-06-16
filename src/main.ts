import { BrowserInfo, msg } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import superagent from "superagent";
import Wallet from "./klaytn/Wallet";
import Home from "./view/Home";
import Balance from "./view/investment/Balance";
import History from "./view/investment/History";
import Orders from "./view/investment/Orders";
import Layout from "./view/Layout";
import Notice from "./view/Notice";
import NoticeDetail from "./view/NoticeDetail";

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", Layout);
    SkyRouter.route("", Home);
    SkyRouter.route("investment/balance", Balance);
    SkyRouter.route("investment/history", History);
    SkyRouter.route("investment/orders", Orders);
    SkyRouter.route("notice", Notice);
    SkyRouter.route("notice/{id}", NoticeDetail);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    if (await Wallet.connected() !== true) {
        await Wallet.connect();
    }
})();