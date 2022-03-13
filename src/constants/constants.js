export const PRODUCTS_LIST = [
  "Кондитерські вироби",
  "Крупи, макарони",
  "Консерви",
  "Вода",
  "Чай, кава",
  "Фрукти",
  "Сири",
  "Ковбаса",
  "Мʼясо",
  "Молочні вироби",
  "Дитяче харчування",
  "Яйця",
  "Масло",
  "Хліб",
  "Овочі",
  "Риба",
  "Цигарки",
  "Гігієна",
];

export const REGIONS_LIST = [
    'Донецька',
    'Луганська',
    'Харківська',
    'Житомирська',
    'Запорізька',
    'Закарпатська',
    'Київська',
    'Одеська',
    'Львівська',
    'Рівненська',
    'Дніпропетровська',
    'Вінницька',
    'Миколаївська',
    'Волинська',
    'Полтавська',
    'Сумська',
    'Івано-Франківська',
    'Кіровоградська',
    'Черкаська',
    'Хмельницька',
    'Херсонська',
    'м. Київ',
    'Тернопільська',
    'Чернігівська',
];

export const MAX_ROWS_PER_PAGE = 15;

export const LANGUAGES_LIST = [
    {
        value: 'ua',
        name: 'Укр',
        emoji: '🇺🇦',
    },
    {
        value: 'en',
        name: 'Eng',
        emoji: '🇬🇧',
    }
]



