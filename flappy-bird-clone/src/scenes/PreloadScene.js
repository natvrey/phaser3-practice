import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('clouds', 'assets/clouds.png');
    this.load.image('bird', 'assets/tweetie-bird.png');
    this.load.image('pipe', 'assets/pink-pipe.png');
    this.load.image('pause', 'assets/red-pause-button-icon.png');
  }

  create() {
    this.scene.start('MenuScene');
  }
}

export default PreloadScene;
