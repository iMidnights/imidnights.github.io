MouseGame.Game = function () {
    "use strict";
};


MouseGame.Game.prototype = {
    img: null,
    width: document.body.clientWidth,
    height: document.body.clientHeight,
    keyReset: false,

    background: null,

    scientist: null,
    mouse: null,
    ui: null,
    pauseMenu: null,
    buttonCounter: 0,
    gamePaused: false,
    wasPlaying: false,
    musicMuted: false,

    levels: [
        'test-map',
        'test-scroll',
        'level1',
        'level-doors-medium',
        'level-doors-hard'
    ],

    preload: function () {
        "use strict";

        var activeLevel = this.game.state.states.levelselector.level;

        game.load.tileset('tiles', 'assets/tiles/new-tiles.png', 64, 64);
        game.load.spritesheet('tiles-sprites', 'assets/tiles/new-tiles.png', 64, 64);
    },

    create: function () {
        "use strict";

        MouseGame.MapLoader.prototype.createMap();

        MouseGame.Game.ui = game.add.group();

        var background = MouseGame.Game.ui.add(game.add.sprite(0, 0, 'background'));
        MouseGame.Commands.prototype.createButtons();

        var level = this.game.state.states.levelselector.level;
        // history.replaceState(level, 'hey', level+'#game');

        playMusic(false);

        MouseGame.Commands.isPlaying = false;

        var pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        pauseKey.onDown.add(MouseGame.Game.prototype.togglePause, this);

    },

    update: function() {
        "use strict";

    },

    quitToMenu: function () {
        "use strict";

        this.game.state.start('levelselector');
    },

    togglePause : function () {
        "use strict";

        if (MouseGame.Game.prototype.gamePaused) {
            this.unpauseGame();
        } else {
            this.pauseGame();
        }
    },

    // pause the game
    pauseGame : function () {
        'use strict';

        if (MouseGame.Commands.prototype.isPlaying === true) {
            MouseGame.Game.prototype.wasPlaying = true;
        }

        MouseGame.Game.prototype.gamePaused = true;
        MouseGame.Commands.prototype.isPlaying = false;
        this.pauseMenu = {};
        if (MouseGame.Game.prototype.musicMuted === true) {
            this.pauseMenu.muteButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 100, 'button-unmute', this.muteAudio, this, 2, 1, 0);
        } else {
            this.pauseMenu.muteButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 100, 'button-mute', this.muteAudio, this, 2, 1, 0);
        }
        this.pauseMenu.mainMenuButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'button-main-menu', this.returnToMainMenu, this, 2, 1, 0);
        this.pauseMenu.returnToGameButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 100, 'button-back', this.unpauseGame, this, 2, 1, 0);
        this.pauseMenu.mainMenuButton.anchor.setTo(0.5, 0.5);
        this.pauseMenu.muteButton.anchor.setTo(0.5, 0.5);
        this.pauseMenu.returnToGameButton.anchor.setTo(0.5, 0.5);
        MouseGame.MainMenu.prototype.bindButtonHover(this.pauseMenu.muteButton);
        MouseGame.MainMenu.prototype.bindButtonHover(this.pauseMenu.mainMenuButton);
        MouseGame.MainMenu.prototype.bindButtonHover(this.pauseMenu.returnToGameButton);
        playMusic(false, true);
    },

    unpauseGame: function () {
        'use strict';
        MouseGame.Game.prototype.gamePaused = false;
        this.pauseMenu.mainMenuButton.destroy();
        this.pauseMenu.muteButton.destroy();
        this.pauseMenu.returnToGameButton.destroy();
        playMusic(false, false);
        if (MouseGame.Game.prototype.wasPlaying === true) {
            MouseGame.Commands.prototype.isPlaying = true;
            MouseGame.Game.prototype.wasPlaying = false;
            MouseGame.Commands.prototype.executeOrder();
        }
    },

    returnToMainMenu: function () {
        'use strict';
        // reset the isPlaying variable so the game doesn't think that the Mouse is still running
        MouseGame.Commands.prototype.isPlaying = false;
        MouseGame.Game.prototype.gamePaused = false;
        this.pauseMenu.mainMenuButton.destroy();
        this.pauseMenu.muteButton.destroy();
        this.pauseMenu.returnToGameButton.destroy();
        MouseGame.LevelSelector.prototype.showMenu.call(this);
    },

    muteAudio: function () {
        'use strict';
        
        if (MouseGame.Game.prototype.musicMuted === false) {
            MouseGame.Game.prototype.musicMuted = true;
            this.pauseMenu.muteButton.loadTexture('button-unmute');
        } else if (MouseGame.Game.prototype.musicMuted === true) {
            MouseGame.Game.prototype.musicMuted = false;
            this.pauseMenu.muteButton.loadTexture('button-mute');
        }
    }
};

