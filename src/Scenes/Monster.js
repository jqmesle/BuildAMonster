class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        this.fKey = this.input.keyboard.addKey('F');
        this.sKey = this.input.keyboard.addKey('S');
        this.aKey = this.input.keyboard.addKey('A');
        this.dKey = this.input.keyboard.addKey('D');
        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "eye_red.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouthF.png");
        my.sprite.smile = this.add.sprite(this.bodyX , this.bodyY + 50, "monsterParts", "mouthI.png");
        my.sprite.Rleg = this.add.sprite(this.bodyX + 100, this.bodyY + 115, "monsterParts", "leg_darkC.png"); 
        my.sprite.Lleg = this.add.sprite(this.bodyX - 100, this.bodyY + 115, "monsterParts", "leg_darkC.png"); 
        my.sprite.Lleg.flipX = true;
        my.sprite.Rarm = this.add.sprite(this.bodyX + 125, this.bodyY + 25, "monsterParts", "arm_darkE.png"); 
        my.sprite.Larm = this.add.sprite(this.bodyX - 125 , this.bodyY + 25, "monsterParts", "arm_darkE.png"); 
        my.sprite.Larm.flipX = true;
        my.sprite.Larm.rotation = Math.PI / 3;
        my.sprite.Rarm.rotation = 5 * Math.PI/3;
        my.sprite.Rhorn = this.add.sprite(this.bodyX + 75, this.bodyY - 50, "monsterParts", "detail_white_horn_large.png"); 
        my.sprite.Lhorn = this.add.sprite(this.bodyX - 75, this.bodyY - 50, "monsterParts", "detail_white_horn_large.png"); 
        my.sprite.Lhorn.flipX = true;

        // Event input: smiles.
        this.fKey.on('down', () => {
            my.sprite.smile.visible = false;
            my.sprite.dimple.visible = true;
        });
        this.sKey.on('down', () => {
            my.sprite.dimple.visible = false;
            my.sprite.smile.visible = true;
        });

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        // Polling input: peace hand.
        if (this.fKey.isDown) {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        }
        if (this.sKey.isDown) {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        }
        if (this.aKey.isDown) {
            this.bodyX += 5;
        }
        if (this.dKey.isDown) {
            this.bodyX -= 5;
        }
        my.sprite.body.x = this.bodyX;
        my.sprite.eye.x = this.bodyX;
        my.sprite.fangs.x = this.bodyX;
        my.sprite.smile.x = this.bodyX;
        my.sprite.Rleg.x = this.bodyX + 100;
        my.sprite.Lleg.x = this.bodyX - 100;
        my.sprite.Rarm.x = this.bodyX + 125;
        my.sprite.Larm.x = this.bodyX - 125;
        my.sprite.Rhorn.x = this.bodyX + 75;
        my.sprite.Lhorn.x = this.bodyX - 75;
    }

}