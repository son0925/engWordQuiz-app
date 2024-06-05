function showContent(section) {
  const contentBox = document.getElementById('contentBox')
  const content = document.getElementById('content')

  switch(section) {
    case 'addWord':
      contentBox.querySelector('.card-header').innerHTML = '단어 추가'
      content.innerHTML = `
            <form method="post" action="/word/add">
              <div class="form-group">
                <label for="word">단어</label>
                <input type="text" class="form-control" id="word" placeholder="단어를 입력하세요" name="word">
              </div>
              <div class="form-group">
                <label for="definition">뜻</label>
                <textarea class="form-control" id="definition" rows="3" placeholder="뜻을 입력하세요" name="mean"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">추가하기</button>
            </form>
      `
      break;
    
    case 'findWord':
      contentBox.querySelector('.card-header').innerHTML = '단어 찾기'
      content.innerHTML = `
            <form method="post" action="/word/find">
              <div class="form-group">
                <label for="word">단어</label>
                <input type="text" class="form-control" id="word" placeholder="단어를 입력하세요" name="word">
              </div>
              <button type="submit" class="btn btn-primary">단어찾기</button>
            </form>
      `
      break;
    
    case 'editWord':
      contentBox.querySelector('.card-header').innerHTML = '단어 수정'
      content.innerHTML = `
          <form method="post" action="/word/edit">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="searchWord">바꾸는 단어</label>
                <input type="text" class="form-control" id="searchWord" placeholder="단어를 입력하세요" name="searchWord">
              </div>
              <div class="form-group col-md-6">
                <label for="newWord">새 단어</label>
                <input type="text" class="form-control" id="newWord" placeholder="새 단어를 입력하세요" name="newWord">
                <label for="newDefinition" class="mt-2">새 뜻</label>
                <textarea class="form-control" id="newDefinition" rows="3" placeholder="새 뜻을 입력하세요" name="newDefinition"></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">단어 수정</button>
          </form>
      `
      break;

    case 'quizWord':
      contentBox.querySelector('.card-header').innerHTML = '단어 퀴즈'
      content.innerHTML = `
        <div class="d-flex justify-content-center align-items-center" style="height: 200px;">
          <a href="/quiz/start" class="btn btn-primary btn-lg">퀴즈 시작</a>
        </div>
      `;
      break;
  }
}