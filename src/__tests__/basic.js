import Bowerman from '../bowerman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('basic test Bowerman', () => {
  const player = {
    name: 'Sasha',
    health: 100,
    level: 1,
    type: 'Bowerman',
    attack: 25,
    defence: 25,
  };
  const result = new Bowerman('Sasha');
  expect(result).toEqual(player);
});

test('basic test Daemon', () => {
  const player = {
    name: 'Misha',
    health: 100,
    level: 1,
    type: 'Daemon',
    attack: 10,
    defence: 40,
  };
  const result = new Daemon('Misha');
  expect(result).toEqual(player);
});

test('basic test Magician', () => {
  const player = {
    name: 'Olga',
    health: 100,
    level: 1,
    type: 'Magician',
    attack: 10,
    defence: 40,
  };
  const result = new Magician('Olga');
  expect(result).toEqual(player);
});

test('basic test Swordsman', () => {
  const player = {
    name: 'Ivan',
    health: 100,
    level: 1,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };
  const result = new Swordsman('Ivan');
  expect(result).toEqual(player);
});

test('basic test Undead', () => {
  const player = {
    name: 'Dima',
    health: 100,
    level: 1,
    type: 'Undead',
    attack: 25,
    defence: 25,
  };
  const result = new Undead('Dima');
  expect(result).toEqual(player);
});

test('basic test Zombie', () => {
  const player = {
    name: 'Anna',
    health: 100,
    level: 1,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };
  const result = new Zombie('Anna');
  expect(result).toEqual(player);
});

test('test error name < 2', () => {
  expect(() => {
    Object.create(Zombie('A'));
  }).toThrow();
});

test('test error name > 10', () => {
  expect(() => {
    Object.create(Zombie('Aaaaaaaaaaaaaaaaaaa'));
  }).toThrow();
});
