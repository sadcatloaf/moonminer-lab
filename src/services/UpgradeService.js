import { AppState } from "@/AppState.js"
import { Kittens } from "@/models/Kittens.js"

class UpgradeService {
    mineKitten(clickPower) {
        AppState.kittens += clickPower
    }
    /**
     * @param {Kittens} upgrade
     */
    increaseUpgrade(upgrade) {
        upgrade.quantity++
        AppState.kittens -= upgrade.price
        upgrade.price += 2
    }

}
export const upgradeService = new UpgradeService