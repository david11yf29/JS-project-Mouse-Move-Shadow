class Charactor {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Charactor {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
}

class Monster extends Elf {
    constructor(name, weapon, type, blood) {
        super(name, weapon, type);
        this.blood = blood;
    }
}

const dolby = new Monster('Dolby', 'cloth', 'house', 'O');
console.log(dolby.__proto__);
console.log(dolby.__proto__.__proto__);
console.log(dolby.__proto__.__proto__.__proto__);
console.log(dolby.__proto__.__proto__.__proto__.__proto__);
console.log(dolby.__proto__.__proto__.__proto__.__proto__.__proto__);