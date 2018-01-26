using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using pool_assignment_backend.Models;
using pool_assignment_backend.Services;

namespace pool_assignment_backend.Controllers {
    [Route ("api/players")]
    public class PlayersController : Controller {
        private readonly IPlayerService _playerService;

        public PlayersController (IPlayerService playerService) {
            _playerService = playerService;
        }

        [HttpGet]
        public IEnumerable<Player> Get () {
            return _playerService.GetPlayers();
        }

        [HttpPost]
        public Player Post ([FromBody] Player player) {
            _playerService.GetPlayers ().Add (player);
            _playerService.SaveChanges ();
            return player;
        }

        //TODO: UPDATE AND DELETE players
    }
}