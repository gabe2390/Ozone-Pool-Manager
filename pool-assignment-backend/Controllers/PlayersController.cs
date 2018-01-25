using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace pool_assignment_backend.Controllers {
    [Route ("api/[controller]")]
    public class PlayersController : Controller {
        private readonly IPlayerManager _playerManager;

        public PlayersController (IPlayerManager playerManager) {
            _playerManager = playerManager;
        }

        [HttpGet]
        public IEnumerable<Player> Get() {
            return _playerManager.GetPlayers ();
        }

        [HttpPost]
        public Player Post ([FromBody] Player player) {

            var result = _playerManager.CreatePlayer (player);
            return result;
        }

        //TODO: UPDATE AND DELETE players
    }
}