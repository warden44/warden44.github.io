// import randColor from "./randomColor";
const canvas = document.getElementById("canvas1");

function genFractal() {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function getRandomHexColor() {
    // Generating a random hexadecimal color code
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const gradient = ctx.createLinearGradient(20, 0, 220, 0);
  // makes a a gradient with 4 random color values
  gradient.addColorStop(0, `${getRandomHexColor()}`);
  gradient.addColorStop(0.5, `${getRandomHexColor()}`);
  gradient.addColorStop(1, `${getRandomHexColor()}`);
  gradient.addColorStop(1, `${getRandomHexColor()}`);

  // defines the fractal specifications
  function getInputs() {
    let maxLevelInput = document.getElementById("maxLevelInput").value;
    return maxLevelInput.value;
  }
  console.log(maxLevelInput.value);
  const maxLevel = maxLevelInput.value;
  const branches = 3;
  const sides = Math.floor(Math.random() * 10 + 3);
  const spread = Math.random() * 48 + 0.51;

  ctx.translate(canvas.width / 2, canvas.height / 2);
  const angle = Math.PI * 2 * spread;

  function drawLine(level) {
    if (level > maxLevel) return;

    // ctx.strokeStyle = randomColor;
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 0);
    ctx.stroke();

    for (let i = 1; i < branches + 1; i++) {
      ctx.save();
      ctx.translate((200 * i) / (branches + 1), 0);
      ctx.scale(0.5, 0.5);
      ctx.save();

      ctx.rotate(angle);
      drawLine(level + 1);
      ctx.restore();
      ctx.save();

      ctx.rotate(-angle);
      drawLine(level + 1);
      ctx.restore();

      ctx.restore();
    }
  }
  for (let i = 0; i < sides; i++) {
    drawLine(0);
    ctx.rotate((Math.PI * 2) / sides);
  }
}
