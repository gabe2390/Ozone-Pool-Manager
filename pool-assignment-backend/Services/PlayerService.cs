using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using pool_assignment_backend.Models;

namespace pool_assignment_backend.Services {
    public class PlayerService : DbContext {
        public PlayerService (DbContextOptions<PlayerService> options) : base (options) { }
        public DbSet<Player> Players { get; set; }
    }
}