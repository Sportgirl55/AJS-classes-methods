import Bowerman from '../bowerman';

test('bowman', () => {
  const bowman = new Bowerman('bow', 'Bowerman');
  expect([bowman.name, bowman.type, bowman.attack, bowman.defence]).toEqual(['bow', 'Bowerman', 25, 25]);
});
