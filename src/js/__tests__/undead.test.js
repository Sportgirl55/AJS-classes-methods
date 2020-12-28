import Undead from '../undead';

test('undead', () => {
  const undead = new Undead('undead', 'Undead');
  expect([undead.name, undead.type, undead.attack, undead.defence]).toEqual(['undead', 'Undead', 25, 25]);
});