export const MOC_DATA = {
    citiesInfo: [
        {
            region: 'Львівська область',
            regionNeed: 3, // values 1-5, sheet 'Demand UA', column 'AC'
            regNeedVolume1D: 100500, // integer (tons of products), sum of all cityNeedVolume1D across the region
            optRegNeedVolume: 100500, // integer (tons of products), sum of all optCityNeedVolume across the region
            contacts: {
                phone_VCA: '+380322999205', // sheet 'Contacts FINAL', column 'B'
                telegram_VCA: 'https://t.me/kozytskyy_maksym_official', // sheet 'Contacts FINAL', column 'C'
                hum_center: '+380676720606', // sheet 'Contacts FINAL', column 'D'
                red_cross: '+3803222970860' // sheet 'Contacts FINAL', column 'E'
            },
            cities:[
                {
                    name: 'Львів',
                    blocked: false, // sheet 'City Status', column 'D'
                    cityNeed: 1, // values 1-5, sheet 'Demand UA', column 'AA'
                    cityNeedVolume1D: 100500, // integer (tons of products), sum of all productNeedVolume1D across the city
                    optCityNeedVolume: 100500, // integer (tons of products), sum of all optProductNeedVolume across the city
                    needs: [
                        {
                            name: 'молоко',
                            productNeed: 3, // values 1-5, sheet 'Demand UA', column 'Y',
                            productNeedVolume1D: 1231123, // integer (tons of products), sheet 'Demand UA', column 'M' (divide by 1000 to get tons)
                            optProductNeedVolume: 2342322, // integer (tons of products), sheet 'Demand UA', column 'S'
                        },
                        {
                            name: 'чай',
                            productNeed: 2, // values 1-5, sheet 'Demand UA', column 'Y',
                            productNeedVolume1D: 123324234, // integer (tons of products), sheet 'Demand UA', column 'M' (divide by 1000 to get tons)
                            optProductNeedVolume: 345656434, // integer (tons of products), sheet 'Demand UA', column 'S'
                        },
                        {
                            name: 'крупи',
                            productNeed: 1, // values 1-5, sheet 'Demand UA', column 'Y',
                            productNeedVolume1D: 45234423, // integer (tons of products), sheet 'Demand UA', column 'M' (divide by 1000 to get tons)
                            optProductNeedVolume: 145132422, // integer (tons of products), sheet 'Demand UA', column 'S'
                        }
                    ]
                },
                {
                    name: 'Не Львів',
                    blocked: false, // sheet 'City Status', column 'D'
                    cityNeed: 3, // values 1-5, sheet 'Demand UA', column 'AA'
                    cityNeedVolume1D: 120101, // integer (tons of products), sum of all productNeedVolume1D across the city
                    optCityNeedVolume: 2321321, // integer (tons of products), sum of all optProductNeedVolume across the city
                    needs: [
                        {
                            name: 'молоко',
                            productNeed: 3, // values 1-5, sheet 'Demand UA', column 'Y',
                            productNeedVolume1D: 2342342, // integer (tons of products), sheet 'Demand UA', column 'M' (divide by 1000 to get tons)
                            optProductNeedVolume: 12312311, // integer (tons of products), sheet 'Demand UA', column 'S'
                        },
                        {
                            name: 'крупи',
                            productNeed: 2, // values 1-5, sheet 'Demand UA', column 'Y',
                            productNeedVolume1D: 123121, // integer (tons of products), sheet 'Demand UA', column 'M' (divide by 1000 to get tons)
                            optProductNeedVolume: 1231123, // integer (tons of products), sheet 'Demand UA', column 'S'
                        },
                        {
                            name: 'чай',
                            productNeed: 1, // values 1-5, sheet 'Demand UA', column 'Y',
                            productNeedVolume1D: 45234423, // integer (tons of products), sheet 'Demand UA', column 'M' (divide by 1000 to get tons)
                            optProductNeedVolume: 145132422, // integer (tons of products), sheet 'Demand UA', column 'S'
                        }
                    ]
                }
            ]
        },
        {
            region: 'Київська область',
            regionNeed: 3, // values 1-5, sheet 'Demand UA', column 'AC'
            regNeedVolume1D: 100500, // integer (tons of products), sum of all cityNeedVolume1D across the region
            optRegNeedVolume: 100500, // integer (tons of products), sum of all optCityNeedVolume across the region
            contacts: {
                phone_VCA: '+380322999205', // sheet 'Contacts FINAL', column 'B'
                telegram_VCA: 'https://t.me/kozytskyy_maksym_official', // sheet 'Contacts FINAL', column 'C'
                hum_center: '+380676720606', // sheet 'Contacts FINAL', column 'D'
                red_cross: '+3803222970860' // sheet 'Contacts FINAL', column 'E'
            },
            cities:[
                {
                    name: 'Київ',
                    blocked: false, // sheet 'City Status', column 'D'
                    cityNeed: 1, // values 1-5, sheet 'Demand UA', column 'AA'
                    cityNeedVolume1D: 1231211, // integer (tons of products), sum of all productNeedVolume1D across the city
                    optCityNeedVolume: 1237612, // integer (tons of products), sum of all optProductNeedVolume across the city
                    needs: [
                        {
                            name: 'молоко',
                            productNeed: 3, // values 1-5, sheet 'Demand UA', column 'Y',
                            productNeedVolume1D: 1231234534, // integer (tons of products), sheet 'Demand UA', column 'M' (divide by 1000 to get tons)
                            optProductNeedVolume: 34534534, // integer (tons of products), sheet 'Demand UA', column 'S'
                        },
                        {
                            name: 'не хліб',
                            productNeed: 2, // values 1-5, sheet 'Demand UA', column 'Y',
                            productNeedVolume1D: 7362345, // integer (tons of products), sheet 'Demand UA', column 'M' (divide by 1000 to get tons)
                            optProductNeedVolume: 25461341, // integer (tons of products), sheet 'Demand UA', column 'S'
                        },
                        {
                            name: 'інший не хліб',
                            productNeed: 1, // values 1-5, sheet 'Demand UA', column 'Y',
                            productNeedVolume1D: 723164123, // integer (tons of products), sheet 'Demand UA', column 'M' (divide by 1000 to get tons)
                            optProductNeedVolume: 231467234, // integer (tons of products), sheet 'Demand UA', column 'S'
                        }
                    ]
                },
                {
                    name: 'Не Київ',
                    blocked: false, // sheet 'City Status', column 'D'
                    cityNeed: 3, // values 1-5, sheet 'Demand UA', column 'AA'
                    cityNeedVolume1D: 32453452, // integer (tons of products), sum of all productNeedVolume1D across the city
                    optCityNeedVolume: 7123648, // integer (tons of products), sum of all optProductNeedVolume across the city
                    needs: [
                        {
                            name: 'молоко',
                            productNeed: 3, // values 1-5, sheet 'Demand UA', column 'Y',
                            productNeedVolume1D: 172346123, // integer (tons of products), sheet 'Demand UA', column 'M' (divide by 1000 to get tons)
                            optProductNeedVolume: 218347923, // integer (tons of products), sheet 'Demand UA', column 'S'
                        },
                        {
                            name: 'крупи',
                            productNeed: 2, // values 1-5, sheet 'Demand UA', column 'Y',
                            productNeedVolume1D: 23174, // integer (tons of products), sheet 'Demand UA', column 'M' (divide by 1000 to get tons)
                            optProductNeedVolume: 21372364, // integer (tons of products), sheet 'Demand UA', column 'S'
                        },
                        {
                            name: 'чай',
                            productNeed: 1, // values 1-5, sheet 'Demand UA', column 'Y',
                            productNeedVolume1D: 827346123, // integer (tons of products), sheet 'Demand UA', column 'M' (divide by 1000 to get tons)
                            optProductNeedVolume: 123049823, // integer (tons of products), sheet 'Demand UA', column 'S'
                        }
                    ]
                }
            ]
        }
    ],
    allProducts: ['чай', 'молоко', 'крупи']
}
