import Swordsman from '../swordsman';

test('swordsman', () => {
  const swordsman = new Swordsman('sword', 'Swordsman');
  expect([swordsman.name, swordsman.type, swordsman.attack, swordsman.defence]).toEqual(['sword', 'Swordsman', 40, 10]);
});
