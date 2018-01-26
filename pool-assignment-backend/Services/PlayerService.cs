using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using pool_assignment_backend.Models;

namespace pool_assignment_backend.Services {
    public interface IPlayerService {
        List<Player> GetPlayers ();
        Player CreatePlayer (Player player);
    }
    public class PlayerService : DbContext {
        public Player CreatePlayer (Player player) {
            return new Player { Name = "Billy Bob", Brag = "I gets dem dere pool balls in dem dere holes.", Id = 1, Wins = 10, Losses = 1 };
        }

        public List<Player> GetPlayers () {
            return new List<Player> {
                new Player { Name = "Billy Bob", Brag = "I gets dem dere pool balls in dem dere holes.", Id = 1, Wins = 10, Losses = 1 },
                new Player { Name = "billy Bob", Brag = "I gets dem dere pool balls in dem dere holes.", Id = 1, Wins = 12, Losses = 1 },
                new Player { Name = "Gilly Bob", Brag = "I gets dem dere pool balls in dem dere holes.", Id = 1, Wins = 12, Losses = 1 },
                new Player { Name = "gilly Bob", Brag = "I gets dem dere pool balls in dem dere holes.", Id = 1, Wins = 104, Losses = 1 },
                new Player { Name = "Hilly Bob", Brag = "I gets dem dere pool balls in dem dere holes.", Id = 1, Wins = 105, Losses = 1 },
                new Player { Name = "hilly Bob", Brag = "I gets dem dere pool balls in dem dere holes.", Id = 1, Wins = 13, Losses = 1 },
                new Player { Name = "Tilly Bob", Brag = "I gets dem dere pool balls in dem dere holes.", Id = 1, Wins = 104, Losses = 1 },
                new Player { Name = "tilly Bob", Brag = "I gets dem dere pool balls in dem dere holes.", Id = 1, Wins = 10, Losses = 1111 },
            };
        }
    }
}