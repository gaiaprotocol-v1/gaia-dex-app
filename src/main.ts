import { SkyRouter } from "skydapp-common";
import Wallet from "./klaytn/Wallet";
import Home from "./view/Home";
import Layout from "./view/Layout";

(async () => {
    SkyRouter.route("**", Layout);
    SkyRouter.route("", Home);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    if (await Wallet.connected() !== true) {
        await Wallet.connect();
    }
})();