import Zombie from '../zombie';

test('test method damage', () => {
  const result = new Zombie('Zombie');
  result.damage(40);
  expect(result.health).toBeCloseTo(64);
});

test('test method levelUp health', () => {
  const result = new Zombie('Zombie');
  result.damage(40);
  result.levelUp();
  expect(result.health).toBe(100);
});

test('test method levelUp health > 100', () => {
  const result = new Zombie('Zombie');
  result.levelUp();
  expect(result.health).toEqual(100);
});

test('test method levelUp level', () => {
  const result = new Zombie('Zombie');
  result.levelUp();
  expect(result.level).toEqual(2);
});

test('test method levelUp attack', () => {
  const result = new Zombie('Zombie');
  result.levelUp();
  expect(result.attack).toBeCloseTo(48);
});

test('test method levelUp defence', () => {
  const result = new Zombie('Zombie');
  result.levelUp();
  expect(result.defence).toBeCloseTo(12);
});

test('test error levelUp', () => {
  expect(() => {
    const result = new Zombie('Anna');
    result.health = 0;
    result.levelUp();
  }).toThrow();
});
