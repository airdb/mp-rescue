import { openCustomerServiceChat } from '@tarojs/taro'

// 微信客服，如 https://work.weixin.qq.com/kfid/kfcf037243b58933e3b
// 一块做好事
export const WXKF_ZUOHAOSHI = "kfcf037243b58933e3b";

// 应急救援
export const WXKF_YINGJIJIUYUAN = "kfcf037243b58933e3b";

// 紧急寻人
export const WXKF_JINJIXUNREN = "kfcf037243b58933e3b";

// 心理咨询
export const WXKF_XINLIZIXUN = "kfcf037243b58933e3b";

// 宝贝回家客服
export const WXKF_BBHJ = "kfcf037243b58933e3b";

/**
 * 打开客服聊天
 * @param {string} id 客服ID
 */
export function openCustomerService(id = WXKF_BBHJ) {
    openCustomerServiceChat({
        extInfo: { url: `https://work.weixin.qq.com/kfid/${id}?sence=mp-rescue` },
        corpId: "wxf7b5556f34553852",
        success(res) {
            console.log("打开客服成功");
        },
        fail(res) {
            console.log("fail", res);
        },
    });
}