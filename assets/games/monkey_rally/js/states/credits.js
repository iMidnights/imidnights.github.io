MouseGame.Credits = function (game) {
    "use strict";

    //  Our main menu
    this.game = game;
};

MouseGame.Credits.prototype = {

    preload: function() {
        "use strict";
        // game.load.image('credits-background','assets/backgrounds/credits-background.jpg');

        // // Buttons
        // game.load.image('button-back','assets/buttons/back.png');
    },

    create: function () {
        "use strict";

        this.game.add.sprite(0, 0, 'credits-background');
        // bg.scale.setTo(2.5, 2.5);

        // var t = this.game.add.sprite(100, 600, 'touhou');
        // t.anchor.setTo(0, 1);

        var button = this.game.add.button(this.game.world.centerX, 630, 'button-back', this.showMenu, this, 2, 1, 0);
        button.anchor.setTo(0.5, 0.5);
        MouseGame.MainMenu.prototype.bindButtonHover(button);
        //history.pushState(null, null, '#credits');
    },

    showMenu: function () {
        "use strict";

        this.game.state.start('mainmenu');
    },
};
