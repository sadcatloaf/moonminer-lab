class UpgradeService {
    increase(upgrade) {
        upgrade.score++
    }
}
export const upgradeService = new UpgradeService