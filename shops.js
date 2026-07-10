/**
 * ============================================
 * Milk Tea Roulette V3
 * 奶茶店数据
 * ============================================
 *
 * 以后你只需要修改这个文件。
 *
 * 新增奶茶店：
 * 在最后增加一个对象即可。
 *
 * 删除奶茶店：
 * 删除对应对象即可。
 *
 * 修改中奖概率：
 * 修改 weight 即可。
 *
 * weight 越大，抽中的概率越高。
 * ============================================
 */

const SHOPS = [

    {
        id: 1,
        name: "霸王茶姬",
        weight: 1
    },

    {
        id: 2,
        name: "喜茶",
        weight: 1
    },

    {
        id: 3,
        name: "茉莉奶白",
        weight: 1
    },

    {
        id: 4,
        name: "茶百道",
        weight: 1
    },

    {
        id: 5,
        name: "树夏",
        weight: 1
    },

    {
        id: 6,
        name: "沪上阿姨",
        weight: 1
    },

    {
        id: 7,
        name: "蜜雪冰城",
        weight: 1
    },

    {
        id: 8,
        name: "永民手作",
        weight: 1
    },

    {
        id: 9,
        name: "柚见鲜茶",
        weight: 1
    },

    {
        id: 10,
        name: "鲜榨果汁",
        weight: 1
    },

    {
        id: 11,
        name: "李若桃手作酸奶铺",
        weight: 1
    },

    {
        id: 12,
        name: "1点点",
        weight: 1
    },
     {
        id: 13,
        name: "爷爷不泡茶",
        weight: 1
    },
     {
        id: 14,
        name: "初茶",
        weight: 1
    },
     {
        id: 15,
        name: "瑞幸",
        weight: 1
    },
     {
        id: 16,
        name: "星巴克",
        weight: 1
    }
];

/**
 * ============================================
 * 以下代码不要修改
 * ============================================
 */

/**
 * 根据权重随机抽取一家店
 * 返回一个店铺对象
 */
function getRandomShop() {

    const totalWeight = SHOPS.reduce(
        (sum, shop) => sum + shop.weight,
        0
    );

    let random = Math.random() * totalWeight;

    for (const shop of SHOPS) {

        random -= shop.weight;

        if (random <= 0) {

            return shop;

        }

    }

    return SHOPS[0];

}
