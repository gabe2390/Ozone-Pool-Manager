using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using pool_assignment_backend.Models;

namespace pool_assignment_backend.Services {
    public interface IPlayerService {
        DbSet<Player> GetPlayers ();
        int SaveChanges ();
    }
    public class PlayerService : DbContext, IPlayerService {
        public PlayerService (DbContextOptions<PlayerService> options) : base (options) { }
        private DbSet<Player> Players { get; set; }

        public DbSet<Player> GetPlayers () {
            return Players;
        }
    }
}