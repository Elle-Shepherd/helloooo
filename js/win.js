var winState = {
  create: function() {
    
  },

  restart: function() {
	// return to the menu state. i.e. restart the game.
    game.state.start('menu'); //Go to the menu state
  }
};
