// ================================
// Milk Tea Roulette V3
// script.js（基础版）
// ================================

const reel = document.getElementById("reel");
const startButton = document.getElementById("startButton");
const winnerName = document.getElementById("winnerName");

let spinning = false;

/**
 * 创建滚轮
 */
function buildReel() {

    let html = "";

    // 重复多次，让滚动更自然
    for (let i = 0; i < CONFIG.minLoops + 2; i++) {

        SHOPS.forEach(shop => {

           html += `
<div class="slot-item" data-index="${shop.id}">
    ${shop.name}
</div>
`;

        });

    }

    reel.innerHTML = html;

}

buildReel();

/**
 * 开始抽奖
 */
startButton.addEventListener("click", spin);

/**
 * 抽奖
 */
function spin() {

    if (spinning) return;

    spinning = true;

    startButton.disabled = true;

    const winner = getRandomShop();

    const winnerIndex = SHOPS.findIndex(
        shop => shop.id === winner.id
    );

    const itemHeight = CONFIG.itemHeight;

    const totalItems = SHOPS.length;

    const loops = CONFIG.minLoops * totalItems;

    const targetIndex = loops + winnerIndex;

    const targetY = targetIndex * itemHeight;

    reel.style.transition = `transform ${CONFIG.spinDuration}ms cubic-bezier(.15,.8,.2,1)`;

    reel.style.transform =`translateY(${-targetY + itemHeight * 2}px)`;
   

    setTimeout(() => {

        winnerName.textContent =
            CONFIG.resultPrefix + winner.name;

        winnerName.classList.remove("win-pop");

        void winnerName.offsetWidth;

        winnerName.classList.add("win-pop");

        startButton.disabled = false;

        startButton.textContent =
            CONFIG.againText;

        reel.style.transition = "none";

        reel.style.transform = "translateY(0px)";

        spinning = false;

    }, CONFIG.spinDuration + 100);

}
