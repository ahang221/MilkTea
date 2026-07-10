/**
 * Milk Tea Roulette V3
 * 全局配置文件
 * 修改这里即可调整动画、界面和交互行为
 */

const CONFIG = {

    // =============================
    // 动画
    // =============================

    // 老虎机滚动总时长（毫秒）
    spinDuration: 3000,

    // 至少滚动多少圈
    minLoops: 9,

    // 每一项高度（必须和 CSS 保持一致）
    itemHeight: 64,

    // 显示几项（建议奇数）
    visibleItems: 5,

    // 每秒初始滚动速度（像素）
    startSpeed: 1800,

    // =============================
    // 动画效果
    // =============================

    // 是否启用缓动减速
    easing: true,

    // 是否启用中奖缩放动画
    winnerScale: true,

    // 是否启用按钮动画
    buttonAnimation: true,

    // 是否启用彩带（V4 实现）
    confetti: false,

    // 是否启用音效（V4 实现）
    sound: false,

    // =============================
    // 页面
    // =============================

    title: "🥤 今天喝什么？",

    buttonText: "开始抽奖",

    againText: "再抽一次",

    resultPrefix: "今天喝："

};
