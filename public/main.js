// Element 변수
const addWordFormEl = document.querySelector('.addWordForm');
const addWordEl = document.querySelector('.addWord');
const addMeanEl = document.querySelector('.addMean');
const searchWordFormEl = document.querySelector('.searchWordForm');



// 홈페이지가 열리면 기본 화면 설정
document.addEventListener('DOMContentLoaded', () => {
  showSection('addWord');
})


// 원하는 세션 선택
function showSection(sectionID) {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    if (section.id === sectionID) {
      section.classList.remove('d-none');
    }
    else {
      section.classList.add('d-none');
    }
  })
}


// 단어 추가 버튼 클릭
addWordFormEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const word = {
    word: addWordEl.value,
    mean: addMeanEl.value
  }
  addWord(word);
})


const addWord = async (word) => {
  console.log(word);
  const option = {
    method: 'Post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(word),
  };

  try {
    const response = await fetch('/addWord', option);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.msg || '서버 오류');
    }
    alert(data.msg);
  } catch (error) {
    alert(error.message);
  }
};

// 단어 검색
searchWordFormEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const findEngWord = document.querySelector('.findEngWord').value;
  const word = {
    word: findEngWord
  }
  findWord(word);
})

const findWord = async(word) => {
  if (!word) {
    alert('단어를 입력하지 않았습니다');
  }
  const option = {
    method: 'Post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(word)
  }
  try {
    const response = await fetch('/findWord', option);
    const data = await response.json();
    if (!response.ok) {
      return alert(data.msg || '서버 오류');
    }
    alert(data.msg);
  } catch (error) {
    alert(error);
  }
}