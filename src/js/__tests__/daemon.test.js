import Daemon from '../daemon';

test('daemon', () => {
  const daemon = new Daemon('daemon', 'Daemon');
  expect([daemon.name, daemon.type, daemon.attack, daemon.defence]).toEqual(['daemon', 'Daemon', 10, 40]);
});
