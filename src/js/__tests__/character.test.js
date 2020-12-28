import Character from '../character';
import Zombie from '../zombie';
import Undead from '../undead';

// тесты для задания 1

test('Character', () => {
  const character = new Zombie('character', 'Zombie');
  expect([character.name, character.type, character.health, character.level, character.attack, character.defence]).toEqual(['character', 'Zombie', 100, 1, 40, 10]);
});

test('long name', () => {
  expect(() => new Character('longLongName', 'Magician').toThrow('Имя должно быть строкой длиной от 2 до 10 символов'));
});

test('short name', () => {
  expect(() => new Character('s', 'Undead').toThrow('Имя должно быть строкой длиной от 2 до 10 символов'));
});

test('string', () => {
  expect(() => new Character(89, 'Bowerman').toThrow('Имя должно быть строкой длиной от 2 до 10 символов'));
});

test('wrong type', () => {
  expect(() => new Character('longName', 'lkdfnmko').toThrow('Неверный тип'));
});

// Тесты для задания 2

test('level up', () => {
  const zombie = new Character('zombie', 'Zombie');
  zombie.health = 0;
  expect(() => {
    zombie.levelUp();
  }).toThrow('Нельзя повысить левел умершего');
});

test('level up features', () => {
  const zombie = new Zombie('zombie', 'Zombie');
  zombie.levelUp();
  expect([zombie.name, zombie.type, zombie.attack, zombie.defence, zombie.health, zombie.level]).toEqual(['zombie', 'Zombie', 48, 12, 100, 2]);
});


test('damage', () => {
  const undead = new Undead('undead', 'Undead');
  undead.damage(80);
  expect([undead.defence, undead.health]).toEqual([25, 40]);
});
