const addWordFormEl = document.querySelector('.addWordForm');
const quizWordEl = document.querySelector('.quizWord');
const findWordEl = document.querySelector('.findWord');
const engWordEl = document.querySelector('.engWord');
const korWordEl = document.querySelector('.korWord');



addWordFormEl.addEventListener('submit', (e) => {
  e.defaultPrevented();
  const engWord = engWordEl.value;
  const korWord = korWordEl.value;
  console.log(engWord)
})