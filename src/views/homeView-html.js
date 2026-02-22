function getHtmlView() {
  return String.raw`
    <header class="header">
      <div class="header-content">
        <h3>Vanilla Starter</h3>
      </div>
    </header>
    <div class="row">
      <div class="col">
          <label for="input">HTML</label>
          <textarea cols="100" rows=10 id="input" name="input" ></textarea>
      </div>
      <div class="col">
            <label for="output">Markdown</label>
            <textarea readonly cols="100" rows=10 id="output" name="input"></textarea>
      </div>
    </div>

    <div class="content-container whiteframe">
      <h1>Counter: <span id="counter">0</span></h1>
      <button id="decrementBtn">Decrement</button>
      <button id="incrementBtn">Increment</button>
    </div>`;
}

export default getHtmlView;
