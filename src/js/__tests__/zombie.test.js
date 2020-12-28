import Zombie from '../zombie';

test('zombie', () => {
  const zombie = new Zombie('zombie', 'Zombie');
  expect([zombie.name, zombie.type, zombie.attack, zombie.defence]).toEqual(['zombie', 'Zombie', 40, 10]);
});
