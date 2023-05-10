// import randColor from "./randomColor";
const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// const randomGreen = Math.floor(Math.random() * 255);
// const randomRed = Math.floor(Math.random() * 255);
// const randomBlue = Math.floor(Math.random() * 255);
// const randomColor = `rbga(${randomBlue},${randomGreen},${randomRed},0)`;

const rc1 = Math.random() * 16777215;
const rc2 = Math.floor(rc1);
const rc3 = rc2.toString(16);

function genColor2() {
  const genHex = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor = "#" + genHex;
  return randomColor;
}

const gradient = ctx.createLinearGradient(20, 0, 220, 0);

gradient.addColorStop(0, `${genColor2()}`);
gradient.addColorStop(0.5, `${genColor2()}`);
gradient.addColorStop(1, `${genColor2()}`);
gradient.addColorStop(1, `${genColor2()}`);

const maxLevel = 4;
const branches = 3;
const sides = Math.floor(Math.random() * 10 + 3);
const spread = Math.random() * 48 + 0.51;

ctx.translate(canvas.width / 2, canvas.height / 2);
const angle = Math.PI * 2 * spread;

function drawLine(level) {
  if (level > maxLevel) return;

  ctx.strokeStyle = red;
  //   ctx.strokeStyle = "#FF9944";
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
