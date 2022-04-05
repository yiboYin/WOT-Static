const warGameController = require('../controllers/warGame')

module.exports = (publicRouter, privateRouter) => {
  privateRouter.get('/wg/summary', warGameController.getSummary)

  privateRouter.get('/wg/profile-static', warGameController.getProfileStatic)

  privateRouter.get('/wg/clan', warGameController.getClanBattle)

  privateRouter.get('/wg/vehicle-static', warGameController.getVehicleStatic)
}

//https://worldoftanks.ru/wotup/profile/summary/?spa_id=122599690&battle_type=random
