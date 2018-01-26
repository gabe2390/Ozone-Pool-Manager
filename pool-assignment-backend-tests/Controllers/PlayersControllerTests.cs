using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using pool_assignment_backend.Controllers;
using pool_assignment_backend.Models;
using pool_assignment_backend.Services;
namespace pool_assignment_backend_tests.Contorllers {
    [TestClass]
    public class PlayersControllerTests {

        private Mock<IPlayerService> _playerserviceMock;
        private Mock<DbSet<Player>> _players;
        private PlayersController _target;

        [TestInitialize]
        public void Initialize () {
            _playerserviceMock = new Mock<IPlayerService> ();
            _players = new Mock<DbSet<Player>> ();
            _target = new PlayersController (_playerserviceMock.Object);

            _playerserviceMock.Setup (service => service.GetPlayers ()).Returns (_players.Object); //default return value for GetPlayers. will be overriden for verification in test

        }

        [TestMethod]
        public void Get_VerifyGetPlayersCalledFromService () {
            //Arrange
            _playerserviceMock.Setup (service => service.GetPlayers ()).Returns (_players.Object).Verifiable ();
            //Act
            _target.Get ();
            //Assert
            _playerserviceMock.Verify ();
        }

        [TestMethod]
        public void Post_VerifyAddCalledWithNewPlayer () {
            //Arrange
            var player = new Player ();
            _players.Setup (players => players.Add (player)).Verifiable ();
            //Act
            _target.Post (player);
            //Assert
            _playerserviceMock.Verify ();
        }

        [TestMethod]
        public void Post_VerifySaveChangesCalled () {
            //Arrange
            var player = new Player ();
            _playerserviceMock.Setup (service => service.GetPlayers ()).Returns (_players.Object).Verifiable ();
            _playerserviceMock.Setup (service => service.SaveChanges ()).Verifiable ();
            //Act
            _target.Post (player);
            //Assert
            _playerserviceMock.Verify ();
        }

        [TestMethod]
        public void Post_VerifyResults () {
            //Arrange
            var player = new Player ();
            _playerserviceMock.Setup (service => service.GetPlayers ()).Returns (_players.Object).Verifiable ();
            _playerserviceMock.Setup (service => service.SaveChanges ()).Verifiable ();
            //Act
            var result = _target.Post (player);
            //Assert
            Assert.AreEqual (result, player);
        }
    }
}