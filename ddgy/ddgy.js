/*
@萝卜
小程序：滴滴出行 （5天种水果）
入口：小程序首页=> 5天种水果。
需要手动完成新手任务。
获取ck : 滴滴果园--> 点击赚水滴
【圈X】
重写
https://game.xiaojukeji.com/api/game/mission/get?
主机名
game.xiaojukeji.com
js.............
https://gitee.com/xiecoll/radish-script/raw/master/ddgy.js
青龙使用方法：添加环境变量 
多账号用 @ 隔开
export ddgyurl = 'https://game.xiaojukeji.com/api/game/mission/get?.........@https://game.xiaojukeji.com/api/game/mission/get?.........' 
抓包 https://game.xiaojukeji.com/api/game/mission/get?... """整条url
拉取脚本
ql raw https://gitee.com/xiecoll/radish-script/raw/master/ddgy.js
*/

const $ = new Env('滴滴果园');
let status;
status = (status = ($.getval("ddgystatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
let qqgyArr = [], ddgycount = ''
let ddgyurl = $.isNode() ? (process.env.ddgyurl ? process.env.ddgyurl : "") : ($.getdata('ddgyurl') ? $.getdata('ddgyurl') : "")
let qqgys = ""
let xbiz, prod_key, xpsid, dchn, xoid, uid, xenv, xpsid_from, xpsid_root, game_id, platform, token, wsgsig, num = 1

var timestamp = Math.round(new Date().getTime() / 1000).toString();


function _0xf801(_0x23bb18, _0x3b5130) {
    const _0x355322 = _0x3553();
    return _0xf801 = function (_0xf80198, _0x6b3bf2) {
        _0xf80198 = _0xf80198 - 0x103;
        let _0x480d34 = _0x355322[_0xf80198];
        if (_0xf801['pwtQJL'] === undefined) {
            var _0x3ad603 = function (_0x263b71) {
                const _0x172f81 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x88d79c = '', _0x588cbc = '';
                for (let _0x5c024a = 0x0, _0x21602c, _0x5f2d49, _0x39d772 = 0x0; _0x5f2d49 = _0x263b71['charAt'](_0x39d772++); ~_0x5f2d49 && (_0x21602c = _0x5c024a % 0x4 ? _0x21602c * 0x40 + _0x5f2d49 : _0x5f2d49, _0x5c024a++ % 0x4) ? _0x88d79c += String['fromCharCode'](0xff & _0x21602c >> (-0x2 * _0x5c024a & 0x6)) : 0x0) {
                    _0x5f2d49 = _0x172f81['indexOf'](_0x5f2d49);
                }
                for (let _0x544e7c = 0x0, _0x1d4f49 = _0x88d79c['length']; _0x544e7c < _0x1d4f49; _0x544e7c++) {
                    _0x588cbc += '%' + ('00' + _0x88d79c['charCodeAt'](_0x544e7c)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x588cbc);
            };
            _0xf801['UxiMcu'] = _0x3ad603, _0x23bb18 = arguments, _0xf801['pwtQJL'] = !![];
        }
        const _0x74e677 = _0x355322[0x0], _0x4f33eb = _0xf80198 + _0x74e677, _0x3dfe52 = _0x23bb18[_0x4f33eb];
        return !_0x3dfe52 ? (_0x480d34 = _0xf801['UxiMcu'](_0x480d34), _0x23bb18[_0x4f33eb] = _0x480d34) : _0x480d34 = _0x3dfe52, _0x480d34;
    }, _0xf801(_0x23bb18, _0x3b5130);
}

function _0x3553() {
    const _0x4fe224 = ['nCofW6BcKa', 'WRTEWPtcMCodW5ZcLKW', 'tw96AwXSys81lJaGkgLqAg9UztSGq1bvigLqAg9UzsbpuYaXnf8YigXPA2uGtwfJie9tifGPiefWCgXLv2vIs2L0lZyWns4XlJe1icHlsfrntcWGBgLRzsbhzwnRBYKGtw9IAwXLlZe1rte0ocbnAwnYB01LC3nLBMDLCI84lJaUmYGWEde4mdaWmZjJksbozxruExbLlZrhieXHBMD1ywDLl3POx0noig1PBMLqCM9NCMfT', 'WQPukKdcNW', 'WPfWW6RdNSoBCSojWPRdSc7cPCoWW4ZdOKBdGIa9WQeWWQRcM8ke', '5BEY6Akg5A6m', 'WPvRW7K', 'lYBdHSkeWRiDW7j7W7O', '44of5BY/562s8jgMT+odKG', 'W5hdLSorwCo1WPdcGCovW4NdHCocxCkNdsFdHCkEW44EzYqCWR1NWRa', 'BMv4Df9IB3HFChjVz3jLC3m', 'zxjYBxnN', '77Ym5Aww5yQX77YA', 'WQBcQwxcMCoDzqjLW7CNW5ldTwddMSkZW6uHntpdMSo8nNy', 'zg9Uzq', 'aLRcNCkzpCo6wJaGbG', 'zgf0yq', 'bH9zD8oM', 'nWpcQ8kpD1CQ', 'gCoODvFcJ0XCkYqg', 'aLRcNCkuo8o3hcG4', 'WR7cSMlcNq', 'WOJcHd0', 'WOxcNJ8bxmoEicxcQtucc8ohvKtcQrNcTCoSexudWQddT3VdNJqDASkXWQRcGefQWPzWpgNcTWfrW7qyWO/dNGlcJCk5jmk1W4JcQfNdRCotWPOVdSkuba7dIb3cUmk+W45oWOLpw33dL8og', 'WQ0vh19fySoZW5dcN37cNmk5WQbzwq', 'gSojufbVWRhcHKjVjCoZs8k9WR5goG', 'z8opWPahWQK', 'W6ZdStpcKCoEleqUW449W5tdStZdISo1WR5GF3RdLSo8nM4EzWtcLCoFomk4qCkrwmodc8ocWQTZW4eOW4OfWR8GC8oGzSkiWRjeWRjGf8k+W7KksSkecJqfWPtcQmo0', 'qvXjuW', 'WOxLVlNLP7BJGlFLJ4RMR4K', 'Bg9N', 'mtHfD3vwBeu', 'W5JdTIldLCk1', 'xSk2julcMuu', 'WQNcUgxcJCopk0W', 'WOxcNJ8bxmoEicxcOYKddmkgteVdPHNcSSoTvNGlW6pcTG', 'DxjS', 'zxjYBM8', 'W5/dVtddGSkIWPLKyJK', 'mhBcTKe', 'zgrTC2C', '5Oki6yg/5OMw55ML5PM955A7hfi46zQW5BYiWQW', '6i635B6x77YA', 'mtG2otK2meDivevMqG', 'lCkzpCkVuMnPvCoWqG', 'nmklzdvHWO0AW5rCbNtcVg/dPItcJWGsjSoIqeT2WRWusrWug8o8W4NdQSoj', 'omoWya7cI8kOWPnDjCklWQqBu8oXW74uWRD6dmo7W6pdSr/dGchdGmoRFhSWgmk0W7C', 'W6ydWRa', 'BgvUz3rO', 'nJy1otC3mgLdze9sBW', 'D8oPWQzviLe3DSoMW7zRAmktWOFcLbKPpu/cPIVdRCol', 'cSohWQv/tZ8T', 'Dhj1zq', 'wCosWPboiCksls9MzrxcLG', 'qSoAzCk+uwzSwmo/tSklWOZdUYJdVCouW5BcUCkNxq3cUCo/W4BcSwqTW4dcJSkbDCkHWR8mW7K8W59YWQBcI8kMEhvIWOiAWRDpWP/cUmkGCNFcKmkYW4BcJSo2qSkrW6yAW7hcGbW1WPX7kIhcLmofl8kQhZJdKgmKWRhcNZVdQmkse07cTM3dTCkAW4NdLCknW5W1heeUWPCGW6bRi2eGWPqPA8oUimkeW6JdNgdcJaJdNmkVkmo0fNfmtNndW5/cG8oMp2hdSSoqWRT/WQFcIXjwWPqni8oie8kNmhRcP1hcGwddSmklxcSDe8kiWRDqW7CCWOlcNSkVWOPkD8oYWRBdI1NcQGZcOx9jWPj5kq', 'qLCnjSkNWOVdMSoYWOZcP8k1Aa', 'lcjWBgf0zM9YBsi6', 'WOhdTmk+F8o1WQKbDMyG', 'Aw5KzxHpzG', 'oCkuCXX6WPW', 'v0mxzSoIW4VdNSorWQtcLmk1rImxqSkZ', 'dCobW6u', 'WRiUW6a6W6lcICk+uwRcV8kiWRK', 'mJf0swLqvK0', 'iIWIEhbZAwrFCM9VDci6iG', 'aCojWQnzrG', 'ar1aEW', 'ASohBCk5uG', 'WRTplehcIrC', 'WRWGWRiUW6ZcLmk8hcldSa', 'ESkPW7/dMmoSbG', 'BSkSW6ddMmoU', 'zgrNExvYBa', 'WR5AWPPi', 'DYqe', 'ls0Tls0Tls0Tls0TlEwfSq', '44cq562+5yIW8j+uLooaKq', 'gYBdGSkY', 'fmoVAGVcJSkNWPmgECokW7OueCoRW4esW7q0hCkLWRVdHMddPw3dImosEJH+v8k7WPlcTJPamrRdN8kYqh/cOCoCkapcImofW6bFpeVcQbtcHc3dVf1MW43cSSojsbpcG0ZcRMRdJM4BrWmKW7jwWRldRSovWQHoWQ7cMaRcH3fAh8o1WRFcRCoRqCoqD8kOzCkHD8o2wCoRWOKqWPZcVbxcNJFcJ8knEuHHymkYWRT/jstcQuxdP3lcKdRdGSkaDSkbuw5OWOtcPSk1gmk7W5NcRY57bmoavCoGCSkrnSkMButdOu5lWRafW6tdGgTxW4ddMSk5W7hdLCk0WQKrW74Tt8kSESkWbuaLW4Sc', 'iIWIEhbZAwrFC2HHCMuIoIiIlcjNyw1Lx2LKiJO', 'WO3dSmk2ASo2WRaeFN8VWQvalSoFnmolW7JcJ8oc', 'EYj4yML6iJOI', 'C2v0zgf0yq', 'WPNcTxxdG8kYWOz8uYTByCkvW6hdGSoz', 'ChvZAa', 'yxbWBgLJyxrPB24VANnVBIWGDgv4Dc9WBgfPBIWGkI8Q', 'WPfWW6RdNSoBCSojWPRdSc7cPCoWW4ZdOKBdGIa9WQeWWQRcM8keeG', '44cq5Rwh5Rc08j+sP+oaKq', 'WQ5eAKxdKmksWO/cJCkGfa', 'z0RdVSkwDuaWW5xdQsldJ8kjWONcMSkzWRa', 'FutcJ8kA', 'WORcIYyuaCkCzMVcQIOyaSonu0BcQrNcTCoL', 'WQVcR2pcH8ob', 'W6/dVrSrW4VcMSoxs8khg1VcGCo3WRnTWQC+FJNdTMNcKSo5W75Dh8k6BYnyW4a3oc/cOSknWR7cV8oJW4JcUCoHWOxdSNlcK8k5WRdcImkrWQeZwWXdW4ldJJTJWRtcRCoKW4tdOWrCW6KIuraYW7fYFW8zkG', '44cq6Akg5y+w5Aww5yQX8j+uLooaKq', 'lsZdLSkV', 'z2v0', 'oSoVzqZcLG', 'hcJdMmkY', 'WQtdPKHkW7qZW6RdL8oaW5VcJCoRocnGCICXFthcGgasWPS', 'i8kpWOSZ', 'C3bSAxq', 'q8oKps0', 'DhLWzq', '5y+y5Psj6icT', 'WR7dT0TBW7vTWRy', 'W618W7W/W7C', 'pSo6ErldJSoRWPzmkSkiWQTaxmkUWReyW6K', 'WPxcVmkrW6FcMfRcHSoYmMu', 'mZuWmdK', 'q0XnwSkIW5e', '44cq5lU75yQH8j+uLooaKq', 'bYBdLG', 'iIWIzgnOBIi6iG', 'W7WrFftcIGn6ymoiW6xcUXBcGvBdV8os', 'tCohWOCpFmokm2yMhG', 'cmoXzX/dKW', 'W7Gom0NdLq', 'z3PPCcWGzgvMBgf0zsWGyNi', 'lCkzpCkNt2vPkmkHbCocWO7dQwpcJ8kqWPVcR8kYfutcNSknWQNcSW', 'iIWIEgvUDIi6iG', 'egVdICkKC15gWOqQ', 'lCoiWRWxWPiOqt0OW5XX', 'W5/dPmohW6/cHaNdJCo/BYziW4BcVCk1uCk9bZlcJCoJW6NdTd3cSCkDW7ddSSk1ySo/WQ/cIN7cKSoDW55PWPRcMCkyWRz9cXKcudZdOSorsYDUf8kSW5pdKHGHsNPH', 'pmoYyG/cKCkS', 'AxnoB2rL', 'oxBcTKpdHq', 'W4SDoJrE', 'z3jeBaiFq8kMqq', 'pCkpycL7W5ruWO9schFdTIVdRslcGeTyj8oSxvuWW6iBrXHvvSkSWORdQSkeW6CkWQxdNvlcGCocuYSPW7PLFGe/bmkRW5RcG8oFWRNcS8kWcmoNtcGdymklnmkG', 'WPH0W67dGSobk8khW4hdVYJcPCk6WOJdPe3dJxG2WQX/WRVcH8kmsvxcVCowtc1i', 'W5CtlW', 'BMfTzq', 'eWuyx8kZW53cRCkoqYS', 'WQPpk0K', 'hmkFW4qdBmox', 's8kvhKfR', 'iIWIEhbZAwrFzNjVBsi6iG', 'Bg9NrxjY', 'mZKZmZi4oeHHCKLpzG', 'WQVdJmo3BSk6sSkxW4WDWRKpbfiaW4ZdGXZcVmoCASo2W6uqW5GJWOFdOaxcJCk/kZFcOIxdOSoEWPxcSavhxfuSkSoZchJdRtddPCoqWOrVWQlcM8kDW6bRW7q', 'rvTpxG', 'W4bKpCoJWPeP', 'W6PLW6q6W6y', 'W7POW7CVW7BcJ8k0', 'W7RdSflcGmkyECoFW4JcP8kUW48w', 'CMv3yxjKCW', 'W7WrFftcIGn6ymoiW7hcPHBcMfBdV8os', 'f8ogW73cGa', 'WRPCkK0', 'omomWQlcHY0', 'WQFdMCo3FW', 'A2vLCc1HBgL2zq', 'z8obA8kNtJaIwmkScCovW4NdVttdICoDW5RcV8kNse7cLCoc', 'yxbWBgLJyxrPB24VANnVBJTJAgfYC2v0pxv0zI04', 'AdSpW5Or', 'W5hdLSoruCoIWPhcK8kOWPJcGG', 'C8oYWRu', 'zmoRhmkGW5GmWO4RWP9Y', 'iIWIChjVzf9RzxKIoIiIlcj4ChnPzci6iG', 'hZVdHmkJ', 'WQjjWQJdISonoWTgkxJdHSoCW7S/EHZcS8o0W7SIhmokW5tdV8o5WOy7ma1Dsh8Npmkmff/cLmkVWOJdNmo7W7RdIMvaqSkQW5nsjCoTWPqTw8ouW6jWuSolW47dPby', 'l8kZaCk/WP9jWOrSW4m8eIGyW4emDX0', 'W6rIvtqKW6BcQCkLkCo7W6/dRt8P', 'l8oQWRWcFfXYW6RdVbeXWPpdLe7cKei', 'E8o5WRvCjbL0', 'kaFcQmknBq', 'm3lcTLBdJd8', 'vSkLi0ZcGG', 'eutdVmkggSo1zMy', 'iIWIEg9Pzci6iG', 'd8oBW68', '44cq5y+w5Rc05RU08j+sP+oaKq', 'iIWIDwLKiJOI', 'W6ygW5aiWPhdU351WO8OmxpdSa', 'WQlcSNBcRmoClq', 'WOtcM8kAxq', 'umoKidG', 'W5PwW7SWWO3cLgpdNmkuW6lcUJhcU8oFWOa', 'oJNdJmkRW6LCW6j7W67dSmkkbdDeWQeJWRu', 't+wNOUwiUCoF', 'gqbsw8oGW4O', 'ACoDWOm', 'WRRcVuu', 'nZG4oduZBuD3vxjb', 'l8oQWRWkFKb/W5hdIbi6W57cG07cIeZdScNcRmk/sM8IW78m', '5RUm5RIr5P+U5zUf', 'WRRcSfaD', 'ihJcQuxdGW', 'WQBcQwxcMCoDzqjLW7yVW5hdTwddL8k+W6uTnYpcN8o6m3jECeNdGSobDCoQwColvSobdCkfWR53W588W4fDWRiIESoIuCkbWRbBWRaSB8oGWQ0xsCkybIicW5hcRW', 'WPRcIYif', 'ohJcPq', 'nt8uAG4', 'WOxcNJ8bxmoEicxcOIeadmkgquBdPHxcSmo9e34oW6FcT33dHxzcjmkIWQZdI0mLWPfMFgRdSrynW7ecWO7cKWZcLCkZECk2WP7cQWxdUmobWOrNxG', 'mtKZodu5mtztD2P6wxC', 'igfWCgXPy2f0Aw9Ul2PZB24SihrLEhqVCgXHAw4SicOVkG', 'CgfYC2u', 'WPWBWQ0P', 'W6ydWRdcU8o5W4G', 'itObyb4jdq', 'EMGTy24', '44cq5PA96ikL8j+uLooaKq', '5y675A6m5OIq77YA', 'D2fPDa', 'lcj0B2TLBIi6iG', 'smkeafT6', 'W7KDWPnxW4lcTYbsWPW3wGy', 'CCklWQKfWPO', 'BNvT', 'W5PwW7SWWO7cL2FdP8kTW6lcUJpdRCohWPH9', 'W48jzepdL8kBWOdcGmkVgba8WQVcTSolcSo6WQxcJGZcLqVdOmkLAgTBm8kxl8oOWPdcNmkZB8o0gxxcO8oYh3ldL8kHgmkMqsRdImkJWPnRWRWMDIOXW4VdH8ouWR8YW7RcH8ksWQ7dNSoMrSkEWOFcQ8oktSoVWO3dLgZdK8kLWPRcVxLHh8kNcSkpmxNdN8oEWOpdUeBcPmoyW4tdIg1yW5LKo0JdJ2BdOdDZWOxdK8kbouzcW4vbWR/dQmoKW5ldSxZdNh8joCk+mSo/BCosvfVdImoOW6WhfSoDyxakWQXQWRXLW6BcJvu4W6ZcJWXmlrGdWOVcP8kOW6G4BmooW5D8W4arcqJdOY1CWQzyW54qBG', 'zMLUywXSEq', 'k8oLzWpcKmkV', 'z2fTzs54AwfVANvRzwPPlMnVBq', 'p8kOaCk7', 'WQdcSe0kW4y', 'W6uhC0/cLCkpWOJdJSo1xfv3W6BcTCoYtmo2WQtcHG', 'C3rHDhvZ', 'dIFdHW', 'brPgDG', 'uWBdK8kijG', 'WQu6fh90', 'iIWIEhnWBv9MCM9TiJOI', 'rbldNmkonSo2', 'mNj6EerPwG', 'W6uCD1RcL8oxWOxdISo8wKfOW6BdS8k7amoN', 'W6mcWRpcM8oZW7xcQa', 'WOpcM8kbwSoI', '5lUG6lsB5yYRWPFcKYWjrgm0WOBcLmo4AJ5qW5y', 'pCkNdmkQW5uaWO5SW4e', 'aSoeW7JcIsZdRSkrW6jcjCorcSozWR1xWO7dTmooW4vsWR9RWPZdNCouW4FcUJlcSuddISoZEq', 'W68EWQxcKmoK', 'A8orEmkUshHH', 'DCkkcefZWQ7cJGKfECkSbmoHW7uSCbyWWO3cQmoNW6epwmobu0ldKepcL8o1WQ3dQZPeW5RcHSo4W7u7WRezWQaUW7SVW5f0CxvvW5n1omoQkGpcSmk7zrrdW7LxlCkcfx1qDmoJpcVdOSoCBmo2W7RdTY9AWP7cGSohW5aDWQ5gWPJdMSovyrjWA3ZcJW08WOhdTh5iW7NcQ0bwoSo3WRNdSKpcRSkWe8kgCSoYW5PsgmortmkBxCkYBmkYuCoIFZ7dMmkOE2DKWPKsWOXhWPFdImkEAGvgfCkLW6LWuMXsCmoKW6BdHmkoWR3cSeXSWQFdIc3dGCoTW4RcUCkBW6/cGfz5gK08r8ky', 'x8kabKX+WRBcJG', 'cSo8yrBdKXqAtLzWW6ddJCoS', 'WRK0aq', 'W5hdLSorwCo1WPdcGCovW4NdHCocxCkNdwhcGmoyW59dEZ8BW7C8W6bcWOBcKsVcKWJdUSonW5BdQZK4', 'ntKYotm5ogXizhPrEq', 'qSknx0TX', '5BEY5A6m5OIq', 'fmovW6hcKq', 'WQmBwKzBD8obW6BcNs7dIq', 'v8kHouJcNKO', 'WQBcQwxcMCoDzqjLW7CNW5ldTwddMSkZW6uHntpdMSo8nNzF', '5PsC5O+g6i2G5y+S5OI+5yUd', 'Ahr0Chm6lY9MAw5LlNvKywnOzs5JB20', 'Ahr0Chm6lY9MAw5LlNvKywnOzs5JB20V', 'ASoLsSk3W5yhWPyRWP9Y', 'W4CdWQ3cL8oNW5BcRXDDWQi2bSoPbCozeXfrCmorC8kWeINcMZn9pCoYW7NdRZTTF0HmW5SEW6futLC6W6tcPCokF0ifWOrynZBcImokoSkvyCoWWPOVe3tdGhlcV8kDpgbOlSobvh5eiGZcGdZcKcGpbSoMWPDBpmkJymoBW68IFWFcGhuXcMldS3y/W6ywWQGfWQjzcCkEb8omuvLYW61dW4FcVau6W7VdPuqtnh0ilNFcNeKHWQxcP8onW5f8qNBcPeRdPqhdP0RcJmoDW6hcVCkgWO5HfZf3W4CiWQpdJmo8rmkCWOldVmo3WQldIGhcVSoMm8oZW7XkWPtdNmkFW44o', 'WQ1nmKxcJG', 'lGpcUCkEkfi1W5JdGce', 'W6hcLmkHzSk5a8orWOCLWQOndGHAWP/cGa', 'zw52', 'dSkBW5uBCmohjdb1uY7dRLJcQfOpWPxcISoAgSktWPqOW6ldOxGLW6WaEWGEWRW', 'W4JdQtVdKSk1', 'cUIeMUACRoEkTUAaGE+8MG', 'Cg9ZDa', 'AmobWOmHWRpdVq', 'nJK1otG2AgT6wvvx', 'E03cTq', 'Bwf0y2G', 'W5DZomoVWPaQ', 'BZKwW5y', '5lU75yQH5A6m5OIq', 'mJ8pBq', 'ASkNW7mFiLDYW6/dJb02WPFdNaBdG07cSt7cSq', 'BSofB8k7vgLSa8kJd8ovWOpcUtldGSosWOlcTmkQb1/cICokW6FcRhGjW47dJmox', 'D8oxnIf4WP0sW4rQgNldSNFdSgNdMWyqFSkLx140WQKNqrfydq', 'W7foWQ/cNmoIW4ddRajk', 'BwLZC2LVBNm', 'jSkObCkQ', 'nc3dGCk+WR0', 'WRWmdrCp', 'iIWIEhbZAwrFC2HHCMuIoIiIlcjTAxnZAw9Ux2LKiJO', 'F2/cH8k/WQyuW6G8WRlcVG', 'AZu3tvDYwq', 'W5/dMmkhrSoSWPRcI8kOWPJcGG', 'dK1nFmo7W4lcLCkpW5K'];
    _0x3553 = function () {
        return _0x4fe224;
    };
    return _0x3553();
}

(function (_0x4ee26e, _0xe96a16) {
    function _0x3a2c71(_0x106664, _0x2fa685) {
        return _0x263b(_0x106664 - -0x217, _0x2fa685);
    }

    function _0x3cb9bf(_0x409933, _0x28e793) {
        return _0x263b(_0x28e793 - 0x50, _0x409933);
    }

    function _0x4cfabf(_0x541b9e, _0x16f0ec) {
        return _0xf801(_0x16f0ec - 0x3bb, _0x541b9e);
    }

    function _0x465c83(_0x2fedd3, _0x4ea731) {
        return _0xf801(_0x4ea731 - -0xc, _0x2fedd3);
    }

    function _0x1583ae(_0x19d777, _0x49af80) {
        return _0xf801(_0x49af80 - -0x1f5, _0x19d777);
    }

    function _0x4d09ca(_0x486d20, _0x16abb9) {
        return _0xf801(_0x16abb9 - 0x17c, _0x486d20);
    }

    const _0x27cf94 = _0x4ee26e();

    function _0x412bcf(_0x11fc6e, _0x11cc73) {
        return _0xf801(_0x11cc73 - 0x1b3, _0x11fc6e);
    }

    function _0x3efb92(_0xfbac86, _0xc714e8) {
        return _0xf801(_0xc714e8 - 0x302, _0xfbac86);
    }

    function _0x433967(_0x4f1277, _0x401093) {
        return _0xf801(_0x401093 - 0x69, _0x4f1277);
    }

    function _0x56930d(_0x3d9037, _0x23c335) {
        return _0x263b(_0x3d9037 - -0x389, _0x23c335);
    }

    function _0x314c6f(_0x8a5315, _0x1e5ca5) {
        return _0xf801(_0x1e5ca5 - -0x92, _0x8a5315);
    }

    while (!![]) {
        try {
            const _0x250c03 = -parseInt(_0x465c83(0x16f, 0x175)) / 0x1 * (-parseInt(_0x465c83(0x17c, 0x152)) / 0x2) + -parseInt(_0x465c83(0x194, 0x12a)) / 0x3 + -parseInt(_0x3cb9bf('mYyC', 0x1e6)) / 0x4 * (-parseInt(_0x56930d(-0x220, 'EBR*')) / 0x5) + parseInt(_0x433967(0x169, 0x1d5)) / 0x6 + -parseInt(_0x412bcf(0x3b1, 0x387)) / 0x7 * (-parseInt(_0x3a2c71(-0xeb, '4*Hc')) / 0x8) + parseInt(_0x1583ae(-0x96, -0x41)) / 0x9 * (-parseInt(_0x1583ae(-0x4c, -0x2f)) / 0xa) + -parseInt(_0x433967(0x181, 0x1a9)) / 0xb;
            if (_0x250c03 === _0xe96a16) break; else _0x27cf94['push'](_0x27cf94['shift']());
        } catch (_0xdefe8c) {
            _0x27cf94['push'](_0x27cf94['shift']());
        }
    }
}(_0x3553, 0xe190d));

function _0x2682aa(_0x356ec5, _0x9cd1a5) {
    return _0xf801(_0x9cd1a5 - -0x2b3, _0x356ec5);
}

!(async () => {
    function _0x14c002(_0x3bd979, _0x764176) {
        return _0xf801(_0x3bd979 - 0x94, _0x764176);
    }

    function _0x462842(_0x3b2680, _0x263f00) {
        return _0x263b(_0x263f00 - -0x3a0, _0x3b2680);
    }

    function _0x4b7f57(_0x33838d, _0x1d51e6) {
        return _0x263b(_0x1d51e6 - -0x72, _0x33838d);
    }

    function _0x252493(_0x21a241, _0x37f079) {
        return _0xf801(_0x37f079 - -0x24f, _0x21a241);
    }

    function _0x5a87ed(_0x2e0f89, _0x5b8ea8) {
        return _0x263b(_0x5b8ea8 - 0x12, _0x2e0f89);
    }

    function _0x36ec73(_0xcd2d70, _0x3bd68e) {
        return _0xf801(_0x3bd68e - 0x34d, _0xcd2d70);
    }

    function _0x4c2256(_0x2a0ceb, _0x50f25a) {
        return _0x263b(_0x50f25a - -0x27e, _0x2a0ceb);
    }

    function _0x1a7c7d(_0x1254aa, _0x44080a) {
        return _0x263b(_0x1254aa - -0x3af, _0x44080a);
    }

    function _0x2d03ea(_0x3828b2, _0x1e75e1) {
        return _0xf801(_0x1e75e1 - 0xb9, _0x3828b2);
    }

    function _0x50e13b(_0x416305, _0x1491cf) {
        return _0xf801(_0x416305 - 0x34d, _0x1491cf);
    }

    function _0x46d2fc(_0x561a4f, _0x3f89ba) {
        return _0x263b(_0x561a4f - 0x4d, _0x3f89ba);
    }

    function _0x2304a0(_0xd034b, _0x18272f) {
        return _0x263b(_0xd034b - 0x2d0, _0x18272f);
    }

    function _0x65fd9d(_0x4ab65c, _0xaeb63) {
        return _0x263b(_0xaeb63 - -0x15c, _0x4ab65c);
    }

    function _0x34a6cc(_0x216b0a, _0x51f4c3) {
        return _0x263b(_0x216b0a - -0x28c, _0x51f4c3);
    }

    function _0x4ae44e(_0x31d75a, _0x559597) {
        return _0x263b(_0x559597 - 0x3dc, _0x31d75a);
    }

    function _0x10fdcb(_0x1b49ec, _0x13bbd1) {
        return _0xf801(_0x13bbd1 - 0x207, _0x1b49ec);
    }

    function _0x236208(_0x303e54, _0x16d54a) {
        return _0x263b(_0x303e54 - -0x390, _0x16d54a);
    }

    function _0x5e5598(_0x3c23ff, _0x472c0d) {
        return _0xf801(_0x472c0d - -0x37a, _0x3c23ff);
    }

    function _0x5d95b3(_0xcefd7c, _0x2a9fe5) {
        return _0x263b(_0xcefd7c - -0x2f8, _0x2a9fe5);
    }

    function _0x2c1b9d(_0x1563f1, _0x159444) {
        return _0x263b(_0x1563f1 - 0xf0, _0x159444);
    }

    function _0x5a0958(_0x18f987, _0x342e8d) {
        return _0x263b(_0x342e8d - -0x53, _0x18f987);
    }

    function _0x369644(_0x4855d8, _0x2e9b3c) {
        return _0xf801(_0x4855d8 - -0x2f, _0x2e9b3c);
    }

    function _0x23e715(_0x303884, _0x4c77e3) {
        return _0x263b(_0x303884 - 0x36d, _0x4c77e3);
    }

    if (typeof $request !== _0x2304a0(0x433, 'LotJ')) await ddgyck(); else {
        if ($[_0x5e5598(-0x1ad, -0x168)]()) {
            process[_0x5a0958('C^z2', 0x105)]['ddgyurl'] && process[_0x50e13b(0x4c8, 0x517)][_0x50e13b(0x52a, 0x547)][_0x10fdcb(0x461, 0x3d6)]('@') > -0x1 ? (qqgyArr = process[_0x23e715(0x518, 'nwPf')][_0x36ec73(0x4ed, 0x52a)][_0x23e715(0x4ea, 'M02p')]('@'), console[_0x10fdcb(0x363, 0x3ba)](_0x2304a0(0x48e, ')A(i'))) : qqgys = [process[_0x5e5598(-0x25e, -0x1ff)][_0x65fd9d(']LSx', 0xa)]];
            ;Object[_0x65fd9d('4*Hc', 0x82)](qqgys)[_0x5a0958('c^pB', 0x175)](_0x39d772 => {
                function _0xa54ba(_0x5a60cd, _0x5763f5) {
                    return _0x462842(_0x5763f5, _0x5a60cd - 0x2a7);
                }

                qqgys[_0x39d772] && qqgyArr[_0xa54ba(0xb8, 'rl&k')](qqgys[_0x39d772]);
            }), await qswcdl();
        } else {
            qqgyArr[_0x23e715(0x4c6, 'uc&l')]($[_0x2c1b9d(0x258, '8Gk1')](_0x2304a0(0x3de, 'mb0r')));
            let _0x544e7c = $[_0x2c1b9d(0x215, 'Su[Y')](_0x65fd9d('M02p', 0x5f)) || '1';
            for (let _0x1d4f49 = 0x2; _0x1d4f49 <= _0x544e7c; _0x1d4f49++) {
                qqgyArr[_0x252493(-0x98, -0x66)]($[_0x2c1b9d(0x2a7, 'vLRQ')](_0x2304a0(0x415, '@KTB') + _0x1d4f49));
            }
            await qswcdl();
        }
    }
})()[_0x26262c(-0xdd, '9tbH')](_0x4bcd0e => $[_0x13326c(0x56, -0x1e)](_0x4bcd0e))[_0x2682aa(-0x1b4, -0x162)](() => $[_0x5a03a(0x4e8, 0x51e)]());

function qswcdl(_0x11717a = 0x0) {
    return new Promise(_0x59833a => {
        function _0x2c7fad(_0x486ece, _0x1e836e) {
            return _0x263b(_0x1e836e - -0x24, _0x486ece);
        }

        let _0x585d2f = {'url': _0x2c7fad('nwPf', 0x188), 'headers': ''};

        function _0x44a3bd(_0x3fda43, _0x1581ce) {
            return _0xf801(_0x1581ce - 0xf, _0x3fda43);
        }

        $[_0x44a3bd(0x1f4, 0x204)](_0x585d2f, async (_0x4f8f11, _0x293c55, _0x53aa2b) => {
            function _0x5b2f3b(_0x44a99f, _0x59128d) {
                return _0x44a3bd(_0x44a99f, _0x59128d - -0x377);
            }

            function _0x2a91c5(_0x41f1ed, _0x3b0c7a) {
                return _0x2c7fad(_0x3b0c7a, _0x41f1ed - 0x23c);
            }

            function _0x1dcf5a(_0x22682f, _0x5aabc0) {
                return _0x2c7fad(_0x5aabc0, _0x22682f - -0x1a0);
            }

            function _0x1e8fc3(_0x54a77a, _0xa08f3b) {
                return _0x44a3bd(_0xa08f3b, _0x54a77a - -0x41);
            }

            function _0x173917(_0x5e2fd9, _0x228a1d) {
                return _0x2c7fad(_0x5e2fd9, _0x228a1d - 0x2c);
            }

            function _0x374402(_0x474eca, _0x2291f7) {
                return _0x44a3bd(_0x2291f7, _0x474eca - 0x20e);
            }

            function _0x4f273e(_0x3d5515, _0xbde2eb) {
                return _0x2c7fad(_0xbde2eb, _0x3d5515 - 0x168);
            }

            function _0x36c5af(_0x20d0e2, _0x3ffb83) {
                return _0x44a3bd(_0x20d0e2, _0x3ffb83 - -0x3d4);
            }

            function _0x286f2f(_0x2dac2c, _0x22abcb) {
                return _0x44a3bd(_0x2dac2c, _0x22abcb - 0x3aa);
            }

            function _0x2f3620(_0x298a51, _0x1ec569) {
                return _0x44a3bd(_0x1ec569, _0x298a51 - -0x2fa);
            }

            function _0x5b2adb(_0x2b1475, _0x11b347) {
                return _0x2c7fad(_0x2b1475, _0x11b347 - 0x139);
            }

            function _0x5250b7(_0x5d8568, _0x3025dd) {
                return _0x44a3bd(_0x5d8568, _0x3025dd - 0x2b2);
            }

            function _0x2106d9(_0x23734e, _0x3fb09f) {
                return _0x2c7fad(_0x23734e, _0x3fb09f - 0xc1);
            }

            function _0x4faeb0(_0x1ad855, _0x2fbf9e) {
                return _0x2c7fad(_0x2fbf9e, _0x1ad855 - -0x53);
            }

            function _0x35d9a7(_0x1115de, _0x5d259c) {
                return _0x44a3bd(_0x1115de, _0x5d259c - 0xd7);
            }

            function _0x362d62(_0x249f77, _0x9dc191) {
                return _0x44a3bd(_0x249f77, _0x9dc191 - 0x32e);
            }

            function _0x4b27d5(_0xcbad3, _0x5239cd) {
                return _0x44a3bd(_0xcbad3, _0x5239cd - -0x128);
            }

            function _0x10b9fb(_0x21c3bc, _0xb12b54) {
                return _0x44a3bd(_0x21c3bc, _0xb12b54 - 0x2ce);
            }

            function _0x52433f(_0x5c134b, _0x46f5d6) {
                return _0x44a3bd(_0x46f5d6, _0x5c134b - -0x302);
            }

            function _0x2114cf(_0x306893, _0x4704fb) {
                return _0x44a3bd(_0x306893, _0x4704fb - 0x221);
            }

            function _0x1fb04f(_0x5e7b71, _0x1b26ba) {
                return _0x2c7fad(_0x5e7b71, _0x1b26ba - 0x15b);
            }

            function _0x285209(_0x1ced74, _0x2a7683) {
                return _0x2c7fad(_0x1ced74, _0x2a7683 - 0x2c5);
            }

            function _0x36ef58(_0x1498fb, _0x338bac) {
                return _0x2c7fad(_0x1498fb, _0x338bac - 0xef);
            }

            function _0x38adf6(_0x41a464, _0x1fce39) {
                return _0x2c7fad(_0x41a464, _0x1fce39 - -0x361);
            }

            function _0xc297a0(_0x16a919, _0x97e02f) {
                return _0x2c7fad(_0x97e02f, _0x16a919 - 0x2ab);
            }

            function _0x663101(_0x401c0d, _0x59b7a8) {
                return _0x44a3bd(_0x59b7a8, _0x401c0d - -0x303);
            }

            function _0x4a8f6e(_0x5a135d, _0x15ced3) {
                return _0x2c7fad(_0x15ced3, _0x5a135d - 0x87);
            }

            function _0x37f677(_0x360904, _0x4ea35f) {
                return _0x44a3bd(_0x4ea35f, _0x360904 - 0x10);
            }

            function _0x6249ca(_0x44d44c, _0x5d75f7) {
                return _0x2c7fad(_0x44d44c, _0x5d75f7 - 0x15);
            }

            function _0x597681(_0x15ea67, _0x1fccc5) {
                return _0x44a3bd(_0x15ea67, _0x1fccc5 - -0x62);
            }

            function _0x193ce2(_0x2bce40, _0x275dfc) {
                return _0x2c7fad(_0x2bce40, _0x275dfc - 0x125);
            }

            function _0x1ca637(_0x4cfabb, _0x5579ec) {
                return _0x2c7fad(_0x4cfabb, _0x5579ec - -0x19e);
            }

            function _0x3c2403(_0x7fa147, _0x140b65) {
                return _0x44a3bd(_0x7fa147, _0x140b65 - 0x396);
            }

            function _0x5a6493(_0x394b7d, _0x58e68f) {
                return _0x44a3bd(_0x394b7d, _0x58e68f - -0x20d);
            }

            function _0xade101(_0x3bf09e, _0x28f34d) {
                return _0x2c7fad(_0x28f34d, _0x3bf09e - -0xf3);
            }

            function _0x45d41f(_0x4a6982, _0xb2b08e) {
                return _0x44a3bd(_0xb2b08e, _0x4a6982 - 0x296);
            }

            function _0x8792cc(_0x26fd0c, _0x268a01) {
                return _0x2c7fad(_0x268a01, _0x26fd0c - 0x1fa);
            }

            function _0x13b84d(_0x3e9ff4, _0x2011d4) {
                return _0x44a3bd(_0x3e9ff4, _0x2011d4 - 0x386);
            }

            function _0x5d51fc(_0x12b2a9, _0x14716b) {
                return _0x44a3bd(_0x12b2a9, _0x14716b - -0x3de);
            }

            function _0x53534c(_0x12a554, _0x3e0d10) {
                return _0x2c7fad(_0x3e0d10, _0x12a554 - 0x24);
            }

            function _0x269acc(_0x57fb14, _0x2d3f44) {
                return _0x2c7fad(_0x2d3f44, _0x57fb14 - -0x2b0);
            }

            function _0x400d7b(_0x6792c6, _0x1c05d9) {
                return _0x2c7fad(_0x6792c6, _0x1c05d9 - -0x376);
            }

            function _0x7d94a0(_0x1b9912, _0x3d7f3c) {
                return _0x2c7fad(_0x3d7f3c, _0x1b9912 - 0x35f);
            }

            function _0x1cd63f(_0x3367c3, _0x17ed0e) {
                return _0x2c7fad(_0x17ed0e, _0x3367c3 - -0x2be);
            }

            function _0x1ad7a6(_0xb0e50d, _0x266933) {
                return _0x2c7fad(_0x266933, _0xb0e50d - -0x14c);
            }

            function _0x5570e7(_0x2372b0, _0x4a4473) {
                return _0x2c7fad(_0x2372b0, _0x4a4473 - 0x287);
            }

            function _0x504d97(_0x5438a8, _0x1e8f87) {
                return _0x2c7fad(_0x1e8f87, _0x5438a8 - 0x2f2);
            }

            function _0x5c1011(_0x4dbef0, _0x521a81) {
                return _0x44a3bd(_0x521a81, _0x4dbef0 - -0x2cf);
            }

            function _0x2aa256(_0x3b6188, _0x4dad91) {
                return _0x44a3bd(_0x3b6188, _0x4dad91 - -0x1d0);
            }

            function _0x28a679(_0x8d1ce6, _0x2d18e1) {
                return _0x44a3bd(_0x8d1ce6, _0x2d18e1 - -0x238);
            }

            function _0x52825e(_0x4f99e8, _0x1124ab) {
                return _0x44a3bd(_0x4f99e8, _0x1124ab - 0x14a);
            }

            function _0x3d2a4d(_0x26b220, _0x536393) {
                return _0x44a3bd(_0x536393, _0x26b220 - -0x182);
            }

            function _0x2edd24(_0x5a54c1, _0x5346c4) {
                return _0x44a3bd(_0x5346c4, _0x5a54c1 - -0x2b7);
            }

            function _0x5e8899(_0x1e6cd3, _0x533caa) {
                return _0x2c7fad(_0x533caa, _0x1e6cd3 - 0x343);
            }

            function _0x26a2a0(_0x429e65, _0x5c27f6) {
                return _0x44a3bd(_0x429e65, _0x5c27f6 - -0x1b5);
            }

            function _0x481f89(_0x1a0f6f, _0xfcd475) {
                return _0x2c7fad(_0x1a0f6f, _0xfcd475 - -0x357);
            }

            function _0x15a2dd(_0xe2a5e, _0x5c3e60) {
                return _0x2c7fad(_0xe2a5e, _0x5c3e60 - -0xe1);
            }

            function _0x37c02a(_0x5be894, _0x2bca32) {
                return _0x44a3bd(_0x2bca32, _0x5be894 - -0x104);
            }

            try {
                _0x53aa2b = JSON[_0x36ef58('bdhg', 0x226)](_0x53aa2b);
                if (_0x53aa2b[_0x36ef58(')A(i', 0x228)] == 0x1) {
                    console[_0x2aa256(-0x91, -0xe)](_0x36c5af(-0x245, -0x247) + _0x53aa2b[_0x400d7b('uycN', -0x1bf)]), console[_0x36c5af(-0x1de, -0x212)](_0x2aa256(0x3f, 0x1f) + qqgyArr[_0x36c5af(-0x257, -0x200)] + _0x8792cc(0x338, 'u%%Q'));
                    for (let _0x82d1ee = 0x0; _0x82d1ee < qqgyArr[_0x2aa256(-0x55, 0x4)]; _0x82d1ee++) {
                        $[_0x8792cc(0x364, 'COsz')] = _0x82d1ee + 0x1, ddgyurl = qqgyArr[_0x82d1ee], console[_0x37f677(0x1d2, 0x21c)](_0x53534c(0x1b2, ']Yfn') + $['index'] + '】'), xbiz = ddgyurl[_0x1fb04f('EBR*', 0x25d)](/xbiz=(\S*)(?=&)/)[0x1][_0x400d7b(')A(i', -0x240)]('&')[0x0], prod_key = ddgyurl[_0x52825e(0x33b, 0x2dc)](/prod_key=(\S*)&/)[0x1][_0x36ef58('uc&l', 0x271)]('&')[0x0], xpsid = ddgyurl[_0x173917('Nt45', 0x12c)](/xpsid=(\S*)&/)[0x1][_0x1ca637('dYbH', -0xa9)]('&')[0x0], dchn = ddgyurl[_0x1ca637('c^pB', 0x14)](/dchn=(\S*)&/)[0x1][_0x4a8f6e(0x1db, '@sqz')]('&')[0x0], xoid = ddgyurl[_0x663101(-0x171, -0x15c)](/xoid=(\S*)&/)[0x1][_0x597681(0x17b, 0x1a7)]('&')[0x0], uid = ddgyurl[_0x26a2a0(-0x4c, -0x23)](/uid=(\S*)&/)[0x1][_0x1fb04f('uc&l', 0x2dd)]('&')[0x0], xenv = ddgyurl[_0x193ce2('Nt45', 0x225)](/xenv=(\S*)&/)[0x1][_0x597681(0x1a6, 0x1a7)]('&')[0x0], xspm_from = ddgyurl[_0x36ef58('Su[Y', 0x2de)](/xspm_from=(\S*)&/)[0x1][_0x400d7b('8Gk1', -0x294)]('&')[0x0], xpsid_root = ddgyurl[_0x5c1011(-0x13d, -0x17e)](/xpsid_root=(\S*)&/)[0x1][_0x4b27d5(0x141, 0xe1)]('&')[0x0], xpsid_from = ddgyurl[_0x1dcf5a(-0x6f, '9w91')](/xpsid_from=(\S*)&/)[0x1][_0x1ca637('mb0r', 0x3d)]('&')[0x0], game_id = ddgyurl['match'](/game_id=(\S*)&/)[0x1][_0x2f3620(-0xf1, -0x73)]('&')[0x0], platform = ddgyurl[_0x52825e(0x345, 0x2dc)](/platform=(\S*)&/)[0x1]['split']('&')[0x0], token = ddgyurl[_0x2f3620(-0x168, -0x149)](/token=(\S*)&/)[0x1][_0x5c1011(-0xc6, -0xe2)]('&')[0x0], wsgsig = ddgyurl[_0x26a2a0(-0x32, -0x23)](/wsgsig=(\S*)/)[0x1][_0x35d9a7(0x355, 0x2e0)]('&')[0x0], await newcomerSign(), await $[_0x8792cc(0x312, 'nwPf')](0x7d0), await memu(), await $['wait'](0x7d0), await memu2(), await $[_0x285209('ZfYU', 0x436)](0x7d0), console[_0xade101(0x4, '6nIT')](_0x38adf6('4*Hc', -0x1e8)), await $[_0x400d7b('RLUK', -0x26c)](0x7d0), await recCommonBox(), await $[_0x4b27d5(0x7e, 0x30)](0x7d0), console[_0x5c1011(-0x10d, -0xd9)](_0x597681(0xcb, 0xf4)), await $[_0x286f2f(0x546, 0x502)](0x7d0), await fertilizer(), await $[_0x3c2403(0x535, 0x4ee)](0x7d0), console[_0x5a6493(-0x4a, -0x4b)](_0x4b27d5(0x5, 0x11)), await $['wait'](0x7d0), await recBucketWater(), await $[_0x193ce2('C^z2', 0x2f8)](0x7d0), console[_0x1cd63f(-0x1ad, '1F5V')](_0x5250b7(0x470, 0x4ad)), await $[_0x36ef58('qG!6', 0x1fa)](0x7d0), await watering();
                    }
                } else console[_0x1cd63f(-0x1a5, 'Su[Y')]('脚本状态' + _0x53aa2b[_0x13b84d(0x534, 0x552)]);
            } catch (_0x5bdd32) {
                $[_0x8792cc(0x356, '9tbH')](_0x5bdd32, _0x293c55);
            } finally {
                _0x59833a();
            }
        }, 0x0);
    });
}

function ddgyck() {
    function _0xea9141(_0x114d31, _0x14a0f8) {
        return _0x26262c(_0x114d31 - 0x3b0, _0x14a0f8);
    }

    function _0xa6dc20(_0x2a76ef, _0x49b665) {
        return _0x26262c(_0x2a76ef - 0x166, _0x49b665);
    }

    function _0x2d3cb2(_0x1f6846, _0x141f83) {
        return _0x26262c(_0x1f6846 - 0x1b5, _0x141f83);
    }

    function _0x424dcb(_0x52847f, _0x385295) {
        return _0x26262c(_0x52847f - -0x8c, _0x385295);
    }

    function _0x18e4ba(_0x4f6e3c, _0xbf8304) {
        return _0x26262c(_0x4f6e3c - 0x2f4, _0xbf8304);
    }

    function _0x444356(_0x1f0753, _0x184d7c) {
        return _0x13326c(_0x184d7c, _0x1f0753 - -0x1a);
    }

    function _0x16b9cc(_0x480c8f, _0x31376a) {
        return _0x26262c(_0x31376a - 0x4a3, _0x480c8f);
    }

    function _0x14018f(_0x1048f1, _0x1c74d8) {
        return _0x2682aa(_0x1c74d8, _0x1048f1 - -0xf0);
    }

    function _0x250f8a(_0x5b9b5, _0x7cc463) {
        return _0x26262c(_0x5b9b5 - 0x4d1, _0x7cc463);
    }

    function _0x582589(_0x457ed0, _0x245965) {
        return _0x2682aa(_0x245965, _0x457ed0 - -0xb4);
    }

    function _0x4b422b(_0x272bff, _0x59f8c1) {
        return _0x5a03a(_0x59f8c1, _0x272bff - -0xb9);
    }

    if ($request[_0x4b422b(0x47b, 0x4f4)][_0xea9141(0x284, 'mYyC')](_0x250f8a(0x37f, 'Su[Y')) > -0x1) {
        const _0x398c7b = $request[_0x14018f(-0x1ea, -0x272)];
        if (_0x398c7b) $[_0x4b422b(0x4a9, 0x48c)](_0x398c7b, _0x250f8a(0x368, '6nIT') + status);
        $[_0x424dcb(-0x139, 'dYbH')](_0x398c7b), $[_0x424dcb(-0x1e4, '9tbH')]($[_0x14018f(-0x18a, -0x12c)], '', _0x16b9cc('8Gk1', 0x34f) + status + _0x2d3cb2(0x9c, 'c^pB'));
    }
}

async function memu() {
    return new Promise(_0x1d5490 => {
        let _0x2f1751 = {'url': ddgyurl, 'headers': {'Accept': '\x20application/json,\x20text/plain,\x20*/*'}};

        function _0x297728(_0x383f20, _0x5b759f) {
            return _0xf801(_0x5b759f - -0x9, _0x383f20);
        }

        $[_0x297728(0x195, 0x1ec)](_0x2f1751, async (_0x9a6df9, _0x3d5eee, _0x1ec148) => {
            function _0x3e4acc(_0xe6a74f, _0x50ca78) {
                return _0x263b(_0x50ca78 - -0x1ed, _0xe6a74f);
            }

            function _0x194bf0(_0x41b307, _0x77cb32) {
                return _0x297728(_0x41b307, _0x77cb32 - 0x319);
            }

            function _0x14f13d(_0x23f1c3, _0x1055cd) {
                return _0x263b(_0x23f1c3 - 0x57, _0x1055cd);
            }

            function _0x5a3978(_0xcce67c, _0x3d4be1) {
                return _0x263b(_0xcce67c - 0xc8, _0x3d4be1);
            }

            function _0x3e20(_0x316fbf, _0x54fde0) {
                return _0x263b(_0x54fde0 - 0xaf, _0x316fbf);
            }

            function _0x4fe781(_0x3aeeda, _0x3f3f6c) {
                return _0x263b(_0x3f3f6c - 0x39f, _0x3aeeda);
            }

            function _0x472cb0(_0x37db54, _0x2c6524) {
                return _0x263b(_0x37db54 - 0x3be, _0x2c6524);
            }

            function _0x124e55(_0x4bb729, _0x30b242) {
                return _0x297728(_0x30b242, _0x4bb729 - -0xa3);
            }

            function _0x33fd15(_0x36a456, _0x24524f) {
                return _0x263b(_0x36a456 - -0xaf, _0x24524f);
            }

            function _0x2ae23f(_0x56f0c6, _0x3c68fb) {
                return _0x297728(_0x56f0c6, _0x3c68fb - -0x2d4);
            }

            function _0x1923e2(_0x3449af, _0x219f5f) {
                return _0x263b(_0x3449af - -0x2b0, _0x219f5f);
            }

            function _0x14f75c(_0x465c30, _0x11fd60) {
                return _0x297728(_0x465c30, _0x11fd60 - -0x289);
            }

            function _0x482272(_0x50bc32, _0x44170c) {
                return _0x297728(_0x50bc32, _0x44170c - -0x383);
            }

            function _0x889af5(_0x1f9db4, _0x2be5b9) {
                return _0x297728(_0x2be5b9, _0x1f9db4 - 0x52);
            }

            function _0x32fe94(_0x4f3828, _0x1667c6) {
                return _0x297728(_0x1667c6, _0x4f3828 - -0xb3);
            }

            function _0x555a65(_0x48f719, _0x24c3e4) {
                return _0x263b(_0x24c3e4 - 0x7d, _0x48f719);
            }

            function _0x48ca73(_0x10f666, _0x285070) {
                return _0x297728(_0x10f666, _0x285070 - 0x35b);
            }

            function _0x5cc689(_0x358878, _0x39e9be) {
                return _0x263b(_0x358878 - 0x1a3, _0x39e9be);
            }

            function _0x58ddcd(_0x19368d, _0x47e78c) {
                return _0x263b(_0x19368d - -0x116, _0x47e78c);
            }

            function _0x19095e(_0x5f04d3, _0x3c9438) {
                return _0x263b(_0x3c9438 - -0x270, _0x5f04d3);
            }

            try {
                let _0x3d1dc1 = JSON[_0x58ddcd(0x4b, 'RLUK')](_0x1ec148),
                    _0xc59426 = _0x3d1dc1[_0x19095e('JnR0', -0x15b)][_0x194bf0(0x465, 0x49c)];
                console[_0x33fd15(0x86, '1F5V')](_0x482272(-0x102, -0x188));
                for (let _0x4200a2 = 0x0; _0x4200a2 < _0xc59426[_0x33fd15(0xc2, 'EBR*')]; _0x4200a2++) {
                    let _0x1c2a88 = _0xc59426[_0x4200a2];
                    if (_0x1c2a88[_0x14f75c(-0x135, -0x13b)] == 0x0 && _0x1c2a88[_0x48ca73(0x545, 0x54e)] == 0x1) {
                        console[_0x48ca73(0x502, 0x505)](_0x2ae23f(-0x164, -0x195) + _0x1c2a88[_0x5a3978(0x1d5, 'mb0r')] + _0x33fd15(0x83, 'j1*u') + _0x1c2a88[_0x19095e('yLOP', -0xec)][0x0][_0x5a3978(0x2be, 'Cix5')] + _0x1c2a88[_0x19095e('Cix5', -0x11e)][0x0][_0x3e4acc('LotJ', -0x60)]);
                        let _0x3a8d05 = _0x1c2a88['id'];
                        await update(_0x3a8d05), await $[_0x32fe94(0x8d, 0x87)](0x7d0);
                    }
                }
                console[_0x4fe781('j1*u', 0x4c8)](_0x14f75c(-0x181, -0x124));
            } catch (_0x2e7fa8) {
                $[_0x555a65('U$hb', 0x24d)](_0x2e7fa8, _0x3d5eee);
            } finally {
                _0x1d5490();
            }
        });
    });
}

async function memu2() {
    return new Promise(_0x5fa708 => {
        let _0x12094e = {'url': ddgyurl, 'headers': {'Accept': _0x7097ed(0x439, 0x414)}};

        function _0x3c3a97(_0x4ca098, _0x1d2a0f) {
            return _0xf801(_0x1d2a0f - 0x3b1, _0x4ca098);
        }

        function _0x7097ed(_0x59cfe4, _0x235b69) {
            return _0xf801(_0x59cfe4 - 0x2f8, _0x235b69);
        }

        $[_0x7097ed(0x4ed, 0x523)](_0x12094e, async (_0x2b59e3, _0x57d38a, _0x535222) => {
            function _0x248a00(_0xc1298c, _0x5bba50) {
                return _0x7097ed(_0x5bba50 - -0x4cc, _0xc1298c);
            }

            function _0x964472(_0x18ae92, _0x2aaf59) {
                return _0x263b(_0x18ae92 - -0x26d, _0x2aaf59);
            }

            function _0x2a77a2(_0x3717e5, _0x437d32) {
                return _0x263b(_0x3717e5 - -0x2e8, _0x437d32);
            }

            function _0x408819(_0xc2f5ad, _0x44c0cd) {
                return _0x7097ed(_0xc2f5ad - -0x61, _0x44c0cd);
            }

            function _0x4d7c29(_0x16f529, _0x57399d) {
                return _0x263b(_0x16f529 - 0x2a9, _0x57399d);
            }

            function _0x41e6b2(_0x379652, _0x5cbdd1) {
                return _0x263b(_0x5cbdd1 - -0x366, _0x379652);
            }

            function _0x4c2a17(_0x15fc39, _0x83e04) {
                return _0x7097ed(_0x15fc39 - -0x10e, _0x83e04);
            }

            function _0x5add1f(_0x352476, _0xe1ee11) {
                return _0x7097ed(_0xe1ee11 - -0x66d, _0x352476);
            }

            function _0xf5c4cc(_0x48f8fa, _0x275739) {
                return _0x7097ed(_0x48f8fa - -0x2e7, _0x275739);
            }

            function _0x585ab1(_0xdb313a, _0x3255f0) {
                return _0x263b(_0x3255f0 - -0x28a, _0xdb313a);
            }

            try {
                let _0x509bf8 = JSON[_0x585ab1('8Gk1', -0x13f)](_0x535222),
                    _0x5156c1 = _0x509bf8[_0x585ab1('@sqz', -0x177)][_0x5add1f(-0x227, -0x1e9)];
                console['log'](_0x5add1f(-0x1a1, -0x182));
                for (let _0x228b03 = 0x0; _0x228b03 < _0x5156c1[_0x2a77a2(-0x177, 'EBR*')]; _0x228b03++) {
                    let _0x51e706 = _0x5156c1[_0x228b03];
                    if (_0x51e706[_0x41e6b2('[MBM', -0x261)] == 0x2) {
                        let _0x2ccd90 = _0x51e706['id'];
                        await award(_0x2ccd90), await $[_0x964472(-0xe6, '@KTB')](0x7d0);
                    }
                }
                console[_0x248a00(-0x95, -0x21)](_0x5add1f(-0x209, -0x1db));
            } catch (_0x4f7f7b) {
                $[_0x4c2a17(0x2f2, 0x33f)](_0x4f7f7b, _0x57d38a);
            } finally {
                _0x5fa708();
            }
        });
    });
}

function _0x13326c(_0xe732e4, _0x43e1fe) {
    return _0xf801(_0x43e1fe - -0x126, _0xe732e4);
}

function update(_0x232afd) {
    return new Promise(_0x506282 => {
        function _0x14139c(_0x558d8d, _0x143078) {
            return _0xf801(_0x143078 - -0x36a, _0x558d8d);
        }

        let _0x353ff6 = {
            'url': 'https://game.xiaojukeji.com/api/game/mission/update?wsgsig=' + wsgsig,
            'headers': {
                'Host': _0x550945(0x143, 'JoO!'),
                'D-Header-Dchn': dchn,
                'D-Header-T': unescape(token),
                'User-Agent': _0x44fc1e('Cix5', 0x11e),
                'Referer': _0x44fc1e('9mUa', 0x126),
                'D-Header-IsHitButton': _0x351dc0(0x389, 0x33d),
                'D-Header-Appid': _0x351dc0(0x3c2, 0x428),
                'Origin': _0x2eeedb(0x3e3, 'vLRQ'),
                'D-Header-FromChannel': '2',
                'D-Header-Did': '0',
                'Connection': _0x14139c(-0x1cd, -0x254),
                'D-Header-IsOpenWeb': _0x17a93c(0x1b7, 0x1e1),
                'Accept-Language': _0x14139c(-0x20d, -0x224),
                'D-Header-Ddfp': '0',
                'Accept': _0x1bb1af(0x284, 0x2ae),
                'Content-Type': _0x1bb1af(0x156, 0x1dc),
                'D-Header-AppVersion': '0',
                'D-Header-City': '3',
                'Accept-Encoding': _0x483e71(0x4ef, 0x540)
            },
            'body': _0x14139c(-0x1db, -0x184) + xbiz + _0x3d3ffa(-0x77, '[gAc') + xpsid + _0x13cd94(0x414, 0x3ce) + dchn + _0x14139c(-0x1cf, -0x242) + xoid + _0x44fc1e(')A(i', 0xe4) + uid + _0x44fc1e('EBR*', 0xe3) + xenv + _0x13cd94(0x31b, 0x324) + xspm_from + _0x351dc0(0x395, 0x3ce) + xpsid_root + _0x3d3ffa(0x40, 'Nt45') + xpsid_from + _0x483e71(0x474, 0x4b3) + _0x232afd + _0x1684f9(-0x141, ']Yfn') + game_id + _0x1bb1af(0x2e6, 0x291) + platform + _0x2eeedb(0x3d4, 'RLUK') + unescape(token) + '\x22}'
        };

        function _0x524b24(_0x5ee01d, _0x2d51eb) {
            return _0xf801(_0x5ee01d - -0x81, _0x2d51eb);
        }

        function _0x1a039e(_0x1a5718, _0x24dab9) {
            return _0x263b(_0x24dab9 - -0x2bb, _0x1a5718);
        }

        function _0x17a93c(_0x1f622c, _0x1e73a3) {
            return _0xf801(_0x1e73a3 - 0x18, _0x1f622c);
        }

        function _0x1684f9(_0x10b840, _0x328b83) {
            return _0x263b(_0x10b840 - -0x2b1, _0x328b83);
        }

        function _0x44fc1e(_0x306f78, _0x1d72c1) {
            return _0x263b(_0x1d72c1 - -0xc5, _0x306f78);
        }

        function _0x13cd94(_0x25ef98, _0x5d3fc8) {
            return _0xf801(_0x5d3fc8 - 0x1c8, _0x25ef98);
        }

        function _0x489a4b(_0x928b90, _0x4ae495) {
            return _0xf801(_0x4ae495 - -0x20a, _0x928b90);
        }

        function _0x2da5ca(_0x513465, _0x1ea288) {
            return _0xf801(_0x513465 - -0x37, _0x1ea288);
        }

        function _0x351dc0(_0x2c6619, _0x205833) {
            return _0xf801(_0x2c6619 - 0x1c0, _0x205833);
        }

        function _0x46a0d3(_0x3d3caf, _0x5352b2) {
            return _0xf801(_0x5352b2 - -0x216, _0x3d3caf);
        }

        function _0x2eeedb(_0x7a523c, _0x1f1a28) {
            return _0x263b(_0x7a523c - 0x241, _0x1f1a28);
        }

        function _0x447aa5(_0x5b0604, _0x4ca42c) {
            return _0xf801(_0x4ca42c - -0x2b8, _0x5b0604);
        }

        function _0x483e71(_0x47ee1c, _0x2867c7) {
            return _0xf801(_0x47ee1c - 0x2e4, _0x2867c7);
        }

        function _0x289a38(_0x5bdc07, _0x5007b3) {
            return _0x263b(_0x5bdc07 - 0x288, _0x5007b3);
        }

        function _0x331032(_0x49acf7, _0x251641) {
            return _0x263b(_0x49acf7 - -0x36b, _0x251641);
        }

        function _0x3bfc05(_0x407483, _0x11bf7b) {
            return _0x263b(_0x407483 - 0x89, _0x11bf7b);
        }

        function _0x550945(_0x5ce1ad, _0x4cec8d) {
            return _0x263b(_0x5ce1ad - -0xa2, _0x4cec8d);
        }

        function _0x34072c(_0x4ea61c, _0x1e9903) {
            return _0xf801(_0x4ea61c - -0x9b, _0x1e9903);
        }

        function _0x13656c(_0xef2ed0, _0x36c8b3) {
            return _0xf801(_0x36c8b3 - -0x2b2, _0xef2ed0);
        }

        function _0x582756(_0x18606b, _0x127ecc) {
            return _0xf801(_0x18606b - 0x1e7, _0x127ecc);
        }

        function _0x53783a(_0x3e0e2d, _0x47980c) {
            return _0xf801(_0x47980c - -0x3d1, _0x3e0e2d);
        }

        function _0xff753(_0x46a3f0, _0x3dfc0b) {
            return _0x263b(_0x46a3f0 - -0x1c7, _0x3dfc0b);
        }

        function _0x1bb1af(_0x4890cb, _0x12bd82) {
            return _0xf801(_0x12bd82 - 0xc4, _0x4890cb);
        }

        function _0x3d3ffa(_0x4814f8, _0x112c74) {
            return _0x263b(_0x4814f8 - -0x1ae, _0x112c74);
        }

        function _0x500930(_0x4fe8, _0x202b30) {
            return _0x263b(_0x202b30 - 0x384, _0x4fe8);
        }

        $[_0xff753(0x2d, 'COsz')](_0x353ff6, async (_0x10b395, _0x5ca3d5, _0x42b59b) => {
            function _0x19383e(_0x577f0b, _0xd62616) {
                return _0xff753(_0xd62616 - -0xd4, _0x577f0b);
            }

            function _0x56102(_0x352149, _0x4b8b53) {
                return _0x1bb1af(_0x352149, _0x4b8b53 - -0x1d5);
            }

            function _0xb66831(_0x33d33a, _0x9fcc05) {
                return _0x14139c(_0x9fcc05, _0x33d33a - 0x339);
            }

            function _0x5d87f7(_0x200539, _0x10df17) {
                return _0x351dc0(_0x10df17 - -0x3e4, _0x200539);
            }

            function _0x260f84(_0x2a1e9b, _0xeea119) {
                return _0x34072c(_0xeea119 - -0x153, _0x2a1e9b);
            }

            try {
                let _0x8f5042 = JSON[_0xb66831(0x111, 0x194)](_0x42b59b);
                _0x8f5042[_0xb66831(0x189, 0x103)] == 0x0 && console[_0x19383e('%$Dy', -0x119)](_0x5d87f7(-0xd3, -0x9e));
            } catch (_0x3faca4) {
                $[_0x56102(0x40, -0x9)](_0x3faca4, _0x5ca3d5);
            } finally {
                _0x506282();
            }
        });
    });
}

function award(_0xb4dbfc) {
    return new Promise(_0x525061 => {
        function _0x2bd4e9(_0x4463b2, _0x1e603b) {
            return _0xf801(_0x4463b2 - 0x26f, _0x1e603b);
        }

        function _0x3db0af(_0x54949b, _0x42802a) {
            return _0xf801(_0x54949b - 0x137, _0x42802a);
        }

        function _0x39b6ca(_0x1d683d, _0x4d08b1) {
            return _0xf801(_0x1d683d - 0x1b8, _0x4d08b1);
        }

        function _0x3c8a2e(_0x200c60, _0x3d57db) {
            return _0xf801(_0x200c60 - 0x44, _0x3d57db);
        }

        function _0x441533(_0x61bbc7, _0x2bf047) {
            return _0xf801(_0x61bbc7 - -0x144, _0x2bf047);
        }

        function _0x3db2b8(_0x5eba47, _0x270115) {
            return _0xf801(_0x270115 - -0x2a2, _0x5eba47);
        }

        function _0x5d69c8(_0x3dadf6, _0x4421c5) {
            return _0x263b(_0x4421c5 - 0x2b0, _0x3dadf6);
        }

        function _0x26c697(_0x4579b0, _0x159398) {
            return _0x263b(_0x4579b0 - 0x8d, _0x159398);
        }

        function _0x4cdb82(_0x16e99d, _0x2164a1) {
            return _0x263b(_0x16e99d - -0x386, _0x2164a1);
        }

        function _0x43e2d2(_0x40d6cb, _0x2f32d5) {
            return _0x263b(_0x40d6cb - 0x213, _0x2f32d5);
        }

        function _0x1250df(_0xa9d624, _0x3c7edf) {
            return _0xf801(_0xa9d624 - 0x62, _0x3c7edf);
        }

        function _0xc23f0d(_0x247e74, _0x5f47da) {
            return _0x263b(_0x247e74 - -0x1b2, _0x5f47da);
        }

        function _0x4dc378(_0x2e08f7, _0x530c4a) {
            return _0x263b(_0x2e08f7 - 0x3bd, _0x530c4a);
        }

        function _0x8d34cc(_0x24a268, _0x367e1a) {
            return _0xf801(_0x24a268 - 0x37f, _0x367e1a);
        }

        function _0x10d5a5(_0x46413, _0x14fd65) {
            return _0x263b(_0x46413 - 0x19f, _0x14fd65);
        }

        function _0x213834(_0x35a113, _0x858b05) {
            return _0xf801(_0x858b05 - -0x3d6, _0x35a113);
        }

        function _0x579671(_0x3145d0, _0x33425c) {
            return _0x263b(_0x33425c - -0x1e5, _0x3145d0);
        }

        function _0x460055(_0x95cce1, _0x2ecfe) {
            return _0xf801(_0x2ecfe - -0x31e, _0x95cce1);
        }

        let _0x471195 = {
            'url': _0x10d5a5(0x2de, 'nwPf') + wsgsig,
            'headers': {
                'Host': _0x441533(0xf, -0x22),
                'D-Header-Dchn': dchn,
                'D-Header-T': unescape(token),
                'User-Agent': _0x10d5a5(0x36a, ']LSx'),
                'Referer': _0x26c697(0x1ff, 'vLRQ'),
                'D-Header-IsHitButton': _0x5d69c8('VEAh', 0x4a9),
                'D-Header-Appid': _0x39b6ca(0x3ba, 0x394),
                'Origin': _0x8d34cc(0x4f3, 0x48a),
                'D-Header-FromChannel': '2',
                'D-Header-Did': '0',
                'Connection': _0x39b6ca(0x2ce, 0x336),
                'D-Header-IsOpenWeb': _0x5d69c8('rl&k', 0x3bb),
                'Accept-Language': _0x460055(-0x1db, -0x1d8),
                'D-Header-Ddfp': '0',
                'Accept': _0x4cdb82(-0x222, 'j1*u'),
                'Content-Type': 'application/json;charset=utf-8',
                'D-Header-AppVersion': '0',
                'D-Header-City': '3',
                'Accept-Encoding': _0x1a654d(0x1fa, 0x1a3)
            },
            'body': _0x4cdb82(-0x1f2, 'uc&l') + xbiz + _0x5dc524(-0xc, -0x33) + xpsid + _0x460055(-0x10b, -0x118) + dchn + _0x10d5a5(0x3a0, 'JZD#') + xoid + _0x213834(-0x27a, -0x2ab) + uid + _0x460055(-0x12f, -0x111) + xenv + _0x26c697(0x23a, ']Yfn') + xspm_from + _0x43e2d2(0x38d, 'JnR0') + xpsid_root + _0x1a654d(0xa4, 0x9f) + xpsid_from + _0x39b6ca(0x348, 0x306) + _0xb4dbfc + _0x3fe5f7(-0x158, 'U9Gr') + game_id + _0x39b6ca(0x385, 0x3d1) + platform + _0x39b6ca(0x302, 0x34d) + unescape(token) + '\x22}'
        };

        function _0x1e4303(_0x2d6aaf, _0x142eb5) {
            return _0x263b(_0x2d6aaf - 0xbc, _0x142eb5);
        }

        function _0x3acfd6(_0x5ab673, _0x21fa6e) {
            return _0x263b(_0x21fa6e - 0x3ab, _0x5ab673);
        }

        function _0x1a654d(_0x108e42, _0x3aab0) {
            return _0xf801(_0x3aab0 - -0x68, _0x108e42);
        }

        function _0x23f484(_0x3ec329, _0x533a84) {
            return _0x263b(_0x533a84 - 0x1bf, _0x3ec329);
        }

        function _0x38312b(_0x4160ac, _0x4dcf19) {
            return _0xf801(_0x4dcf19 - 0x350, _0x4160ac);
        }

        function _0x75d0a5(_0x3e8206, _0x2d05d4) {
            return _0xf801(_0x3e8206 - -0x38f, _0x2d05d4);
        }

        function _0x5dc524(_0x92e7f1, _0xc7703e) {
            return _0xf801(_0x92e7f1 - -0x129, _0xc7703e);
        }

        function _0x3fe5f7(_0x1fbce5, _0x2617c9) {
            return _0x263b(_0x1fbce5 - -0x367, _0x2617c9);
        }

        $[_0x43e2d2(0x3f5, 'C^z2')](_0x471195, async (_0x260e57, _0x472634, _0x2a20f2) => {
            function _0x2e608b(_0x5bbe9c, _0x1f4a8c) {
                return _0x1e4303(_0x5bbe9c - 0x1c, _0x1f4a8c);
            }

            function _0x15a84a(_0xea741f, _0x1a017a) {
                return _0x10d5a5(_0x1a017a - -0x366, _0xea741f);
            }

            function _0x3f585e(_0x4c4253, _0x4d09d7) {
                return _0x38312b(_0x4c4253, _0x4d09d7 - 0x49);
            }

            function _0x4a6cdf(_0x21d2cb, _0x5d12d7) {
                return _0x4dc378(_0x5d12d7 - -0x276, _0x21d2cb);
            }

            function _0x2c46b5(_0x3a1760, _0x5bc5f1) {
                return _0x26c697(_0x3a1760 - -0x3f7, _0x5bc5f1);
            }

            function _0x572ef2(_0x1919fd, _0x368d8a) {
                return _0x43e2d2(_0x1919fd - -0x1fa, _0x368d8a);
            }

            function _0x2a284f(_0x1a8dd7, _0x3ec72f) {
                return _0x1e4303(_0x3ec72f - 0x11c, _0x1a8dd7);
            }

            function _0x34d50c(_0x5ee38f, _0x501e90) {
                return _0x4cdb82(_0x5ee38f - 0x50d, _0x501e90);
            }

            function _0x1987b8(_0x11b2bc, _0x1c7c40) {
                return _0x3db2b8(_0x1c7c40, _0x11b2bc - -0x71);
            }

            function _0x173bd7(_0x4811d8, _0x3a0162) {
                return _0x2bd4e9(_0x3a0162 - 0x6a, _0x4811d8);
            }

            function _0x568ab3(_0x47b36e, _0x17a3e2) {
                return _0x3c8a2e(_0x47b36e - 0x7a, _0x17a3e2);
            }

            function _0x4a6946(_0x9285e3, _0x3f9618) {
                return _0x23f484(_0x9285e3, _0x3f9618 - -0x365);
            }

            function _0x16fadf(_0x376770, _0x5aa662) {
                return _0x75d0a5(_0x376770 - 0x206, _0x5aa662);
            }

            try {
                let _0x13b7f7 = JSON[_0x4a6cdf('9I8w', 0x35b)](_0x2a20f2);
                _0x13b7f7[_0x15a84a(']LSx', 0x11)] == 0x0 && console[_0x568ab3(0x271, 0x26c)]('领取：' + _0x13b7f7[_0x568ab3(0x263, 0x224)][_0x2a284f('@sqz', 0x370)] + _0x568ab3(0x25f, 0x223) + _0x13b7f7[_0x568ab3(0x263, 0x201)][_0x572ef2(0x16b, 'Cix5')][0x0][_0x34d50c(0x33c, 'M02p')] + _0x13b7f7[_0x4a6cdf('Su[Y', 0x303)][_0x15a84a('rl&k', 0x3c)][0x0][_0x173bd7(0x4d1, 0x4f2)]);
            } catch (_0x1cb89b) {
                $[_0x4a6946('vLRQ', -0x79)](_0x1cb89b, _0x472634);
            } finally {
                _0x525061();
            }
        });
    });
}

function newcomerSign() {
    return new Promise(_0x15954b => {
        function _0x4e5a87(_0x2fce91, _0x2af38c) {
            return _0x263b(_0x2fce91 - -0x399, _0x2af38c);
        }

        function _0x19407b(_0x47b64b, _0x2b8824) {
            return _0x263b(_0x47b64b - 0x84, _0x2b8824);
        }

        function _0x98393e(_0x387e2f, _0x25e403) {
            return _0x263b(_0x387e2f - -0x59, _0x25e403);
        }

        function _0x5a7299(_0x2440a1, _0x377e99) {
            return _0x263b(_0x377e99 - 0x294, _0x2440a1);
        }

        function _0x28921c(_0x5978dd, _0xef6ef6) {
            return _0xf801(_0xef6ef6 - -0x17c, _0x5978dd);
        }

        function _0x445468(_0x50f0a4, _0x169c5e) {
            return _0xf801(_0x169c5e - 0x281, _0x50f0a4);
        }

        function _0x5e7898(_0x1e83e7, _0x912c02) {
            return _0xf801(_0x1e83e7 - -0x1b3, _0x912c02);
        }

        function _0x3f94e9(_0x117963, _0x3638d3) {
            return _0x263b(_0x3638d3 - -0x10, _0x117963);
        }

        function _0x4b1b74(_0xb6e62c, _0x3fb80a) {
            return _0x263b(_0x3fb80a - -0xff, _0xb6e62c);
        }

        function _0x2b982e(_0x1d7a9a, _0x14d361) {
            return _0x263b(_0x14d361 - 0x2b3, _0x1d7a9a);
        }

        function _0x1d1160(_0x1aa5b1, _0x5a3e16) {
            return _0xf801(_0x1aa5b1 - -0x23d, _0x5a3e16);
        }

        function _0x3e9019(_0x39ae8a, _0x5a472c) {
            return _0x263b(_0x5a472c - -0x21f, _0x39ae8a);
        }

        function _0xc52df9(_0x4f9eb3, _0x3ed6e1) {
            return _0xf801(_0x3ed6e1 - -0xef, _0x4f9eb3);
        }

        function _0x5838d5(_0x26c03c, _0x4a7bc8) {
            return _0x263b(_0x4a7bc8 - 0xea, _0x26c03c);
        }

        function _0x4f541d(_0x17cb92, _0x21d9fe) {
            return _0xf801(_0x17cb92 - -0x197, _0x21d9fe);
        }

        function _0x4a93d7(_0x4e37b2, _0x4a254e) {
            return _0x263b(_0x4a254e - -0x71, _0x4e37b2);
        }

        function _0x4a0562(_0x2d66af, _0x3f1089) {
            return _0x263b(_0x3f1089 - 0x164, _0x2d66af);
        }

        function _0x2c5e55(_0x326f6c, _0x19cfc8) {
            return _0x263b(_0x19cfc8 - 0xba, _0x326f6c);
        }

        function _0x2e2cd0(_0x30dbc3, _0x4528b4) {
            return _0xf801(_0x30dbc3 - -0x239, _0x4528b4);
        }

        function _0x22e4a9(_0x2b49bc, _0x54f175) {
            return _0xf801(_0x2b49bc - 0xd2, _0x54f175);
        }

        function _0x183b73(_0x231f4b, _0x307c2a) {
            return _0xf801(_0x307c2a - -0xe7, _0x231f4b);
        }

        function _0x35491c(_0x4f41aa, _0x2a2ded) {
            return _0xf801(_0x2a2ded - 0x25c, _0x4f41aa);
        }

        function _0x1f2bdc(_0x469814, _0x26db0d) {
            return _0xf801(_0x469814 - -0x36d, _0x26db0d);
        }

        function _0x518dda(_0x3ef832, _0x40fa27) {
            return _0xf801(_0x3ef832 - -0x14a, _0x40fa27);
        }

        let _0x41a99b = {
            'url': _0x19407b(0x1a3, 'u%%Q') + wsgsig,
            'headers': {
                'Host': _0x19407b(0x274, 'nwPf'),
                'D-Header-Dchn': dchn,
                'D-Header-T': unescape(token),
                'User-Agent': _0x3e9019('mYyC', -0xa8),
                'Referer': _0x1d1160(-0xc8, -0x6c),
                'D-Header-IsHitButton': _0x5a7299('C^z2', 0x3b2),
                'D-Header-Appid': _0x19407b(0x213, ']Yfn'),
                'Origin': _0x1f2bdc(-0x1f9, -0x230),
                'D-Header-FromChannel': '2',
                'D-Header-Did': '0',
                'Connection': _0x1d1160(-0x127, -0xaa),
                'D-Header-IsOpenWeb': _0x1d1160(-0x74, 0xa),
                'Accept-Language': _0x4e5a87(-0x22c, '8Gk1'),
                'D-Header-Ddfp': '0',
                'Accept': _0x3f94e9('[MBM', 0x16c),
                'Content-Type': _0x5e7898(-0x9b, -0xbf),
                'D-Header-AppVersion': '0',
                'D-Header-City': '3',
                'Accept-Encoding': _0x3f94e9('lz7M', 0x14f)
            },
            'body': _0x3e9019('mYyC', -0x94) + xbiz + _0x5e7898(-0x96, -0x115) + xpsid + _0x2e2cd0(-0x33, -0x2) + dchn + _0xc52df9(0x9d, 0x39) + xoid + _0x35491c(0x30d, 0x387) + uid + _0x5f274b(-0x19a, '[MBM') + xenv + _0x22e4a9(0x22e, 0x23b) + xspm_from + _0x5f274b(-0x1f4, '8Gk1') + xpsid_root + _0x2b982e('[gAc', 0x3d5) + xpsid_from + _0x4e5a87(-0x20f, 'U$hb') + game_id + _0xc52df9(0x169, 0xde) + platform + _0x22e4a9(0x21c, 0x195) + unescape(token) + '\x22}'
        };

        function _0x5f274b(_0x576069, _0x1eb1a3) {
            return _0x263b(_0x576069 - -0x3a2, _0x1eb1a3);
        }

        $['post'](_0x41a99b, async (_0xeb1349, _0x4209cd, _0x309dc4) => {
            function _0x19d003(_0xa39913, _0x154534) {
                return _0x1d1160(_0xa39913 - 0x39e, _0x154534);
            }

            function _0x526a0c(_0x588758, _0x5ef162) {
                return _0x22e4a9(_0x588758 - -0x97, _0x5ef162);
            }

            function _0x195efc(_0x310c39, _0x300492) {
                return _0x4a0562(_0x310c39, _0x300492 - 0x76);
            }

            function _0x6f24d0(_0xe37c63, _0x11751a) {
                return _0x4a0562(_0x11751a, _0xe37c63 - -0x42f);
            }

            function _0x5b34cd(_0x50546b, _0x49024a) {
                return _0x3f94e9(_0x50546b, _0x49024a - -0x1dd);
            }

            function _0x3ef1b1(_0x4995e1, _0x32813e) {
                return _0x5a7299(_0x4995e1, _0x32813e - -0x303);
            }

            function _0x5efb3f(_0xed763a, _0x16c8f8) {
                return _0x4a93d7(_0xed763a, _0x16c8f8 - 0x4f);
            }

            function _0x23e0d8(_0x2a8201, _0x310efa) {
                return _0x5a7299(_0x310efa, _0x2a8201 - -0x15d);
            }

            function _0x4a1f7d(_0x495044, _0x3e5936) {
                return _0x518dda(_0x3e5936 - 0x417, _0x495044);
            }

            function _0x264b70(_0x1d61ba, _0x13623d) {
                return _0x518dda(_0x13623d - 0x1f2, _0x1d61ba);
            }

            function _0x1ca09a(_0x5d1c4c, _0x3bd2a7) {
                return _0x2e2cd0(_0x5d1c4c - 0x565, _0x3bd2a7);
            }

            function _0x12e752(_0x68f118, _0x98c87b) {
                return _0x22e4a9(_0x68f118 - -0x2d8, _0x98c87b);
            }

            function _0x24e543(_0x5953e4, _0x3afe76) {
                return _0x5f274b(_0x3afe76 - 0x331, _0x5953e4);
            }

            function _0x224c14(_0x17f9e5, _0x250ee8) {
                return _0x1f2bdc(_0x250ee8 - 0x311, _0x17f9e5);
            }

            try {
                console[_0x5efb3f('C^z2', 0x1e3)](_0x4a1f7d(0x4a0, 0x4ae));
                let _0x2d8401 = JSON[_0x23e0d8(0x275, '@KTB')](_0x309dc4);
                _0x2d8401[_0x224c14(0x148, 0x15e)] == 0x0 ? console[_0x5b34cd('bdhg', -0x83)](_0x4a1f7d(0x4df, 0x48c) + _0x2d8401[_0x224c14(0x16e, 0x149)][_0x19d003(0x271, 0x2ce)][_0x5b34cd('j1*u', -0x1b)] + _0x2d8401[_0x224c14(0x1a3, 0x149)][_0x195efc('&L99', 0x3d8)]['name']) : console[_0x12e752(-0x53, -0x48)](_0x2d8401[_0x5efb3f('yLOP', 0xea)]);
            } catch (_0x184e13) {
                $[_0x5b34cd('uc&l', -0xba)](_0x184e13, _0x4209cd);
            } finally {
                _0x15954b();
            }
        });
    });
}

function _0x26262c(_0x2f2d49, _0x1e96f3) {
    return _0x263b(_0x2f2d49 - -0x28c, _0x1e96f3);
}

function recCommonBox() {
    return new Promise(_0x4096b2 => {
        function _0x38073c(_0x53a140, _0x104b37) {
            return _0xf801(_0x104b37 - 0x109, _0x53a140);
        }

        function _0x4756fa(_0x648ff5, _0x5e6bdf) {
            return _0xf801(_0x5e6bdf - -0x105, _0x648ff5);
        }

        function _0x5175ed(_0x5de994, _0x454f0a) {
            return _0x263b(_0x454f0a - -0x227, _0x5de994);
        }

        function _0x24149e(_0x18e5d5, _0x15c77e) {
            return _0x263b(_0x15c77e - 0x307, _0x18e5d5);
        }

        function _0x151b97(_0x5eaea7, _0x5ba3c4) {
            return _0x263b(_0x5ba3c4 - 0x5c, _0x5eaea7);
        }

        function _0x1e2b0d(_0x8f5fe5, _0x4766a4) {
            return _0x263b(_0x4766a4 - 0x9a, _0x8f5fe5);
        }

        function _0x16f37d(_0x112fc7, _0x4254c5) {
            return _0x263b(_0x4254c5 - 0x245, _0x112fc7);
        }

        function _0x454664(_0xe9c7d, _0x3f2a36) {
            return _0x263b(_0xe9c7d - -0x385, _0x3f2a36);
        }

        function _0x106150(_0x16c4ee, _0x5d6775) {
            return _0xf801(_0x16c4ee - 0x202, _0x5d6775);
        }

        function _0x24aa41(_0x432db1, _0x4a1369) {
            return _0x263b(_0x4a1369 - -0x8c, _0x432db1);
        }

        function _0x4cd26c(_0x50ba78, _0x4a25b6) {
            return _0xf801(_0x50ba78 - 0x45, _0x4a25b6);
        }

        function _0x50dca3(_0x1c235c, _0x32ba9e) {
            return _0x263b(_0x1c235c - 0x30c, _0x32ba9e);
        }

        function _0x5c3b4d(_0x32caed, _0x3efb9b) {
            return _0x263b(_0x32caed - 0x331, _0x3efb9b);
        }

        let _0x149275 = {
            'url': _0x369e60('vLRQ', 0x3e6) + wsgsig,
            'headers': {
                'Host': _0x16f37d('lz7M', 0x39b),
                'D-Header-Dchn': dchn,
                'D-Header-T': unescape(token),
                'User-Agent': _0x509a49(0x457, 0x4be),
                'Referer': _0x16f37d('nwPf', 0x3fd),
                'D-Header-IsHitButton': _0x369e60('j1*u', 0x3bd),
                'D-Header-Appid': _0x454664(-0x17c, 'EBR*'),
                'Origin': _0x454664(-0x1ec, '9mUa'),
                'D-Header-FromChannel': '2',
                'D-Header-Did': '0',
                'Connection': _0x24149e('JoO!', 0x4d5),
                'D-Header-IsOpenWeb': _0x4cd26c(0x20e, 0x1af),
                'Accept-Language': _0x24149e('lz7M', 0x511),
                'D-Header-Ddfp': '0',
                'Accept': _0x530178(0xa4, 'U$hb'),
                'Content-Type': _0x4cd26c(0x15d, 0x143),
                'D-Header-AppVersion': '0',
                'D-Header-City': '3',
                'Accept-Encoding': _0x24149e('COsz', 0x438)
            },
            'body': _0x4cd26c(0x22b, 0x270) + xbiz + _0x1e2b0d(']LSx', 0x2a6) + xpsid + _0x369e60('rl&k', 0x3ae) + dchn + _0x24149e(')A(i', 0x4ab) + xoid + _0xf13cb5(0x4a9, 0x4c1) + uid + _0x24149e('RLUK', 0x421) + xenv + '\x22,\x22xspm_from\x22:\x22' + xspm_from + _0x4d6ab5(0x3c7, 0x449) + xpsid_root + _0x38073c(0x244, 0x210) + xpsid_from + _0x106150(0x3e6, 0x404) + game_id + _0x1e2b0d('1F5V', 0x1a9) + platform + _0x50dca3(0x4f9, 'lz7M') + unescape(token) + '\x22}'
        };

        function _0x4d6ab5(_0x4ee70d, _0x13435e) {
            return _0xf801(_0x13435e - 0x274, _0x4ee70d);
        }

        function _0x369e60(_0x50adb4, _0x30bef1) {
            return _0x263b(_0x30bef1 - 0x2ab, _0x50adb4);
        }

        function _0x4ae68f(_0x4351a2, _0x9a2a94) {
            return _0xf801(_0x9a2a94 - 0x38b, _0x4351a2);
        }

        function _0x530178(_0x31620c, _0x4a1a7b) {
            return _0x263b(_0x31620c - -0x11e, _0x4a1a7b);
        }

        function _0xf13cb5(_0x3d5153, _0x4abb3d) {
            return _0xf801(_0x3d5153 - 0x37e, _0x4abb3d);
        }

        function _0x2d72bd(_0x100f3b, _0x212cea) {
            return _0x263b(_0x212cea - -0x3bb, _0x100f3b);
        }

        function _0x486b9f(_0x3303fc, _0x559698) {
            return _0x263b(_0x559698 - -0xd1, _0x3303fc);
        }

        function _0x339000(_0x1f9be5, _0x120097) {
            return _0x263b(_0x120097 - -0x351, _0x1f9be5);
        }

        function _0x509a49(_0x15ae01, _0x5c403d) {
            return _0xf801(_0x5c403d - 0x327, _0x15ae01);
        }

        function _0x563d75(_0x378cba, _0x43bfe6) {
            return _0x263b(_0x43bfe6 - 0x38d, _0x378cba);
        }

        function _0x47a151(_0x56b75e, _0x296ca4) {
            return _0x263b(_0x296ca4 - -0x82, _0x56b75e);
        }

        function _0x7e18d6(_0x4419e8, _0x10a493) {
            return _0x263b(_0x10a493 - 0xba, _0x4419e8);
        }

        $[_0x5175ed('gN7o', -0x38)](_0x149275, async (_0x36e8a4, _0x56d57f, _0x5641e1) => {
            function _0x2febc2(_0x3dacb4, _0x25e3c8) {
                return _0x47a151(_0x25e3c8, _0x3dacb4 - 0x356);
            }

            function _0x2b0dc4(_0x3c55cb, _0x2cd5fa) {
                return _0x4ae68f(_0x3c55cb, _0x2cd5fa - -0x244);
            }

            function _0x97b10b(_0x4e52e5, _0x5ea511) {
                return _0x24149e(_0x4e52e5, _0x5ea511 - -0x377);
            }

            function _0x39ae03(_0x1f91d2, _0x3b0e04) {
                return _0x106150(_0x3b0e04 - -0x543, _0x1f91d2);
            }

            function _0x54d211(_0x3b9736, _0xb46c44) {
                return _0x4756fa(_0x3b9736, _0xb46c44 - -0x164);
            }

            function _0x9151d9(_0x2290b6, _0x2ddeed) {
                return _0x38073c(_0x2290b6, _0x2ddeed - -0x47f);
            }

            function _0x4762a3(_0x5c0d7b, _0x509462) {
                return _0x24aa41(_0x509462, _0x5c0d7b - 0x170);
            }

            function _0xada7a3(_0x42b3ce, _0x2237e6) {
                return _0x369e60(_0x2237e6, _0x42b3ce - 0x40);
            }

            function _0x3e7058(_0x3f33d8, _0x73ef85) {
                return _0x4756fa(_0x73ef85, _0x3f33d8 - 0x1b0);
            }

            function _0x1490c7(_0x5bff59, _0x37e202) {
                return _0x38073c(_0x5bff59, _0x37e202 - -0x3ee);
            }

            function _0x1ac50c(_0x2fd970, _0x43175d) {
                return _0x4cd26c(_0x43175d - -0xd0, _0x2fd970);
            }

            function _0x156ccc(_0x23d039, _0x26d707) {
                return _0x50dca3(_0x23d039 - -0x163, _0x26d707);
            }

            function _0x132b2b(_0x2e2c9d, _0x6e550a) {
                return _0x47a151(_0x2e2c9d, _0x6e550a - -0xca);
            }

            try {
                let _0x2d44c1 = JSON[_0x132b2b('U9Gr', 0x1)](_0x5641e1);
                _0x2d44c1[_0x2febc2(0x439, 'mYyC')] == 0x0 ? (console[_0x2b0dc4(0x289, 0x2fa)](_0x2b0dc4(0x2ea, 0x306) + _0x2d44c1[_0x2febc2(0x4cf, 'qG!6')][_0x2b0dc4(0x256, 0x257)][0x0][_0x39ae03(-0x22e, -0x1f3)] + _0x2d44c1[_0x9151d9(-0x23e, -0x1d1)][_0x156ccc(0x350, 'Nt45')][0x0][_0x9151d9(-0x1a4, -0x15d)]), await $[_0x132b2b('LotJ', 0x8)](0x3e8), await recCommonBox()) : console[_0x2b0dc4(0x2e5, 0x2fa)](_0x2d44c1[_0x156ccc(0x35f, 'EBR*')]);
            } catch (_0x3d433b) {
                $['logErr'](_0x3d433b, _0x56d57f);
            } finally {
                _0x4096b2();
            }
        });
    });
}

function _0x263b(_0x23bb18, _0x3b5130) {
    const _0x355322 = _0x3553();
    return _0x263b = function (_0xf80198, _0x6b3bf2) {
        _0xf80198 = _0xf80198 - 0x103;
        let _0x480d34 = _0x355322[_0xf80198];
        if (_0x263b['iKViru'] === undefined) {
            var _0x3ad603 = function (_0x172f81) {
                const _0x88d79c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x588cbc = '', _0x5c024a = '';
                for (let _0x21602c = 0x0, _0x5f2d49, _0x39d772, _0x544e7c = 0x0; _0x39d772 = _0x172f81['charAt'](_0x544e7c++); ~_0x39d772 && (_0x5f2d49 = _0x21602c % 0x4 ? _0x5f2d49 * 0x40 + _0x39d772 : _0x39d772, _0x21602c++ % 0x4) ? _0x588cbc += String['fromCharCode'](0xff & _0x5f2d49 >> (-0x2 * _0x21602c & 0x6)) : 0x0) {
                    _0x39d772 = _0x88d79c['indexOf'](_0x39d772);
                }
                for (let _0x1d4f49 = 0x0, _0x4bcd0e = _0x588cbc['length']; _0x1d4f49 < _0x4bcd0e; _0x1d4f49++) {
                    _0x5c024a += '%' + ('00' + _0x588cbc['charCodeAt'](_0x1d4f49)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x5c024a);
            };
            const _0x263b71 = function (_0x11717a, _0x59833a) {
                let _0x585d2f = [], _0x4f8f11 = 0x0, _0x293c55, _0x53aa2b = '';
                _0x11717a = _0x3ad603(_0x11717a);
                let _0x82d1ee;
                for (_0x82d1ee = 0x0; _0x82d1ee < 0x100; _0x82d1ee++) {
                    _0x585d2f[_0x82d1ee] = _0x82d1ee;
                }
                for (_0x82d1ee = 0x0; _0x82d1ee < 0x100; _0x82d1ee++) {
                    _0x4f8f11 = (_0x4f8f11 + _0x585d2f[_0x82d1ee] + _0x59833a['charCodeAt'](_0x82d1ee % _0x59833a['length'])) % 0x100, _0x293c55 = _0x585d2f[_0x82d1ee], _0x585d2f[_0x82d1ee] = _0x585d2f[_0x4f8f11], _0x585d2f[_0x4f8f11] = _0x293c55;
                }
                _0x82d1ee = 0x0, _0x4f8f11 = 0x0;
                for (let _0x5bdd32 = 0x0; _0x5bdd32 < _0x11717a['length']; _0x5bdd32++) {
                    _0x82d1ee = (_0x82d1ee + 0x1) % 0x100, _0x4f8f11 = (_0x4f8f11 + _0x585d2f[_0x82d1ee]) % 0x100, _0x293c55 = _0x585d2f[_0x82d1ee], _0x585d2f[_0x82d1ee] = _0x585d2f[_0x4f8f11], _0x585d2f[_0x4f8f11] = _0x293c55, _0x53aa2b += String['fromCharCode'](_0x11717a['charCodeAt'](_0x5bdd32) ^ _0x585d2f[(_0x585d2f[_0x82d1ee] + _0x585d2f[_0x4f8f11]) % 0x100]);
                }
                return _0x53aa2b;
            };
            _0x263b['HsMXmV'] = _0x263b71, _0x23bb18 = arguments, _0x263b['iKViru'] = !![];
        }
        const _0x74e677 = _0x355322[0x0], _0x4f33eb = _0xf80198 + _0x74e677, _0x3dfe52 = _0x23bb18[_0x4f33eb];
        return !_0x3dfe52 ? (_0x263b['msjdRR'] === undefined && (_0x263b['msjdRR'] = !![]), _0x480d34 = _0x263b['HsMXmV'](_0x480d34, _0x6b3bf2), _0x23bb18[_0x4f33eb] = _0x480d34) : _0x480d34 = _0x3dfe52, _0x480d34;
    }, _0x263b(_0x23bb18, _0x3b5130);
}

function fertilizer() {
    return new Promise(_0x510638 => {
        function _0x3bed77(_0x558ef3, _0x512be1) {
            return _0xf801(_0x512be1 - -0x73, _0x558ef3);
        }

        let _0x4971ce = {
            'url': _0x5b852a(-0x1c8, 'JZD#') + wsgsig,
            'headers': {
                'Host': 'game.xiaojukeji.com',
                'D-Header-Dchn': _0x3bed77(0x94, 0x11f),
                'D-Header-T': unescape(token),
                'User-Agent': _0x5b852a(-0x271, '8Gk1'),
                'Referer': _0x3bed77(0x176, 0x102),
                'D-Header-IsHitButton': _0x2f8ff3(0xcd, 0xc1),
                'D-Header-Appid': _0x39e70a(0xa9, 0x54),
                'Origin': _0x2f8ff3(0x81, 0x6c),
                'D-Header-FromChannel': '2',
                'D-Header-Did': '0',
                'Connection': _0x2bc42a(0x93, 0xf5),
                'D-Header-IsOpenWeb': _0x39e70a(0xd, 0x1b),
                'Accept-Language': _0x2f8ff3(0x89, 0x3e),
                'D-Header-Ddfp': '0',
                'Accept': _0x15a5e9(0x5a4, 0x591),
                'Content-Type': _0xa8435a(0x443, '9mUa'),
                'D-Header-AppVersion': '0',
                'D-Header-City': '3',
                'Accept-Encoding': _0xa8435a(0x34c, 'LotJ')
            },
            'body': '{\x22xbiz\x22:\x22' + xbiz + _0x3d35b4(-0xa4, 'RLUK') + xpsid + '\x22,\x22dchn\x22:\x22k57MWrY\x22,\x22xoid\x22:\x226b1d8b3e-23ee-4147-9927-1bb62131a861\x22,\x22uid\x22:\x22' + uid + _0x41d6f4(0x34, '9w91') + xpsid_root + _0x41d6f4(0x13, 'uc&l') + xpsid_from + _0x43c692('vLRQ', 0x129) + unescape(token) + '\x22}'
        };

        function _0x41d6f4(_0x493fae, _0xdcbe1c) {
            return _0x263b(_0x493fae - -0x1be, _0xdcbe1c);
        }

        function _0x32ab74(_0x35a9de, _0x4d8a17) {
            return _0xf801(_0x4d8a17 - -0x38a, _0x35a9de);
        }

        function _0x56099e(_0x50b6f3, _0x53c5e9) {
            return _0xf801(_0x53c5e9 - 0x2c2, _0x50b6f3);
        }

        function _0x43c692(_0x281309, _0x4edc6c) {
            return _0x263b(_0x4edc6c - -0x87, _0x281309);
        }

        function _0x2cee2c(_0x40aad3, _0x493139) {
            return _0xf801(_0x40aad3 - -0xf9, _0x493139);
        }

        function _0xa8435a(_0x394330, _0xacf060) {
            return _0x263b(_0x394330 - 0x22c, _0xacf060);
        }

        function _0x39e70a(_0x514064, _0x2a5dc6) {
            return _0xf801(_0x2a5dc6 - -0x1ae, _0x514064);
        }

        function _0x2f8ff3(_0x355811, _0x4820db) {
            return _0xf801(_0x4820db - -0x108, _0x355811);
        }

        function _0x5b852a(_0x4f88f3, _0xc85d7e) {
            return _0x263b(_0x4f88f3 - -0x3d8, _0xc85d7e);
        }

        function _0x478b5e(_0xa226d, _0x12da39) {
            return _0xf801(_0x12da39 - 0x6d, _0xa226d);
        }

        function _0x295cec(_0x51dffe, _0x331285) {
            return _0xf801(_0x331285 - 0x369, _0x51dffe);
        }

        function _0x15a5e9(_0x2cebcd, _0x1a3e4f) {
            return _0xf801(_0x1a3e4f - 0x3a7, _0x2cebcd);
        }

        function _0x3d35b4(_0x3f382a, _0x52c539) {
            return _0x263b(_0x3f382a - -0x20f, _0x52c539);
        }

        function _0x2bc42a(_0x23726a, _0x36069a) {
            return _0xf801(_0x23726a - -0x83, _0x36069a);
        }

        function _0x2af61d(_0x848948, _0x23e2ff) {
            return _0x263b(_0x848948 - 0x3e6, _0x23e2ff);
        }

        function _0xc36016(_0x101445, _0x14598b) {
            return _0x263b(_0x14598b - -0x37d, _0x101445);
        }

        function _0x204a2a(_0xf52e4c, _0x126902) {
            return _0x263b(_0xf52e4c - 0x3b5, _0x126902);
        }

        $[_0x32ab74(-0x18c, -0x20b)](_0x4971ce, async (_0x1209d4, _0x378b57, _0x4f46a7) => {
            function _0x1304e7(_0x4e3c7d, _0xcbbcd5) {
                return _0x39e70a(_0x4e3c7d, _0xcbbcd5 - 0x20b);
            }

            function _0x2eef66(_0x2f315e, _0x32519a) {
                return _0x3d35b4(_0x2f315e - 0x134, _0x32519a);
            }

            function _0x42137f(_0xa7665e, _0x2fd1af) {
                return _0xa8435a(_0xa7665e - -0x2b8, _0x2fd1af);
            }

            function _0x3655fe(_0x2ef8e9, _0x231c70) {
                return _0xc36016(_0x231c70, _0x2ef8e9 - 0x30f);
            }

            function _0x3b7711(_0x1273e1, _0x917185) {
                return _0x2bc42a(_0x1273e1 - 0x109, _0x917185);
            }

            function _0x3ffac1(_0x25409d, _0x4c897a) {
                return _0x43c692(_0x4c897a, _0x25409d - 0x34a);
            }

            function _0x3644d1(_0x1078db, _0x3cc2c0) {
                return _0x39e70a(_0x3cc2c0, _0x1078db - 0x591);
            }

            try {
                let _0x3f71a3 = JSON[_0x3ffac1(0x49f, 'uycN')](_0x4f46a7);
                _0x3f71a3[_0x3644d1(0x59d, 0x52d)] == 0x0 ? console[_0x2eef66(0xe9, 'mYyC')](_0x3f71a3[_0x3b7711(0x226, 0x289)]) : console[_0x3655fe(0x1aa, '9I8w')](_0x3f71a3[_0x42137f(0x185, 'Cix5')]);
            } catch (_0x11f321) {
                $[_0x3644d1(0x4eb, 0x571)](_0x11f321, _0x378b57);
            } finally {
                _0x510638();
            }
        });
    });
}

function _0x5a03a(_0x373f8d, _0x2cab25) {
    return _0xf801(_0x2cab25 - 0x37b, _0x373f8d);
}

function recBucketWater() {
    return new Promise(_0x40b27b => {
        function _0x535e49(_0x159bc7, _0x206217) {
            return _0xf801(_0x159bc7 - -0xbb, _0x206217);
        }

        function _0x418540(_0x1029d4, _0x2e5052) {
            return _0xf801(_0x1029d4 - 0x266, _0x2e5052);
        }

        function _0x1c17ad(_0x15eb0f, _0xf73a78) {
            return _0x263b(_0xf73a78 - -0x1ee, _0x15eb0f);
        }

        function _0x598c12(_0x55f12b, _0x3bd777) {
            return _0x263b(_0x3bd777 - -0x354, _0x55f12b);
        }

        let _0x74775c = {
            'url': _0x438069(0x202, 'U$hb') + wsgsig,
            'headers': {
                'Host': _0xe1bb6b(0x117, 0x18b),
                'D-Header-Dchn': dchn,
                'D-Header-T': unescape(token),
                'User-Agent': _0x438069(0x1b7, ']LSx'),
                'Referer': _0x3977a9(0x108, '&L99'),
                'D-Header-IsHitButton': _0x5ca2f9(0x213, 'dYbH'),
                'D-Header-Appid': _0x535e49(0x147, 0x19a),
                'Origin': _0x1c17ad('6nIT', -0x27),
                'D-Header-FromChannel': '2',
                'D-Header-Did': '0',
                'Connection': _0x418540(0x37c, 0x3e2),
                'D-Header-IsOpenWeb': _0x3977a9(0xe7, 'uc&l'),
                'Accept-Language': _0x5ca2f9(0x1a2, 'ZfYU'),
                'D-Header-Ddfp': '0',
                'Accept': _0x3d316f(0x1b7, 'Cix5'),
                'Content-Type': _0x1c17ad(']LSx', -0x65),
                'D-Header-AppVersion': '0',
                'D-Header-City': '3',
                'Accept-Encoding': _0x448d69('Cix5', 0x547)
            },
            'body': _0x3d316f(0x202, 'C^z2') + xbiz + _0x42ca15('RLUK', -0xf0) + xpsid + _0x1c17ad('COsz', -0x5d) + dchn + _0x5c569d(']LSx', 0x36) + xoid + _0x448d69('@KTB', 0x55c) + uid + _0x5ca2f9(0x204, 'LotJ') + xenv + _0x5d2c08(0x2c0, '3J$4') + xspm_from + _0x5b2b83('@sqz', 0x1b3) + xpsid_root + _0x5b2b83('@sqz', 0xbd) + xpsid_from + _0x535e49(0x129, 0xb8) + game_id + _0x448d69('mb0r', 0x51a) + platform + _0x2499c7('LotJ', 0x13a) + unescape(token) + '\x22}'
        };

        function _0x17bf99(_0x27590d, _0x54c2e0) {
            return _0xf801(_0x54c2e0 - -0x362, _0x27590d);
        }

        function _0x477095(_0x380855, _0x220529) {
            return _0x263b(_0x380855 - -0x27d, _0x220529);
        }

        function _0xe1bb6b(_0x77fa44, _0x1eda39) {
            return _0xf801(_0x1eda39 - 0x38, _0x77fa44);
        }

        function _0x438069(_0x66801c, _0x21b289) {
            return _0x263b(_0x66801c - -0x14, _0x21b289);
        }

        function _0x3db703(_0x18da5e, _0x3653c2) {
            return _0x263b(_0x18da5e - 0x129, _0x3653c2);
        }

        function _0xf5ae7(_0x17c677, _0x202872) {
            return _0x263b(_0x17c677 - -0x3cb, _0x202872);
        }

        function _0xee022b(_0x22d755, _0x32467f) {
            return _0x263b(_0x22d755 - 0x3a6, _0x32467f);
        }

        function _0x2499c7(_0x9c0941, _0x315fae) {
            return _0x263b(_0x315fae - 0x1e, _0x9c0941);
        }

        function _0x5afc42(_0x3faa78, _0x33fd5f) {
            return _0xf801(_0x3faa78 - -0x105, _0x33fd5f);
        }

        function _0x537eb4(_0x560386, _0x33f248) {
            return _0x263b(_0x33f248 - 0x16d, _0x560386);
        }

        function _0x5c569d(_0x2498d, _0x3ec5ee) {
            return _0x263b(_0x3ec5ee - -0x18b, _0x2498d);
        }

        function _0x8b5a3a(_0x3ace60, _0x594978) {
            return _0x263b(_0x3ace60 - 0x58, _0x594978);
        }

        function _0x5b2b83(_0x54faad, _0x439149) {
            return _0x263b(_0x439149 - -0x54, _0x54faad);
        }

        function _0x3de2e8(_0x581e14, _0x31090c) {
            return _0x263b(_0x581e14 - -0x2b0, _0x31090c);
        }

        function _0x448d69(_0x30b816, _0x2b2c66) {
            return _0x263b(_0x2b2c66 - 0x347, _0x30b816);
        }

        function _0x3977a9(_0x14f379, _0x531300) {
            return _0x263b(_0x14f379 - -0xf0, _0x531300);
        }

        function _0x4a6d66(_0x2fb49d, _0x568319) {
            return _0x263b(_0x2fb49d - -0x36, _0x568319);
        }

        function _0x5d2c08(_0x344ff8, _0x1d0ec6) {
            return _0x263b(_0x344ff8 - 0x190, _0x1d0ec6);
        }

        function _0x42ca15(_0xe0beb1, _0x585360) {
            return _0x263b(_0x585360 - -0x28e, _0xe0beb1);
        }

        function _0x3fb3b5(_0x1a553d, _0x2d7971) {
            return _0x263b(_0x2d7971 - -0x294, _0x1a553d);
        }

        function _0x3d316f(_0x4d1375, _0x31ac0c) {
            return _0x263b(_0x4d1375 - -0xc, _0x31ac0c);
        }

        function _0x5ca2f9(_0x43e2cf, _0xf2d039) {
            return _0x263b(_0x43e2cf - 0x8e, _0xf2d039);
        }

        $[_0x17bf99(-0x1f7, -0x1e3)](_0x74775c, async (_0x134912, _0x389476, _0x5a3d6c) => {
            function _0x4daf8b(_0x3ac949, _0x503f1d) {
                return _0x418540(_0x3ac949 - 0x9b, _0x503f1d);
            }

            function _0x546e0a(_0x4f931d, _0x26a8aa) {
                return _0xf5ae7(_0x26a8aa - 0x12f, _0x4f931d);
            }

            function _0x5969f9(_0x1c86ab, _0x21c03b) {
                return _0x535e49(_0x1c86ab - 0x40e, _0x21c03b);
            }

            function _0xcbd36a(_0x56239c, _0x51e4c4) {
                return _0x438069(_0x51e4c4 - -0x232, _0x56239c);
            }

            function _0x1eab5f(_0x39db6e, _0x2616bb) {
                return _0x5c569d(_0x39db6e, _0x2616bb - 0x27f);
            }

            function _0x2c7140(_0x5072aa, _0x410a7a) {
                return _0x598c12(_0x5072aa, _0x410a7a - 0x6ad);
            }

            function _0x3e0a20(_0x17e5eb, _0x53bab1) {
                return _0x5afc42(_0x53bab1 - -0x180, _0x17e5eb);
            }

            function _0x749467(_0x423a27, _0x3bc22b) {
                return _0xe1bb6b(_0x423a27, _0x3bc22b - -0x5d);
            }

            function _0x4656dd(_0x41e478, _0x4fe43b) {
                return _0x8b5a3a(_0x41e478 - -0x252, _0x4fe43b);
            }

            try {
                let _0xbf22f6 = JSON[_0x749467(0x105, 0x11d)](_0x5a3d6c);
                _0xbf22f6[_0x546e0a('vLRQ', -0xab)] == 0x0 ? console[_0x2c7140('9mUa', 0x4f4)](_0x4daf8b(0x4c0, 0x4ea) + _0xbf22f6[_0x546e0a('3J$4', -0x159)][_0x546e0a('COsz', -0x100)] + '水滴') : console[_0x3e0a20(-0x7a, -0xd2)](_0xbf22f6[_0x3e0a20(-0x142, -0xe5)]);
            } catch (_0x472ec4) {
                $[_0x546e0a('mYyC', -0x158)](_0x472ec4, _0x389476);
            } finally {
                _0x40b27b();
            }
        });
    });
}

function watering() {
    return new Promise(_0x16f042 => {
        function _0x256bb5(_0x1365b1, _0x359fbc) {
            return _0x263b(_0x359fbc - 0xf, _0x1365b1);
        }

        function _0x59fe78(_0x4e9635, _0x4143d1) {
            return _0x263b(_0x4143d1 - -0x152, _0x4e9635);
        }

        function _0x3cf81c(_0x8898b5, _0x15fa01) {
            return _0xf801(_0x8898b5 - -0xf0, _0x15fa01);
        }

        function _0x310d81(_0x3542a1, _0x2bf58b) {
            return _0x263b(_0x2bf58b - 0xdb, _0x3542a1);
        }

        function _0x1a4f0c(_0x3873f4, _0x9c0a18) {
            return _0xf801(_0x3873f4 - 0x1a6, _0x9c0a18);
        }

        function _0x238a1c(_0x17add3, _0x39fb02) {
            return _0x263b(_0x17add3 - 0x1bf, _0x39fb02);
        }

        function _0x3fc576(_0xe247de, _0x249ca4) {
            return _0xf801(_0x249ca4 - 0xe2, _0xe247de);
        }

        function _0x4f7f22(_0x14924e, _0x28e578) {
            return _0x263b(_0x14924e - 0x265, _0x28e578);
        }

        function _0x22d1b4(_0x12e13a, _0xc36abb) {
            return _0x263b(_0x12e13a - -0xf3, _0xc36abb);
        }

        function _0xf18d60(_0x4710eb, _0x2242c5) {
            return _0x263b(_0x4710eb - 0x31b, _0x2242c5);
        }

        function _0x4bcd0b(_0x1925df, _0x1ddd13) {
            return _0x263b(_0x1925df - -0x114, _0x1ddd13);
        }

        function _0x1eab2d(_0x3c45b6, _0x990ff5) {
            return _0xf801(_0x990ff5 - -0x11d, _0x3c45b6);
        }

        let _0x42def6 = {
            'url': _0xe9a0c1('JnR0', 0x117) + wsgsig,
            'headers': {
                'Host': _0xe9a0c1('[gAc', 0x195),
                'D-Header-Dchn': dchn,
                'D-Header-T': unescape(token),
                'User-Agent': _0x4f7f22(0x3b5, 'lz7M'),
                'Referer': _0x1a4f0c(0x31b, 0x383),
                'D-Header-IsHitButton': _0x1a4f0c(0x36f, 0x318),
                'D-Header-Appid': _0x4f16a0(0x24d, 0x1cb),
                'Origin': _0x4f7f22(0x37c, ']LSx'),
                'D-Header-FromChannel': '2',
                'D-Header-Did': '0',
                'Connection': _0x4f7f22(0x3de, 'Nt45'),
                'D-Header-IsOpenWeb': _0x4bcd0b(-0x10, '@sqz'),
                'Accept-Language': _0x64d01f(-0x28b, -0x296),
                'D-Header-Ddfp': '0',
                'Accept': _0x9be0d1(0x5ad, 0x5fb),
                'Content-Type': _0x9be0d1(0x4db, 0x4db),
                'D-Header-AppVersion': '0',
                'D-Header-City': '3',
                'Accept-Encoding': _0x40695c(-0x1e9, -0x1d3)
            },
            'body': _0x4f16a0(0x231, 0x1e4) + xbiz + _0x64d01f(-0x349, -0x2bf) + xpsid + '\x22,\x22dchn\x22:\x22' + dchn + _0xf18d60(0x4f5, 'mb0r') + xoid + _0x40c6a3(')A(i', -0x2f) + uid + _0x1a4f0c(0x3b3, 0x423) + xenv + _0x28b797(0x130, 'M02p') + xspm_from + _0xf18d60(0x46a, '3J$4') + xpsid_root + _0x40695c(-0x28f, -0x2d7) + xpsid_from + _0xc4c012(-0x1b4, -0x1b7) + game_id + _0xf18d60(0x467, '4*Hc') + platform + _0x9f1694(-0x208, -0x228) + unescape(token) + '\x22}'
        };

        function _0x40695c(_0x1c648f, _0x38b6de) {
            return _0xf801(_0x38b6de - -0x3de, _0x1c648f);
        }

        function _0x4b706e(_0x15a2fe, _0x878c9b) {
            return _0xf801(_0x15a2fe - 0x335, _0x878c9b);
        }

        function _0x9be0d1(_0x2664b1, _0x4fee01) {
            return _0xf801(_0x2664b1 - 0x3c3, _0x4fee01);
        }

        function _0x4f16a0(_0x4005b9, _0x4a0e0c) {
            return _0xf801(_0x4005b9 - 0x4b, _0x4a0e0c);
        }

        function _0x40c6a3(_0x14e483, _0x92fbb4) {
            return _0x263b(_0x92fbb4 - -0x1d8, _0x14e483);
        }

        function _0xc4c012(_0x4f3e52, _0x1a4ac9) {
            return _0xf801(_0x4f3e52 - -0x398, _0x1a4ac9);
        }

        function _0x28b797(_0x3485d7, _0x15c0a5) {
            return _0x263b(_0x3485d7 - -0xb8, _0x15c0a5);
        }

        function _0x4978bb(_0x42397a, _0x30fc9d) {
            return _0xf801(_0x30fc9d - 0x14, _0x42397a);
        }

        function _0x64d01f(_0x5e16ce, _0x545db2) {
            return _0xf801(_0x545db2 - -0x3dc, _0x5e16ce);
        }

        function _0x4f6073(_0x26984a, _0x80d80) {
            return _0xf801(_0x80d80 - 0x33b, _0x26984a);
        }

        function _0x9f1694(_0x286d8c, _0x13271e) {
            return _0xf801(_0x286d8c - -0x352, _0x13271e);
        }

        function _0xe9a0c1(_0x401abf, _0x15c83a) {
            return _0x263b(_0x15c83a - 0xd, _0x401abf);
        }

        function _0x2a44ce(_0x2131bf, _0x1d66fc) {
            return _0x263b(_0x1d66fc - -0x398, _0x2131bf);
        }

        $[_0x4f7f22(0x40f, 'vLRQ')](_0x42def6, async (_0x4f90ca, _0x10c33c, _0x3a01ec) => {
            function _0x53f40b(_0x1000f4, _0x5b44e4) {
                return _0x238a1c(_0x5b44e4 - -0x3d8, _0x1000f4);
            }

            function _0x42517d(_0x61d488, _0xc6813d) {
                return _0xc4c012(_0x61d488 - 0x319, _0xc6813d);
            }

            function _0x44a923(_0x7bc441, _0x5e4320) {
                return _0x40c6a3(_0x5e4320, _0x7bc441 - 0x3d1);
            }

            function _0x527b58(_0x2c238a, _0xadc8d0) {
                return _0x64d01f(_0xadc8d0, _0x2c238a - 0x3fd);
            }

            function _0x4359da(_0x58e655, _0x870406) {
                return _0x2a44ce(_0x870406, _0x58e655 - 0x74e);
            }

            function _0xfea5b9(_0x1fcbd3, _0x46f4ac) {
                return _0x3fc576(_0x1fcbd3, _0x46f4ac - -0x129);
            }

            function _0x4408fa(_0x295063, _0x251f7c) {
                return _0x3cf81c(_0x251f7c - -0x295, _0x295063);
            }

            function _0x4becc9(_0x13d721, _0x25d715) {
                return _0x4b706e(_0x25d715 - -0x519, _0x13d721);
            }

            function _0x2fb531(_0x52ce48, _0x268053) {
                return _0x4bcd0b(_0x268053 - 0xd5, _0x52ce48);
            }

            function _0x34f812(_0x124d60, _0x2b7bbe) {
                return _0x3fc576(_0x2b7bbe, _0x124d60 - -0x3b9);
            }

            function _0x36a402(_0x1d6c5a, _0x7f6830) {
                return _0x3cf81c(_0x1d6c5a - 0x391, _0x7f6830);
            }

            function _0x41e64e(_0x5c4e32, _0x4b5650) {
                return _0x4f16a0(_0x4b5650 - -0x1fd, _0x5c4e32);
            }

            try {
                let _0x2130a7 = JSON[_0x527b58(0x163, 0x1c6)](_0x3a01ec);
                _0x2130a7[_0x527b58(0x1db, 0x1a9)] == 0x0 ? (console[_0x42517d(0x134, 0x12f)]('浇水成功：增加' + _0x2130a7[_0x527b58(0x1c6, 0x211)][_0x527b58(0x1c0, 0x159)]), await $[_0x4359da(0x4ef, '9w91')](0x7d0), num++, num > 0x19 && (num = 0x0, console[_0x42517d(0x134, 0x10c)](_0x4359da(0x5b3, 'j1*u')), await fertilizer(), await $[_0x4359da(0x525, 'j1*u')](0x7d0)), await watering()) : console[_0x42517d(0x134, 0xb0)](_0x2130a7[_0x44a923(0x3d2, '@sqz')]);
            } catch (_0x10af2a) {
                $[_0xfea5b9(0x50, 0xc1)](_0x10af2a, _0x10c33c);
            } finally {
                _0x16f042();
            }
        });
    });
}


function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
