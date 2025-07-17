// https://school.programmers.co.kr/learn/courses/30/lessons/120869?language=javascript

function solution(spell, dic) {
  const sortedSpell = spell.sort().join('');

  for (let word of dic) {
    if ([...word].sort().join('') === sortedSpell) {
      return 1;
    }
  }

  return 2;
}