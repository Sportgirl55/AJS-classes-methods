import Magician from '../magician';

test('magician', () => {
  const magician = new Magician('magic', 'Magician');
  expect([magician.name, magician.type, magician.attack, magician.defence]).toEqual(['magic', 'Magician', 10, 40]);
});
