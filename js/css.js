// https://codepen.io/gordawn/pen/oOWBXX

// 1.       міняємо властивості через змінні css
// ./main.js
const root = document.documentElement;
function changeValue(id, value) {
  const suffix = (id != 'color' ? '%' : '');
  root.style.setProperty(`--${id}`, value + suffix);
  console.log(value + suffix)
}

// ./index.html
<div class="container">
  <div class="inputContainer">
    <label for="location">Location</label>
    <input type="range" name="location" id="location" min="0" max="100" value="0" oninput="changeValue('position', this.value)">
  </div>
  <div class="inputContainer">
    <label for="radius">Radius</label>
    <input type="range" name="radius" id="radius" min="0" max="50" value="0" oninput="changeValue('radius', this.value)">
  </div>  
  <div class="inputContainer">
    <label for="color">Color</label>
    <input type="color" name="color" id="color" value="#2E343F" onchange="changeValue('color', this.value)">
  </div>
  <div class="container scroll">
    <div class="box" id="box"></div>
  </div>
</div>

// ./style.css
:root {
  --color: #2E343F;
  --position: 0;
  --raduius: 0;
}

.inputContainer {
  display: flex;
  align-items: center;
}

.inputContainer label {
  margin-right: 10px;
}

.scroll {
  position: relative;
  padding: 10px 20px;
}
.asd {
  --asd: red;
  color: var(--asd);
}
.box {
  transform: translateX(var(--position));
  background: var(--color);
  border-radius: var(--radius);
  width: 100px;
  height: 100px;
  transition: width 2s;
}