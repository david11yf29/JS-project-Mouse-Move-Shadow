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

const dolby = new Elf('Dolby', 'cloth', 'house');
console.log(dolby.__proto__);
console.log(dolby.__proto__.__proto__);
console.log(dolby.__proto__.__proto__.__proto__);
console.log(dolby.__proto__.__proto__.__proto__.__proto__);