// locales
import { KEYS_EN } from "../locales/translationEn";
import { KEYS_UA } from "../locales/translationUa";



export const sortFromHighestToLowestPriorityByProperty = (array, property) => {
    return array?.sort(function (a, b) {
        return a[property] - b[property];
    });
}

export const filterByCategory = (data, category, from) => {
    if (category === "all") return data;
    if (typeof category === "string") category = [category];
    const returnedArr = [];
    for (let index = 0; index < data.length; index++) {
        const r = { ...data[index] };
        if (category.lenth === 0) return r;
        let reg = {
            needVolume1D: 0,
            optNeedVolume: 0,
            need: 0
        }
        r.cities = r.cities.map((c) => {
            let city = {
                needVolume1D: 0,
                optNeedVolume: 0,
                need: 0
            }
            c.needs = c.needs.map((n) => {
                if (category.find(e => e === n.name)) {
                    city.optNeedVolume += n.optProductNeedVolume;
                    city.needVolume1D += n.productNeedVolume1D;
                    city.need += n.productNeed
                    return n;
                }
                return n;
            })
            reg.optNeedVolume += city.optNeedVolume;
            reg.needVolume1D += city.needVolume1D;
            reg.need += city.need;
            c.optCityNeedVolume = city.optNeedVolume;
            c.cityNeedVolume1D = city.needVolume1D;
            c.cityNeed = Math.round(city.need / category.length);
            return c;
        });
        r.optRegNeedVolume = reg.optNeedVolume;
        r.regNeedVolume1D = reg.needVolume1D;
        r.regionNeed = Math.round(reg.need / r.cities.length)
        returnedArr.push(r);
    }
    return returnedArr;
}

export const getTranslate = (text, language) => {
    const translated = language === 'ua' ? KEYS_UA[text] : KEYS_EN[text]

    return translated
}
