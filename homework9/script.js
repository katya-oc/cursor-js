function generateColor() {
  return Math.floor(Math.random() * 999999);
}

function generateBlocks() {
  const blocks = document.querySelectorAll('.squares');

  blocks.forEach(block => {
    block.style.cssText = `background-color: #${generateColor()};`;
  });
}

function generateBlocksInterval() {
  setInterval(generateBlocks, 1000);
}

generateBlocksInterval();