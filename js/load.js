var loadState = {

  preload: function() {
    //Add a line of text to the screen
    loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

    //Load all the assets
    //(the size and number of assets will slow this process down)
    //game.load.image('background', 'assets/background.png');

  },

  create: function() {
    game.state.start('menu'); //Load the menu
  }

};
