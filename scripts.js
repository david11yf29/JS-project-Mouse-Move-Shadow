// const elf = {
//     name: 'Orwell',
//     weapon: 'bow',
//     attack() {
//         return 'attach with ' + elf.weapon
//     }
// }

// console.log(elf.attack());

function createElf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        attack() {
            return 'attack with ' + weapon
        }
    }
}

const peter = createElf('Peter', 'stones');
console.log(peter.attack());