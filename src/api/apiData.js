import {setData, setLoader, setProducts} from "../redux/AppReducer/actions.js";


export const getData = (dispatch) => {
    dispatch(setLoader(true))
    fetch(`https://uapotreba-back.herokuapp.com`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            if (data) {
                dispatch(setData(data?.citiesInfo));
                dispatch(setProducts(data?.allProducts));
                console.log('fetch data.citiesInfo', data?.citiesInfo)
                setTimeout(() => {dispatch(setLoader(false))}, 300)
            }
            else {
                console.log("Fetch error")
            }
        })
        .catch((error) => {
            console.log(error)
        });

    // dispatch(setData(mockedData.data));

}


const mockedData = {
    data: [
        {
            region: 'Луганська',
            regionNeed: 0,
            regNeedVolume1D: 1342240.613466666,
            optRegNeedVolume: 2138381.698323457,
            contacts: {
                phone_VCA: '+380 800 505 107',
                telegram_VCA: 'https://t.me/luhanskaVTSA',
                hum_center: '',
                red_cross: '+380 50 267 43 57'
            },
            cities: [
                {
                    name: 'Алчевськ',
                    blocked: 'occupied',
                    cityNeed: 0,
                    cityNeedVolume1D: 0,
                    needs: [
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        }
                    ]
                },
                {
                    name: 'Антрацит',
                    blocked: 'occupied',
                    cityNeed: 0,
                    cityNeedVolume1D: 0,
                    needs: [
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        }
                    ]
                },
                {
                    name: 'Брянка',
                    blocked: 'occupied',
                    cityNeed: 0,
                    cityNeedVolume1D: 0,
                    needs: [
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        }
                    ]
                },
                {
                    name: 'Голубівка',
                    blocked: 'occupied',
                    cityNeed: 0,
                    cityNeedVolume1D: 0,
                    needs: [
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        }
                    ]
                },
                {
                    name: 'Довжанськ',
                    blocked: 'occupied',
                    cityNeed: 0,
                    cityNeedVolume1D: 0,
                    needs: [
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        }
                    ]
                },
                {
                    name: 'Кадіївка',
                    blocked: 'occupied',
                    cityNeed: 0,
                    cityNeedVolume1D: 0,
                    needs: [
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        }
                    ]
                },
                {
                    name: 'Лисичанськ',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 36081.37008000001,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2075.47704,
                            optProductNeedVolume: 10377.3852
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 2447.9985600000005,
                            optProductNeedVolume: 12239.992800000002
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 372.52152000000007,
                            optProductNeedVolume: 1490.0860800000003
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 5428.17072,
                            optProductNeedVolume: 21712.68288
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 106.43472000000001,
                            optProductNeedVolume: 532.1736000000001
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 2820.5200800000002,
                            optProductNeedVolume: 2820.5200800000002
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 532.1736000000001,
                            optProductNeedVolume: 2660.8680000000004
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 904.6951200000002,
                            optProductNeedVolume: 1809.3902400000004
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 1170.7819200000001,
                            optProductNeedVolume: 1170.7819200000001
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 3033.3895200000006,
                            optProductNeedVolume: 9100.168560000002
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 212.86944000000003,
                            optProductNeedVolume: 1064.3472000000002
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 851.4777600000001,
                            optProductNeedVolume: 4257.388800000001
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 425.73888000000005,
                            optProductNeedVolume: 2128.6944000000003
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 691.82568,
                            optProductNeedVolume: 1383.65136
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 2235.1291200000005,
                            optProductNeedVolume: 4470.258240000001
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 532.1736000000001,
                            optProductNeedVolume: 532.1736000000001
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 10643.472000000002,
                            optProductNeedVolume: 53217.36000000001
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1596.5208000000002,
                            optProductNeedVolume: 6386.083200000001
                        }
                    ]
                },
                {
                    name: 'Луганськ',
                    blocked: 'occupied',
                    cityNeed: 1,
                    cityNeedVolume1D: 653557.768391111,
                    needs: [
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 31886.18939160494,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 36532.517950617264,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 8488.803603950611,
                            optProductNeedVolume: -4244.401801975306
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 138842.9048948148,
                            optProductNeedVolume: -69421.4524474074
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 2104.9360059259266,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 94622.67447111111,
                            optProductNeedVolume: -47311.337235555555
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 13737.33170271605,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 19165.414710123445,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 27339.306628148144,
                            optProductNeedVolume: -13669.653314074072
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 82501.33694617284,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 7483.296115555552,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 22560.383675061734,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 8220.852432592592,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 23750.97083851851,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 70711.48540641976,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 14146.164417777782,
                            optProductNeedVolume: -7073.082208888891
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 44750.60799999993,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 6712.591199999997,
                            optProductNeedVolume: -3356.2955999999986
                        }
                    ]
                },
                {
                    name: 'Молодогвардійськ',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 36826.0997688889,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 1796.6950261728398,
                            optProductNeedVolume: 8983.475130864199
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 2058.5022716049375,
                            optProductNeedVolume: 10292.511358024687
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 478.31965827160474,
                            optProductNeedVolume: 2152.4384622222215
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 7823.398198518519,
                            optProductNeedVolume: 35205.291893333335
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 118.60708740740745,
                            optProductNeedVolume: 593.0354370370372
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 5331.715448888889,
                            optProductNeedVolume: 7997.573173333334
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 774.0591150617284,
                            optProductNeedVolume: 3870.295575308642
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1079.9159743209873,
                            optProductNeedVolume: 2159.8319486419746
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 1540.491265185185,
                            optProductNeedVolume: 2310.736897777778
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 4648.712956049384,
                            optProductNeedVolume: 13946.138868148151
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 421.66220444444434,
                            optProductNeedVolume: 2108.3110222222217
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1271.2127071604943,
                            optProductNeedVolume: 6356.063535802472
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 463.2213807407407,
                            optProductNeedVolume: 2316.1069037037037
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1338.298868148148,
                            optProductNeedVolume: 2676.597736296296
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 3984.3887446913586,
                            optProductNeedVolume: 7968.777489382717
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 797.0956622222225,
                            optProductNeedVolume: 1195.6434933333337
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 2521.567999999996,
                            optProductNeedVolume: 12607.83999999998
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 378.23519999999985,
                            optProductNeedVolume: 1702.0583999999994
                        }
                    ]
                },
                {
                    name: 'Первомайськ',
                    blocked: '',
                    cityNeed: 1,
                    cityNeedVolume1D: 118787.64401777775,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2897.7433195061735,
                            optProductNeedVolume: 14488.716597530867
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3319.990938271603,
                            optProductNeedVolume: 16599.954691358016
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 771.4428849382713,
                            optProductNeedVolume: 3471.4929822222207
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 12617.722838518519,
                            optProductNeedVolume: 56779.75277333333
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 191.29172740740748,
                            optProductNeedVolume: 956.4586370370374
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 8599.09032888889,
                            optProductNeedVolume: 12898.635493333335
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1248.4170083950619,
                            optProductNeedVolume: 6242.08504197531
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1741.7086676543202,
                            optProductNeedVolume: 3483.4173353086403
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2484.533105185185,
                            optProductNeedVolume: 3726.7996577777776
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 7497.531142716051,
                            optProductNeedVolume: 22492.593428148153
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 680.0646844444443,
                            optProductNeedVolume: 3400.323422222222
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2050.235613827161,
                            optProductNeedVolume: 10251.178069135805
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 747.0921007407408,
                            optProductNeedVolume: 3735.4605037037036
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2158.433428148148,
                            optProductNeedVolume: 4316.866856296296
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 6426.096638024693,
                            optProductNeedVolume: 12852.193276049386
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1285.5707822222228,
                            optProductNeedVolume: 1928.356173333334
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4066.831999999994,
                            optProductNeedVolume: 20334.15999999997
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 610.0247999999998,
                            optProductNeedVolume: 2745.111599999999
                        },
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2897.7433195061735,
                            optProductNeedVolume: 14488.716597530867
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3319.990938271603,
                            optProductNeedVolume: 16599.954691358016
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 771.4428849382713,
                            optProductNeedVolume: 3471.4929822222207
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 12617.722838518519,
                            optProductNeedVolume: 56779.75277333333
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 191.29172740740748,
                            optProductNeedVolume: 956.4586370370374
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 8599.09032888889,
                            optProductNeedVolume: 12898.635493333335
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1248.4170083950619,
                            optProductNeedVolume: 6242.08504197531
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1741.7086676543202,
                            optProductNeedVolume: 3483.4173353086403
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2484.533105185185,
                            optProductNeedVolume: 3726.7996577777776
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 7497.531142716051,
                            optProductNeedVolume: 22492.593428148153
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 680.0646844444443,
                            optProductNeedVolume: 3400.323422222222
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2050.235613827161,
                            optProductNeedVolume: 10251.178069135805
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 747.0921007407408,
                            optProductNeedVolume: 3735.4605037037036
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2158.433428148148,
                            optProductNeedVolume: 4316.866856296296
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 6426.096638024693,
                            optProductNeedVolume: 12852.193276049386
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1285.5707822222228,
                            optProductNeedVolume: 1928.356173333334
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4066.831999999994,
                            optProductNeedVolume: 20334.15999999997
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 610.0247999999998,
                            optProductNeedVolume: 2745.111599999999
                        }
                    ]
                },
                {
                    name: 'Перевальськ',
                    blocked: 'occupied',
                    cityNeed: 1,
                    cityNeedVolume1D: 40759.952924444435,
                    needs: [
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 1988.6223397530866,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 2278.3964691358015,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 529.4149224691355,
                            optProductNeedVolume: -264.70746123456775
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 8659.112539259258,
                            optProductNeedVolume: -4329.556269629629
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 131.27698370370373,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 5901.262204444444,
                            optProductNeedVolume: -2950.631102222222
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 856.7459841975309,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 1195.2752138271599,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 1705.0502725925924,
                            optProductNeedVolume: -852.5251362962962
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 5145.299731358025,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 466.70518222222205,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 1407.0067269135807,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 512.7038103703703,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 1481.2591940740738,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 4410.010799012346,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 882.2433511111113,
                            optProductNeedVolume: -441.12167555555567
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 2790.927999999996,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 418.63919999999985,
                            optProductNeedVolume: -209.31959999999992
                        }
                    ]
                },
                {
                    name: 'Ровеньки',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 74671.23925333332,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3643.1076059259262,
                            optProductNeedVolume: 18215.53802962963
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4173.966740740739,
                            optProductNeedVolume: 20869.833703703694
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 969.8752207407401,
                            optProductNeedVolume: 4364.43849333333
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 15863.282897777777,
                            optProductNeedVolume: 71384.77304
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 240.49623111111117,
                            optProductNeedVolume: 1202.481155555556
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 10810.968373333333,
                            optProductNeedVolume: 16216.45256
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1569.5377392592593,
                            optProductNeedVolume: 7847.688696296296
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2189.7150281481468,
                            optProductNeedVolume: 4379.4300562962935
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3123.6104977777773,
                            optProductNeedVolume: 4685.415746666666
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 9426.06356740741,
                            optProductNeedVolume: 28278.19070222223
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 854.9925066666664,
                            optProductNeedVolume: 4274.9625333333315
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2577.601994074075,
                            optProductNeedVolume: 12888.009970370375
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 939.260871111111,
                            optProductNeedVolume: 4696.304355555555
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2713.6307022222218,
                            optProductNeedVolume: 5427.2614044444435
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 8079.0321837037045,
                            optProductNeedVolume: 16158.064367407409
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1616.2482933333338,
                            optProductNeedVolume: 2424.3724400000006
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5112.911999999992,
                            optProductNeedVolume: 25564.55999999996
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 766.9367999999996,
                            optProductNeedVolume: 3451.215599999998
                        }
                    ]
                },
                {
                    name: 'Рубіжне',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 91707.0316088889,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4474.260608395062,
                            optProductNeedVolume: 22371.303041975312
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5126.232049382714,
                            optProductNeedVolume: 25631.16024691357
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1191.146396049382,
                            optProductNeedVolume: 5360.158782222219
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 19482.395105185184,
                            optProductNeedVolume: 87670.77797333333
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 295.3639940740742,
                            optProductNeedVolume: 1476.8199703703708
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 13277.425528888889,
                            optProductNeedVolume: 19916.138293333333
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1927.6182972839508,
                            optProductNeedVolume: 9638.091486419755
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2689.285289876542,
                            optProductNeedVolume: 5378.570579753084
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3836.2433718518514,
                            optProductNeedVolume: 5754.365057777777
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 11576.563053827162,
                            optProductNeedVolume: 34729.68916148148
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1050.053884444444,
                            optProductNeedVolume: 5250.26942222222
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3165.6663249382727,
                            optProductNeedVolume: 15828.331624691364
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1153.5475674074073,
                            optProductNeedVolume: 5767.737837037037
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3332.729161481481,
                            optProductNeedVolume: 6665.458322962962
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 9922.214593580247,
                            optProductNeedVolume: 19844.429187160495
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1984.9855822222228,
                            optProductNeedVolume: 2977.4783733333343
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6279.391999999991,
                            optProductNeedVolume: 31396.959999999955
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 941.9087999999996,
                            optProductNeedVolume: 4238.589599999998
                        }
                    ]
                },
                {
                    name: 'Сєвєродонецьк',
                    blocked: 'blocked',
                    cityNeed: 1,
                    cityNeedVolume1D: 56239.150799999996,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4360.9412,
                            optProductNeedVolume: 43609.412000000004
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4304.305600000001,
                            optProductNeedVolume: 43043.056000000004
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 736.2628000000001,
                            optProductNeedVolume: 7362.628000000001
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 8948.4248,
                            optProductNeedVolume: 89484.248
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 226.54240000000001,
                            optProductNeedVolume: 2265.424
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 5890.102400000001,
                            optProductNeedVolume: 11780.204800000001
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 849.5340000000001,
                            optProductNeedVolume: 8495.34
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1415.8900000000003,
                            optProductNeedVolume: 2831.7800000000007
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 1812.3392000000001,
                            optProductNeedVolume: 3624.6784000000002
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 5323.746400000001,
                            optProductNeedVolume: 15971.239200000004
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 453.08480000000003,
                            optProductNeedVolume: 4530.848
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1359.2544000000003,
                            optProductNeedVolume: 13592.544000000002
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 792.8984000000002,
                            optProductNeedVolume: 7928.984000000001
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1189.3476000000003,
                            optProductNeedVolume: 2378.6952000000006
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 4587.4836000000005,
                            optProductNeedVolume: 9174.967200000001
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 962.8052000000001,
                            optProductNeedVolume: 1925.6104000000003
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 11327.120000000003,
                            optProductNeedVolume: 113271.20000000003
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1699.0680000000002,
                            optProductNeedVolume: 16990.68
                        }
                    ]
                },
                {
                    name: 'Сорокине',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 69651.28277333331,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3398.190797037037,
                            optProductNeedVolume: 16990.953985185184
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3893.3616296296277,
                            optProductNeedVolume: 19466.80814814814
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 904.6729896296291,
                            optProductNeedVolume: 4071.0284533333306
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 14796.834951111112,
                            optProductNeedVolume: 66585.75728
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 224.3282844444445,
                            optProductNeedVolume: 1121.6414222222224
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 10084.174613333334,
                            optProductNeedVolume: 15126.26192
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1464.0217303703705,
                            optProductNeedVolume: 7320.108651851852
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2042.506085925925,
                            optProductNeedVolume: 4085.01217185185
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2913.618151111111,
                            optProductNeedVolume: 4370.427226666667
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 8792.373416296297,
                            optProductNeedVolume: 26377.120248888892
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 797.5135466666663,
                            optProductNeedVolume: 3987.5677333333315
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2404.316402962964,
                            optProductNeedVolume: 12021.58201481482
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 876.1167644444444,
                            optProductNeedVolume: 4380.583822222222
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2531.2002488888884,
                            optProductNeedVolume: 5062.400497777777
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 7535.899508148149,
                            optProductNeedVolume: 15071.799016296298
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1507.5920533333338,
                            optProductNeedVolume: 2261.3880800000006
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4769.183999999993,
                            optProductNeedVolume: 23845.919999999966
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 715.3775999999997,
                            optProductNeedVolume: 3219.1991999999987
                        }
                    ]
                },
                {
                    name: 'Суходільськ',
                    blocked: 'occupied',
                    cityNeed: 1,
                    cityNeedVolume1D: 33489.27630222222,
                    needs: [
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 1633.8959743209878,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 1871.9807901234558,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 434.9789767901232,
                            optProductNeedVolume: -217.4894883950616
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 7114.517842962962,
                            optProductNeedVolume: -3557.258921481481
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 107.86006518518522,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 4848.607182222222,
                            optProductNeedVolume: -2424.303591111111
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 703.9213965432099,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 982.0644780246909,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 1400.9069096296294,
                            optProductNeedVolume: -700.4534548148147
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 4227.4917412345685,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 383.45527111111096,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 1156.027759012346,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 421.24875851851846,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 1217.0352237037034,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 3623.3621372839507,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 724.8705955555557,
                            optProductNeedVolume: -362.43529777777786
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 2293.0879999999966,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 343.96319999999986,
                            optProductNeedVolume: -171.98159999999993
                        }
                    ]
                },
                {
                    name: 'Хрустальний',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 130469.79754666667,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 6365.442927407408,
                            optProductNeedVolume: 31827.21463703704
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 7292.989925925922,
                            optProductNeedVolume: 36464.94962962961
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1694.620645925925,
                            optProductNeedVolume: 7625.792906666663
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 27717.221902222223,
                            optProductNeedVolume: 124727.49855999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 420.20856888888903,
                            optProductNeedVolume: 2101.042844444445
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 18889.533226666666,
                            optProductNeedVolume: 28334.29984
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2742.3847940740743,
                            optProductNeedVolume: 13711.923970370372
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3825.993505185183,
                            optProductNeedVolume: 7651.987010370366
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 5457.748302222221,
                            optProductNeedVolume: 8186.622453333332
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 16469.749499259262,
                            optProductNeedVolume: 49409.248497777786
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1493.8910933333327,
                            optProductNeedVolume: 7469.455466666664
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 4503.731472592594,
                            optProductNeedVolume: 22518.65736296297
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1641.1295288888887,
                            optProductNeedVolume: 8205.647644444443
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 4741.408497777777,
                            optProductNeedVolume: 9482.816995555553
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 14116.140349629632,
                            optProductNeedVolume: 28232.280699259263
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2824.0001066666673,
                            optProductNeedVolume: 4236.000160000001
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 8933.567999999987,
                            optProductNeedVolume: 44667.83999999993
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1340.0351999999993,
                            optProductNeedVolume: 6030.158399999997
                        }
                    ]
                }
            ]
        },
        {
            region: 'Миколаївська',
            regionNeed: 1,
            regNeedVolume1D: 147133.87466666664,
            optRegNeedVolume: 534578.6232592593,
            contacts: {
                phone_VCA: '+380 512 53 32 50',
                telegram_VCA: 'https://t.me/mykolaivskaODA  ',
                hum_center: '+380 93 506 76 79',
                red_cross: '+380 51 246 23 16'
            },
            cities: [
                {
                    name: 'Вознесенськ',
                    blocked: '',
                    cityNeed: 1,
                    cityNeedVolume1D: 99456.26666666662,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4852.335185185185,
                            optProductNeedVolume: 24261.675925925923
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5559.398148148145,
                            optProductNeedVolume: 27796.990740740726
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1291.7981481481474,
                            optProductNeedVolume: 6458.990740740737
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 21128.655555555553,
                            optProductNeedVolume: 105643.27777777777
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 320.3222222222223,
                            optProductNeedVolume: 1601.6111111111115
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 14399.366666666667,
                            optProductNeedVolume: 28798.733333333334
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2090.501851851852,
                            optProductNeedVolume: 10452.50925925926
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2916.529629629628,
                            optProductNeedVolume: 5833.059259259256
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 4160.405555555555,
                            optProductNeedVolume: 8320.81111111111
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 12554.781481481483,
                            optProductNeedVolume: 37664.34444444445
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1138.7833333333328,
                            optProductNeedVolume: 5693.916666666664
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3433.1648148148156,
                            optProductNeedVolume: 17165.824074074077
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1251.022222222222,
                            optProductNeedVolume: 6255.1111111111095
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3614.3444444444435,
                            optProductNeedVolume: 7228.688888888887
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 10760.64074074074,
                            optProductNeedVolume: 21521.28148148148
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2152.716666666667,
                            optProductNeedVolume: 4305.433333333334
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6809.999999999989,
                            optProductNeedVolume: 34049.99999999994
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1021.4999999999995,
                            optProductNeedVolume: 5107.499999999998
                        }
                    ]
                },
                {
                    name: 'Южноукраїнськ',
                    blocked: '',
                    cityNeed: 1,
                    cityNeedVolume1D: 47677.608,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 1952.4,
                            optProductNeedVolume: 9762
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3045.744,
                            optProductNeedVolume: 15228.720000000001
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 585.72,
                            optProductNeedVolume: 2928.6000000000004
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 6833.4,
                            optProductNeedVolume: 34167
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 156.192,
                            optProductNeedVolume: 780.96
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 5310.528,
                            optProductNeedVolume: 10621.056
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 976.2,
                            optProductNeedVolume: 4881
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1015.2479999999999,
                            optProductNeedVolume: 2030.4959999999999
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 4217.184,
                            optProductNeedVolume: 8434.368
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 4920.048,
                            optProductNeedVolume: 14760.144
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 234.288,
                            optProductNeedVolume: 1171.44
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1835.256,
                            optProductNeedVolume: 9176.28
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 780.96,
                            optProductNeedVolume: 3904.8
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1796.2079999999999,
                            optProductNeedVolume: 3592.4159999999997
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 4217.184,
                            optProductNeedVolume: 8434.368
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 820.008,
                            optProductNeedVolume: 1640.016
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 7809.6,
                            optProductNeedVolume: 39048
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1171.44,
                            optProductNeedVolume: 5857.200000000001
                        }
                    ]
                }
            ]
        },
        {
            region: 'Сумська',
            regionNeed: 1,
            regNeedVolume1D: 1063637.710986667,
            optRegNeedVolume: 4234937.795493826,
            contacts: {
                phone_VCA: '+380 800 301 501',
                telegram_VCA: 'https://t.me/Zhyvytskyy',
                hum_center: '+38063 461 38 27',
                red_cross: '+380 63 461 38 27'
            },
            cities: [
                {
                    name: 'Глухів',
                    blocked: '',
                    cityNeed: 1,
                    cityNeedVolume1D: 91367.0401422222,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4457.672889876543,
                            optProductNeedVolume: 22288.364449382716
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5107.2272345678975,
                            optProductNeedVolume: 25536.136172839488
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1186.7303812345672,
                            optProductNeedVolume: 5933.651906172836
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 19410.166749629625,
                            optProductNeedVolume: 97050.83374814813
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 294.2689718518519,
                            optProductNeedVolume: 1471.3448592592595
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 13228.201262222221,
                            optProductNeedVolume: 26456.402524444442
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1920.4719120987652,
                            optProductNeedVolume: 9602.359560493825
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2679.3151269135783,
                            optProductNeedVolume: 5358.630253827157
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3822.0210162962953,
                            optProductNeedVolume: 7644.042032592591
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 11533.644505679013,
                            optProductNeedVolume: 34600.93351703704
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1046.1609511111105,
                            optProductNeedVolume: 5230.804755555553
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3153.930043456791,
                            optProductNeedVolume: 15769.650217283954
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1149.270945185185,
                            optProductNeedVolume: 5746.354725925925
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3320.373517037036,
                            optProductNeedVolume: 6640.747034074072
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 9885.429319506173,
                            optProductNeedVolume: 19770.858639012346
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1977.626515555556,
                            optProductNeedVolume: 3955.253031111112
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6256.111999999989,
                            optProductNeedVolume: 31280.559999999947
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 938.4167999999995,
                            optProductNeedVolume: 4692.083999999997
                        }
                    ]
                },
                {
                    name: 'Конотоп',
                    blocked: '',
                    cityNeed: 1,
                    cityNeedVolume1D: 240223.8040355555,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 11720.190750246913,
                            optProductNeedVolume: 58600.95375123456
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 13428.01028086419,
                            optProductNeedVolume: 67140.05140432096
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 3120.172067530862,
                            optProductNeedVolume: 15600.86033765431
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 51033.54652074074,
                            optProductNeedVolume: 255167.73260370368
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 773.6970762962965,
                            optProductNeedVolume: 3868.4853814814824
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 34779.81581555555,
                            optProductNeedVolume: 69559.6316311111
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 5049.338005802469,
                            optProductNeedVolume: 25246.690029012345
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 7044.501726172835,
                            optProductNeedVolume: 14089.00345234567
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 10048.923837407405,
                            optProductNeedVolume: 20097.84767481481
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 30324.457848641978,
                            optProductNeedVolume: 90973.37354592593
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 2750.5844877777763,
                            optProductNeedVolume: 13752.922438888882
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 8292.367483086422,
                            optProductNeedVolume: 41461.837415432106
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 3021.683069629629,
                            optProductNeedVolume: 15108.415348148144
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 8729.983545925923,
                            optProductNeedVolume: 17459.967091851846
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 25990.941940987654,
                            optProductNeedVolume: 51981.88388197531
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 5199.60987888889,
                            optProductNeedVolume: 10399.21975777778
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 16448.677999999974,
                            optProductNeedVolume: 82243.38999999987
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 2467.3016999999986,
                            optProductNeedVolume: 12336.508499999993
                        }
                    ]
                },
                {
                    name: 'Кролевець',
                    blocked: '',
                    cityNeed: 1,
                    cityNeedVolume1D: 63569.90447999999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3101.4886699999997,
                            optProductNeedVolume: 15507.443349999998
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3553.4252499999975,
                            optProductNeedVolume: 17767.126249999987
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 825.6843699999995,
                            optProductNeedVolume: 4128.421849999997
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 13504.89678,
                            optProductNeedVolume: 67524.48389999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 204.74178000000003,
                            optProductNeedVolume: 1023.7089000000002
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 9203.70726,
                            optProductNeedVolume: 18407.41452
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1336.19537,
                            optProductNeedVolume: 6680.976849999999
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1864.1712199999988,
                            optProductNeedVolume: 3728.3424399999976
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2659.2249299999994,
                            optProductNeedVolume: 5318.449859999999
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 8024.695540000001,
                            optProductNeedVolume: 24074.086620000002
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 727.8812099999997,
                            optProductNeedVolume: 3639.4060499999982
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2194.3912300000006,
                            optProductNeedVolume: 10971.956150000004
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 799.6214399999998,
                            optProductNeedVolume: 3998.107199999999
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2310.1966199999993,
                            optProductNeedVolume: 4620.3932399999985
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 6877.92662,
                            optProductNeedVolume: 13755.85324
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1375.9614900000001,
                            optProductNeedVolume: 2751.9229800000003
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4352.777999999993,
                            optProductNeedVolume: 21763.889999999963
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 652.9166999999997,
                            optProductNeedVolume: 3264.5834999999984
                        }
                    ]
                },
                {
                    name: 'Лебедин',
                    blocked: '',
                    cityNeed: 1,
                    cityNeedVolume1D: 68672.60974222222,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3350.442678765432,
                            optProductNeedVolume: 16752.213393827158
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3838.65584567901,
                            optProductNeedVolume: 19193.279228395048
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 891.9613923456785,
                            optProductNeedVolume: 4459.806961728393
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 14588.924016296296,
                            optProductNeedVolume: 72944.62008148148
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 221.17623851851857,
                            optProductNeedVolume: 1105.881192592593
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 9942.481462222222,
                            optProductNeedVolume: 19884.962924444444
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1443.4507009876543,
                            optProductNeedVolume: 7217.253504938271
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2013.8067491358013,
                            optProductNeedVolume: 4027.6134982716026
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2872.6787829629625,
                            optProductNeedVolume: 5745.357565925925
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 8668.831416790124,
                            optProductNeedVolume: 26006.49425037037
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 786.3076511111108,
                            optProductNeedVolume: 3931.538255555554
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2370.533254567902,
                            optProductNeedVolume: 11852.66627283951
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 863.8064118518517,
                            optProductNeedVolume: 4319.032059259259
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2495.6342503703695,
                            optProductNeedVolume: 4991.268500740739
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 7430.012275061728,
                            optProductNeedVolume: 14860.024550123457
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1486.408815555556,
                            optProductNeedVolume: 2972.817631111112
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4702.171999999992,
                            optProductNeedVolume: 23510.85999999996
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 705.3257999999996,
                            optProductNeedVolume: 3526.628999999998
                        }
                    ]
                },
                {
                    name: 'Охтирка',
                    blocked: 'blocked',
                    cityNeed: 1,
                    cityNeedVolume1D: 133775.3090844444,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 6526.71431308642,
                            optProductNeedVolume: 65267.1431308642
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 7477.761135802464,
                            optProductNeedVolume: 74777.61135802465
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1737.5546291358012,
                            optProductNeedVolume: 17375.546291358012
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 28419.450299259253,
                            optProductNeedVolume: 284194.5029925925
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 430.8547437037038,
                            optProductNeedVolume: 4308.5474370370375
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 19368.108124444443,
                            optProductNeedVolume: 38736.216248888886
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2811.864357530864,
                            optProductNeedVolume: 28118.643575308637
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3922.926787160491,
                            optProductNeedVolume: 7845.853574320982
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 5596.022832592591,
                            optProductNeedVolume: 11192.045665185182
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 16887.018078024692,
                            optProductNeedVolume: 50661.05423407408
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1531.7395022222215,
                            optProductNeedVolume: 15317.395022222216
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 4617.8355535802475,
                            optProductNeedVolume: 46178.355535802475
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1682.70829037037,
                            optProductNeedVolume: 16827.0829037037
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 4861.534234074073,
                            optProductNeedVolume: 9723.068468148145
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 14473.779172345678,
                            optProductNeedVolume: 28947.558344691355
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2895.5474311111116,
                            optProductNeedVolume: 5791.094862222223
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 9159.903999999984,
                            optProductNeedVolume: 91599.03999999983
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1373.9855999999993,
                            optProductNeedVolume: 13739.855999999992
                        }
                    ]
                },
                {
                    name: 'Ромни',
                    blocked: '',
                    cityNeed: 1,
                    cityNeedVolume1D: 108528.1094222222,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 5294.937982098765,
                            optProductNeedVolume: 26474.689910493827
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 6066.495262345675,
                            optProductNeedVolume: 30332.476311728373
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1409.6287290123448,
                            optProductNeedVolume: 7048.143645061724
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 23055.892996296294,
                            optProductNeedVolume: 115279.46498148146
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 349.5402185185186,
                            optProductNeedVolume: 1747.7010925925929
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 15712.79612222222,
                            optProductNeedVolume: 31425.59224444444
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2281.1857043209875,
                            optProductNeedVolume: 11405.928521604937
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3182.559102469134,
                            optProductNeedVolume: 6365.118204938268
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 4539.894412962962,
                            optProductNeedVolume: 9079.788825925923
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 13699.95822345679,
                            optProductNeedVolume: 41099.874670370365
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1242.6567611111104,
                            optProductNeedVolume: 6213.283805555552
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3746.3188512345687,
                            optProductNeedVolume: 18731.594256172844
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1365.1334518518515,
                            optProductNeedVolume: 6825.667259259258
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3944.024670370369,
                            optProductNeedVolume: 7888.049340740738
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 11742.16602839506,
                            optProductNeedVolume: 23484.33205679012
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2349.075405555556,
                            optProductNeedVolume: 4698.150811111112
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 7431.169999999987,
                            optProductNeedVolume: 37155.84999999993
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1114.6754999999994,
                            optProductNeedVolume: 5573.377499999997
                        }
                    ]
                },
                {
                    name: 'Суми',
                    blocked: '',
                    cityNeed: 1,
                    cityNeedVolume1D: 150114.6392,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 6800.4954,
                            optProductNeedVolume: 34002.477
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5289.2742,
                            optProductNeedVolume: 26446.371
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1511.2212,
                            optProductNeedVolume: 7556.106
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 20401.4862,
                            optProductNeedVolume: 102007.431
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 251.87019999999998,
                            optProductNeedVolume: 1259.3509999999999
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 16371.563,
                            optProductNeedVolume: 32743.126
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 3022.4424,
                            optProductNeedVolume: 15112.212
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3778.0529999999994,
                            optProductNeedVolume: 7556.105999999999
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3778.0529999999994,
                            optProductNeedVolume: 7556.105999999999
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 13852.860999999999,
                            optProductNeedVolume: 41558.583
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1007.4807999999999,
                            optProductNeedVolume: 5037.4039999999995
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3274.3125999999997,
                            optProductNeedVolume: 16371.562999999998
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1259.3509999999999,
                            optProductNeedVolume: 6296.754999999999
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1763.0914,
                            optProductNeedVolume: 3526.1828
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 8059.846399999999,
                            optProductNeedVolume: 16119.692799999999
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1763.0914,
                            optProductNeedVolume: 3526.1828
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 50374.04,
                            optProductNeedVolume: 251870.2
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 7556.105999999999,
                            optProductNeedVolume: 37780.52999999999
                        }
                    ]
                },
                {
                    name: 'Шостка',
                    blocked: '',
                    cityNeed: 1,
                    cityNeedVolume1D: 207386.29487999994,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 10118.093603333333,
                            optProductNeedVolume: 50590.468016666666
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 11592.461916666658,
                            optProductNeedVolume: 57962.30958333329
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2693.6586366666647,
                            optProductNeedVolume: 13468.293183333324
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 44057.49118,
                            optProductNeedVolume: 220287.4559
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 667.9361800000001,
                            optProductNeedVolume: 3339.6809000000007
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 30025.57206,
                            optProductNeedVolume: 60051.14412
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 4359.116303333333,
                            optProductNeedVolume: 21795.581516666665
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 6081.550153333329,
                            optProductNeedVolume: 12163.100306666658
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 8675.281329999998,
                            optProductNeedVolume: 17350.562659999996
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 26179.241406666668,
                            optProductNeedVolume: 78537.72422
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 2374.592009999999,
                            optProductNeedVolume: 11872.960049999994
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 7158.838296666669,
                            optProductNeedVolume: 35794.19148333334
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2608.6326399999994,
                            optProductNeedVolume: 13043.163199999997
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 7536.634219999997,
                            optProductNeedVolume: 15073.268439999994
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 22438.097553333333,
                            optProductNeedVolume: 44876.195106666666
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 4488.84669,
                            optProductNeedVolume: 8977.69338
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 14200.217999999977,
                            optProductNeedVolume: 71001.08999999988
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 2130.032699999999,
                            optProductNeedVolume: 10650.163499999995
                        }
                    ]
                }
            ]
        },
        {
            region: 'Херсонська',
            regionNeed: 1,
            regNeedVolume1D: 416674.9687955556,
            optRegNeedVolume: 2587190.694421234,
            contacts: {
                phone_VCA: '+380 800 50 40 77',
                telegram_VCA: 'https://t.me/khersonskaODA ',
                hum_center: '',
                red_cross: '+380 552 49 30 51'
            },
            cities: [
                {
                    name: 'Каховка',
                    blocked: 'blocked',
                    cityNeed: 1,
                    cityNeedVolume1D: 95127.50933333332,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4641.141037037037,
                            optProductNeedVolume: 46411.410370370366
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5317.429629629626,
                            optProductNeedVolume: 53174.29629629626
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1235.5736296296288,
                            optProductNeedVolume: 12355.736296296289
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 20209.04711111111,
                            optProductNeedVolume: 202090.4711111111
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 306.3804444444445,
                            optProductNeedVolume: 3063.804444444445
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 13772.645333333332,
                            optProductNeedVolume: 27545.290666666664
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1999.5143703703702,
                            optProductNeedVolume: 19995.143703703703
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2789.5899259259245,
                            optProductNeedVolume: 5579.179851851849
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3979.3271111111103,
                            optProductNeedVolume: 7958.654222222221
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 12008.344296296296,
                            optProductNeedVolume: 36025.03288888889
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1089.2186666666662,
                            optProductNeedVolume: 10892.186666666661
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3283.738962962964,
                            optProductNeedVolume: 32837.38962962964
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1196.5724444444443,
                            optProductNeedVolume: 11965.724444444442
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3457.032888888888,
                            optProductNeedVolume: 6914.065777777776
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 10292.292148148148,
                            optProductNeedVolume: 20584.584296296296
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2059.0213333333336,
                            optProductNeedVolume: 4118.042666666667
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6513.599999999989,
                            optProductNeedVolume: 65135.9999999999
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 977.0399999999995,
                            optProductNeedVolume: 9770.399999999994
                        }
                    ]
                },
                {
                    name: 'Нова Каховка',
                    blocked: 'blocked',
                    cityNeed: 1,
                    cityNeedVolume1D: 121110.21802666664,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 5908.801847407408,
                            optProductNeedVolume: 59088.01847407408
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 6769.808925925922,
                            optProductNeedVolume: 67698.08925925923
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1573.052765925925,
                            optProductNeedVolume: 15730.52765925925
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 25728.857182222222,
                            optProductNeedVolume: 257288.5718222222
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 390.063848888889,
                            optProductNeedVolume: 3900.63848888889
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 17534.444986666665,
                            optProductNeedVolume: 35068.88997333333
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2545.652914074074,
                            optProductNeedVolume: 25456.529140740742
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3551.526225185183,
                            optProductNeedVolume: 7103.052450370366
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 5066.222982222222,
                            optProductNeedVolume: 10132.445964444443
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 15288.250539259261,
                            optProductNeedVolume: 45864.75161777779
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1386.723053333333,
                            optProductNeedVolume: 13867.23053333333
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 4180.644952592594,
                            optProductNeedVolume: 41806.449525925935
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1523.3989688888887,
                            optProductNeedVolume: 15233.989688888887
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 4401.271617777777,
                            optProductNeedVolume: 8802.543235555553
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 13103.483469629631,
                            optProductNeedVolume: 26206.966939259262
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2621.4133466666676,
                            optProductNeedVolume: 5242.826693333335
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 8292.695999999987,
                            optProductNeedVolume: 82926.95999999988
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1243.9043999999994,
                            optProductNeedVolume: 12439.043999999994
                        }
                    ]
                },
                {
                    name: 'Олешки',
                    blocked: '',
                    cityNeed: 1,
                    cityNeedVolume1D: 65522.431075555556,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3196.7497713580246,
                            optProductNeedVolume: 15983.748856790124
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3662.5674197530843,
                            optProductNeedVolume: 18312.83709876542
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 851.0449664197525,
                            optProductNeedVolume: 4255.224832098763
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 13919.694794074074,
                            optProductNeedVolume: 69598.47397037037
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 211.03034962962968,
                            optProductNeedVolume: 1055.1517481481485
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 9486.395795555556,
                            optProductNeedVolume: 18972.791591111112
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1377.2361269135802,
                            optProductNeedVolume: 6886.180634567901
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1921.428563950616,
                            optProductNeedVolume: 3842.857127901232
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2740.90206074074,
                            optProductNeedVolume: 5481.80412148148
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 8271.171157530865,
                            optProductNeedVolume: 24813.513472592596
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 750.2378177777774,
                            optProductNeedVolume: 3751.189088888887
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2261.7911619753095,
                            optProductNeedVolume: 11308.955809876548
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 824.1815229629628,
                            optProductNeedVolume: 4120.907614814814
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2381.153472592592,
                            optProductNeedVolume: 4762.306945185184
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 7089.179645432099,
                            optProductNeedVolume: 14178.359290864199
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1418.2236488888893,
                            optProductNeedVolume: 2836.4472977777787
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4486.4719999999925,
                            optProductNeedVolume: 22432.359999999964
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 672.9707999999997,
                            optProductNeedVolume: 3364.8539999999985
                        }
                    ]
                },
                {
                    name: 'Херсон',
                    blocked: 'blocked',
                    cityNeed: 1,
                    cityNeedVolume1D: 134914.81036,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4958.18452,
                            optProductNeedVolume: 49581.845199999996
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4436.27036,
                            optProductNeedVolume: 44362.70360000001
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1304.7854000000002,
                            optProductNeedVolume: 13047.854000000003
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 17484.12436,
                            optProductNeedVolume: 174841.24360000002
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 260.95708,
                            optProductNeedVolume: 2609.5708000000004
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 10177.32612,
                            optProductNeedVolume: 20354.65224
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2087.65664,
                            optProductNeedVolume: 20876.566400000003
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3131.4849600000002,
                            optProductNeedVolume: 6262.9699200000005
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 4175.31328,
                            optProductNeedVolume: 8350.62656
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 11221.15444,
                            optProductNeedVolume: 33663.46332
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 782.8712400000001,
                            optProductNeedVolume: 7828.7124
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2609.5708000000004,
                            optProductNeedVolume: 26095.708000000006
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1043.82832,
                            optProductNeedVolume: 10438.283200000002
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2609.5708000000004,
                            optProductNeedVolume: 5219.141600000001
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 6262.9699200000005,
                            optProductNeedVolume: 12525.939840000001
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2348.61372,
                            optProductNeedVolume: 4697.22744
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 52191.416000000005,
                            optProductNeedVolume: 521914.16000000003
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 7828.7124,
                            optProductNeedVolume: 78287.12400000001
                        }
                    ]
                }
            ]
        },
        {
            region: 'Донецька',
            regionNeed: 2,
            regNeedVolume1D: 2557351.092240001,
            optRegNeedVolume: 4832607.963919995,
            contacts: {
                phone_VCA: '+380 800 50 75 06',
                telegram_VCA: 'https://t.me/pavlokyrylenko_donoda  ',
                hum_center: '',
                red_cross: '+380 50 263 40 21'
            },
            cities: [
                {
                    name: 'Авдіївка',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 67171.09759999996,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3277.1859555555557,
                            optProductNeedVolume: 16385.92977777778
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3754.724444444442,
                            optProductNeedVolume: 14267.95288888888
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 872.4588444444439,
                            optProductNeedVolume: 3926.0647999999974
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 14269.940266666665,
                            optProductNeedVolume: 59933.74912
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 216.3402666666667,
                            optProductNeedVolume: 1081.7013333333334
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 9725.091199999999,
                            optProductNeedVolume: 13615.127679999998
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1411.8899555555554,
                            optProductNeedVolume: 6918.260782222222
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1969.7752888888876,
                            optProductNeedVolume: 3939.5505777777753
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2809.868266666666,
                            optProductNeedVolume: 3371.841919999999
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 8479.289244444444,
                            optProductNeedVolume: 18654.436337777777
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 769.1151999999996,
                            optProductNeedVolume: 3768.664479999998
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2318.702044444445,
                            optProductNeedVolume: 10202.28899555556
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 844.9194666666665,
                            optProductNeedVolume: 4224.597333333332
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2441.0677333333324,
                            optProductNeedVolume: 4393.921919999998
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 7267.556622222222,
                            optProductNeedVolume: 14535.113244444445
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1453.9088000000002,
                            optProductNeedVolume: 2180.8632000000002
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4599.359999999992,
                            optProductNeedVolume: 22996.799999999963
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 689.9039999999997,
                            optProductNeedVolume: 3173.558399999998
                        }
                    ]
                },
                {
                    name: 'Бахмут',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 44045.46719999999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 1666.0223999999998,
                            optProductNeedVolume: 8330.112
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 2967.6023999999998,
                            optProductNeedVolume: 8902.8072
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 520.632,
                            optProductNeedVolume: 2603.16
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 5518.699199999999,
                            optProductNeedVolume: 16556.097599999997
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 156.18959999999998,
                            optProductNeedVolume: 780.9479999999999
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 5154.2568,
                            optProductNeedVolume: 5154.2568
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 780.948,
                            optProductNeedVolume: 3904.74
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 989.2008,
                            optProductNeedVolume: 1978.4016
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 1926.3383999999999,
                            optProductNeedVolume: 3852.6767999999997
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 4165.056,
                            optProductNeedVolume: 12495.167999999998
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 208.25279999999998,
                            optProductNeedVolume: 1041.264
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1301.58,
                            optProductNeedVolume: 6507.9
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 728.8847999999999,
                            optProductNeedVolume: 3644.4239999999995
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 1561.896,
                            optProductNeedVolume: 1561.896
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 3956.8032,
                            optProductNeedVolume: 7913.6064
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 468.56879999999995,
                            optProductNeedVolume: 468.56879999999995
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 10412.64,
                            optProductNeedVolume: 52063.2
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1561.896,
                            optProductNeedVolume: 7809.48
                        }
                    ]
                },
                {
                    name: 'Волноваха',
                    blocked: 'blocked',
                    cityNeed: 1,
                    cityNeedVolume1D: 45091.28063999998,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2199.941893333333,
                            optProductNeedVolume: 21999.41893333333
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 2520.508666666665,
                            optProductNeedVolume: 25205.086666666648
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 585.6728266666662,
                            optProductNeedVolume: 5856.7282666666615
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 9579.267039999999,
                            optProductNeedVolume: 95792.67039999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 145.22704000000002,
                            optProductNeedVolume: 1452.2704
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 6528.355679999999,
                            optProductNeedVolume: 13056.711359999998
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 947.7874933333333,
                            optProductNeedVolume: 9477.874933333333
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1322.2902933333323,
                            optProductNeedVolume: 2644.5805866666647
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 1886.2362399999995,
                            optProductNeedVolume: 3772.472479999999
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 5692.061386666666,
                            optProductNeedVolume: 17076.184159999997
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 516.2992799999997,
                            optProductNeedVolume: 5162.992799999997
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1556.521306666667,
                            optProductNeedVolume: 15565.21306666667
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 567.1859199999998,
                            optProductNeedVolume: 5671.859199999998
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1638.6641599999994,
                            optProductNeedVolume: 3277.3283199999987
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 4878.637493333333,
                            optProductNeedVolume: 9757.274986666665
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 975.9943200000001,
                            optProductNeedVolume: 1951.9886400000003
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 3087.503999999995,
                            optProductNeedVolume: 30875.03999999995
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 463.12559999999974,
                            optProductNeedVolume: 4631.255999999998
                        }
                    ]
                },
                {
                    name: 'Горлівка',
                    blocked: 'occupied',
                    cityNeed: 0,
                    cityNeedVolume1D: 0,
                    needs: [
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        }
                    ]
                },
                {
                    name: 'Дебальцеве',
                    blocked: 'occupied',
                    cityNeed: 0,
                    cityNeedVolume1D: 0,
                    needs: [
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        }
                    ]
                },
                {
                    name: 'Добропілля',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 60477.12127999999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2950.596008888889,
                            optProductNeedVolume: 14752.980044444446
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3380.5451111111092,
                            optProductNeedVolume: 12846.071422222216
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 785.5134311111107,
                            optProductNeedVolume: 3534.810439999998
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 12847.860746666665,
                            optProductNeedVolume: 53961.015135999995
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 194.78074666666672,
                            optProductNeedVolume: 973.9037333333335
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 8755.93136,
                            optProductNeedVolume: 12258.303904
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1271.187208888889,
                            optProductNeedVolume: 6228.817323555556
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1773.4761422222211,
                            optProductNeedVolume: 3546.9522844444423
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2529.8491466666665,
                            optProductNeedVolume: 3035.8189759999996
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 7634.280551111112,
                            optProductNeedVolume: 16795.417212444445
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 692.4685599999997,
                            optProductNeedVolume: 3393.095943999999
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2087.6303911111117,
                            optProductNeedVolume: 9185.573720888891
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 760.7185066666666,
                            optProductNeedVolume: 3803.592533333333
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2197.801653333333,
                            optProductNeedVolume: 3956.0429759999993
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 6543.303875555555,
                            optProductNeedVolume: 13086.60775111111
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1309.0186400000002,
                            optProductNeedVolume: 1963.5279600000003
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4141.007999999993,
                            optProductNeedVolume: 20705.039999999968
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 621.1511999999997,
                            optProductNeedVolume: 2857.2955199999988
                        }
                    ]
                },
                {
                    name: 'Докучаєвськ',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 48174.33727999998,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2350.360008888889,
                            optProductNeedVolume: 11751.800044444444
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 2692.8451111111094,
                            optProductNeedVolume: 10232.811422222216
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 625.7174311111107,
                            optProductNeedVolume: 2815.728439999998
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 10234.236746666666,
                            optProductNeedVolume: 42983.79433599999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 155.15674666666672,
                            optProductNeedVolume: 775.7837333333337
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 6974.72336,
                            optProductNeedVolume: 9764.612704
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1012.5912088888889,
                            optProductNeedVolume: 4961.696923555555
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1412.7001422222215,
                            optProductNeedVolume: 2825.400284444443
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2015.2051466666665,
                            optProductNeedVolume: 2418.2461759999997
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 6081.248551111112,
                            optProductNeedVolume: 13378.746812444446
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 551.6005599999997,
                            optProductNeedVolume: 2702.8427439999987
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1662.9463911111116,
                            optProductNeedVolume: 7316.964120888892
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 605.9665066666665,
                            optProductNeedVolume: 3029.832533333333
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1750.705653333333,
                            optProductNeedVolume: 3151.270175999999
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 5212.207875555556,
                            optProductNeedVolume: 10424.415751111112
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1042.7266400000003,
                            optProductNeedVolume: 1564.0899600000005
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 3298.6079999999947,
                            optProductNeedVolume: 16493.03999999997
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 494.7911999999998,
                            optProductNeedVolume: 2276.039519999999
                        }
                    ]
                },
                {
                    name: 'Донецьк',
                    blocked: 'occupied',
                    cityNeed: 0,
                    cityNeedVolume1D: 0,
                    needs: [
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        }
                    ]
                },
                {
                    name: 'Дружківка',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 31056.41088,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 1308.8908800000002,
                            optProductNeedVolume: 6544.4544000000005
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 2260.81152,
                            optProductNeedVolume: 6782.43456
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 356.97024,
                            optProductNeedVolume: 1427.88096
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 4243.97952,
                            optProductNeedVolume: 16975.91808
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 118.99008,
                            optProductNeedVolume: 594.9504000000001
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 2459.12832,
                            optProductNeedVolume: 2459.12832
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 436.29695999999996,
                            optProductNeedVolume: 2181.4847999999997
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 634.6137600000001,
                            optProductNeedVolume: 1269.2275200000001
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 1427.88096,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 2697.1084800000003,
                            optProductNeedVolume: 2697.10848
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 198.3168,
                            optProductNeedVolume: 991.5840000000001
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 832.93056,
                            optProductNeedVolume: 3331.72224
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 436.29695999999996,
                            optProductNeedVolume: 2181.4847999999997
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1665.86112,
                            optProductNeedVolume: 3331.72224
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 2260.81152,
                            optProductNeedVolume: 4521.62304
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 594.9504,
                            optProductNeedVolume: 594.9504
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 7932.6720000000005,
                            optProductNeedVolume: 39663.36
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1189.9008,
                            optProductNeedVolume: 4759.6032
                        }
                    ]
                },
                {
                    name: 'Єнакієве',
                    blocked: 'occupied',
                    cityNeed: 0,
                    cityNeedVolume1D: 0,
                    needs: [
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 0,
                            productNeedVolume1D: 0,
                            optProductNeedVolume: 0
                        }
                    ]
                },
                {
                    name: 'Костянтинівка',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 144672.32767999996,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 7058.3649422222215,
                            optProductNeedVolume: 35291.824711111105
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 8086.881777777772,
                            optProductNeedVolume: 30730.150755555533
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1879.0916977777765,
                            optProductNeedVolume: 8455.912639999993
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 30734.431146666662,
                            optProductNeedVolume: 129084.61081599999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 465.9511466666668,
                            optProductNeedVolume: 2329.755733333334
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 20945.788159999996,
                            optProductNeedVolume: 29324.103423999994
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 3040.912142222222,
                            optProductNeedVolume: 14900.469496888887
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 4242.479075555553,
                            optProductNeedVolume: 8484.958151111106
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 6051.861546666665,
                            optProductNeedVolume: 7262.233855999998
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 18262.59441777778,
                            optProductNeedVolume: 40177.70771911111
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1656.5113599999993,
                            optProductNeedVolume: 8116.905663999996
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 4993.9934577777785,
                            optProductNeedVolume: 21973.571214222226
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1819.7777066666663,
                            optProductNeedVolume: 9098.888533333331
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 5257.543253333331,
                            optProductNeedVolume: 9463.577855999996
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 15652.778808888888,
                            optProductNeedVolume: 31305.557617777777
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 3131.4118400000007,
                            optProductNeedVolume: 4697.117760000001
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 9906.047999999984,
                            optProductNeedVolume: 49530.23999999992
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1485.9071999999992,
                            optProductNeedVolume: 6835.173119999997
                        }
                    ]
                },
                {
                    name: 'Краматорськ',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 70887.67488000002,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3674.05632,
                            optProductNeedVolume: 18370.281600000002
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 3349.87488,
                            optProductNeedVolume: 10049.624640000002
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 864.48384,
                            optProductNeedVolume: 3025.69344
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 10914.10848,
                            optProductNeedVolume: 43656.43392
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 216.12096,
                            optProductNeedVolume: 1080.6048
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 6051.38688,
                            optProductNeedVolume: 6051.38688
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 972.5443199999999,
                            optProductNeedVolume: 4376.449439999999
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1404.78624,
                            optProductNeedVolume: 2809.57248
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 2161.2096,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 6267.50784,
                            optProductNeedVolume: 6267.507840000002
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 540.3024,
                            optProductNeedVolume: 2431.3608000000004
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1512.84672,
                            optProductNeedVolume: 4538.54016
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 756.42336,
                            optProductNeedVolume: 3782.1168
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1512.84672,
                            optProductNeedVolume: 3025.69344
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 4322.4192,
                            optProductNeedVolume: 8644.8384
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1512.84672,
                            optProductNeedVolume: 2269.2700800000002
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 21612.096,
                            optProductNeedVolume: 108060.48000000001
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 3241.8143999999998,
                            optProductNeedVolume: 12967.257599999999
                        }
                    ]
                },
                {
                    name: 'Лиман',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 43047.12575999999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2100.2103733333333,
                            optProductNeedVolume: 10501.051866666667
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 2406.244666666665,
                            optProductNeedVolume: 9143.729733333328
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 559.1221066666664,
                            optProductNeedVolume: 2516.0494799999983
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 9145.003359999999,
                            optProductNeedVolume: 38409.014112
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 138.64336000000003,
                            optProductNeedVolume: 693.2168000000001
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 6232.4011199999995,
                            optProductNeedVolume: 8725.361568
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 904.8207733333334,
                            optProductNeedVolume: 4433.621789333333
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1262.3459733333325,
                            optProductNeedVolume: 2524.691946666665
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 1800.7261599999997,
                            optProductNeedVolume: 2160.8713919999996
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 5434.019146666667,
                            optProductNeedVolume: 11954.842122666669
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 492.8935199999998,
                            optProductNeedVolume: 2415.1782479999993
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1485.958426666667,
                            optProductNeedVolume: 6538.217077333335
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 541.4732799999999,
                            optProductNeedVolume: 2707.3664
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1564.3774399999995,
                            optProductNeedVolume: 2815.879391999999
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 4657.470773333333,
                            optProductNeedVolume: 9314.941546666667
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 931.7488800000002,
                            optProductNeedVolume: 1397.6233200000004
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 2947.5359999999955,
                            optProductNeedVolume: 14737.679999999978
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 442.1303999999998,
                            optProductNeedVolume: 2033.7998399999992
                        }
                    ]
                },
                {
                    name: 'Макіївка',
                    blocked: 'occupied',
                    cityNeed: 1,
                    cityNeedVolume1D: 715742.3244799997,
                    needs: [
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 34920.08880888889,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 40008.50511111108,
                            optProductNeedVolume: -48010.2061333333
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 9296.494231111104,
                            optProductNeedVolume: -4648.247115555552
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 152053.49594666663,
                            optProductNeedVolume: -121642.79675733332
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 2305.215946666667,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 103625.80975999999,
                            optProductNeedVolume: -62175.48585599999
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 15044.408008888888,
                            optProductNeedVolume: -1504.4408008888888
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 20988.96094222221,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 29940.58034666666,
                            optProductNeedVolume: -23952.46427733333
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 90351.15415111111,
                            optProductNeedVolume: -72280.92332088889
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 8195.314959999996,
                            optProductNeedVolume: -819.5314959999996
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 24706.953591111116,
                            optProductNeedVolume: -14824.172154666669
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 9003.048106666663,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 26010.822453333323,
                            optProductNeedVolume: -5202.164490666665
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 77439.52467555556,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 15492.140240000002,
                            optProductNeedVolume: -7746.070120000001
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 49008.52799999992,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 7351.279199999996,
                            optProductNeedVolume: -2940.5116799999987
                        }
                    ]
                },
                {
                    name: 'Маріуполь',
                    blocked: 'blocked',
                    cityNeed: 1,
                    cityNeedVolume1D: 162620.82504000003,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 7462.52352,
                            optProductNeedVolume: 74625.2352
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 6529.70808,
                            optProductNeedVolume: 65297.0808
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1554.6924,
                            optProductNeedVolume: 15546.923999999999
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 22698.509039999997,
                            optProductNeedVolume: 226985.0904
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 310.93847999999997,
                            optProductNeedVolume: 3109.3848
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 12437.5392,
                            optProductNeedVolume: 24875.0784
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2176.56936,
                            optProductNeedVolume: 21765.6936
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3420.3232799999996,
                            optProductNeedVolume: 6840.646559999999
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 4664.0772,
                            optProductNeedVolume: 9328.1544
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 13370.354639999998,
                            optProductNeedVolume: 40111.06391999999
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1243.7539199999999,
                            optProductNeedVolume: 12437.5392
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2798.4463199999996,
                            optProductNeedVolume: 27984.463199999995
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1554.6924,
                            optProductNeedVolume: 15546.923999999999
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 932.81544,
                            optProductNeedVolume: 1865.63088
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 8706.27744,
                            optProductNeedVolume: 17412.55488
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1243.7539199999999,
                            optProductNeedVolume: 2487.5078399999998
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 62187.695999999996,
                            optProductNeedVolume: 621876.96
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 9328.1544,
                            optProductNeedVolume: 93281.544
                        }
                    ]
                },
                {
                    name: 'Мирноград',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 98640.98815999998,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4812.558862222222,
                            optProductNeedVolume: 24062.79431111111
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5513.8257777777735,
                            optProductNeedVolume: 20952.537955555537
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1281.2088177777769,
                            optProductNeedVolume: 5765.439679999996
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 20955.456426666664,
                            optProductNeedVolume: 88012.916992
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 317.6964266666667,
                            optProductNeedVolume: 1588.4821333333334
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 14281.329919999998,
                            optProductNeedVolume: 19993.861888
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2073.365262222222,
                            optProductNeedVolume: 10159.489784888889
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2892.6217955555535,
                            optProductNeedVolume: 5785.243591111107
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 4126.301226666666,
                            optProductNeedVolume: 4951.5614719999985
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 12451.865457777778,
                            optProductNeedVolume: 27394.104007111113
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1129.4483199999995,
                            optProductNeedVolume: 5534.296767999997
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3405.0219377777785,
                            optProductNeedVolume: 14982.096526222227
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1240.7671466666663,
                            optProductNeedVolume: 6203.8357333333315
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3584.716373333332,
                            optProductNeedVolume: 6452.4894719999975
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 10672.431928888887,
                            optProductNeedVolume: 21344.863857777775
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2135.0700800000004,
                            optProductNeedVolume: 3202.6051200000006
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6754.175999999989,
                            optProductNeedVolume: 33770.87999999995
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1013.1263999999994,
                            optProductNeedVolume: 4660.381439999997
                        }
                    ]
                },
                {
                    name: 'Покровськ',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 128624.02943999997,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 6275.390426666667,
                            optProductNeedVolume: 31376.952133333332
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 7189.815333333328,
                            optProductNeedVolume: 27321.29826666665
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1670.6466933333322,
                            optProductNeedVolume: 7517.910119999995
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 27325.103839999996,
                            optProductNeedVolume: 114765.43612799999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 414.2638400000001,
                            optProductNeedVolume: 2071.3192000000004
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 18622.30128,
                            optProductNeedVolume: 26071.221792
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2703.5880266666663,
                            optProductNeedVolume: 13247.581330666664
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3771.866826666664,
                            optProductNeedVolume: 7543.733653333328
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 5380.537039999998,
                            optProductNeedVolume: 6456.644447999998
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 16236.750453333334,
                            optProductNeedVolume: 35720.850997333335
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1472.7568799999992,
                            optProductNeedVolume: 7216.508711999996
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 4440.016773333335,
                            optProductNeedVolume: 19536.073802666673
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1617.9123199999997,
                            optProductNeedVolume: 8089.561599999998
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 4674.331359999998,
                            optProductNeedVolume: 8413.796447999997
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 13916.438026666667,
                            optProductNeedVolume: 27832.876053333333
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2784.0487200000007,
                            optProductNeedVolume: 4176.073080000001
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 8807.183999999985,
                            optProductNeedVolume: 44035.919999999925
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1321.0775999999994,
                            optProductNeedVolume: 6076.956959999998
                        }
                    ]
                },
                {
                    name: 'Селидове',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 46090.224639999986,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2248.679004444444,
                            optProductNeedVolume: 11243.395022222221
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 2576.3475555555538,
                            optProductNeedVolume: 9790.120711111105
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 598.6477155555551,
                            optProductNeedVolume: 2693.914719999998
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 9791.484373333331,
                            optProductNeedVolume: 41124.23436799999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 148.44437333333335,
                            optProductNeedVolume: 742.2218666666668
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 6672.983679999999,
                            optProductNeedVolume: 9342.177152
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 968.7846044444443,
                            optProductNeedVolume: 4747.044561777777
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1351.5840711111102,
                            optProductNeedVolume: 2703.1681422222205
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 1928.0235733333327,
                            optProductNeedVolume: 2313.628287999999
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 5818.162275555555,
                            optProductNeedVolume: 12799.957006222223
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 527.7372799999997,
                            optProductNeedVolume: 2585.9126719999986
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1591.0041955555557,
                            optProductNeedVolume: 7000.4184604444445
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 579.7512533333331,
                            optProductNeedVolume: 2898.7562666666654
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1674.966826666666,
                            optProductNeedVolume: 3014.940287999999
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 4986.7179377777775,
                            optProductNeedVolume: 9973.435875555555
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 997.6163200000001,
                            optProductNeedVolume: 1496.4244800000001
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 3155.9039999999945,
                            optProductNeedVolume: 15779.519999999973
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 473.3855999999997,
                            optProductNeedVolume: 2177.5737599999984
                        }
                    ]
                },
                {
                    name: 'Слов`янськ',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 224966.39487999992,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 10975.80263111111,
                            optProductNeedVolume: 54879.01315555555
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 12575.15288888888,
                            optProductNeedVolume: 47785.58097777775
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2921.999608888887,
                            optProductNeedVolume: 13148.998239999992
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 47792.237013333324,
                            optProductNeedVolume: 200727.39545599997
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 724.5570133333334,
                            optProductNeedVolume: 3622.7850666666673
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 32570.834559999996,
                            optProductNeedVolume: 45599.16838399999
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 4728.637831111111,
                            optProductNeedVolume: 23170.325372444444
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 6597.082097777774,
                            optProductNeedVolume: 13194.164195555548
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 9410.68341333333,
                            optProductNeedVolume: 11292.820095999996
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 28398.45112888889,
                            optProductNeedVolume: 62476.592483555556
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 2575.8857599999988,
                            optProductNeedVolume: 12621.840223999994
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 7765.691768888891,
                            optProductNeedVolume: 34169.04378311112
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2829.7659733333326,
                            optProductNeedVolume: 14148.829866666663
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 8175.513386666664,
                            optProductNeedVolume: 14715.924095999995
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 24340.171164444444,
                            optProductNeedVolume: 48680.34232888889
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 4869.3654400000005,
                            optProductNeedVolume: 7304.04816
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 15403.967999999975,
                            optProductNeedVolume: 77019.83999999988
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 2310.595199999999,
                            optProductNeedVolume: 10628.737919999996
                        }
                    ]
                },
                {
                    name: 'Сніжне',
                    blocked: 'occupied',
                    cityNeed: 1,
                    cityNeedVolume1D: 96668.33663999996,
                    needs: [
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 4716.3158933333325,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 5403.558666666663,
                            optProductNeedVolume: -6484.270399999996
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 1255.5868266666657,
                            optProductNeedVolume: -627.7934133333329
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 20536.383039999997,
                            optProductNeedVolume: -16429.106431999997
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 311.34304000000003,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 13995.727679999998,
                            optProductNeedVolume: -8397.436607999998
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 2031.901493333333,
                            optProductNeedVolume: -203.19014933333332
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 2834.7742933333316,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 4043.7822399999986,
                            optProductNeedVolume: -3235.025791999999
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 12202.849386666667,
                            optProductNeedVolume: -9762.279509333333
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 1106.8612799999994,
                            optProductNeedVolume: -110.68612799999994
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 3336.9273066666674,
                            optProductNeedVolume: -2002.1563840000003
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 1215.9539199999997,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 3513.0281599999985,
                            optProductNeedVolume: -702.6056319999998
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 10459.001493333331,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 2092.3723200000004,
                            optProductNeedVolume: -1046.1861600000002
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 6619.103999999988,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 992.8655999999994,
                            optProductNeedVolume: -397.1462399999998
                        }
                    ]
                },
                {
                    name: 'Торецьк',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 66273.09951999997,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3233.373857777778,
                            optProductNeedVolume: 16166.86928888889
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3704.52822222222,
                            optProductNeedVolume: 14077.207244444438
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 860.7951022222217,
                            optProductNeedVolume: 3873.5779599999973
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 14079.168053333333,
                            optProductNeedVolume: 59132.505824
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 213.44805333333338,
                            optProductNeedVolume: 1067.240266666667
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 9595.078239999999,
                            optProductNeedVolume: 13433.109536
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1393.0146577777778,
                            optProductNeedVolume: 6825.771823111111
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1943.4417244444433,
                            optProductNeedVolume: 3886.8834488888865
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2772.303653333333,
                            optProductNeedVolume: 3326.7643839999996
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 8365.931182222223,
                            optProductNeedVolume: 18405.04860088889
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 758.8330399999996,
                            optProductNeedVolume: 3718.281895999998
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2287.703742222223,
                            optProductNeedVolume: 10065.896465777781
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 833.6238933333332,
                            optProductNeedVolume: 4168.119466666666
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2408.433546666666,
                            optProductNeedVolume: 4335.180383999999
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 7170.397991111111,
                            optProductNeedVolume: 14340.795982222222
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1434.4717600000004,
                            optProductNeedVolume: 2151.7076400000005
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4537.871999999993,
                            optProductNeedVolume: 22689.359999999964
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 680.6807999999996,
                            optProductNeedVolume: 3131.131679999998
                        }
                    ]
                },
                {
                    name: 'Харцизьк',
                    blocked: 'occupied',
                    cityNeed: 1,
                    cityNeedVolume1D: 118542.05567999996,
                    needs: [
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 5783.50472,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 6626.253999999995,
                            optProductNeedVolume: -7951.504799999994
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 1539.695919999999,
                            optProductNeedVolume: -769.8479599999995
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 25183.272479999996,
                            optProductNeedVolume: -20146.617983999997
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 381.79248000000007,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 17162.62416,
                            optProductNeedVolume: -10297.574496
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 2491.67192,
                            optProductNeedVolume: -249.167192
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 3476.215519999998,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 4958.792879999999,
                            optProductNeedVolume: -3967.0343039999993
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 14964.06064,
                            optProductNeedVolume: -11971.248512
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 1357.3173599999993,
                            optProductNeedVolume: -135.73173599999993
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 4091.993680000001,
                            optProductNeedVolume: -2455.1962080000003
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 1491.0950399999997,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 4307.941919999998,
                            optProductNeedVolume: -861.5883839999997
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 12825.62192,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 2565.8258400000004,
                            optProductNeedVolume: -1282.9129200000002
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 8116.847999999986,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 1217.5271999999993,
                            optProductNeedVolume: -487.01087999999976
                        }
                    ]
                },
                {
                    name: 'Хрестівка',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 57709.52063999999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2815.56856,
                            optProductNeedVolume: 14077.8428
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3225.8419999999983,
                            optProductNeedVolume: 12258.199599999994
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 749.5661599999995,
                            optProductNeedVolume: 3373.0477199999978
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 12259.90704,
                            optProductNeedVolume: 51491.609568
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 185.86704000000003,
                            optProductNeedVolume: 929.3352000000002
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 8355.23568,
                            optProductNeedVolume: 11697.329952
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1213.01416,
                            optProductNeedVolume: 5943.769383999999
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1692.316959999999,
                            optProductNeedVolume: 3384.633919999998
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2414.0762399999994,
                            optProductNeedVolume: 2896.8914879999993
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 7284.914720000001,
                            optProductNeedVolume: 16026.812384
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 660.7792799999997,
                            optProductNeedVolume: 3237.8184719999986
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1992.0946400000005,
                            optProductNeedVolume: 8765.216416000003
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 725.9059199999999,
                            optProductNeedVolume: 3629.5296
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2097.2241599999993,
                            optProductNeedVolume: 3775.0034879999985
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 6243.86416,
                            optProductNeedVolume: 12487.72832
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1249.1143200000004,
                            optProductNeedVolume: 1873.6714800000004
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 3951.5039999999935,
                            optProductNeedVolume: 19757.519999999968
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 592.7255999999998,
                            optProductNeedVolume: 2726.537759999999
                        }
                    ]
                },
                {
                    name: 'Чистякове',
                    blocked: 'occupied',
                    cityNeed: 1,
                    cityNeedVolume1D: 112985.82400000001,
                    needs: [
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 5512.423777777778,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 6315.672222222218,
                            optProductNeedVolume: -7578.806666666661
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 1467.5282222222213,
                            optProductNeedVolume: -733.7641111111107
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 24002.89733333333,
                            optProductNeedVolume: -19202.317866666664
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 363.8973333333334,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 16358.188,
                            optProductNeedVolume: -9814.9128
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 2374.8837777777776,
                            optProductNeedVolume: -237.48837777777777
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 3313.2804444444423,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 4726.367333333333,
                            optProductNeedVolume: -3781.093866666666
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 14262.674222222224,
                            optProductNeedVolume: -11410.13937777778
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 1293.6979999999994,
                            optProductNeedVolume: -129.36979999999994
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 3900.1962222222232,
                            optProductNeedVolume: -2340.117733333334
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 1421.205333333333,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 4106.022666666666,
                            optProductNeedVolume: -821.2045333333332
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 12224.467111111111,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 2445.5620000000004,
                            optProductNeedVolume: -1222.7810000000002
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 7736.399999999988,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 1160.4599999999994,
                            optProductNeedVolume: -464.18399999999974
                        }
                    ]
                },
                {
                    name: 'Шахтарськ',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 101795.54815999999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4966.465528888889,
                            optProductNeedVolume: 24832.327644444445
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5690.159111111107,
                            optProductNeedVolume: 21622.60462222221
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1322.1821511111102,
                            optProductNeedVolume: 5949.819679999996
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 21625.616426666664,
                            optProductNeedVolume: 90827.58899199998
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 327.8564266666667,
                            optProductNeedVolume: 1639.2821333333336
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 14738.049919999998,
                            optProductNeedVolume: 20633.269887999995
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2139.6719288888885,
                            optProductNeedVolume: 10484.392451555554
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2985.12846222222,
                            optProductNeedVolume: 5970.25692444444
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 4258.261226666666,
                            optProductNeedVolume: 5109.913471999998
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 12850.078791111111,
                            optProductNeedVolume: 28270.173340444446
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1165.5683199999994,
                            optProductNeedVolume: 5711.284767999997
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3513.915271111112,
                            optProductNeedVolume: 15461.227192888893
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1280.4471466666664,
                            optProductNeedVolume: 6402.235733333332
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3699.356373333332,
                            optProductNeedVolume: 6658.841471999998
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 11013.738595555555,
                            optProductNeedVolume: 22027.47719111111
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2203.35008,
                            optProductNeedVolume: 3305.0251200000002
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6970.175999999989,
                            optProductNeedVolume: 34850.87999999995
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1045.5263999999995,
                            optProductNeedVolume: 4809.421439999998
                        }
                    ]
                },
                {
                    name: 'Ясинувата',
                    blocked: 'occupied',
                    cityNeed: 1,
                    cityNeedVolume1D: 72069.07775999999,
                    needs: [
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 3516.1517066666665,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 4028.5113333333306,
                            optProductNeedVolume: -4834.213599999996
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 936.0767733333328,
                            optProductNeedVolume: -468.0383866666664
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 15310.475359999999,
                            optProductNeedVolume: -12248.380288
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 232.11536000000007,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 10434.22512,
                            optProductNeedVolume: -6260.535072
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 1514.8421066666667,
                            optProductNeedVolume: -151.48421066666668
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 2113.4073066666656,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 3014.7581599999994,
                            optProductNeedVolume: -2411.8065279999996
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 9097.581813333334,
                            optProductNeedVolume: -7278.065450666668
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 825.1975199999996,
                            optProductNeedVolume: -82.51975199999997
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 2487.777093333334,
                            optProductNeedVolume: -1492.6662560000004
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 906.5292799999999,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 2619.0654399999994,
                            optProductNeedVolume: -523.8130879999999
                        },
                        {
                            name: '',
                            productNeed: 1,
                            productNeedVolume1D: 7797.492106666667,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 1559.9248800000003,
                            optProductNeedVolume: -779.9624400000001
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 4934.735999999992,
                            optProductNeedVolume: 0
                        },
                        {
                            name: '',
                            productNeed: 2,
                            productNeedVolume1D: 740.2103999999996,
                            optProductNeedVolume: -296.0841599999998
                        }
                    ]
                }
            ]
        },
        {
            region: 'Харківська',
            regionNeed: 2,
            regNeedVolume1D: 1373478.4647311112,
            optRegNeedVolume: 7931444.517582058,
            contacts: {
                phone_VCA: '+380 577 00 04 12',
                telegram_VCA: 'https://t.me/synegubov  ',
                hum_center: '',
                red_cross: '+380 66 701 11 10'
            },
            cities: [
                {
                    name: 'Балаклія',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 55829.60734222221,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2723.8501620987654,
                            optProductNeedVolume: 13619.250810493828
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3120.758762345677,
                            optProductNeedVolume: 15603.793811728385
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 725.1487090123452,
                            optProductNeedVolume: 3625.743545061726
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 11860.535116296296,
                            optProductNeedVolume: 51395.652170617286
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 179.81233851851854,
                            optProductNeedVolume: 899.0616925925927
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 8083.060162222222,
                            optProductNeedVolume: 13471.766937037037
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1173.4996843209876,
                            optProductNeedVolume: 5867.498421604938
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1637.1889824691348,
                            optProductNeedVolume: 3274.3779649382695
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2335.4366329629624,
                            optProductNeedVolume: 4670.873265925925
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 7047.60538345679,
                            optProductNeedVolume: 16444.41256139918
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 639.2541011111108,
                            optProductNeedVolume: 3196.270505555554
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1927.2012712345684,
                            optProductNeedVolume: 9636.006356172842
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 702.2592118518517,
                            optProductNeedVolume: 3511.296059259258
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2028.9061503703697,
                            optProductNeedVolume: 3381.510250617283
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 6040.4675083950615,
                            optProductNeedVolume: 12080.935016790123
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1208.4238655555557,
                            optProductNeedVolume: 2014.0397759259263
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 3822.781999999994,
                            optProductNeedVolume: 19113.909999999967
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 573.4172999999997,
                            optProductNeedVolume: 2675.9473999999987
                        }
                    ]
                },
                {
                    name: 'Ізюм',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 95155.6667022222,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4642.51479654321,
                            optProductNeedVolume: 23212.57398271605
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5319.003567901231,
                            optProductNeedVolume: 26595.017839506152
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1235.9393545679004,
                            optProductNeedVolume: 6179.696772839502
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 20215.02890962963,
                            optProductNeedVolume: 87598.45860839507
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 306.4711318518519,
                            optProductNeedVolume: 1532.3556592592595
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 13776.721982222221,
                            optProductNeedVolume: 22961.203303703704
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2000.106218765432,
                            optProductNeedVolume: 10000.53109382716
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2790.4156335802454,
                            optProductNeedVolume: 5580.831267160491
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3980.5049762962954,
                            optProductNeedVolume: 7961.009952592591
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 12011.898719012346,
                            optProductNeedVolume: 28027.763677695475
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1089.5410711111106,
                            optProductNeedVolume: 5447.705355555553
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3284.7109367901244,
                            optProductNeedVolume: 16423.55468395062
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1196.926625185185,
                            optProductNeedVolume: 5984.633125925925
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3458.056157037036,
                            optProductNeedVolume: 5763.42692839506
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 10295.33862617284,
                            optProductNeedVolume: 20590.67725234568
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2059.630795555556,
                            optProductNeedVolume: 3432.717992592593
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6515.527999999989,
                            optProductNeedVolume: 32577.63999999995
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 977.3291999999994,
                            optProductNeedVolume: 4560.869599999997
                        }
                    ]
                },
                {
                    name: 'Красноград',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 41503.58202666666,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2024.9029862962961,
                            optProductNeedVolume: 10124.51493148148
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 2319.9637870370357,
                            optProductNeedVolume: 11599.818935185178
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 539.0736270370367,
                            optProductNeedVolume: 2695.3681351851833
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 8817.090348888887,
                            optProductNeedVolume: 38207.39151185184
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 133.6720155555556,
                            optProductNeedVolume: 668.360077777778
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 6008.925486666666,
                            optProductNeedVolume: 10014.87581111111
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 872.3765529629629,
                            optProductNeedVolume: 4361.882764814814
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1217.0819474074067,
                            optProductNeedVolume: 2434.1638948148134
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 1736.1573988888886,
                            optProductNeedVolume: 3472.314797777777
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 5239.171150370371,
                            optProductNeedVolume: 12224.732684197534
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 475.2198033333331,
                            optProductNeedVolume: 2376.0990166666656
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1432.676313703704,
                            optProductNeedVolume: 7163.38156851852
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 522.0576355555554,
                            optProductNeedVolume: 2610.288177777777
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1508.2834511111107,
                            optProductNeedVolume: 2513.8057518518513
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 4490.467525185185,
                            optProductNeedVolume: 8980.93505037037
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 898.3390966666668,
                            optProductNeedVolume: 1497.231827777778
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 2841.8459999999955,
                            optProductNeedVolume: 14209.229999999978
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 426.2768999999998,
                            optProductNeedVolume: 1989.292199999999
                        }
                    ]
                },
                {
                    name: 'Куп`янськ',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 56343.91745777776,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2748.9426490123456,
                            optProductNeedVolume: 13744.713245061728
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3149.5076265432076,
                            optProductNeedVolume: 15747.538132716038
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 731.8288798765427,
                            optProductNeedVolume: 3659.1443993827133
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 11969.796017037035,
                            optProductNeedVolume: 51869.11607382715
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 181.46879481481483,
                            optProductNeedVolume: 907.3439740740741
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 8157.522437777777,
                            optProductNeedVolume: 13595.870729629627
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1184.3101267901234,
                            optProductNeedVolume: 5921.550633950617
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1652.2709953086407,
                            optProductNeedVolume: 3304.5419906172815
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2356.9510003703695,
                            optProductNeedVolume: 4713.902000740739
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 7112.528905432098,
                            optProductNeedVolume: 16595.900779341566
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 645.1429988888885,
                            optProductNeedVolume: 3225.7149944444427
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1944.9549176543212,
                            optProductNeedVolume: 9724.774588271606
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 708.7285214814813,
                            optProductNeedVolume: 3543.642607407406
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2047.5967162962954,
                            optProductNeedVolume: 3412.661193827159
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 6096.113136049382,
                            optProductNeedVolume: 12192.226272098764
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1219.5560344444445,
                            optProductNeedVolume: 2032.593390740741
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 3857.997999999993,
                            optProductNeedVolume: 19289.989999999965
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 578.6996999999997,
                            optProductNeedVolume: 2700.5985999999984
                        }
                    ]
                },
                {
                    name: 'Лозова',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 53394.97632000001,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2723.4506599999995,
                            optProductNeedVolume: 13617.253299999997
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4679.73212,
                            optProductNeedVolume: 23398.6606
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 575.3769,
                            optProductNeedVolume: 2876.8845
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 8323.78582,
                            optProductNeedVolume: 24971.357459999996
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 191.7923,
                            optProductNeedVolume: 958.9615000000001
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 5331.825940000001,
                            optProductNeedVolume: 5331.825940000001
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 882.2445799999999,
                            optProductNeedVolume: 4411.2229
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1227.47072,
                            optProductNeedVolume: 2454.94144
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 1879.56454,
                            optProductNeedVolume: 3759.12908
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 5370.1844,
                            optProductNeedVolume: 5370.1844
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 537.01844,
                            optProductNeedVolume: 2685.0922
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1802.84762,
                            optProductNeedVolume: 9014.2381
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 805.5276600000001,
                            optProductNeedVolume: 4027.6383000000005
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 3183.75218,
                            optProductNeedVolume: 3183.75218
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 5063.31672,
                            optProductNeedVolume: 10126.63344
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1994.6399199999998,
                            optProductNeedVolume: 1994.6399199999998
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 7671.692,
                            optProductNeedVolume: 38358.46
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1150.7538,
                            optProductNeedVolume: 4603.0152
                        }
                    ]
                },
                {
                    name: 'Люботин',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 42256.382719999994,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2061.631102222222,
                            optProductNeedVolume: 10308.15551111111
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 2362.043777777776,
                            optProductNeedVolume: 11810.218888888881
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 548.8514577777775,
                            optProductNeedVolume: 2744.257288888887
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 8977.016586666665,
                            optProductNeedVolume: 38900.40520888888
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 136.0965866666667,
                            optProductNeedVolume: 680.4829333333334
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 6117.9166399999995,
                            optProductNeedVolume: 10196.527733333332
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 888.1999022222221,
                            optProductNeedVolume: 4440.999511111111
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1239.1576355555546,
                            optProductNeedVolume: 2478.3152711111093
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 1767.648186666666,
                            optProductNeedVolume: 3535.296373333332
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 5334.200337777777,
                            optProductNeedVolume: 12446.467454814814
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 483.83943999999974,
                            optProductNeedVolume: 2419.1971999999987
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1458.662497777778,
                            optProductNeedVolume: 7293.312488888891
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 531.5268266666666,
                            optProductNeedVolume: 2657.634133333333
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1535.6410133333327,
                            optProductNeedVolume: 2559.4016888888877
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 4571.916568888889,
                            optProductNeedVolume: 9143.833137777778
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 914.6333600000002,
                            optProductNeedVolume: 1524.3889333333336
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 2893.3919999999953,
                            optProductNeedVolume: 14466.959999999977
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 434.0087999999998,
                            optProductNeedVolume: 2025.374399999999
                        }
                    ]
                },
                {
                    name: 'Мерефа',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 44423.5362311111,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2167.3635571604937,
                            optProductNeedVolume: 10836.817785802468
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 2483.183145061727,
                            optProductNeedVolume: 12415.915725308634
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 576.9997583950613,
                            optProductNeedVolume: 2884.9987919753066
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 9437.410301481481,
                            optProductNeedVolume: 40895.444639753085
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 143.07641259259262,
                            optProductNeedVolume: 715.3820629629631
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 6431.67905111111,
                            optProductNeedVolume: 10719.465085185184
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 933.7519682716049,
                            optProductNeedVolume: 4668.7598413580245
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1302.7088590123449,
                            optProductNeedVolume: 2605.4177180246897
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 1858.3034848148145,
                            optProductNeedVolume: 3716.606969629629
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 5607.769210617284,
                            optProductNeedVolume: 13084.794824773664
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 508.6535455555553,
                            optProductNeedVolume: 2543.2677277777766
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1533.4712095061732,
                            optProductNeedVolume: 7667.356047530866
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 558.7866192592592,
                            optProductNeedVolume: 2793.933096296296
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1614.3976318518514,
                            optProductNeedVolume: 2690.6627197530856
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 4806.391088641975,
                            optProductNeedVolume: 9612.78217728395
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 961.541087777778,
                            optProductNeedVolume: 1602.56847962963
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 3041.781999999995,
                            optProductNeedVolume: 15208.909999999976
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 456.26729999999975,
                            optProductNeedVolume: 2129.2473999999984
                        }
                    ]
                },
                {
                    name: 'Первомайський',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 5781.841137777777,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 282.08811901234566,
                            optProductNeedVolume: 1410.4405950617283
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 323.19287654320965,
                            optProductNeedVolume: 1615.9643827160482
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 75.09804987654316,
                            optProductNeedVolume: 375.4902493827158
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 1228.3039970370369,
                            optProductNeedVolume: 5322.650653827161
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 18.621774814814817,
                            optProductNeedVolume: 93.10887407407408
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 837.1000977777777,
                            optProductNeedVolume: 1395.1668296296295
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 121.53029679012344,
                            optProductNeedVolume: 607.6514839506173
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 169.55101530864187,
                            optProductNeedVolume: 339.10203061728373
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 241.8631303703703,
                            optProductNeedVolume: 483.7262607407406
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 729.8660454320988,
                            optProductNeedVolume: 1703.020772674897
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 66.20260888888885,
                            optProductNeedVolume: 331.01304444444423
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 199.58534765432103,
                            optProductNeedVolume: 997.9267382716051
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 72.72756148148146,
                            optProductNeedVolume: 363.6378074074073
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 210.1181362962962,
                            optProductNeedVolume: 350.19689382716035
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 625.5645560493826,
                            optProductNeedVolume: 1251.1291120987653
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 125.14712444444446,
                            optProductNeedVolume: 208.57854074074078
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 395.89599999999933,
                            optProductNeedVolume: 1979.4799999999966
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 59.384399999999964,
                            optProductNeedVolume: 277.1271999999998
                        }
                    ]
                },
                {
                    name: 'Пісочин',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 48975.59552,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2389.4523022222224,
                            optProductNeedVolume: 11947.261511111112
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 2737.6337777777762,
                            optProductNeedVolume: 13688.168888888882
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 636.1246577777774,
                            optProductNeedVolume: 3180.623288888887
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 10404.457386666667,
                            optProductNeedVolume: 45085.982008888896
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 157.7373866666667,
                            optProductNeedVolume: 788.6869333333335
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 7090.73024,
                            optProductNeedVolume: 11817.883733333332
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1029.4331022222223,
                            optProductNeedVolume: 5147.165511111111
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1436.1968355555548,
                            optProductNeedVolume: 2872.3936711111096
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2048.722986666666,
                            optProductNeedVolume: 4097.445973333332
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 6182.394737777779,
                            optProductNeedVolume: 14425.587721481483
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 560.7750399999998,
                            optProductNeedVolume: 2803.8751999999986
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1690.6052977777783,
                            optProductNeedVolume: 8453.026488888892
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 616.0452266666666,
                            optProductNeedVolume: 3080.226133333333
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1779.8242133333329,
                            optProductNeedVolume: 2966.373688888888
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 5298.899768888889,
                            optProductNeedVolume: 10597.799537777779
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1060.0697600000003,
                            optProductNeedVolume: 1766.7829333333339
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 3353.4719999999948,
                            optProductNeedVolume: 16767.359999999975
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 503.0207999999998,
                            optProductNeedVolume: 2347.430399999999
                        }
                    ]
                },
                {
                    name: 'Харків',
                    blocked: 'blocked',
                    cityNeed: 1,
                    cityNeedVolume1D: 864332.1419399999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 37668.18522,
                            optProductNeedVolume: 376681.85219999996
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 42758.48052,
                            optProductNeedVolume: 427584.80519999994
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 10180.5906,
                            optProductNeedVolume: 101805.90599999999
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 147618.56369999997,
                            optProductNeedVolume: 1476185.6369999996
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 3054.1771799999997,
                            optProductNeedVolume: 30541.771799999995
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 96715.61069999999,
                            optProductNeedVolume: 193431.22139999998
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 12216.708719999999,
                            optProductNeedVolume: 122167.08719999998
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 17307.00402,
                            optProductNeedVolume: 34614.00804
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 22397.29932,
                            optProductNeedVolume: 44794.59864
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 79408.60668,
                            optProductNeedVolume: 238225.82004
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 6108.354359999999,
                            optProductNeedVolume: 61083.54359999999
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 31559.83086,
                            optProductNeedVolume: 315598.3086
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 9162.531539999998,
                            optProductNeedVolume: 91625.31539999998
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 27487.59462,
                            optProductNeedVolume: 54975.18924
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 73300.25231999999,
                            optProductNeedVolume: 146600.50463999997
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 13234.767779999998,
                            optProductNeedVolume: 26469.535559999997
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 203611.812,
                            optProductNeedVolume: 2036118.12
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 30541.7718,
                            optProductNeedVolume: 305417.718
                        }
                    ]
                },
                {
                    name: 'Чугуїв',
                    blocked: 'blocked',
                    cityNeed: 1,
                    cityNeedVolume1D: 65481.21733333332,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3194.739009259259,
                            optProductNeedVolume: 31947.390092592592
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3660.263657407405,
                            optProductNeedVolume: 36602.63657407405
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 850.5096574074068,
                            optProductNeedVolume: 8505.096574074068
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 13910.939277777778,
                            optProductNeedVolume: 139109.39277777777
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 210.89761111111116,
                            optProductNeedVolume: 2108.9761111111115
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 9480.428833333333,
                            optProductNeedVolume: 18960.857666666667
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1376.3698425925925,
                            optProductNeedVolume: 13763.698425925924
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1920.2199814814803,
                            optProductNeedVolume: 3840.4399629629606
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2739.178027777777,
                            optProductNeedVolume: 5478.356055555554
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 8265.968574074075,
                            optProductNeedVolume: 24797.905722222225
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 749.7659166666664,
                            optProductNeedVolume: 7497.659166666664
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2260.3684907407414,
                            optProductNeedVolume: 22603.684907407413
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 823.663111111111,
                            optProductNeedVolume: 8236.63111111111
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2379.6557222222214,
                            optProductNeedVolume: 4759.311444444443
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 7084.720537037037,
                            optProductNeedVolume: 14169.441074074073
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1417.3315833333336,
                            optProductNeedVolume: 2834.663166666667
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4483.649999999992,
                            optProductNeedVolume: 44836.49999999993
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 672.5474999999997,
                            optProductNeedVolume: 6725.474999999997
                        }
                    ]
                }
            ]
        },
        {
            region: 'Запорізька',
            regionNeed: 2,
            regNeedVolume1D: 992796.0935799996,
            optRegNeedVolume: 4135266.8663639994,
            contacts: {
                phone_VCA: '+380 612 24 63 81',
                telegram_VCA: 'https://t.me/starukhofficial',
                hum_center: '+380 99 072 92 47',
                red_cross: '+380 61 2764 28 92'
            },
            cities: [
                {
                    name: 'Бердянськ',
                    blocked: 'blocked',
                    cityNeed: 1,
                    cityNeedVolume1D: 114133.86,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 6188.591519999999,
                            optProductNeedVolume: 61885.91519999999
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 8319.09024,
                            optProductNeedVolume: 83190.90239999999
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1420.33248,
                            optProductNeedVolume: 14203.3248
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 23536.93824,
                            optProductNeedVolume: 235369.3824
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 405.80928,
                            optProductNeedVolume: 4058.0928
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 9637.9704,
                            optProductNeedVolume: 19275.9408
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1826.1417599999997,
                            optProductNeedVolume: 18261.417599999997
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2333.40336,
                            optProductNeedVolume: 4666.80672
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 5985.686879999999,
                            optProductNeedVolume: 11971.373759999999
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 11869.92144,
                            optProductNeedVolume: 35609.76432
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 811.61856,
                            optProductNeedVolume: 8116.1856
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3753.7358399999994,
                            optProductNeedVolume: 37537.3584
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1623.23712,
                            optProductNeedVolume: 16232.3712
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2536.308,
                            optProductNeedVolume: 5072.616
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 9232.161119999999,
                            optProductNeedVolume: 18464.322239999998
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1318.88016,
                            optProductNeedVolume: 2637.76032
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 20290.464,
                            optProductNeedVolume: 202904.64
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 3043.5696,
                            optProductNeedVolume: 30435.695999999996
                        }
                    ]
                },
                {
                    name: 'Енергодар',
                    blocked: 'blocked',
                    cityNeed: 1,
                    cityNeedVolume1D: 74670.09756000001,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3529.6783799999994,
                            optProductNeedVolume: 35296.78379999999
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 6263.93628,
                            optProductNeedVolume: 62639.3628
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 994.2756,
                            optProductNeedVolume: 9942.756000000001
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 11235.31428,
                            optProductNeedVolume: 112353.1428
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 298.28268,
                            optProductNeedVolume: 2982.8268000000003
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 8202.7737,
                            optProductNeedVolume: 16405.5474
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1143.4169399999998,
                            optProductNeedVolume: 11434.169399999999
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1590.84096,
                            optProductNeedVolume: 3181.68192
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 5667.37092,
                            optProductNeedVolume: 11334.74184
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 7009.642979999999,
                            optProductNeedVolume: 21028.928939999998
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 497.1378,
                            optProductNeedVolume: 4971.378000000001
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3181.68192,
                            optProductNeedVolume: 31816.819199999998
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1143.4169399999998,
                            optProductNeedVolume: 11434.169399999999
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3927.38862,
                            optProductNeedVolume: 7854.77724
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 7655.922119999999,
                            optProductNeedVolume: 15311.844239999999
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 894.8480399999999,
                            optProductNeedVolume: 1789.6960799999997
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 9942.756000000001,
                            optProductNeedVolume: 99427.56000000001
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1491.4134,
                            optProductNeedVolume: 14914.133999999998
                        }
                    ]
                },
                {
                    name: 'Запоріжжя',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 624322.8521799999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 27853.35902,
                            optProductNeedVolume: 139266.7951
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 32608.810559999998,
                            optProductNeedVolume: 102174.27308800002
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 6793.5022,
                            optProductNeedVolume: 30344.309826666664
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 110734.08586,
                            optProductNeedVolume: 339584.52997066674
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 2038.0506599999999,
                            optProductNeedVolume: 10190.2533
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 52989.31716,
                            optProductNeedVolume: 35326.21144
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 10190.253299999998,
                            optProductNeedVolume: 48233.86561999999
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 18342.45594,
                            optProductNeedVolume: 36684.91188
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 36684.91188,
                            optProductNeedVolume: 29347.929504
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 60462.169579999994,
                            optProductNeedVolume: 60462.16958
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 4755.45154,
                            optProductNeedVolume: 14266.354620000002
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 21059.856819999997,
                            optProductNeedVolume: 81431.44637066666
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 6114.15198,
                            optProductNeedVolume: 24048.997787999997
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 20380.506599999997,
                            optProductNeedVolume: 38043.61231999999
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 46195.81496,
                            optProductNeedVolume: 92391.62992
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 10869.60352,
                            optProductNeedVolume: 6521.762112000002
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 135870.044,
                            optProductNeedVolume: 679350.22
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 20380.506599999997,
                            optProductNeedVolume: 84239.42727999997
                        }
                    ]
                },
                {
                    name: 'Мелітополь',
                    blocked: 'blocked',
                    cityNeed: 1,
                    cityNeedVolume1D: 96937.79328000001,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3968.2137599999996,
                            optProductNeedVolume: 39682.137599999995
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4251.6576,
                            optProductNeedVolume: 42516.575999999994
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 992.0534399999999,
                            optProductNeedVolume: 9920.534399999999
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 18140.405759999998,
                            optProductNeedVolume: 181404.05759999997
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 283.44383999999997,
                            optProductNeedVolume: 2834.4383999999995
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 7511.2617599999985,
                            optProductNeedVolume: 15022.523519999997
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1558.9411199999997,
                            optProductNeedVolume: 15589.411199999997
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2409.2726399999997,
                            optProductNeedVolume: 4818.545279999999
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 5243.711039999999,
                            optProductNeedVolume: 10487.422079999998
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 8503.3152,
                            optProductNeedVolume: 25509.9456
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 708.6095999999999,
                            optProductNeedVolume: 7086.095999999999
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2125.8288,
                            optProductNeedVolume: 21258.287999999997
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 708.6095999999999,
                            optProductNeedVolume: 7086.095999999999
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1133.7753599999999,
                            optProductNeedVolume: 2267.5507199999997
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 5101.989119999999,
                            optProductNeedVolume: 10203.978239999999
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1700.66304,
                            optProductNeedVolume: 3401.32608
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 28344.384,
                            optProductNeedVolume: 283443.83999999997
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 4251.6576,
                            optProductNeedVolume: 42516.575999999994
                        }
                    ]
                },
                {
                    name: 'Токмак',
                    blocked: '',
                    cityNeed: 1,
                    cityNeedVolume1D: 82731.49055999999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4036.3562399999996,
                            optProductNeedVolume: 20181.781199999998
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4624.517999999996,
                            optProductNeedVolume: 20964.481599999985
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1074.5666399999993,
                            optProductNeedVolume: 5229.557647999996
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 17575.616159999998,
                            optProductNeedVolume: 79383.199656
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 266.45616000000007,
                            optProductNeedVolume: 1332.2808000000005
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 11977.938719999998,
                            optProductNeedVolume: 19963.2312
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1738.9586399999998,
                            optProductNeedVolume: 8578.862624
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2426.0798399999985,
                            optProductNeedVolume: 4852.159679999997
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3460.782959999999,
                            optProductNeedVolume: 5883.331031999998
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 10443.542879999999,
                            optProductNeedVolume: 26108.857199999995
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 947.2831199999995,
                            optProductNeedVolume: 4262.7740399999975
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2855.8365600000006,
                            optProductNeedVolume: 13470.029108000002
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1040.6476799999998,
                            optProductNeedVolume: 4925.732351999999
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3006.548639999999,
                            optProductNeedVolume: 5912.878991999998
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 8951.108639999999,
                            optProductNeedVolume: 17902.217279999997
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1790.7112800000002,
                            optProductNeedVolume: 2954.6736120000005
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5664.815999999991,
                            optProductNeedVolume: 28324.079999999954
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 849.7223999999995,
                            optProductNeedVolume: 4064.5054799999975
                        }
                    ]
                }
            ]
        },
        {
            region: 'Житомирська',
            regionNeed: 3,
            regNeedVolume1D: 879742.821344445,
            optRegNeedVolume: 2589126.3030586415,
            contacts: {
                phone_VCA: '+380 412 47 08 57',
                telegram_VCA: 'https://t.me/zhytomyrskaODA',
                hum_center: '+380 67 412 54 60',
                red_cross: '+380 41 242 45 84'
            },
            cities: [
                {
                    name: 'Бердичів',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 237757.1425777778,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 11599.845712345681,
                            optProductNeedVolume: 57999.22856172841
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 13290.12904320987,
                            optProductNeedVolume: 57590.55918724277
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 3088.133576543208,
                            optProductNeedVolume: 13381.912165020569
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 50509.52483703704,
                            optProductNeedVolume: 185201.59106913581
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 765.752614814815,
                            optProductNeedVolume: 3828.763074074075
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 34422.69037777778,
                            optProductNeedVolume: 22948.46025185185
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 4997.490490123457,
                            optProductNeedVolume: 19989.961960493827
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 6972.167508641972,
                            optProductNeedVolume: 13944.335017283944
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 9945.739670370369,
                            optProductNeedVolume: 16576.232783950614
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 30013.08083209877,
                            optProductNeedVolume: 75032.70208024693
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 2722.3409888888878,
                            optProductNeedVolume: 11796.810951851847
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 8207.21995432099,
                            optProductNeedVolume: 35564.61980205762
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2990.655881481481,
                            optProductNeedVolume: 12959.508819753086
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 8640.342496296294,
                            optProductNeedVolume: 17280.68499259259
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 25724.062249382718,
                            optProductNeedVolume: 51448.124498765435
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 5146.2193444444465,
                            optProductNeedVolume: 6003.922568518521
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 16279.779999999975,
                            optProductNeedVolume: 81398.89999999988
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 2441.966999999999,
                            optProductNeedVolume: 9767.867999999997
                        }
                    ]
                },
                {
                    name: 'Житомир',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 231886.16,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 7246.442500000001,
                            optProductNeedVolume: 36232.21250000001
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 9565.304100000001,
                            optProductNeedVolume: 38261.216400000005
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2608.7192999999997,
                            optProductNeedVolume: 10434.877199999999
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 28695.912300000004,
                            optProductNeedVolume: 86087.7369
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 579.7154,
                            optProductNeedVolume: 2898.577
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 31884.347,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 4637.7232,
                            optProductNeedVolume: 18550.8928
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 5507.2963,
                            optProductNeedVolume: 11014.5926
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 8985.5887,
                            optProductNeedVolume: 8985.5887
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 22608.9006,
                            optProductNeedVolume: 33913.350900000005
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 1449.2885,
                            optProductNeedVolume: 4347.865500000001
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 5797.154,
                            optProductNeedVolume: 17391.462000000003
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2318.8616,
                            optProductNeedVolume: 6956.5848000000005
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 7246.442500000001,
                            optProductNeedVolume: 14492.885000000002
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 19420.465900000003,
                            optProductNeedVolume: 38840.931800000006
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 6666.7271,
                            optProductNeedVolume: 3333.36355
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 57971.54000000001,
                            optProductNeedVolume: 289857.70000000007
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 8695.731,
                            optProductNeedVolume: 34782.924
                        }
                    ]
                },
                {
                    name: 'Короcтишів',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 78685.82577777775,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3838.9737901234575,
                            optProductNeedVolume: 19194.86895061729
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4398.373765432097,
                            optProductNeedVolume: 19059.619650205754
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1022.0190987654316,
                            optProductNeedVolume: 4428.749427983537
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 16716.14837037037,
                            optProductNeedVolume: 61292.544024691364
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 253.42614814814823,
                            optProductNeedVolume: 1267.1307407407412
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 11392.203777777779,
                            optProductNeedVolume: 7594.80251851852
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 1653.9215679012348,
                            optProductNeedVolume: 6615.686271604939
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2307.441753086419,
                            optProductNeedVolume: 4614.883506172838
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3291.5467037037033,
                            optProductNeedVolume: 5485.9111728395055
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 9932.84165432099,
                            optProductNeedVolume: 24832.104135802474
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 900.9598888888886,
                            optProductNeedVolume: 3904.1595185185174
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2716.182876543211,
                            optProductNeedVolume: 11770.125798353914
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 989.7588148148147,
                            optProductNeedVolume: 4288.954864197531
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2859.5249629629625,
                            optProductNeedVolume: 5719.049925925925
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 8513.389160493829,
                            optProductNeedVolume: 17026.778320987658
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1703.143444444445,
                            optProductNeedVolume: 1987.0006851851858
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5387.799999999992,
                            optProductNeedVolume: 26938.99999999996
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 808.1699999999997,
                            optProductNeedVolume: 3232.679999999999
                        }
                    ]
                },
                {
                    name: 'Коростень',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 113526.86949999999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4316.3505000000005,
                            optProductNeedVolume: 21581.752500000002
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 7673.512,
                            optProductNeedVolume: 30694.048
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1438.7835,
                            optProductNeedVolume: 5755.134
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 13428.646,
                            optProductNeedVolume: 40285.93800000001
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 411.081,
                            optProductNeedVolume: 2055.405
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 15621.078000000001,
                            optProductNeedVolume: 15621.078000000001
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 2466.486,
                            optProductNeedVolume: 9865.944
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3905.2695000000003,
                            optProductNeedVolume: 7810.539000000001
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 6988.3769999999995,
                            optProductNeedVolume: 13976.753999999999
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 12058.376,
                            optProductNeedVolume: 36175.128
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 753.6485,
                            optProductNeedVolume: 3768.2425000000003
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 6371.7555,
                            optProductNeedVolume: 31858.7775
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1986.8915000000002,
                            optProductNeedVolume: 9934.4575
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 5001.4855,
                            optProductNeedVolume: 10002.971
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 12880.538,
                            optProductNeedVolume: 25761.076
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2466.486,
                            optProductNeedVolume: 2466.486
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 13702.7,
                            optProductNeedVolume: 68513.5
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 2055.4049999999997,
                            optProductNeedVolume: 8221.619999999999
                        }
                    ]
                },
                {
                    name: 'Малин',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 39685.437,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2167.2189,
                            optProductNeedVolume: 10836.0945
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 2814.57,
                            optProductNeedVolume: 14072.85
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 450.3312,
                            optProductNeedVolume: 2251.656
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 7655.630400000001,
                            optProductNeedVolume: 38278.152
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 112.5828,
                            optProductNeedVolume: 562.914
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 3518.2125,
                            optProductNeedVolume: 3518.2125
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 619.2053999999999,
                            optProductNeedVolume: 2476.8215999999998
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1041.3908999999999,
                            optProductNeedVolume: 2082.7817999999997
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2420.5301999999997,
                            optProductNeedVolume: 4841.060399999999
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 4109.272199999999,
                            optProductNeedVolume: 12327.816599999998
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 534.7683,
                            optProductNeedVolume: 2673.8414999999995
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1463.5764,
                            optProductNeedVolume: 7317.882
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 619.2053999999999,
                            optProductNeedVolume: 3096.0269999999996
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1970.1990000000003,
                            optProductNeedVolume: 3940.3980000000006
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 3321.1926,
                            optProductNeedVolume: 6642.3852
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 394.0398,
                            optProductNeedVolume: 788.0796
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5629.14,
                            optProductNeedVolume: 28145.7
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 844.371,
                            optProductNeedVolume: 3377.4839999999995
                        }
                    ]
                },
                {
                    name: 'Новоград-Волинський',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 178201.3864888889,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 8694.201850617284,
                            optProductNeedVolume: 43471.00925308642
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 9961.086327160489,
                            optProductNeedVolume: 43164.70741769545
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2314.5873938271593,
                            optProductNeedVolume: 10029.878706584357
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 37857.40045185185,
                            optProductNeedVolume: 138810.46832345676
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 573.9393407407409,
                            optProductNeedVolume: 2869.6967037037048
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 25800.15508888889,
                            optProductNeedVolume: 17200.103392592595
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 3745.669739506173,
                            optProductNeedVolume: 14982.67895802469
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 5225.710165432096,
                            optProductNeedVolume: 10451.420330864192
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 7454.432618518517,
                            optProductNeedVolume: 12424.05436419753
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 22495.10807160494,
                            optProductNeedVolume: 56237.77017901234
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 2040.4221444444436,
                            optProductNeedVolume: 8841.829292592589
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 6151.394482716051,
                            optProductNeedVolume: 26656.042758436222
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2241.526874074074,
                            optProductNeedVolume: 9713.283120987653
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 6476.024214814814,
                            optProductNeedVolume: 12952.048429629627
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 19280.445202469138,
                            optProductNeedVolume: 38560.890404938276
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 3857.143522222223,
                            optProductNeedVolume: 4500.000775925927
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 12201.85999999998,
                            optProductNeedVolume: 61009.2999999999
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1830.278999999999,
                            optProductNeedVolume: 7321.115999999996
                        }
                    ]
                }
            ]
        },
        {
            region: 'Київська',
            regionNeed: 3,
            regNeedVolume1D: 1259776.000233333,
            optRegNeedVolume: 3540699.458396947,
            contacts: {
                phone_VCA: '+380 442 86 84 11',
                telegram_VCA: 'https://t.me/kyivoda',
                hum_center: '+380 443 63 07 34',
                red_cross: '+380 44 234 16 96'
            },
            cities: [
                {
                    name: 'Біла Церква',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 231228.41174999997,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 7671.084750000001,
                            optProductNeedVolume: 38355.42375
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 9862.82325,
                            optProductNeedVolume: 36163.68525
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2191.7385,
                            optProductNeedVolume: 10228.113
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 37917.076049999996,
                            optProductNeedVolume: 126390.25349999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 657.52155,
                            optProductNeedVolume: 3287.60775
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 30903.51285,
                            optProductNeedVolume: 30903.51285
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 4821.8247,
                            optProductNeedVolume: 19287.2988
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 6356.04165,
                            optProductNeedVolume: 12712.0833
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 10081.9971,
                            optProductNeedVolume: 13442.662800000002
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 24328.29735,
                            optProductNeedVolume: 24328.297349999993
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1972.5646499999998,
                            optProductNeedVolume: 7232.73705
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 7232.737050000001,
                            optProductNeedVolume: 31341.86055
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2191.7385,
                            optProductNeedVolume: 8036.3745
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 8547.78015,
                            optProductNeedVolume: 14246.30025
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 22794.0804,
                            optProductNeedVolume: 45588.1608
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 3287.60775,
                            optProductNeedVolume: 3287.60775
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 43834.770000000004,
                            optProductNeedVolume: 219173.85000000003
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 6575.2155,
                            optProductNeedVolume: 28492.6005
                        }
                    ]
                },
                {
                    name: 'Бориспіль',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 177841.482,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 6485.1969,
                            optProductNeedVolume: 32425.9845
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 10496.6589,
                            optProductNeedVolume: 47234.965050000006
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2139.4464,
                            optProductNeedVolume: 10697.232
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 27879.6609,
                            optProductNeedVolume: 83638.9827
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 668.577,
                            optProductNeedVolume: 3342.885
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 25539.6414,
                            optProductNeedVolume: 25539.6414
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 3610.3158,
                            optProductNeedVolume: 16246.421099999998
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 4813.7544,
                            optProductNeedVolume: 9627.5088
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 12034.385999999999,
                            optProductNeedVolume: 6017.192999999999
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 21862.4679,
                            optProductNeedVolume: 43724.93579999999
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 936.0078,
                            optProductNeedVolume: 3744.0312
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 7153.773899999999,
                            optProductNeedVolume: 32191.982549999993
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 3008.5964999999997,
                            optProductNeedVolume: 12034.385999999999
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 10964.6628,
                            optProductNeedVolume: 21929.3256
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 19589.306099999998,
                            optProductNeedVolume: 39178.612199999996
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 5281.7582999999995,
                            optProductNeedVolume: 7922.637449999999
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 13371.54,
                            optProductNeedVolume: 66857.70000000001
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 2005.7309999999998,
                            optProductNeedVolume: 9025.789499999999
                        }
                    ]
                },
                {
                    name: 'Боярка',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 92323.22399999999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3151.596,
                            optProductNeedVolume: 15757.98
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 4041.4584,
                            optProductNeedVolume: 12124.375200000002
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1186.4832,
                            optProductNeedVolume: 5339.174399999999
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 18279.2568,
                            optProductNeedVolume: 54837.7704
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 259.5432,
                            optProductNeedVolume: 1297.7160000000001
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 14756.8848,
                            optProductNeedVolume: 29513.7696
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 2410.044,
                            optProductNeedVolume: 8435.153999999999
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3188.6735999999996,
                            optProductNeedVolume: 6377.347199999999
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3299.9064,
                            optProductNeedVolume: 3299.9064
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 12383.9184,
                            optProductNeedVolume: 18575.8776
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 1075.2504,
                            optProductNeedVolume: 3225.7511999999997
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2780.8199999999997,
                            optProductNeedVolume: 11123.279999999999
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1112.328,
                            optProductNeedVolume: 3336.9839999999995
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 3225.7511999999997,
                            optProductNeedVolume: 3225.7511999999997
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 10604.193599999999,
                            optProductNeedVolume: 21208.387199999997
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2039.268,
                            optProductNeedVolume: 2039.268
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 7415.52,
                            optProductNeedVolume: 37077.600000000006
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1112.328,
                            optProductNeedVolume: 4449.312
                        }
                    ]
                },
                {
                    name: 'Бровари',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 243342.05805,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 12644.131500000001,
                            optProductNeedVolume: 63220.65750000001
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 9540.571950000001,
                            optProductNeedVolume: 28621.71585
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2528.8263,
                            optProductNeedVolume: 10115.3052
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 44369.4069,
                            optProductNeedVolume: 133108.2207
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 689.6799000000001,
                            optProductNeedVolume: 3448.3995000000004
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 41265.847350000004,
                            optProductNeedVolume: 41265.847350000004
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 5172.59925,
                            optProductNeedVolume: 18104.097374999998
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 6896.799,
                            optProductNeedVolume: 13793.598
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 10345.1985,
                            optProductNeedVolume: 5172.599249999999
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 30345.915600000004,
                            optProductNeedVolume: 45518.873400000004
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 2758.7196000000004,
                            optProductNeedVolume: 9655.518600000001
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 7241.6389500000005,
                            optProductNeedVolume: 25345.736325
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2413.8796500000003,
                            optProductNeedVolume: 7241.638950000001
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 8046.265500000001,
                            optProductNeedVolume: 12069.398250000002
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 25977.942900000002,
                            optProductNeedVolume: 51955.885800000004
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 6666.905700000001,
                            optProductNeedVolume: 3333.4528500000015
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 22989.33,
                            optProductNeedVolume: 114946.65000000001
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 3448.3995,
                            optProductNeedVolume: 12069.398250000002
                        }
                    ]
                },
                {
                    name: 'Буча',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 48213.881100000006,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 1358.6842500000002,
                            optProductNeedVolume: 6793.421250000001
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 1513.9624500000002,
                            optProductNeedVolume: 6336.213216666667
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 621.1128000000001,
                            optProductNeedVolume: 2910.028488888889
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 11607.04545,
                            optProductNeedVolume: 41054.549647222215
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 116.45865,
                            optProductNeedVolume: 582.2932500000001
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 6405.2257500000005,
                            optProductNeedVolume: 9251.992750000001
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1009.3083,
                            optProductNeedVolume: 4261.523933333334
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1203.40605,
                            optProductNeedVolume: 2406.8121
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 1125.7669500000002,
                            optProductNeedVolume: 1355.0898472222225
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 5590.0152,
                            optProductNeedVolume: 9316.692
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 543.4737,
                            optProductNeedVolume: 2214.152111111111
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1281.0451500000001,
                            optProductNeedVolume: 5456.3034166666675
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 388.19550000000004,
                            optProductNeedVolume: 1559.9708055555557
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1203.40605,
                            optProductNeedVolume: 2027.9620472222223
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 4503.067800000001,
                            optProductNeedVolume: 9006.135600000001
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 815.2105500000001,
                            optProductNeedVolume: 951.0789750000001
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 7763.910000000001,
                            optProductNeedVolume: 38819.55
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1164.5865000000001,
                            optProductNeedVolume: 4960.275833333334
                        }
                    ]
                },
                {
                    name: 'Васильків',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 58293.144,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2272.179,
                            optProductNeedVolume: 11360.895
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3134.04,
                            optProductNeedVolume: 10969.140000000001
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 626.808,
                            optProductNeedVolume: 3134.04
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 9793.875,
                            optProductNeedVolume: 39175.5
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 195.8775,
                            optProductNeedVolume: 979.3875
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 7795.9245,
                            optProductNeedVolume: 15591.849
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 1096.914,
                            optProductNeedVolume: 3839.1989999999996
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1371.1425000000002,
                            optProductNeedVolume: 2742.2850000000003
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3369.093,
                            optProductNeedVolume: 3369.093
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 6659.835,
                            optProductNeedVolume: 6659.835000000001
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 352.5795,
                            optProductNeedVolume: 1234.02825
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1762.8975,
                            optProductNeedVolume: 7933.03875
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 822.6855,
                            optProductNeedVolume: 2879.3992499999995
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3134.04,
                            optProductNeedVolume: 6268.08
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 5758.7985,
                            optProductNeedVolume: 11517.597
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1136.0895,
                            optProductNeedVolume: 1136.0895
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 7835.1,
                            optProductNeedVolume: 39175.5
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1175.2649999999999,
                            optProductNeedVolume: 4113.427499999999
                        }
                    ]
                },
                {
                    name: 'Вишгород',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 54119.13780000001,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2755.2798000000003,
                            optProductNeedVolume: 13776.399000000001
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 1598.7426,
                            optProductNeedVolume: 7993.713
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 612.2844,
                            optProductNeedVolume: 3061.422
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 12857.9724,
                            optProductNeedVolume: 51431.8896
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 136.06320000000002,
                            optProductNeedVolume: 680.3160000000001
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 7211.3496000000005,
                            optProductNeedVolume: 7211.3496000000005
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 1122.5214,
                            optProductNeedVolume: 4490.0856
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1700.7900000000002,
                            optProductNeedVolume: 3401.5800000000004
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 1428.6636000000003,
                            optProductNeedVolume: 2857.3272000000006
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 6463.002,
                            optProductNeedVolume: 12926.004
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 340.158,
                            optProductNeedVolume: 1700.79
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1428.6636000000003,
                            optProductNeedVolume: 5714.654400000001
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 408.18960000000004,
                            optProductNeedVolume: 2040.9480000000003
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 1564.7268000000001,
                            optProductNeedVolume: 1564.7268000000001
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 5544.575400000001,
                            optProductNeedVolume: 11089.150800000001
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1122.5214,
                            optProductNeedVolume: 1122.5214
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6803.160000000001,
                            optProductNeedVolume: 34015.8
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1020.474,
                            optProductNeedVolume: 4081.8959999999997
                        }
                    ]
                },
                {
                    name: 'Вишневе',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 7017.1434666666655,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 342.35682962962966,
                            optProductNeedVolume: 1711.7841481481482
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 392.2437037037035,
                            optProductNeedVolume: 1641.6125377229073
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 91.14290370370365,
                            optProductNeedVolume: 427.02138216735233
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 1490.7336888888888,
                            optProductNeedVolume: 5272.7802699588465
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 22.600355555555563,
                            optProductNeedVolume: 113.00177777777782
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 1015.9482666666667,
                            optProductNeedVolume: 1467.4808296296296
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 147.4954962962963,
                            optProductNeedVolume: 622.7587621399177
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 205.77594074074062,
                            optProductNeedVolume: 411.55188148148125
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 293.53768888888885,
                            optProductNeedVolume: 353.332403292181
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 885.8034370370372,
                            optProductNeedVolume: 1476.3390617283956
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 80.3469333333333,
                            optProductNeedVolume: 327.33935802469125
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 242.22717037037043,
                            optProductNeedVolume: 1031.7083182441702
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 88.26595555555554,
                            optProductNeedVolume: 354.69837695473245
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 255.01031111111104,
                            optProductNeedVolume: 429.73959835390934
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 759.2177185185185,
                            optProductNeedVolume: 1518.435437037037
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 151.88506666666672,
                            optProductNeedVolume: 177.1992444444445
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 480.4799999999992,
                            optProductNeedVolume: 2402.399999999996
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 72.07199999999996,
                            optProductNeedVolume: 306.97333333333313
                        }
                    ]
                },
                {
                    name: 'Ірпінь',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 130829.70600000003,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4787.2524,
                            optProductNeedVolume: 23936.262000000002
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5246.304,
                            optProductNeedVolume: 21956.753777777776
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1573.8912,
                            optProductNeedVolume: 7373.971733333334
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 23673.9468,
                            optProductNeedVolume: 83735.62664444445
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 327.894,
                            optProductNeedVolume: 1639.47
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 23214.8952,
                            optProductNeedVolume: 33532.626399999994
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2623.152,
                            optProductNeedVolume: 11075.530666666667
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3278.9400000000005,
                            optProductNeedVolume: 6557.880000000001
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 5311.8828,
                            optProductNeedVolume: 6393.933000000001
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 17050.488,
                            optProductNeedVolume: 28417.480000000007
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1377.1548000000003,
                            optProductNeedVolume: 5610.630666666668
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3869.1492,
                            optProductNeedVolume: 16479.709555555557
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1245.9972,
                            optProductNeedVolume: 5007.062822222222
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3869.1492,
                            optProductNeedVolume: 6520.232911111111
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 15542.1756,
                            optProductNeedVolume: 31084.3512
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2754.3096000000005,
                            optProductNeedVolume: 3213.3612000000003
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 13115.760000000002,
                            optProductNeedVolume: 65578.80000000002
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1967.364,
                            optProductNeedVolume: 8379.513333333332
                        }
                    ]
                },
                {
                    name: 'Обухів',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 19137.75675,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 667.18785,
                            optProductNeedVolume: 3335.9392500000004
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 596.9575500000001,
                            optProductNeedVolume: 2984.7877500000004
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 140.4606,
                            optProductNeedVolume: 561.8424
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 2633.63625,
                            optProductNeedVolume: 13168.18125
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 35.11515,
                            optProductNeedVolume: 175.57575
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 1474.8363000000002,
                            optProductNeedVolume: 1474.8363000000002
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 210.6909,
                            optProductNeedVolume: 1053.4545
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 316.03634999999997,
                            optProductNeedVolume: 632.0726999999999
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 561.8424,
                            optProductNeedVolume: 561.8424
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 1474.8363000000002,
                            optProductNeedVolume: 1474.8363000000004
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 140.4606,
                            optProductNeedVolume: 561.8424
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 280.9212,
                            optProductNeedVolume: 1123.6848
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 175.57575,
                            optProductNeedVolume: 702.303
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 807.64845,
                            optProductNeedVolume: 1615.2969
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 1439.72115,
                            optProductNeedVolume: 2879.4423
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 105.34545,
                            optProductNeedVolume: 105.34545
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 7023.030000000001,
                            optProductNeedVolume: 35115.15
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1053.4545,
                            optProductNeedVolume: 5267.2725
                        }
                    ]
                },
                {
                    name: 'Переяслав',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 81506.82026666666,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3976.6062518518524,
                            optProductNeedVolume: 19883.031259259264
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4556.061481481479,
                            optProductNeedVolume: 19067.961015089153
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1058.6598814814809,
                            optProductNeedVolume: 4960.017592866938
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 17315.445155555557,
                            optProductNeedVolume: 61245.37082798354
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 262.5118222222223,
                            optProductNeedVolume: 1312.5591111111114
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 11800.629866666668,
                            optProductNeedVolume: 17045.35425185185
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1713.2169185185187,
                            optProductNeedVolume: 7233.582544855968
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2390.166696296295,
                            optProductNeedVolume: 4780.33339259259
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3409.5531555555553,
                            optProductNeedVolume: 4104.091761316872
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 10288.947614814817,
                            optProductNeedVolume: 17148.24602469136
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 933.260533333333,
                            optProductNeedVolume: 3802.1725432098747
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2813.561748148149,
                            optProductNeedVolume: 11983.688927297673
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1025.2430222222222,
                            optProductNeedVolume: 4119.958070781893
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2962.0428444444437,
                            optProductNeedVolume: 4991.590719341562
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 8818.605807407408,
                            optProductNeedVolume: 17637.211614814816
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1764.2034666666673,
                            optProductNeedVolume: 2058.2373777777784
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5580.959999999992,
                            optProductNeedVolume: 27904.79999999996
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 837.1439999999997,
                            optProductNeedVolume: 3565.613333333332
                        }
                    ]
                },
                {
                    name: 'Славутич',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 28537.094250000002,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 959.01225,
                            optProductNeedVolume: 4795.06125
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 1814.3475,
                            optProductNeedVolume: 9071.737500000001
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 311.031,
                            optProductNeedVolume: 1555.155
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 3602.7757500000002,
                            optProductNeedVolume: 10808.327249999998
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 103.677,
                            optProductNeedVolume: 518.385
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 2721.52125,
                            optProductNeedVolume: 5443.0425
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 544.30425,
                            optProductNeedVolume: 2721.5212500000002
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1036.77,
                            optProductNeedVolume: 2073.54
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2436.4095,
                            optProductNeedVolume: 4872.819
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 3317.664,
                            optProductNeedVolume: 9952.992
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 103.677,
                            optProductNeedVolume: 518.385
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1477.39725,
                            optProductNeedVolume: 7386.98625
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 492.46575,
                            optProductNeedVolume: 2462.32875
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1166.36625,
                            optProductNeedVolume: 2332.7325
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 2099.45925,
                            optProductNeedVolume: 4198.9185
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 388.78875,
                            optProductNeedVolume: 777.5775
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5183.85,
                            optProductNeedVolume: 25919.25
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 777.5775,
                            optProductNeedVolume: 3887.8875
                        }
                    ]
                },
                {
                    name: 'Фастів',
                    blocked: '',
                    cityNeed: 2,
                    cityNeedVolume1D: 87386.14080000001,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3907.8931500000003,
                            optProductNeedVolume: 19539.465750000003
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5320.384650000001,
                            optProductNeedVolume: 26601.923250000003
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 847.4949,
                            optProductNeedVolume: 4237.4745
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 13748.2506,
                            optProductNeedVolume: 48118.8771
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 282.49830000000003,
                            optProductNeedVolume: 1412.4915
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 12006.17775,
                            optProductNeedVolume: 24012.3555
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1647.9067500000003,
                            optProductNeedVolume: 8239.533750000002
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2118.73725,
                            optProductNeedVolume: 4237.4745
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 5320.384650000001,
                            optProductNeedVolume: 7980.576975000002
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 10028.68965,
                            optProductNeedVolume: 20057.3793
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 612.07965,
                            optProductNeedVolume: 3060.39825
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3672.4779000000003,
                            optProductNeedVolume: 16526.150550000002
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1365.4084500000001,
                            optProductNeedVolume: 6827.04225
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 4849.55415,
                            optProductNeedVolume: 9699.1083
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 8757.4473,
                            optProductNeedVolume: 17514.8946
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2071.6542,
                            optProductNeedVolume: 3107.4813
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 9416.61,
                            optProductNeedVolume: 47083.05
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1412.4915,
                            optProductNeedVolume: 6356.21175
                        }
                    ]
                }
            ]
        },
        {
            region: 'Дніпропетровська',
            regionNeed: 3,
            regNeedVolume1D: 2561119.1219833335,
            optRegNeedVolume: 7465579.593580249,
            contacts: {
                phone_VCA: '+380 800 50 56 00',
                telegram_VCA: 'https://t.me/dnipropetrovskaODA  ',
                hum_center: '+380 67 563 42 00',
                red_cross: '+380 99 237 53 02'
            },
            cities: [
                {
                    name: 'Вільногірськ',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 68877.18879999997,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3360.4238111111113,
                            optProductNeedVolume: 16802.119055555555
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3850.0913888888867,
                            optProductNeedVolume: 15858.70976851851
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 894.6185888888884,
                            optProductNeedVolume: 4430.492059259257
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 14632.385133333333,
                            optProductNeedVolume: 43897.155399999996
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 221.8351333333334,
                            optProductNeedVolume: 1109.175666666667
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 9972.1006,
                            optProductNeedVolume: 9022.376733333334
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1447.7508111111113,
                            optProductNeedVolume: 7100.873025925926
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2019.8059777777767,
                            optProductNeedVolume: 4039.6119555555533
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 2881.236633333333,
                            optProductNeedVolume: 960.412211111111
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 8694.65628888889,
                            optProductNeedVolume: 12006.906303703705
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 788.6500999999997,
                            optProductNeedVolume: 3473.8159166666655
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2377.5951888888894,
                            optProductNeedVolume: 9170.724300000002
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 866.3797333333332,
                            optProductNeedVolume: 4166.873955555555
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2503.068866666666,
                            optProductNeedVolume: 3158.6345222222217
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 7452.146644444445,
                            optProductNeedVolume: 14904.29328888889
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 1490.8369000000005,
                            optProductNeedVolume: 1135.8757333333335
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4716.179999999993,
                            optProductNeedVolume: 23580.899999999965
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 707.4269999999997,
                            optProductNeedVolume: 2661.272999999999
                        }
                    ]
                },
                {
                    name: 'Дніпро',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 813696.3660000002,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 29869.8666,
                            optProductNeedVolume: 149349.333
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 32959.8528,
                            optProductNeedVolume: 110650.9344
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 9269.9586,
                            optProductNeedVolume: 45025.5132
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 144199.35600000003,
                            optProductNeedVolume: 432598.0680000001
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 3089.9862000000003,
                            optProductNeedVolume: 15449.931
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 82399.632,
                            optProductNeedVolume: 58856.87999999999
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 14419.9356,
                            optProductNeedVolume: 67979.6964
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 19569.9126,
                            optProductNeedVolume: 39139.8252
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 28839.8712,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 76219.6596,
                            optProductNeedVolume: 87108.18239999999
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 5149.977,
                            optProductNeedVolume: 16553.497499999998
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 22659.8988,
                            optProductNeedVolume: 80928.20999999999
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 7209.9678,
                            optProductNeedVolume: 31929.8574
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 17509.9218,
                            optProductNeedVolume: 31267.7175
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 63859.7148,
                            optProductNeedVolume: 127719.4296
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 19569.9126,
                            optProductNeedVolume: 5591.403600000005
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 205999.08000000002,
                            optProductNeedVolume: 1029995.4000000001
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 30899.862,
                            optProductNeedVolume: 132427.97999999998
                        }
                    ]
                },
                {
                    name: 'Жовті Води',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 131574.50693333332,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 6419.340187037037,
                            optProductNeedVolume: 32096.700935185185
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 7354.740879629626,
                            optProductNeedVolume: 30294.5279089506
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1708.9692796296288,
                            optProductNeedVolume: 8463.46690864197
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 27951.90821111111,
                            optProductNeedVolume: 83855.72463333333
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 423.76654444444455,
                            optProductNeedVolume: 2118.832722222223
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 19049.474033333332,
                            optProductNeedVolume: 17235.238411111113
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2765.6050203703703,
                            optProductNeedVolume: 13564.634147530864
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3858.388825925924,
                            optProductNeedVolume: 7716.777651851848
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 5503.959961111111,
                            optProductNeedVolume: 1834.6533203703693
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 16609.201596296298,
                            optProductNeedVolume: 22936.516490123457
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1506.540116666666,
                            optProductNeedVolume: 6635.950513888886
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 4541.865312962965,
                            optProductNeedVolume: 17518.623350000005
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1655.0252444444443,
                            optProductNeedVolume: 7959.883318518518
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 4781.554788888888,
                            optProductNeedVolume: 6033.866757407406
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 14235.664048148148,
                            optProductNeedVolume: 28471.328096296296
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 2847.911383333334,
                            optProductNeedVolume: 2169.837244444445
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 9009.209999999986,
                            optProductNeedVolume: 45046.04999999993
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1351.3814999999995,
                            optProductNeedVolume: 5083.768499999998
                        }
                    ]
                },
                {
                    name: 'Кам’янське',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 93618.07560000001,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2171.5533,
                            optProductNeedVolume: 10857.7665
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 2171.5533,
                            optProductNeedVolume: 10857.7665
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 723.8511000000001,
                            optProductNeedVolume: 3619.2555
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 8927.4969,
                            optProductNeedVolume: 26782.4907
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 241.2837,
                            optProductNeedVolume: 1206.4185
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 4825.674,
                            optProductNeedVolume: 4825.674
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 965.1348,
                            optProductNeedVolume: 4825.674
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1447.7022000000002,
                            optProductNeedVolume: 2895.4044000000004
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2412.837,
                            optProductNeedVolume: 2412.837
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 5066.957700000001,
                            optProductNeedVolume: 10133.915400000002
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 241.2837,
                            optProductNeedVolume: 1206.4185
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1206.4185,
                            optProductNeedVolume: 4825.674
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 482.5674,
                            optProductNeedVolume: 2412.837
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 1206.4185,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 3136.6881,
                            optProductNeedVolume: 6273.3762
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2895.4044000000004,
                            optProductNeedVolume: 2895.4044000000004
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 48256.740000000005,
                            optProductNeedVolume: 241283.7
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 7238.511,
                            optProductNeedVolume: 21715.533
                        }
                    ]
                },
                {
                    name: 'Кривий Ріг',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 339708.6,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 14797.9125,
                            optProductNeedVolume: 73989.5625
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 12867.75,
                            optProductNeedVolume: 53002.875
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2573.55,
                            optProductNeedVolume: 12745.2
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 52114.387500000004,
                            optProductNeedVolume: 156343.16250000003
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 643.3875,
                            optProductNeedVolume: 3216.9375
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 22518.562500000004,
                            optProductNeedVolume: 20373.937500000007
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 4503.712500000001,
                            optProductNeedVolume: 22089.637500000004
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 6433.875,
                            optProductNeedVolume: 12867.75
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 10294.2,
                            optProductNeedVolume: 3431.399999999998
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 21231.787500000002,
                            optProductNeedVolume: 29320.087499999994
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1930.1625000000001,
                            optProductNeedVolume: 8501.90625
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 9007.425000000001,
                            optProductNeedVolume: 34742.925
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2573.55,
                            optProductNeedVolume: 12377.55
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 7720.650000000001,
                            optProductNeedVolume: 9742.725
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 17371.4625,
                            optProductNeedVolume: 34742.925
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 5147.1,
                            optProductNeedVolume: 3921.6000000000004
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 128677.5,
                            optProductNeedVolume: 643387.5
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 19301.625,
                            optProductNeedVolume: 72610.875
                        }
                    ]
                },
                {
                    name: 'Марганець',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 140214.0581333333,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 6840.852070370371,
                            optProductNeedVolume: 34204.26035185185
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 7837.673796296292,
                            optProductNeedVolume: 32283.75158950615
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1821.1849962962951,
                            optProductNeedVolume: 9019.201886419747
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 29787.30891111111,
                            optProductNeedVolume: 89361.92673333334
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 451.59224444444453,
                            optProductNeedVolume: 2257.9612222222227
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 20300.31593333333,
                            optProductNeedVolume: 18366.95251111111
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2947.2024037037036,
                            optProductNeedVolume: 14455.326075308642
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 4111.741459259257,
                            optProductNeedVolume: 8223.482918518514
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 5865.36541111111,
                            optProductNeedVolume: 1955.1218037037033
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 17699.808362962965,
                            optProductNeedVolume: 24442.592501234565
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1605.463766666666,
                            optProductNeedVolume: 7071.685638888886
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 4840.096929629631,
                            optProductNeedVolume: 18668.945300000003
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1763.6988444444441,
                            optProductNeedVolume: 8482.551585185183
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 5095.525088888888,
                            optProductNeedVolume: 6430.067374074072
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 15170.417681481482,
                            optProductNeedVolume: 30340.835362962964
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 3034.913233333334,
                            optProductNeedVolume: 2312.314844444445
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 9600.779999999984,
                            optProductNeedVolume: 48003.89999999992
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1440.1169999999993,
                            optProductNeedVolume: 5417.582999999997
                        }
                    ]
                },
                {
                    name: 'Нікополь',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 329584.9237333332,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 16079.997525925928,
                            optProductNeedVolume: 80399.98762962964
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 18423.110740740733,
                            optProductNeedVolume: 75885.67043209872
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 4280.848340740738,
                            optProductNeedVolume: 21200.39178271604
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 70017.57217777778,
                            optProductNeedVolume: 210052.71653333333
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 1061.5055111111114,
                            optProductNeedVolume: 5307.527555555557
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 47717.59813333333,
                            optProductNeedVolume: 43173.06497777778
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 6927.64685925926,
                            optProductNeedVolume: 33978.458404938276
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 9664.993748148143,
                            optProductNeedVolume: 19329.987496296286
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 13787.034177777776,
                            optProductNeedVolume: 4595.678059259259
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 41604.88660740742,
                            optProductNeedVolume: 57454.36721975308
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 3773.7774666666655,
                            optProductNeedVolume: 16622.591222222218
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 11377.054474074079,
                            optProductNeedVolume: 43882.92440000002
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 4145.722311111111,
                            optProductNeedVolume: 19938.95016296296
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 11977.45982222222,
                            optProductNeedVolume: 15114.41358518518
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 35659.34130370371,
                            optProductNeedVolume: 71318.68260740742
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 7133.818533333336,
                            optProductNeedVolume: 5435.290311111114
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 22567.439999999966,
                            optProductNeedVolume: 112837.19999999984
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 3385.1159999999986,
                            optProductNeedVolume: 12734.483999999997
                        }
                    ]
                },
                {
                    name: 'Новомосковськ',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 215390.72799999997,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 10508.618944444444,
                            optProductNeedVolume: 52543.094722222224
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 12039.893055555549,
                            optProductNeedVolume: 49592.89282407405
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2797.625055555554,
                            optProductNeedVolume: 13854.90503703703
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 45757.96633333333,
                            optProductNeedVolume: 137273.899
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 693.7163333333335,
                            optProductNeedVolume: 3468.581666666668
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 31184.461,
                            optProductNeedVolume: 28214.51233333334
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 4527.363944444444,
                            optProductNeedVolume: 22205.642203703705
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 6316.278111111107,
                            optProductNeedVolume: 12632.556222222214
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 9010.118833333332,
                            optProductNeedVolume: 3003.3729444444434
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 27189.674555555557,
                            optProductNeedVolume: 37547.645814814816
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 2466.2434999999987,
                            optProductNeedVolume: 10863.21541666666
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 7435.146055555558,
                            optProductNeedVolume: 28678.420500000007
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2709.317333333333,
                            optProductNeedVolume: 13030.526222222219
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 7827.523666666664,
                            optProductNeedVolume: 9877.589388888886
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 23304.134777777777,
                            optProductNeedVolume: 46608.269555555555
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 4662.101500000001,
                            optProductNeedVolume: 3552.0773333333336
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 14748.299999999976,
                            optProductNeedVolume: 73741.49999999988
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 2212.244999999999,
                            optProductNeedVolume: 8322.254999999996
                        }
                    ]
                },
                {
                    name: 'Павлоград',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 51191.20545000001,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 1515.1731000000002,
                            optProductNeedVolume: 7575.865500000001
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 1406.9464500000001,
                            optProductNeedVolume: 5627.785800000001
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 432.9066,
                            optProductNeedVolume: 2164.5330000000004
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 6060.692400000001,
                            optProductNeedVolume: 18182.0772
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 108.22665,
                            optProductNeedVolume: 541.1332500000001
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 3355.02615,
                            optProductNeedVolume: 3355.02615
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 757.5865500000001,
                            optProductNeedVolume: 3787.9327500000004
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1082.2665000000002,
                            optProductNeedVolume: 2164.5330000000004
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 1623.39975,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 3463.2528,
                            optProductNeedVolume: 3463.2528
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 216.4533,
                            optProductNeedVolume: 1082.2665000000002
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 865.8132,
                            optProductNeedVolume: 3463.2528000000007
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 324.67995,
                            optProductNeedVolume: 1623.39975
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 865.8132,
                            optProductNeedVolume: 1731.6264
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 2164.5330000000004,
                            optProductNeedVolume: 4329.066000000001
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2056.3063500000003,
                            optProductNeedVolume: 2056.3063500000003
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 21645.33,
                            optProductNeedVolume: 108226.65000000001
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 3246.7995,
                            optProductNeedVolume: 12987.198
                        }
                    ]
                },
                {
                    name: 'Першотравенськ',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 84564.55279999999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4125.788838888889,
                            optProductNeedVolume: 20628.944194444444
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4726.982361111109,
                            optProductNeedVolume: 19470.665439814806
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1098.3755611111105,
                            optProductNeedVolume: 5439.574207407404
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 17965.034966666666,
                            optProductNeedVolume: 53895.10489999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 272.35996666666676,
                            optProductNeedVolume: 1361.799833333334
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 12243.3311,
                            optProductNeedVolume: 11077.299566666668
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1777.4883388888888,
                            optProductNeedVolume: 8718.15709074074
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2479.8339222222207,
                            optProductNeedVolume: 4959.6678444444415
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 3537.462716666666,
                            optProductNeedVolume: 1179.1542388888884
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 10674.938011111113,
                            optProductNeedVolume: 14741.581062962963
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 968.2718499999996,
                            optProductNeedVolume: 4265.006958333332
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2919.112661111112,
                            optProductNeedVolume: 11259.434550000004
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1063.7050666666664,
                            optProductNeedVolume: 5115.914844444444
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3073.1640333333326,
                            optProductNeedVolume: 3878.040327777777
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 9149.436255555556,
                            optProductNeedVolume: 18298.872511111113
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 1830.3876500000006,
                            optProductNeedVolume: 1394.581066666667
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5790.329999999991,
                            optProductNeedVolume: 28951.649999999954
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 868.5494999999996,
                            optProductNeedVolume: 3267.400499999998
                        }
                    ]
                },
                {
                    name: 'Покров',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 116883.89626666662,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 5702.605390740741,
                            optProductNeedVolume: 28513.026953703706
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 6533.566342592589,
                            optProductNeedVolume: 26912.07088734566
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1518.1587425925918,
                            optProductNeedVolume: 7518.500439506169
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 24831.01032222222,
                            optProductNeedVolume: 74493.03096666667
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 376.451988888889,
                            optProductNeedVolume: 1882.259944444445
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 16922.554366666667,
                            optProductNeedVolume: 15310.882522222226
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2456.8185574074078,
                            optProductNeedVolume: 12050.110067283953
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3427.590418518517,
                            optProductNeedVolume: 6855.180837037034
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 4889.429572222221,
                            optProductNeedVolume: 1629.8098574074065
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 14754.744225925928,
                            optProductNeedVolume: 20375.599169135803
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1338.3312833333327,
                            optProductNeedVolume: 5895.030652777776
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 4034.7551092592607,
                            optProductNeedVolume: 15562.626850000004
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1470.2376888888887,
                            optProductNeedVolume: 7071.143170370369
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 4247.682677777777,
                            optProductNeedVolume: 5360.170998148147
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 12646.217862962963,
                            optProductNeedVolume: 25292.435725925927
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 2529.935216666667,
                            optProductNeedVolume: 1927.5696888888892
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 8003.309999999988,
                            optProductNeedVolume: 40016.54999999994
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1200.4964999999995,
                            optProductNeedVolume: 4516.153499999998
                        }
                    ]
                },
                {
                    name: 'Синельникове',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 92072.4056,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4492.086705555556,
                            optProductNeedVolume: 22460.433527777783
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5146.655694444442,
                            optProductNeedVolume: 21199.31988425925
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1195.8920944444437,
                            optProductNeedVolume: 5922.513229629626
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 19560.015766666667,
                            optProductNeedVolume: 58680.0473
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 296.54076666666674,
                            optProductNeedVolume: 1482.7038333333337
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 13330.324700000001,
                            optProductNeedVolume: 12060.769966666669
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1935.2982055555558,
                            optProductNeedVolume: 9492.176912962963
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2699.9997888888875,
                            optProductNeedVolume: 5399.999577777775
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 3851.527516666666,
                            optProductNeedVolume: 1283.8425055555554
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 11622.685744444447,
                            optProductNeedVolume: 16050.375551851852
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1054.2374499999996,
                            optProductNeedVolume: 4643.664958333332
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3178.2787944444453,
                            optProductNeedVolume: 12259.075350000003
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1158.1434666666667,
                            optProductNeedVolume: 5570.118577777777
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3346.007233333333,
                            optProductNeedVolume: 4222.34246111111
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 9961.746122222223,
                            optProductNeedVolume: 19923.492244444446
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 1992.8940500000006,
                            optProductNeedVolume: 1518.3954666666668
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6304.409999999991,
                            optProductNeedVolume: 31522.049999999952
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 945.6614999999996,
                            optProductNeedVolume: 3557.4884999999986
                        }
                    ]
                },
                {
                    name: 'Тернівка',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 83742.61466666665,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4085.687601851852,
                            optProductNeedVolume: 20428.43800925926
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4681.037731481479,
                            optProductNeedVolume: 19281.417322530855
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1087.6997314814807,
                            optProductNeedVolume: 5386.703432098761
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 17790.421055555555,
                            optProductNeedVolume: 53371.26316666666
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 269.7127222222223,
                            optProductNeedVolume: 1348.5636111111114
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 12124.330166666667,
                            optProductNeedVolume: 10969.632055555558
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1760.2117685185185,
                            optProductNeedVolume: 8633.41962654321
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2455.730796296295,
                            optProductNeedVolume: 4911.46159259259
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 3503.0798055555547,
                            optProductNeedVolume: 1167.6932685185184
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 10571.181314814816,
                            optProductNeedVolume: 14598.298006172841
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 958.8605833333329,
                            optProductNeedVolume: 4223.552569444442
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2890.7398981481488,
                            optProductNeedVolume: 11149.996750000002
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1053.366222222222,
                            optProductNeedVolume: 5066.189925925924
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3043.2939444444437,
                            optProductNeedVolume: 3840.3471203703693
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 9060.506907407407,
                            optProductNeedVolume: 18121.013814814814
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 1812.596916666667,
                            optProductNeedVolume: 1381.0262222222223
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5734.049999999991,
                            optProductNeedVolume: 28670.249999999956
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 860.1074999999996,
                            optProductNeedVolume: 3235.642499999999
                        }
                    ]
                }
            ]
        },
        {
            region: 'Вінницька',
            regionNeed: 3,
            regNeedVolume1D: 860688.3083466669,
            optRegNeedVolume: 2380941.086687129,
            contacts: {
                phone_VCA: '+380 800 21 64 33',
                telegram_VCA: 'https://t.me/vinnytskaODA',
                hum_center: '+380 97 743 82 48',
                red_cross: '+380 43 261 10 93'
            },
            cities: [
                {
                    name: 'Вінниця',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 390302.1491599999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 15494.827809999997,
                            optProductNeedVolume: 77474.13904999998
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 17169.94433,
                            optProductNeedVolume: 53656.07603124999
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 4187.7913,
                            optProductNeedVolume: 13086.8478125
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 64491.98601999999,
                            optProductNeedVolume: 201537.45631249994
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 1256.33739,
                            optProductNeedVolume: 6281.686949999999
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 51928.61211999999,
                            optProductNeedVolume: 38946.45908999999
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 7119.24521,
                            optProductNeedVolume: 28476.980839999997
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 10469.47825,
                            optProductNeedVolume: 20938.9565
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 12982.153029999998,
                            optProductNeedVolume: 3245.5382575000003
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 38527.679959999994,
                            optProductNeedVolume: 52975.55994499999
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 3350.2330399999996,
                            optProductNeedVolume: 11307.03651
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 10050.69912,
                            optProductNeedVolume: 32664.772139999997
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 3769.012169999999,
                            optProductNeedVolume: 16489.428243749993
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 15913.606939999998,
                            optProductNeedVolume: 31827.213879999996
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 32245.993009999995,
                            optProductNeedVolume: 64491.98601999999
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 5025.34956,
                            optProductNeedVolume: 5653.518255
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 83755.826,
                            optProductNeedVolume: 418779.13
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 12563.373899999999,
                            optProductNeedVolume: 48683.073862499994
                        }
                    ]
                },
                {
                    name: 'Гайсин',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 85429.54483555551,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4167.99061691358,
                            optProductNeedVolume: 20839.9530845679
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4775.333614197528,
                            optProductNeedVolume: 19399.792807677455
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1109.6106008641968,
                            optProductNeedVolume: 4507.7930660107995
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 18148.795320740737,
                            optProductNeedVolume: 55580.685669768514
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 275.1458762962963,
                            optProductNeedVolume: 1375.7293814814816
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 12368.565415555553,
                            optProductNeedVolume: 10822.494738611109
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1795.6698724691355,
                            optProductNeedVolume: 8080.51442611111
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2505.1995928395045,
                            optProductNeedVolume: 5010.399185679009
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3573.646637407406,
                            optProductNeedVolume: 4020.352467083332
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 10784.129581975309,
                            optProductNeedVolume: 18198.218669583337
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 978.1760877777773,
                            optProductNeedVolume: 4096.1123675694425
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2948.9716164197534,
                            optProductNeedVolume: 10690.022109521606
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1074.5854696296294,
                            optProductNeedVolume: 5037.119388888887
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 3104.5987459259245,
                            optProductNeedVolume: 3104.5987459259245
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 9243.02380765432,
                            optProductNeedVolume: 18486.04761530864
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1849.110278888889,
                            optProductNeedVolume: 2889.234810763889
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5849.55799999999,
                            optProductNeedVolume: 29247.78999999995
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 877.4336999999995,
                            optProductNeedVolume: 3454.895193749998
                        }
                    ]
                },
                {
                    name: 'Жмеринка',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 112540.7097422222,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 5490.707262098765,
                            optProductNeedVolume: 27453.536310493822
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 6290.791262345674,
                            optProductNeedVolume: 25556.339503279298
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1461.7468090123446,
                            optProductNeedVolume: 5938.34641161265
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 23908.33651629629,
                            optProductNeedVolume: 73219.28058115739
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 362.46373851851854,
                            optProductNeedVolume: 1812.3186925925927
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 16293.74396222222,
                            optProductNeedVolume: 14257.025966944442
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2365.5277843209874,
                            optProductNeedVolume: 10644.875029444443
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3300.2275824691333,
                            optProductNeedVolume: 6600.4551649382665
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 4707.7475329629615,
                            optProductNeedVolume: 5296.215974583331
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 14206.485583456788,
                            optProductNeedVolume: 23973.444422083332
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1288.6014011111104,
                            optProductNeedVolume: 5396.018367152774
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3884.831171234568,
                            optProductNeedVolume: 14082.51299572531
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1415.6064118518514,
                            optProductNeedVolume: 6635.655055555553
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 4089.846750370368,
                            optProductNeedVolume: 4089.846750370368
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 12176.30810839506,
                            optProductNeedVolume: 24352.61621679012
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2435.9275655555557,
                            optProductNeedVolume: 3806.1368211805557
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 7705.921999999986,
                            optProductNeedVolume: 38529.60999999993
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1155.8882999999992,
                            optProductNeedVolume: 4551.310181249996
                        }
                    ]
                },
                {
                    name: 'Козятин',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 74705.88099555552,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3644.7977291358025,
                            optProductNeedVolume: 18223.988645679012
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4175.9031419753055,
                            optProductNeedVolume: 16964.606514274677
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 970.3251686419746,
                            optProductNeedVolume: 3941.9459976080216
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 15870.642247407404,
                            optProductNeedVolume: 48603.84188268517
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 240.607802962963,
                            optProductNeedVolume: 1203.0390148148151
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 10815.983835555555,
                            optProductNeedVolume: 9463.98585611111
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1570.2658846913578,
                            optProductNeedVolume: 7066.19648111111
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2190.7308883950604,
                            optProductNeedVolume: 4381.461776790121
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3125.059614074073,
                            optProductNeedVolume: 3515.6920658333324
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 9430.436539753086,
                            optProductNeedVolume: 15913.861660833332
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 855.3891577777773,
                            optProductNeedVolume: 3581.942098194442
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2578.797804197531,
                            optProductNeedVolume: 9348.142040216051
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 939.696616296296,
                            optProductNeedVolume: 4404.827888888888
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 2714.8896192592583,
                            optProductNeedVolume: 2714.8896192592583
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 8082.780236543209,
                            optProductNeedVolume: 16165.560473086418
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1616.9981088888892,
                            optProductNeedVolume: 2526.5595451388895
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5115.2839999999915,
                            optProductNeedVolume: 25576.41999999996
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 767.2925999999995,
                            optProductNeedVolume: 3021.2146124999986
                        }
                    ]
                },
                {
                    name: 'Ладижин',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 74570.55621333332,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3638.195418148148,
                            optProductNeedVolume: 18190.97709074074
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4168.338768518515,
                            optProductNeedVolume: 16933.87624710647
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 968.5674885185177,
                            optProductNeedVolume: 3934.805422106478
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 15841.893624444441,
                            optProductNeedVolume: 48515.7992248611
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 240.1719577777778,
                            optProductNeedVolume: 1200.859788888889
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 10796.391393333332,
                            optProductNeedVolume: 9446.842469166666
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1567.4214514814812,
                            optProductNeedVolume: 7053.396531666665
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2186.7625237037023,
                            optProductNeedVolume: 4373.525047407405
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3119.3987744444435,
                            optProductNeedVolume: 3509.3236212499987
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 9413.353925185185,
                            optProductNeedVolume: 15885.034748750002
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 853.8396766666662,
                            optProductNeedVolume: 3575.4536460416643
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2574.126481851852,
                            optProductNeedVolume: 9331.208496712963
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 937.9944177777775,
                            optProductNeedVolume: 4396.848833333333
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 2709.9717755555544,
                            optProductNeedVolume: 2709.9717755555544
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 8068.138812592591,
                            optProductNeedVolume: 16136.277625185183
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1614.0690233333335,
                            optProductNeedVolume: 2521.9828489583333
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5106.017999999991,
                            optProductNeedVolume: 25530.089999999953
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 765.9026999999995,
                            optProductNeedVolume: 3015.741881249998
                        }
                    ]
                },
                {
                    name: 'Могилів-Подільський',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 99632.04575999998,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4860.911206666667,
                            optProductNeedVolume: 24304.556033333334
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5569.22383333333,
                            optProductNeedVolume: 22624.971822916654
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1294.0812733333325,
                            optProductNeedVolume: 5257.205172916663
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 21165.998359999998,
                            optProductNeedVolume: 64820.86997749999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 320.8883600000001,
                            optProductNeedVolume: 1604.4418000000005
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 14424.81612,
                            optProductNeedVolume: 12621.714105
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2094.1966066666664,
                            optProductNeedVolume: 9423.884729999998
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2921.6843066666647,
                            optProductNeedVolume: 5843.368613333329
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 4167.7586599999995,
                            optProductNeedVolume: 4688.728492499999
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 12576.970813333333,
                            optProductNeedVolume: 21223.6382475
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1140.7960199999995,
                            optProductNeedVolume: 4777.083333749998
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3439.232593333334,
                            optProductNeedVolume: 12467.218150833336
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1253.2332799999997,
                            optProductNeedVolume: 5874.530999999998
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 3620.732439999999,
                            optProductNeedVolume: 3620.732439999999
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 10779.659106666666,
                            optProductNeedVolume: 21559.318213333332
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2156.5213800000006,
                            optProductNeedVolume: 3369.564656250001
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6822.035999999989,
                            optProductNeedVolume: 34110.17999999995
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1023.3053999999995,
                            optProductNeedVolume: 4029.2650124999977
                        }
                    ]
                },
                {
                    name: 'Хмільник',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 23507.42164,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 859.2791199999999,
                            optProductNeedVolume: 4296.3956
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 1810.6238599999997,
                            optProductNeedVolume: 9053.119299999998
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 214.81977999999998,
                            optProductNeedVolume: 1074.0989
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 3651.9362599999995,
                            optProductNeedVolume: 10955.808779999998
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 61.37707999999999,
                            optProductNeedVolume: 306.88539999999995
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 2669.9029799999994,
                            optProductNeedVolume: 2669.9029799999994
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 337.57393999999994,
                            optProductNeedVolume: 1687.8696999999997
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 552.3937199999999,
                            optProductNeedVolume: 1104.7874399999998
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 1503.73846,
                            optProductNeedVolume: 3007.47692
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 1166.1645199999998,
                            optProductNeedVolume: 2332.3290399999996
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 184.13124,
                            optProductNeedVolume: 920.6561999999999
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 644.45934,
                            optProductNeedVolume: 2577.83736
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 245.50831999999997,
                            optProductNeedVolume: 1227.5415999999998
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 1196.85306,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 1258.23014,
                            optProductNeedVolume: 2516.46028
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 92.06562,
                            optProductNeedVolume: 184.13124
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6137.708,
                            optProductNeedVolume: 30688.539999999997
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 920.6561999999999,
                            optProductNeedVolume: 3682.624799999999
                        }
                    ]
                }
            ]
        },
        {
            region: 'Черкаська',
            regionNeed: 3,
            regNeedVolume1D: 384651.00400888897,
            optRegNeedVolume: 1228802.128582798,
            contacts: {
                phone_VCA: '+380 68 621 80 29',
                telegram_VCA: 'https://t.me/sergiychuk_sergey/',
                hum_center: '+38 068 621 80 29',
                red_cross: '+380 47 263 87 34'
            },
            cities: [
                {
                    name: 'Золотоноша',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 93034.04984888888,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4539.004012839506,
                            optProductNeedVolume: 22695.020064197528
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5200.409604938268,
                            optProductNeedVolume: 20801.63841975307
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1208.3825116049375,
                            optProductNeedVolume: 5840.515472757198
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 19764.309078518516,
                            optProductNeedVolume: 65881.03026172839
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 299.6379674074075,
                            optProductNeedVolume: 1498.1898370370373
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 13469.552408888887,
                            optProductNeedVolume: 13469.552408888887
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1955.511301728395,
                            optProductNeedVolume: 8147.963757201646
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2728.1997609876526,
                            optProductNeedVolume: 5456.399521975305
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3891.7545451851843,
                            optProductNeedVolume: 5189.006060246913
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 11744.078129382717,
                            optProductNeedVolume: 11744.078129382717
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1065.248364444444,
                            optProductNeedVolume: 4438.534851851849
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3211.4741204938277,
                            optProductNeedVolume: 12845.896481975311
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1170.2396207407405,
                            optProductNeedVolume: 4095.838672592591
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3380.954388148147,
                            optProductNeedVolume: 6198.416378271602
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 10065.790931358024,
                            optProductNeedVolume: 20131.581862716048
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2013.7087022222227,
                            optProductNeedVolume: 2013.7087022222227
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6370.255999999989,
                            optProductNeedVolume: 31851.279999999948
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 955.5383999999995,
                            optProductNeedVolume: 4459.179199999998
                        }
                    ]
                },
                {
                    name: 'Канів',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 50628.28236,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 1826.65316,
                            optProductNeedVolume: 9133.265800000001
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 2290.13232,
                            optProductNeedVolume: 9160.52928
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 545.2696,
                            optProductNeedVolume: 2726.348
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 8697.05012,
                            optProductNeedVolume: 34788.20048
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 163.58088,
                            optProductNeedVolume: 817.9044
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 7115.76828,
                            optProductNeedVolume: 14231.53656
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 1008.74876,
                            optProductNeedVolume: 4034.9950400000002
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1172.32964,
                            optProductNeedVolume: 2344.65928
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3189.8271600000003,
                            optProductNeedVolume: 3189.8271600000003
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 6325.12736,
                            optProductNeedVolume: 6325.127360000002
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 327.16176,
                            optProductNeedVolume: 981.48528
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1335.9105200000001,
                            optProductNeedVolume: 5343.6420800000005
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 790.64092,
                            optProductNeedVolume: 2371.92276
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2971.71932,
                            optProductNeedVolume: 5943.43864
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 5316.3786,
                            optProductNeedVolume: 10632.7572
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1281.38356,
                            optProductNeedVolume: 1281.38356
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5452.696,
                            optProductNeedVolume: 27263.48
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 817.9044,
                            optProductNeedVolume: 4089.522
                        }
                    ]
                },
                {
                    name: 'Сміла',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 33620.396,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 771.11,
                            optProductNeedVolume: 3855.55
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 925.332,
                            optProductNeedVolume: 3701.328
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 231.333,
                            optProductNeedVolume: 1118.1095
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 4626.66,
                            optProductNeedVolume: 15422.199999999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 77.111,
                            optProductNeedVolume: 385.555
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 1927.775,
                            optProductNeedVolume: 1927.775
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 385.555,
                            optProductNeedVolume: 1606.4791666666667
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 539.777,
                            optProductNeedVolume: 1079.554
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 771.11,
                            optProductNeedVolume: 1028.1466666666668
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 2390.441,
                            optProductNeedVolume: 2390.441
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 308.444,
                            optProductNeedVolume: 1285.1833333333334
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 462.666,
                            optProductNeedVolume: 1850.664
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 231.333,
                            optProductNeedVolume: 809.6655
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 848.221,
                            optProductNeedVolume: 1555.0718333333334
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 1156.665,
                            optProductNeedVolume: 2313.33
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 231.333,
                            optProductNeedVolume: 231.333
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 15422.2,
                            optProductNeedVolume: 77111
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 2313.33,
                            optProductNeedVolume: 10795.539999999999
                        }
                    ]
                },
                {
                    name: 'Умань',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 47649.31999999999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 857.6877599999999,
                            optProductNeedVolume: 4288.4388
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 952.9864,
                            optProductNeedVolume: 3811.9456
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 381.19456,
                            optProductNeedVolume: 1905.9728
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 7623.8912,
                            optProductNeedVolume: 22871.6736
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 95.29864,
                            optProductNeedVolume: 476.4932
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 4193.14016,
                            optProductNeedVolume: 4193.14016
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 667.09048,
                            optProductNeedVolume: 2668.36192
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 762.38912,
                            optProductNeedVolume: 1524.77824
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 762.38912,
                            optProductNeedVolume: 762.38912
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 3621.34832,
                            optProductNeedVolume: 3621.348319999999
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 381.19456,
                            optProductNeedVolume: 1905.9728
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 857.6877599999999,
                            optProductNeedVolume: 4288.4388
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 285.89592,
                            optProductNeedVolume: 857.6877599999999
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 762.38912,
                            optProductNeedVolume: 1524.77824
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 2954.2578399999998,
                            optProductNeedVolume: 5908.5156799999995
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 571.79184,
                            optProductNeedVolume: 571.79184
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 19059.728,
                            optProductNeedVolume: 95298.64
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 2858.9592,
                            optProductNeedVolume: 14294.795999999998
                        }
                    ]
                },
                {
                    name: 'Черкаси',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 159718.9558,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4427.85224,
                            optProductNeedVolume: 22139.2612
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4427.85224,
                            optProductNeedVolume: 17711.40896
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1265.1006399999999,
                            optProductNeedVolume: 5692.952879999999
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 19925.335079999997,
                            optProductNeedVolume: 59776.005239999984
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 316.27515999999997,
                            optProductNeedVolume: 1581.3757999999998
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 16762.583479999998,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2530.2012799999998,
                            optProductNeedVolume: 11385.905759999998
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2846.4764399999995,
                            optProductNeedVolume: 5692.952879999999
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3162.7515999999996,
                            optProductNeedVolume: 6325.503199999999
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 12651.006399999998,
                            optProductNeedVolume: 12651.006399999998
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 948.82548,
                            optProductNeedVolume: 4269.71466
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1897.65096,
                            optProductNeedVolume: 5692.952879999999
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1265.1006399999999,
                            optProductNeedVolume: 5692.952879999999
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3162.7515999999996,
                            optProductNeedVolume: 4744.127399999999
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 9171.97964,
                            optProductNeedVolume: 18343.95928
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2213.92612,
                            optProductNeedVolume: 2213.92612
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 63255.032,
                            optProductNeedVolume: 316275.16
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 9488.254799999999,
                            optProductNeedVolume: 37953.019199999995
                        }
                    ]
                }
            ]
        },
        {
            region: 'м. Київ',
            regionNeed: 3,
            regNeedVolume1D: 1926720.3591999994,
            optRegNeedVolume: 5667123.028297872,
            contacts: {
                phone_VCA: 1551,
                telegram_VCA: 'https://t.me/KyivCityOfficial',
                hum_center: 'https://potreby.kyivcity.gov.ua/',
                red_cross: '+380 44 235 80 00'
            },
            cities: [
                {
                    name: 'Київ',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 1926720.3591999994,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 76305.75679999999,
                            optProductNeedVolume: 381528.7839999999
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 84481.37359999999,
                            optProductNeedVolume: 331634.328280851
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 23164.2476,
                            optProductNeedVolume: 94874.84389361701
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 384253.9895999999,
                            optProductNeedVolume: 1209991.2863999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 5450.4112,
                            optProductNeedVolume: 27252.055999999997
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 249356.31239999997,
                            optProductNeedVolume: 265272.6727659574
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 36790.27559999999,
                            optProductNeedVolume: 159685.4515404255
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 50416.30359999999,
                            optProductNeedVolume: 100832.60719999998
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 69492.74279999999,
                            optProductNeedVolume: 70232.02729787234
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 231642.476,
                            optProductNeedVolume: 500249.17689361697
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 16351.233599999998,
                            optProductNeedVolume: 64709.13722553191
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 66767.53719999999,
                            optProductNeedVolume: 292640.6949617021
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 20439.041999999998,
                            optProductNeedVolume: 82843.35108510638
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 72217.9484,
                            optProductNeedVolume: 127533.82377021275
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 197577.40599999996,
                            optProductNeedVolume: 395154.8119999999
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 28614.658799999997,
                            optProductNeedVolume: 28310.24753617021
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 272520.56,
                            optProductNeedVolume: 1362602.8
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 40878.083999999995,
                            optProductNeedVolume: 171774.9274468085
                        }
                    ]
                }
            ]
        },
        {
            region: 'Чернігівська',
            regionNeed: 3,
            regNeedVolume1D: 345435.34669000003,
            optRegNeedVolume: 1125829.9372200004,
            contacts: {
                phone_VCA: '+380 462 67 50 24',
                telegram_VCA: 'https://t.me/chernigivskaODA',
                hum_center: '',
                red_cross: '+380 46 267 71 38'
            },
            cities: [
                {
                    name: 'Ніжин',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 42016.42641,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 1172.8723300000001,
                            optProductNeedVolume: 5864.361650000001
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 3656.60197,
                            optProductNeedVolume: 10969.805910000003
                        },
                        {
                            name: 'Консерви',
                            productNeed: 2,
                            productNeedVolume1D: 275.96996,
                            optProductNeedVolume: 827.9098799999999
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 5105.44426,
                            optProductNeedVolume: 15316.33278
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 137.98498,
                            optProductNeedVolume: 689.9249
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 3242.64703,
                            optProductNeedVolume: 6485.29406
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 344.96245000000005,
                            optProductNeedVolume: 1724.8122500000002
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 689.9249000000001,
                            optProductNeedVolume: 1379.8498000000002
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2138.76719,
                            optProductNeedVolume: 4277.53438
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 2345.7446600000003,
                            optProductNeedVolume: 7037.233980000001
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 275.96996,
                            optProductNeedVolume: 1379.8498
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1310.85731,
                            optProductNeedVolume: 6554.286550000001
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 482.94743000000005,
                            optProductNeedVolume: 1448.8422900000003
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1655.81976,
                            optProductNeedVolume: 3311.63952
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 2759.6996000000004,
                            optProductNeedVolume: 5519.399200000001
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 551.93992,
                            optProductNeedVolume: 1103.87984
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 13798.498000000001,
                            optProductNeedVolume: 68992.49
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 2069.7747,
                            optProductNeedVolume: 8279.0988
                        }
                    ]
                },
                {
                    name: 'Прилуки',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 53696.55328,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 1894.5356500000003,
                            optProductNeedVolume: 9472.67825
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3193.64581,
                            optProductNeedVolume: 12774.58324
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 487.16631,
                            optProductNeedVolume: 2435.83155
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 11475.47308,
                            optProductNeedVolume: 34426.419239999996
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 162.38877000000002,
                            optProductNeedVolume: 811.9438500000001
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 4438.626380000001,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 757.8142600000001,
                            optProductNeedVolume: 3031.2570400000004
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1244.9805700000002,
                            optProductNeedVolume: 2489.9611400000003
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3789.0713000000005,
                            optProductNeedVolume: 7578.142600000001
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 4817.53351,
                            optProductNeedVolume: 9635.067019999999
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 541.2959000000001,
                            optProductNeedVolume: 2706.4795000000004
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1082.5918000000001,
                            optProductNeedVolume: 5412.959000000001
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 595.42549,
                            optProductNeedVolume: 2381.70196
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 1894.5356500000003,
                            optProductNeedVolume: 1894.5356500000003
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 4492.75597,
                            optProductNeedVolume: 8985.51194
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 378.90713000000005,
                            optProductNeedVolume: 757.8142600000001
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 10825.918000000001,
                            optProductNeedVolume: 54129.59000000001
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1623.8877,
                            optProductNeedVolume: 6495.5508
                        }
                    ]
                },
                {
                    name: 'Чернігів',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 249722.367,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 10576.47672,
                            optProductNeedVolume: 52882.3836
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 11164.05876,
                            optProductNeedVolume: 39074.20566
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2350.32816,
                            optProductNeedVolume: 9401.31264
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 41130.74280000001,
                            optProductNeedVolume: 123392.22840000002
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 587.58204,
                            optProductNeedVolume: 2937.9102000000003
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 29966.68404,
                            optProductNeedVolume: 29966.68404
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 4406.8653,
                            optProductNeedVolume: 19830.893850000004
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 5875.8204000000005,
                            optProductNeedVolume: 11751.640800000001
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 9695.10366,
                            optProductNeedVolume: 19390.20732
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 22621.90854,
                            optProductNeedVolume: 56554.771349999995
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1762.7461200000002,
                            optProductNeedVolume: 8813.7306
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 7344.775500000001,
                            optProductNeedVolume: 36723.8775
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2350.32816,
                            optProductNeedVolume: 8226.148560000001
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 6757.19346,
                            optProductNeedVolume: 10135.79019
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 18215.043240000003,
                            optProductNeedVolume: 36430.086480000005
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 7344.775500000001,
                            optProductNeedVolume: 14689.551000000001
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 58758.204000000005,
                            optProductNeedVolume: 293791.02
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 8813.7306,
                            optProductNeedVolume: 35254.9224
                        }
                    ]
                }
            ]
        },
        {
            region: 'Одеська',
            regionNeed: 4,
            regNeedVolume1D: 1519199.7496533333,
            optRegNeedVolume: 4015131.052358213,
            contacts: {
                phone_VCA: '+380 482 39 00 03',
                telegram_VCA: 'https://t.me/odeskaODA',
                hum_center: '+38 096 889 74 81',
                red_cross: '+380 48 2724 34 28'
            },
            cities: [
                {
                    name: 'Білгород-Дністровський',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 135146.95850666662,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 6593.635211851852,
                            optProductNeedVolume: 32968.17605925926
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 7554.433481481476,
                            optProductNeedVolume: 23705.291269476358
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1755.3704414814802,
                            optProductNeedVolume: 5992.471507126433
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 28710.84579555555,
                            optProductNeedVolume: 88112.59571739464
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 435.27246222222226,
                            optProductNeedVolume: 2176.3623111111115
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 19566.696746666665,
                            optProductNeedVolume: 2361.4978832183915
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 2840.695478518518,
                            optProductNeedVolume: 11362.781914074072
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3963.1500562962933,
                            optProductNeedVolume: 7926.300112592587
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 5653.400995555554,
                            optProductNeedVolume: 97.47243095785416
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 17060.167134814816,
                            optProductNeedVolume: 17060.167134814816
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1547.4450133333326,
                            optProductNeedVolume: 5922.9791889655135
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 4665.183988148149,
                            optProductNeedVolume: 17775.959678978295
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1699.9617422222218,
                            optProductNeedVolume: 5363.672393563217
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 4911.3814044444425,
                            optProductNeedVolume: 6774.319178544059
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 14622.184367407406,
                            optProductNeedVolume: 29244.368734814812
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2925.236586666667,
                            optProductNeedVolume: 2471.3205645977014
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 9253.823999999984,
                            optProductNeedVolume: 46269.11999999992
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1388.0735999999993,
                            optProductNeedVolume: 4762.528386206894
                        }
                    ]
                },
                {
                    name: 'Ізмаїл',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 198333.49631999995,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 9676.419946666665,
                            optProductNeedVolume: 48382.09973333332
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 11086.429333333326,
                            optProductNeedVolume: 34788.45066666664
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2576.0754133333317,
                            optProductNeedVolume: 8794.188479999993
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 42134.29951999999,
                            optProductNeedVolume: 129308.71231999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 638.77952,
                            optProductNeedVolume: 3193.8976000000002
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 28714.89984,
                            optProductNeedVolume: 3465.5913599999985
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 4168.832746666666,
                            optProductNeedVolume: 16675.330986666664
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 5816.079146666662,
                            optProductNeedVolume: 11632.158293333325
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 8296.589119999997,
                            optProductNeedVolume: 143.04464000000007
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 25036.468693333332,
                            optProductNeedVolume: 25036.468693333336
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 2270.936639999999,
                            optProductNeedVolume: 8692.205759999997
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 6846.341653333335,
                            optProductNeedVolume: 26086.922506666673
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2494.760959999999,
                            optProductNeedVolume: 7871.400959999998
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 7207.646079999998,
                            optProductNeedVolume: 9941.580799999996
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 21458.632746666666,
                            optProductNeedVolume: 42917.26549333333
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 4292.90016,
                            optProductNeedVolume: 3626.76048
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 13580.351999999977,
                            optProductNeedVolume: 67901.7599999999
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 2037.0527999999988,
                            optProductNeedVolume: 6989.198399999996
                        }
                    ]
                },
                {
                    name: 'Одеса',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 881574.4358399999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 34131.753600000004,
                            optProductNeedVolume: 170658.768
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 40958.10432,
                            optProductNeedVolume: 134173.1003586207
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 9751.9296,
                            optProductNeedVolume: 37326.35122758621
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 159931.64544,
                            optProductNeedVolume: 501854.47362206894
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 2925.57888,
                            optProductNeedVolume: 14627.894400000001
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 87767.3664,
                            optProductNeedVolume: 21185.226372413803
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 13652.701439999999,
                            optProductNeedVolume: 54610.805759999996
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 19503.8592,
                            optProductNeedVolume: 39007.7184
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 30230.98176,
                            optProductNeedVolume: 1042.4476468965513
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 88742.55936,
                            optProductNeedVolume: 88742.55935999998
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 6826.3507199999995,
                            optProductNeedVolume: 24951.488838620688
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 30230.98176,
                            optProductNeedVolume: 109457.00292413794
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 9751.9296,
                            optProductNeedVolume: 32282.24971034483
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 30230.98176,
                            optProductNeedVolume: 53164.82999172414
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 80941.01568,
                            optProductNeedVolume: 161882.03136
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 11702.31552,
                            optProductNeedVolume: 8070.562427586208
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 195038.592,
                            optProductNeedVolume: 975192.96
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 29255.7888,
                            optProductNeedVolume: 112987.87398620689
                        }
                    ]
                },
                {
                    name: 'Подільськ',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 111214.36330666662,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 5425.996634074074,
                            optProductNeedVolume: 27129.983170370368
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 6216.651259259254,
                            optProductNeedVolume: 19507.42291698594
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1444.5194192592583,
                            optProductNeedVolume: 4931.290431264364
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 23626.56526222222,
                            optProductNeedVolume: 72509.11408061303
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 358.1919288888889,
                            optProductNeedVolume: 1790.9596444444446
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 16101.714346666664,
                            optProductNeedVolume: 1943.3103521839075
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 2337.6489007407404,
                            optProductNeedVolume: 9350.595602962961
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3261.33281185185,
                            optProductNeedVolume: 6522.6656237037
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 4652.264462222221,
                            optProductNeedVolume: 80.21145624520977
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 14039.055312592593,
                            optProductNeedVolume: 14039.05531259259
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1273.4146133333327,
                            optProductNeedVolume: 4874.10420965517
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3839.0465659259266,
                            optProductNeedVolume: 14628.091225338445
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1398.9228088888885,
                            optProductNeedVolume: 4413.842655632183
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 4041.6459377777765,
                            optProductNeedVolume: 5574.684052107277
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 12032.804456296295,
                            optProductNeedVolume: 24065.60891259259
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2407.2189866666668,
                            optProductNeedVolume: 2033.6850059770118
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 7615.1039999999875,
                            optProductNeedVolume: 38075.51999999994
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1142.2655999999993,
                            optProductNeedVolume: 3919.1526620689624
                        }
                    ]
                },
                {
                    name: 'Чорноморськ',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 164104.41727999994,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 8006.4300088888895,
                            optProductNeedVolume: 40032.15004444445
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 9173.095111111106,
                            optProductNeedVolume: 28784.53983141761
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2131.48743111111,
                            optProductNeedVolume: 7276.457092413788
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 34862.61674666667,
                            optProductNeedVolume: 106992.16863632185
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 528.5367466666668,
                            optProductNeedVolume: 2642.6837333333337
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 23759.18336,
                            optProductNeedVolume: 2867.487646896552
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 3449.361208888889,
                            optProductNeedVolume: 13797.444835555556
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 4812.320142222219,
                            optProductNeedVolume: 9624.640284444438
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 6864.735146666665,
                            optProductNeedVolume: 118.3575025287355
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 20715.588551111112,
                            optProductNeedVolume: 20715.588551111112
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1879.0105599999993,
                            optProductNeedVolume: 7192.074902068962
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 5664.776391111112,
                            optProductNeedVolume: 21584.751421302684
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2064.2065066666664,
                            optProductNeedVolume: 6512.927426206895
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 5963.725653333332,
                            optProductNeedVolume: 8225.82848735632
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 17755.227875555556,
                            optProductNeedVolume: 35510.45575111111
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 3552.0166400000007,
                            optProductNeedVolume: 3000.8416441379313
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 11236.607999999982,
                            optProductNeedVolume: 56183.039999999906
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1685.4911999999993,
                            optProductNeedVolume: 5782.978427586204
                        }
                    ]
                },
                {
                    name: 'Южне',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 28826.078400000002,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 880.1855999999999,
                            optProductNeedVolume: 4400.928
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 943.0559999999999,
                            optProductNeedVolume: 2829.1679999999997
                        },
                        {
                            name: 'Консерви',
                            productNeed: 2,
                            productNeedVolume1D: 408.65759999999995,
                            optProductNeedVolume: 1225.9728
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 4620.974399999999,
                            optProductNeedVolume: 13862.923199999997
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 94.3056,
                            optProductNeedVolume: 471.528
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 3677.9184,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 848.7503999999999,
                            optProductNeedVolume: 3395.0015999999996
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 943.0559999999999,
                            optProductNeedVolume: 1886.1119999999999
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 848.7503999999999,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 3552.1776,
                            optProductNeedVolume: 3552.177600000001
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 188.6112,
                            optProductNeedVolume: 754.4448
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 628.704,
                            optProductNeedVolume: 2514.816
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 220.04639999999998,
                            optProductNeedVolume: 660.1392000000001
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 628.704,
                            optProductNeedVolume: 628.704
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 2326.2047999999995,
                            optProductNeedVolume: 4652.409599999999
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 785.88,
                            optProductNeedVolume: 785.88
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6287.04,
                            optProductNeedVolume: 31435.2
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 943.0559999999999,
                            optProductNeedVolume: 2829.1679999999997
                        }
                    ]
                }
            ]
        },
        {
            region: 'Львівська',
            regionNeed: 4,
            regNeedVolume1D: 1998750.4703833337,
            optRegNeedVolume: 6427.524318869127,
            contacts: {
                phone_VCA: '+380 322 99 92 05',
                telegram_VCA: 'https://t.me/kozytskyy_maksym_official',
                hum_center: '+380 67 672 06 06',
                red_cross: '+380 32 2297 08 60'
            },
            cities: [
                {
                    name: 'Борислав',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 106710.08975999994,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 5206.23929,
                            optProductNeedVolume: 26.031196450000003
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5964.871749999997,
                            optProductNeedVolume: 21.042742006944433
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1386.0151899999992,
                            optProductNeedVolume: 5.390059072222218
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 22669.669859999998,
                            optProductNeedVolume: 75.56556619999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 343.68486000000007,
                            optProductNeedVolume: 1.7184243000000003
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 15449.581619999999,
                            optProductNeedVolume: 8.296997536666666
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2242.97219,
                            optProductNeedVolume: 11.152556166944445
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3129.2461399999984,
                            optProductNeedVolume: 6.258492279999997
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 4463.843909999999,
                            optProductNeedVolume: 1.5292798580555544
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 13470.46198,
                            optProductNeedVolume: 17.960615973333333
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1221.8402699999995,
                            optProductNeedVolume: 4.762914385833332
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3683.562010000001,
                            optProductNeedVolume: 13.063002313240744
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1342.2652799999998,
                            optProductNeedVolume: 6.425473608888888
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 3877.955939999999,
                            optProductNeedVolume: 1.7108629147058818
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 11545.46594,
                            optProductNeedVolume: 23.09093188
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2309.7246300000006,
                            optProductNeedVolume: 2.074474899166667
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 7306.685999999988,
                            optProductNeedVolume: 36.53342999999994
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1096.0028999999995,
                            optProductNeedVolume: 4.3941597749999985
                        }
                    ]
                },
                {
                    name: 'Броди',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 75656.42586666667,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3691.1735129629633,
                            optProductNeedVolume: 18.455867564814817
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4229.036620370368,
                            optProductNeedVolume: 14.91910141075102
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 982.6714203703698,
                            optProductNeedVolume: 3.821499968106993
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 16072.57758888889,
                            optProductNeedVolume: 53.57525862962963
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 243.66925555555562,
                            optProductNeedVolume: 1.218346277777778
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 10953.604566666667,
                            optProductNeedVolume: 5.8824913413580235
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1590.2456796296296,
                            optProductNeedVolume: 7.907054907047326
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2218.605374074073,
                            optProductNeedVolume: 4.437210748148146
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 3164.8223388888887,
                            optProductNeedVolume: 1.0842446901748972
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 9550.427803703706,
                            optProductNeedVolume: 12.733903738271605
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 866.2729833333331,
                            optProductNeedVolume: 3.3768604257716044
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2611.609987037038,
                            optProductNeedVolume: 9.261542824399866
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 951.6531555555555,
                            optProductNeedVolume: 4.555598902057613
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 2749.4334111111107,
                            optProductNeedVolume: 1.212985328431372
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 8185.624151851853,
                            optProductNeedVolume: 16.371248303703705
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1637.572516666667,
                            optProductNeedVolume: 1.4707827233024695
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5180.369999999992,
                            optProductNeedVolume: 25.901849999999957
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 777.0554999999997,
                            optProductNeedVolume: 3.115416958333332
                        }
                    ]
                },
                {
                    name: 'Дрогобич',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 52754.49270000001,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 1739.1591000000003,
                            optProductNeedVolume: 8.695795500000003
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 3643.9524,
                            optProductNeedVolume: 10.931857200000001
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 496.90260000000006,
                            optProductNeedVolume: 1.9876104000000003
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 6376.916700000001,
                            optProductNeedVolume: 19.130750100000004
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 165.63420000000002,
                            optProductNeedVolume: 0.8281710000000001
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 4803.3918,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 662.5368000000001,
                            optProductNeedVolume: 3.3126840000000004
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 579.7197000000001,
                            optProductNeedVolume: 1.1594394000000001
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 1987.6104000000003,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 3726.7695000000003,
                            optProductNeedVolume: 3.7267695000000005
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 496.90260000000006,
                            optProductNeedVolume: 1.9876104000000003
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2401.6959,
                            optProductNeedVolume: 7.205087700000001
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 828.171,
                            optProductNeedVolume: 4.140855
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 1159.4394000000002,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 3064.2327,
                            optProductNeedVolume: 6.1284654
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 1573.5249000000001,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 16563.420000000002,
                            optProductNeedVolume: 82.81710000000001
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 2484.513,
                            optProductNeedVolume: 7.453538999999999
                        }
                    ]
                },
                {
                    name: 'Золочів',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 77767.08938666666,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3794.149898518519,
                            optProductNeedVolume: 18.970749492592592
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4347.018314814813,
                            optProductNeedVolume: 15.335314610596702
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1010.0859948148143,
                            optProductNeedVolume: 3.928112202057611
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 16520.970475555558,
                            optProductNeedVolume: 55.069901585185185
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 250.4671422222223,
                            optProductNeedVolume: 1.2523357111111115
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 11259.188306666667,
                            optProductNeedVolume: 6.046601127654322
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1634.6103651851854,
                            optProductNeedVolume: 8.127645982448561
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2280.5000429629617,
                            optProductNeedVolume: 4.561000085925923
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 3253.1145755555553,
                            optProductNeedVolume: 1.1144929564403292
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 9816.86570814815,
                            optProductNeedVolume: 13.089154277530866
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 890.440273333333,
                            optProductNeedVolume: 3.471068102530863
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2684.4687014814826,
                            optProductNeedVolume: 9.51992141358711
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 978.2023822222221,
                            optProductNeedVolume: 4.6826910334156375
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 2826.137124444444,
                            optProductNeedVolume: 1.2468252019607844
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 8413.986754074074,
                            optProductNeedVolume: 16.827973508148148
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1683.2575266666672,
                            optProductNeedVolume: 1.5118146304320992
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5324.891999999992,
                            optProductNeedVolume: 26.62445999999996
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 798.7337999999996,
                            optProductNeedVolume: 3.2023308833333317
                        }
                    ]
                },
                {
                    name: 'Львів',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 892976.8515000003,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 38442.052800000005,
                            optProductNeedVolume: 192.21026400000002
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 44048.18550000001,
                            optProductNeedVolume: 139.48592075000005
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 11212.265400000002,
                            optProductNeedVolume: 37.374218000000006
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 163378.7244,
                            optProductNeedVolume: 490.1361732
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 3203.5044000000003,
                            optProductNeedVolume: 16.017522
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 117728.78670000001,
                            optProductNeedVolume: 26.161952600000017
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 16818.398100000002,
                            optProductNeedVolume: 81.28892415000001
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 16818.398100000002,
                            optProductNeedVolume: 33.636796200000006
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 29632.4157,
                            optProductNeedVolume: 1.6462453166666673
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 103313.01690000002,
                            optProductNeedVolume: 103.3130169
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 8809.6371,
                            optProductNeedVolume: 29.85488128333333
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 25628.035200000002,
                            optProductNeedVolume: 84.00300426666666
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 10411.3893,
                            optProductNeedVolume: 49.16489391666668
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 28030.663500000006,
                            optProductNeedVolume: 18.13748814705882
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 75282.3534,
                            optProductNeedVolume: 150.5647068
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 16017.522000000003,
                            optProductNeedVolume: 6.229036333333333
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 160175.22000000003,
                            optProductNeedVolume: 800.8761000000001
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 24026.283000000003,
                            optProductNeedVolume: 97.43992550000002
                        }
                    ]
                },
                {
                    name: 'Миколаїв',
                    blocked: 'blocked',
                    cityNeed: 1,
                    cityNeedVolume1D: 212445.78822000005,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4756.248990000001,
                            optProductNeedVolume: 47.56248990000001
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5284.721100000002,
                            optProductNeedVolume: 52.847211000000016
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1585.4163300000002,
                            optProductNeedVolume: 15.854163300000002
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 19553.468070000003,
                            optProductNeedVolume: 195.53468070000002
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 528.4721100000002,
                            optProductNeedVolume: 5.284721100000001
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 2,
                            productNeedVolume1D: 14268.746970000002,
                            optProductNeedVolume: 28.537493940000004
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 3170.8326600000005,
                            optProductNeedVolume: 31.708326600000003
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3170.8326600000005,
                            optProductNeedVolume: 6.341665320000001
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 5813.19321,
                            optProductNeedVolume: 11.626386420000001
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 13211.802750000003,
                            optProductNeedVolume: 39.635408250000005
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1056.9442200000003,
                            optProductNeedVolume: 10.569442200000003
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3170.8326600000005,
                            optProductNeedVolume: 31.708326600000003
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1056.9442200000003,
                            optProductNeedVolume: 10.569442200000003
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2642.360550000001,
                            optProductNeedVolume: 5.284721100000001
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 9512.497980000002,
                            optProductNeedVolume: 19.024995960000005
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2113.8884400000006,
                            optProductNeedVolume: 4.227776880000001
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 105694.42200000002,
                            optProductNeedVolume: 1056.9442200000003
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 15854.163300000002,
                            optProductNeedVolume: 158.54163300000002
                        }
                    ]
                },
                {
                    name: 'Новий Розділ',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 42796.28643000001,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 1402.64595,
                            optProductNeedVolume: 7.013229750000001
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5111.865240000001,
                            optProductNeedVolume: 18.03352459666667
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 436.37874000000005,
                            optProductNeedVolume: 1.6970284333333334
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 6389.831550000001,
                            optProductNeedVolume: 21.299438500000004
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 155.84955000000002,
                            optProductNeedVolume: 0.7792477500000001
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 5423.56434,
                            optProductNeedVolume: 2.9126549233333328
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 592.22829,
                            optProductNeedVolume: 2.944690664166667
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 748.0778400000002,
                            optProductNeedVolume: 1.4961556800000002
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 1496.1556800000003,
                            optProductNeedVolume: 0.5125718533333333
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 4363.787400000001,
                            optProductNeedVolume: 5.818383200000001
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 405.20883000000003,
                            optProductNeedVolume: 1.579564050277778
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2088.3839700000003,
                            optProductNeedVolume: 7.406028338055558
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 810.4176600000001,
                            optProductNeedVolume: 3.8794993538888893
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 1090.9468500000003,
                            optProductNeedVolume: 0.4813000808823531
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 3927.4086600000005,
                            optProductNeedVolume: 7.854817320000001
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1184.45658,
                            optProductNeedVolume: 1.063817483888889
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6233.982000000001,
                            optProductNeedVolume: 31.169910000000005
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 935.0973,
                            optProductNeedVolume: 3.7490475083333332
                        }
                    ]
                },
                {
                    name: 'Новояворівськ',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 101415.59893333334,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4947.928325925926,
                            optProductNeedVolume: 24.73964162962963
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5668.9207407407375,
                            optProductNeedVolume: 19.998692613168714
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1317.24714074074,
                            optProductNeedVolume: 5.1226277695473215
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 21544.89937777778,
                            optProductNeedVolume: 71.81633125925926
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 326.63271111111123,
                            optProductNeedVolume: 1.6331635555555564
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 14683.040533333335,
                            optProductNeedVolume: 7.885336582716048
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2131.6856592592594,
                            optProductNeedVolume: 10.599214805761317
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2973.9865481481465,
                            optProductNeedVolume: 5.947973096296293
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 4242.367377777778,
                            optProductNeedVolume: 1.4534036386831277
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 12802.11620740741,
                            optProductNeedVolume: 17.06948827654321
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1161.2178666666662,
                            optProductNeedVolume: 4.526599276543207
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3500.7996740740755,
                            optProductNeedVolume: 12.414872918244175
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1275.667911111111,
                            optProductNeedVolume: 6.106669537448559
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 3685.5486222222216,
                            optProductNeedVolume: 1.6259773333333332
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 10972.630103703705,
                            optProductNeedVolume: 21.945260207407408
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2195.126133333334,
                            optProductNeedVolume: 1.9715484716049392
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6944.15999999999,
                            optProductNeedVolume: 34.720799999999954
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1041.6239999999996,
                            optProductNeedVolume: 4.176140666666665
                        }
                    ]
                },
                {
                    name: 'Самбір',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 31618.55868,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 1376.3822400000001,
                            optProductNeedVolume: 6.8819112
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 2485.1346000000003,
                            optProductNeedVolume: 9.940538400000001
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 382.32840000000004,
                            optProductNeedVolume: 1.5293136000000003
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 3135.0928800000006,
                            optProductNeedVolume: 9.40527864
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 114.69852000000002,
                            optProductNeedVolume: 0.5734926
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 3555.65412,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 535.25976,
                            optProductNeedVolume: 2.6762988
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 497.02692,
                            optProductNeedVolume: 0.9940538400000001
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 955.8210000000001,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 2829.23016,
                            optProductNeedVolume: 2.829230160000001
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 229.39704000000003,
                            optProductNeedVolume: 1.1469852
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1644.01212,
                            optProductNeedVolume: 4.93203636
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 611.72544,
                            optProductNeedVolume: 3.0586272000000005
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 1108.7523600000002,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 3020.3943600000002,
                            optProductNeedVolume: 6.04078872
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 344.09556000000003,
                            optProductNeedVolume: 0.34409556
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 7646.568000000001,
                            optProductNeedVolume: 38.23284
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1146.9852,
                            optProductNeedVolume: 4.5879408
                        }
                    ]
                },
                {
                    name: 'Сокаль',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 66980.33434666666,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3267.878877407408,
                            optProductNeedVolume: 16.33939438703704
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3744.0611759259236,
                            optProductNeedVolume: 13.208215815072007
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 869.9810959259254,
                            optProductNeedVolume: 3.38325981748971
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 14229.414202222222,
                            optProductNeedVolume: 47.43138067407407
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 215.72586888888895,
                            optProductNeedVolume: 1.0786293444444448
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 9697.472326666666,
                            optProductNeedVolume: 5.207901805061727
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1407.8802440740742,
                            optProductNeedVolume: 7.000293435812758
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1964.1812051851841,
                            optProductNeedVolume: 3.9283624103703683
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 2801.888352222222,
                            optProductNeedVolume: 0.9599061947427981
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 8455.20839925926,
                            optProductNeedVolume: 11.273611199012347
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 766.9309433333331,
                            optProductNeedVolume: 2.9896104365123444
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2312.1170225925935,
                            optProductNeedVolume: 8.199452033823734
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 842.5199288888888,
                            optProductNeedVolume: 4.033174104032921
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 2434.135197777777,
                            optProductNeedVolume: 1.0738831754901959
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 7246.91704962963,
                            optProductNeedVolume: 14.49383409925926
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1449.779756666667,
                            optProductNeedVolume: 1.30211700367284
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4586.2979999999925,
                            optProductNeedVolume: 22.93148999999996
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 687.9446999999997,
                            optProductNeedVolume: 2.7581486583333317
                        }
                    ]
                },
                {
                    name: 'Стебник',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 66134.12362666665,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3226.5934140740746,
                            optProductNeedVolume: 16.132967070370373
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3696.7597592592574,
                            optProductNeedVolume: 13.041346928497937
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 858.9899992592589,
                            optProductNeedVolume: 3.340516663786007
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 14049.643782222223,
                            optProductNeedVolume: 46.83214594074075
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 213.00044888888897,
                            optProductNeedVolume: 1.065002244444445
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 9574.957186666667,
                            optProductNeedVolume: 5.14210663728395
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1390.093480740741,
                            optProductNeedVolume: 6.911853695905351
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1939.366291851851,
                            optProductNeedVolume: 3.878732583703702
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 2766.490082222222,
                            optProductNeedVolume: 0.9477790096502058
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 8348.387672592595,
                            optProductNeedVolume: 11.131183563456792
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 757.2417533333331,
                            optProductNeedVolume: 2.9518405384567896
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2282.9063859259268,
                            optProductNeedVolume: 8.095862461200277
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 831.8757688888888,
                            optProductNeedVolume: 3.9822201158847736
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 2403.3830177777772,
                            optProductNeedVolume: 1.0603160372549019
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 7155.361536296297,
                            optProductNeedVolume: 14.310723072592594
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1431.463646666667,
                            optProductNeedVolume: 1.285666423395062
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4528.355999999993,
                            optProductNeedVolume: 22.641779999999965
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 679.2533999999997,
                            optProductNeedVolume: 2.723302983333332
                        }
                    ]
                },
                {
                    name: 'Стрий',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 38044.806000000004,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 1257.13272,
                            optProductNeedVolume: 6.2856635999999995
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 2514.26544,
                            optProductNeedVolume: 7.54279632
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 396.98928,
                            optProductNeedVolume: 1.58795712
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 2911.25472,
                            optProductNeedVolume: 8.73376416
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 132.32976000000002,
                            optProductNeedVolume: 0.6616488000000001
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 3572.9035200000003,
                            optProductNeedVolume: 3.57290352
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 529.3190400000001,
                            optProductNeedVolume: 2.6465952000000006
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 661.6488,
                            optProductNeedVolume: 1.3232976
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 1257.13272,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 3242.0791200000003,
                            optProductNeedVolume: 3.2420791200000005
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 198.49464,
                            optProductNeedVolume: 0.59548392
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1720.28688,
                            optProductNeedVolume: 6.881147520000001
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 595.48392,
                            optProductNeedVolume: 2.9774196
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 860.14344,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 2580.4303200000004,
                            optProductNeedVolume: 5.160860640000001
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 396.98928,
                            optProductNeedVolume: 0.79397856
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 13232.976000000002,
                            optProductNeedVolume: 66.16488000000001
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1984.9464,
                            optProductNeedVolume: 7.9397856
                        }
                    ]
                },
                {
                    name: 'Трускавець',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 22124.298000000003,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2244.03594,
                            optProductNeedVolume: 11.220179700000001
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 695.3350800000001,
                            optProductNeedVolume: 2.08600524
                        },
                        {
                            name: 'Консерви',
                            productNeed: 2,
                            productNeedVolume1D: 189.63684000000003,
                            optProductNeedVolume: 0.5689105200000001
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 5341.4376600000005,
                            optProductNeedVolume: 16.02431298
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 63.21228000000001,
                            optProductNeedVolume: 0.31606140000000005
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 1706.7315600000002,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 316.06140000000005,
                            optProductNeedVolume: 1.5803070000000004
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 410.87982,
                            optProductNeedVolume: 0.82175964
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 316.06140000000005,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 1422.2763,
                            optProductNeedVolume: 1.4222763000000005
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 284.45526,
                            optProductNeedVolume: 0.85336578
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 284.45526,
                            optProductNeedVolume: 0.85336578
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 126.42456000000001,
                            optProductNeedVolume: 0.5056982400000001
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 474.0921,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 790.1535000000001,
                            optProductNeedVolume: 1.5803070000000004
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 189.63684000000003,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6321.228000000001,
                            optProductNeedVolume: 31.606140000000007
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 948.1842,
                            optProductNeedVolume: 3.7927368
                        }
                    ]
                },
                {
                    name: 'Червоноград',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 211325.72693333332,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 10310.293103703703,
                            optProductNeedVolume: 51.55146551851852
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 11812.667962962956,
                            optProductNeedVolume: 41.67246753600821
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2744.8263629629614,
                            optProductNeedVolume: 10.674324744855962
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 44894.39071111111,
                            optProductNeedVolume: 149.64796903703703
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 680.6240444444446,
                            optProductNeedVolume: 3.403120222222223
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 30595.92653333333,
                            optProductNeedVolume: 16.43114573086419
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 4441.920437037037,
                            optProductNeedVolume: 22.086215506378597
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 6197.072992592589,
                            optProductNeedVolume: 12.394145985185178
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 8840.07371111111,
                            optProductNeedVolume: 3.028543771399176
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 26676.53242962963,
                            optProductNeedVolume: 35.568709906172835
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 2419.6988666666657,
                            optProductNeedVolume: 9.432344656172836
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 7294.824896296299,
                            optProductNeedVolume: 25.869610511865577
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2658.185244444444,
                            optProductNeedVolume: 12.724831216460903
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 7679.797288888887,
                            optProductNeedVolume: 3.3881458627450973
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 22864.323214814816,
                            optProductNeedVolume: 45.728646429629634
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 4574.115133333335,
                            optProductNeedVolume: 4.108233036419755
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 14469.959999999977,
                            optProductNeedVolume: 72.34979999999989
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 2170.493999999999,
                            optProductNeedVolume: 8.702073166666661
                        }
                    ]
                }
            ]
        },
        {
            region: 'Полтавська',
            regionNeed: 4,
            regNeedVolume1D: 984291.3765822217,
            optRegNeedVolume: 2778799.914205003,
            contacts: {
                phone_VCA: '+380 532 56 02 90',
                telegram_VCA: 'https://t.me/DMYTROLUNIN',
                hum_center: '+380 50 305 19 49',
                red_cross: '+380 53 260 67 41'
            },
            cities: [
                {
                    name: 'Гадяч',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 78512.09130666664,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3830.4975229629626,
                            optProductNeedVolume: 19152.487614814814
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4388.662370370367,
                            optProductNeedVolume: 14336.297076543198
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1019.7625303703696,
                            optProductNeedVolume: 5098.812651851848
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 16679.239928888885,
                            optProductNeedVolume: 52261.61844385184
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 252.8665955555556,
                            optProductNeedVolume: 1264.332977777778
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 11367.050346666665,
                            optProductNeedVolume: 2273.410069333331
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1650.2697896296295,
                            optProductNeedVolume: 7041.151102419753
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2302.3470340740723,
                            optProductNeedVolume: 4604.694068148145
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3284.279128888888,
                            optProductNeedVolume: 4816.942722370369
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 9910.910423703703,
                            optProductNeedVolume: 11232.365146864198
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 898.9706133333328,
                            optProductNeedVolume: 3116.4314595555534
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2710.1856770370373,
                            optProductNeedVolume: 9214.631301925929
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 987.5734755555552,
                            optProductNeedVolume: 3950.293902222221
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2853.21127111111,
                            optProductNeedVolume: 5325.994372740739
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 8494.592011851852,
                            optProductNeedVolume: 16989.184023703703
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1699.3829866666667,
                            optProductNeedVolume: 1586.0907875555556
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5375.90399999999,
                            optProductNeedVolume: 26879.519999999953
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 806.3855999999995,
                            optProductNeedVolume: 3333.0604799999983
                        }
                    ]
                },
                {
                    name: 'Горішні Плавні',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 170814.28323555551,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 8333.795189135803,
                            optProductNeedVolume: 41668.97594567901
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 9548.162641975303,
                            optProductNeedVolume: 31190.664630452655
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2218.6392286419737,
                            optProductNeedVolume: 11093.196143209869
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 36288.0718874074,
                            optProductNeedVolume: 113702.62524720986
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 550.147442962963,
                            optProductNeedVolume: 2750.737214814815
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 24730.643715555554,
                            optProductNeedVolume: 4946.128743111112
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 3590.3979446913577,
                            optProductNeedVolume: 15319.031230683126
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 5009.085248395058,
                            optProductNeedVolume: 10018.170496790117
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 7145.418954074073,
                            optProductNeedVolume: 10479.94779930864
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 21562.603059753088,
                            optProductNeedVolume: 24437.616801053504
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1955.8391377777768,
                            optProductNeedVolume: 6780.242344296293
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 5896.396544197532,
                            optProductNeedVolume: 20047.74825027161
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2148.6073362962957,
                            optProductNeedVolume: 8594.429345185183
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 6207.569179259257,
                            optProductNeedVolume: 11587.462467950612
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 18481.19979654321,
                            optProductNeedVolume: 36962.39959308642
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 3697.2507288888896,
                            optProductNeedVolume: 3450.7673469629635
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 11696.04799999998,
                            optProductNeedVolume: 58480.2399999999
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1754.407199999999,
                            optProductNeedVolume: 7251.549759999995
                        }
                    ]
                },
                {
                    name: 'Кременчук',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 81066.49560000001,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2272.8923999999997,
                            optProductNeedVolume: 11364.462
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 1515.2615999999998,
                            optProductNeedVolume: 4545.784799999999
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 505.08719999999994,
                            optProductNeedVolume: 2525.4359999999997
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 6313.59,
                            optProductNeedVolume: 18940.77
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 252.54359999999997,
                            optProductNeedVolume: 1262.7179999999998
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 3030.5231999999996,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 505.08719999999994,
                            optProductNeedVolume: 2020.3487999999998
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 505.08719999999994,
                            optProductNeedVolume: 1010.1743999999999
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 1010.1743999999999,
                            optProductNeedVolume: 1010.1743999999999
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 3030.5231999999996,
                            optProductNeedVolume: 3030.5231999999996
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 252.54359999999997,
                            optProductNeedVolume: 757.6307999999999
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 505.08719999999994,
                            optProductNeedVolume: 1515.2615999999998
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 252.54359999999997,
                            optProductNeedVolume: 757.6307999999999
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 252.54359999999997,
                            optProductNeedVolume: 505.08719999999994
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 2272.8923999999997,
                            optProductNeedVolume: 4545.784799999999
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 505.08719999999994,
                            optProductNeedVolume: 505.08719999999994
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 50508.72,
                            optProductNeedVolume: 252543.6
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 7576.307999999999,
                            optProductNeedVolume: 30305.231999999996
                        }
                    ]
                },
                {
                    name: 'Лубни',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 151098.16639999996,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 7371.872822222222,
                            optProductNeedVolume: 36859.36411111111
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 8446.072777777772,
                            optProductNeedVolume: 27590.50440740739
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1962.5543777777764,
                            optProductNeedVolume: 9812.771888888881
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 32099.547066666662,
                            optProductNeedVolume: 100578.58080888889
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 486.6470666666668,
                            optProductNeedVolume: 2433.235333333334
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 21876.1268,
                            optProductNeedVolume: 4375.225359999997
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 3175.978822222222,
                            optProductNeedVolume: 13550.842974814812
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 4430.915155555553,
                            optProductNeedVolume: 8861.830311111105
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 6320.664066666665,
                            optProductNeedVolume: 9270.307297777776
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 19073.75497777778,
                            optProductNeedVolume: 21616.922308148154
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1730.087799999999,
                            optProductNeedVolume: 5997.637706666663
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 5215.809177777779,
                            optProductNeedVolume: 17733.751204444452
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1900.605866666666,
                            optProductNeedVolume: 7602.423466666664
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 5491.064933333331,
                            optProductNeedVolume: 10249.987875555551
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 16348.020488888887,
                            optProductNeedVolume: 32696.040977777775
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 3270.4982000000005,
                            optProductNeedVolume: 3052.4649866666673
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 10346.039999999983,
                            optProductNeedVolume: 51730.19999999991
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1551.905999999999,
                            optProductNeedVolume: 6414.544799999996
                        }
                    ]
                },
                {
                    name: 'Миргород',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 26446.922359999997,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 936.5689199999999,
                            optProductNeedVolume: 4682.844599999999
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 1248.75856,
                            optProductNeedVolume: 3746.27568
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 222.99259999999998,
                            optProductNeedVolume: 1114.963
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 2854.30528,
                            optProductNeedVolume: 8562.915840000001
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 89.19704,
                            optProductNeedVolume: 445.9852
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 2452.9186,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 356.78816,
                            optProductNeedVolume: 1427.15264
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 445.98519999999996,
                            optProductNeedVolume: 891.9703999999999
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 1293.35708,
                            optProductNeedVolume: 2586.71416
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 1962.3348799999997,
                            optProductNeedVolume: 1962.3348799999999
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 222.99259999999998,
                            optProductNeedVolume: 668.9778
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 713.57632,
                            optProductNeedVolume: 2854.30528
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 267.59112,
                            optProductNeedVolume: 1070.36448
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 847.3718799999999,
                            optProductNeedVolume: 1694.7437599999998
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 1828.5393199999999,
                            optProductNeedVolume: 3657.0786399999997
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 445.98519999999996,
                            optProductNeedVolume: 445.98519999999996
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 8919.704,
                            optProductNeedVolume: 44598.52
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1337.9555999999998,
                            optProductNeedVolume: 5351.822399999999
                        }
                    ]
                },
                {
                    name: 'Полтава',
                    blocked: '',
                    cityNeed: 3,
                    cityNeedVolume1D: 476353.41767999995,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 22354.74976,
                            optProductNeedVolume: 111773.7488
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 22683.496079999997,
                            optProductNeedVolume: 86197.285104
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 5259.9411199999995,
                            optProductNeedVolume: 26299.705599999998
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 102240.10551999998,
                            optProductNeedVolume: 347616.3587679999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 1972.4779199999998,
                            optProductNeedVolume: 9862.389599999999
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 61146.81551999999,
                            optProductNeedVolume: 36688.089312
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 12492.360159999998,
                            optProductNeedVolume: 59963.32876799999
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 13807.34544,
                            optProductNeedVolume: 27614.69088
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 13149.852799999999,
                            optProductNeedVolume: 18409.793919999996
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 57530.605999999985,
                            optProductNeedVolume: 80542.84839999999
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 5259.9411199999995,
                            optProductNeedVolume: 23143.740928
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 13807.34544,
                            optProductNeedVolume: 44183.505408
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 4602.448479999999,
                            optProductNeedVolume: 23012.242399999996
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 12821.106479999999,
                            optProductNeedVolume: 20513.770367999998
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 37477.08048,
                            optProductNeedVolume: 74954.16096
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 14136.091759999998,
                            optProductNeedVolume: 11308.873408
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 65749.264,
                            optProductNeedVolume: 328746.31999999995
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 9862.389599999999,
                            optProductNeedVolume: 43394.51423999999
                        }
                    ]
                }
            ]
        },
        {
            region: 'Кіровоградська',
            regionNeed: 4,
            regNeedVolume1D: 591686.2481500001,
            optRegNeedVolume: 1661615.3301444438,
            contacts: {
                phone_VCA: '+380 522 24 03 30',
                telegram_VCA: 'https://t.me/chornamary',
                hum_center: '+380 522 32 05 74',
                red_cross: '+380 52 232 28 16'
            },
            cities: [
                {
                    name: 'Знам`янка',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 73055.37431111111,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3564.2717660493827,
                            optProductNeedVolume: 17821.358830246914
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 4083.6432561728366,
                            optProductNeedVolume: 12250.929768518512
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 948.8873895061722,
                            optProductNeedVolume: 4744.436947530861
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 15520.005848148146,
                            optProductNeedVolume: 46560.01754444443
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 235.2919592592593,
                            optProductNeedVolume: 1176.4597962962964
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 10577.02201111111,
                            optProductNeedVolume: 10577.02201111111
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1535.5733771604937,
                            optProductNeedVolume: 7677.8668858024685
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2142.3302012345666,
                            optProductNeedVolume: 4284.660402469133
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 3056.0164314814806,
                            optProductNeedVolume: 6112.032862962961
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 9222.086161728395,
                            optProductNeedVolume: 9222.086161728395
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 836.4907055555551,
                            optProductNeedVolume: 3345.962822222221
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2521.8234006172843,
                            optProductNeedVolume: 10087.293602469137
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 918.9355259259257,
                            optProductNeedVolume: 3675.742103703703
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2654.9084851851844,
                            optProductNeedVolume: 3982.362727777777
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 7904.20416419753,
                            optProductNeedVolume: 15808.40832839506
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1581.273127777778,
                            optProductNeedVolume: 2371.9096916666667
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5002.269999999991,
                            optProductNeedVolume: 25011.349999999955
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 750.3404999999996,
                            optProductNeedVolume: 3001.3619999999983
                        }
                    ]
                },
                {
                    name: 'Кропивницький',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 111403.17374999997,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 5890.282749999999,
                            optProductNeedVolume: 29451.413749999996
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 3841.4887499999995,
                            optProductNeedVolume: 11524.46625
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1024.397,
                            optProductNeedVolume: 5121.985
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 12036.664749999998,
                            optProductNeedVolume: 36109.99424999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 256.09925,
                            optProductNeedVolume: 1280.49625
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 6658.580499999999,
                            optProductNeedVolume: 6658.580499999999
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1536.5955,
                            optProductNeedVolume: 7682.977499999999
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1280.49625,
                            optProductNeedVolume: 2560.9925
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 2817.0917499999996,
                            optProductNeedVolume: 5634.183499999999
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 6146.382,
                            optProductNeedVolume: 6146.382000000001
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 768.29775,
                            optProductNeedVolume: 3073.191
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2304.8932499999996,
                            optProductNeedVolume: 9219.572999999999
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 768.29775,
                            optProductNeedVolume: 3073.191
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 1024.397,
                            optProductNeedVolume: 1536.5955
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 4865.8857499999995,
                            optProductNeedVolume: 9731.771499999999
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1280.49625,
                            optProductNeedVolume: 1920.7443749999998
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 51219.85,
                            optProductNeedVolume: 256099.25
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 7682.977499999999,
                            optProductNeedVolume: 30731.909999999996
                        }
                    ]
                },
                {
                    name: 'Олександрія',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 259662.49484444436,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 12668.577880864197,
                            optProductNeedVolume: 63342.88940432099
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 14514.592608024683,
                            optProductNeedVolume: 43543.77782407405
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 3372.6535413580223,
                            optProductNeedVolume: 16863.26770679011
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 55163.13449259259,
                            optProductNeedVolume: 165489.40347777773
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 836.3039370370371,
                            optProductNeedVolume: 4181.519685185186
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 37594.16674444444,
                            optProductNeedVolume: 37594.16674444444
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 5457.925825308642,
                            optProductNeedVolume: 27289.62912654321
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 7614.536371604933,
                            optProductNeedVolume: 15229.072743209867
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 10862.073575925924,
                            optProductNeedVolume: 21724.14715185185
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 32778.28528024691,
                            optProductNeedVolume: 32778.28528024691
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 2973.159272222221,
                            optProductNeedVolume: 11892.637088888883
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 8963.378285802472,
                            optProductNeedVolume: 35853.513143209886
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 3266.194903703703,
                            optProductNeedVolume: 13064.779614814812
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 9436.405840740737,
                            optProductNeedVolume: 14154.608761111107
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 28094.10522345679,
                            optProductNeedVolume: 56188.21044691358
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 5620.357561111112,
                            optProductNeedVolume: 8430.536341666668
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 17779.68999999997,
                            optProductNeedVolume: 88898.44999999985
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 2666.9534999999987,
                            optProductNeedVolume: 10667.813999999995
                        }
                    ]
                },
                {
                    name: 'Світловодськ',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 147565.2052444444,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 7199.504480864197,
                            optProductNeedVolume: 35997.52240432098
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 8248.587608024685,
                            optProductNeedVolume: 24745.762824074052
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1916.6661413580232,
                            optProductNeedVolume: 9583.330706790115
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 31348.998892592586,
                            optProductNeedVolume: 94046.99667777776
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 475.2683370370371,
                            optProductNeedVolume: 2376.3416851851853
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 21364.621544444442,
                            optProductNeedVolume: 21364.621544444442
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 3101.7184253086416,
                            optProductNeedVolume: 15508.592126543208
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 4327.311971604935,
                            optProductNeedVolume: 8654.62394320987
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 6172.8749759259235,
                            optProductNeedVolume: 12345.749951851847
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 18627.774480246913,
                            optProductNeedVolume: 18627.774480246917
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1689.6350722222212,
                            optProductNeedVolume: 6758.540288888884
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 5093.85368580247,
                            optProductNeedVolume: 20375.41474320988
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1856.1661037037031,
                            optProductNeedVolume: 7424.664414814813
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 5362.673440740738,
                            optProductNeedVolume: 8044.010161111108
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 15965.772823456788,
                            optProductNeedVolume: 31931.545646913575
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 3194.0277611111114,
                            optProductNeedVolume: 4791.041641666667
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 10104.129999999983,
                            optProductNeedVolume: 50520.649999999914
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1515.619499999999,
                            optProductNeedVolume: 6062.477999999996
                        }
                    ]
                }
            ]
        },
        {
            region: 'Чернівецька',
            regionNeed: 4,
            regNeedVolume1D: 92292.37920000001,
            optRegNeedVolume: 221420.27880000003,
            contacts: {
                phone_VCA: '+380 372 55 15 89',
                telegram_VCA: 'https://t.me/chernivetskaODA',
                hum_center: '+380 95 153 62 98',
                red_cross: '+380 37 252 80 09'
            },
            cities: [
                {
                    name: 'Чернівці',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 92292.37920000001,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 8625.7836,
                            optProductNeedVolume: 43128.918000000005
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5999.490000000001,
                            optProductNeedVolume: 20998.215000000004
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1561.2156,
                            optProductNeedVolume: 6244.8624
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 19403.2944,
                            optProductNeedVolume: 58209.8832
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 331.6572,
                            optProductNeedVolume: 1658.286
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 14425.74,
                            optProductNeedVolume: 7212.869999999999
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2014.2108,
                            optProductNeedVolume: 10071.054
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2602.026,
                            optProductNeedVolume: 5204.052
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 3591.6048000000005,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 12616.455600000001,
                            optProductNeedVolume: 18924.6834
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1480.3236000000002,
                            optProductNeedVolume: 5181.1326
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3251.8584,
                            optProductNeedVolume: 11381.504400000002
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1421.0028000000002,
                            optProductNeedVolume: 6394.512600000001
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 3227.5908000000004,
                            optProductNeedVolume: 3227.5908000000004
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 9402.346800000001,
                            optProductNeedVolume: 18804.693600000002
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1717.6068,
                            optProductNeedVolume: 1717.6068
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 539.2800000000001,
                            optProductNeedVolume: 2696.4000000000005
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 80.892,
                            optProductNeedVolume: 364.014
                        }
                    ]
                }
            ]
        },
        {
            region: 'Закарпатська',
            regionNeed: 5,
            regNeedVolume1D: 439898.52226333314,
            optRegNeedVolume: 1123981.914895123,
            contacts: {
                phone_VCA: '+380 312 69 61 00',
                telegram_VCA: 'https://t.me/zakarpatskaODA',
                hum_center: '+380 66 626 08 16',
                red_cross: '+380 31 261 61 08'
            },
            cities: [
                {
                    name: 'Берегове',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 77514.69537777775,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3781.8359401234566,
                            optProductNeedVolume: 18909.179700617282
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4332.910015432096,
                            optProductNeedVolume: 14443.033384773653
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1006.8077487654315,
                            optProductNeedVolume: 3188.2245377571994
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 16467.35147037037,
                            optProductNeedVolume: 49402.05441111111
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 249.65424814814818,
                            optProductNeedVolume: 1248.271240740741
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 11222.646477777776,
                            optProductNeedVolume: 3740.8821592592612
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1629.3052179012345,
                            optProductNeedVolume: 7060.32261090535
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2273.0986530864184,
                            optProductNeedVolume: 4546.197306172837
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 3242.556553703703,
                            optProductNeedVolume: 540.4260922839503
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 9785.004954320988,
                            optProductNeedVolume: 9785.004954320986
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 887.5503388888885,
                            optProductNeedVolume: 2662.6510166666653
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2675.7562265432107,
                            optProductNeedVolume: 8027.268679629631
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 975.0276148148146,
                            optProductNeedVolume: 4875.138074074073
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 2816.964862962962,
                            optProductNeedVolume: 3755.9531506172825
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 8386.679060493827,
                            optProductNeedVolume: 16773.358120987654
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1677.7944944444448,
                            optProductNeedVolume: 1398.1620787037043
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5307.6099999999915,
                            optProductNeedVolume: 26538.04999999996
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 796.1414999999996,
                            optProductNeedVolume: 3449.946499999998
                        }
                    ]
                },
                {
                    name: 'Виноградів',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 83973.97827555554,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4096.975515802468,
                            optProductNeedVolume: 20484.87757901234
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 4693.970475308638,
                            optProductNeedVolume: 15646.568251028793
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1090.7048219753078,
                            optProductNeedVolume: 3453.8986029218077
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 17839.572327407404,
                            optProductNeedVolume: 53518.716982222206
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 270.45788296296297,
                            optProductNeedVolume: 1352.2894148148148
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 12157.827195555554,
                            optProductNeedVolume: 4052.6090651851846
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1765.0748713580244,
                            optProductNeedVolume: 7648.6577758847725
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2462.5154750617266,
                            optProductNeedVolume: 4925.030950123453
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 3512.7580940740727,
                            optProductNeedVolume: 585.4596823456786
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 10600.38731308642,
                            optProductNeedVolume: 10600.38731308642
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 961.5097177777772,
                            optProductNeedVolume: 2884.529153333332
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2898.7264175308646,
                            optProductNeedVolume: 8696.179252592594
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1056.276456296296,
                            optProductNeedVolume: 5281.382281481479
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3051.701939259258,
                            optProductNeedVolume: 4068.935919012344
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 9085.539223209875,
                            optProductNeedVolume: 18171.07844641975
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1817.604748888889,
                            optProductNeedVolume: 1514.6706240740746
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5749.89199999999,
                            optProductNeedVolume: 28749.45999999995
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 862.4837999999994,
                            optProductNeedVolume: 3737.4297999999976
                        }
                    ]
                },
                {
                    name: 'Мукачево',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 58145.163609999996,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 2135.5485799999997,
                            optProductNeedVolume: 10677.742899999997
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 1844.3374099999996,
                            optProductNeedVolume: 5533.012229999999
                        },
                        {
                            name: 'Консерви',
                            productNeed: 2,
                            productNeedVolume1D: 679.4927299999999,
                            optProductNeedVolume: 2038.4781899999998
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 4465.237939999999,
                            optProductNeedVolume: 13395.713819999997
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 194.14077999999998,
                            optProductNeedVolume: 970.7038999999999
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 6989.068079999998,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 1164.84468,
                            optProductNeedVolume: 4659.37872
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1456.0558499999997,
                            optProductNeedVolume: 2912.1116999999995
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 3688.6748199999993,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 6212.504959999999,
                            optProductNeedVolume: 6212.50496
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 194.14077999999998,
                            optProductNeedVolume: 582.4223399999998
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 679.4927299999999,
                            optProductNeedVolume: 2038.4781899999998
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 582.42234,
                            optProductNeedVolume: 2912.1117
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 679.4927299999999,
                            optProductNeedVolume: 1358.9854599999999
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 3494.534039999999,
                            optProductNeedVolume: 6989.068079999998
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 1358.9854599999999,
                            optProductNeedVolume: 1358.9854599999999
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 19414.077999999998,
                            optProductNeedVolume: 97070.38999999998
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 2912.1116999999995,
                            optProductNeedVolume: 11648.446799999998
                        }
                    ]
                },
                {
                    name: 'Ужгород',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 127167.83604000001,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4961.373479999999,
                            optProductNeedVolume: 24806.867399999996
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 10575.55926,
                            optProductNeedVolume: 38777.05062
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1566.7495199999998,
                            optProductNeedVolume: 5222.498399999999
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 14361.870599999998,
                            optProductNeedVolume: 43085.61179999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 391.68737999999996,
                            optProductNeedVolume: 1958.4368999999997
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 14884.120439999999,
                            optProductNeedVolume: 9922.74696
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1827.8744399999998,
                            optProductNeedVolume: 8530.08072
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2611.2491999999997,
                            optProductNeedVolume: 5222.4983999999995
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 5875.310699999999,
                            optProductNeedVolume: 1958.4368999999988
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 15667.495199999998,
                            optProductNeedVolume: 15667.495199999998
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 913.9372199999999,
                            optProductNeedVolume: 2741.8116600000003
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 5614.185779999999,
                            optProductNeedVolume: 16842.55734
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2219.56182,
                            optProductNeedVolume: 11097.809099999999
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 2480.6867399999996,
                            optProductNeedVolume: 1653.7911599999998
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 12142.30878,
                            optProductNeedVolume: 24284.61756
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 1044.49968,
                            optProductNeedVolume: 696.33312
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 26112.492,
                            optProductNeedVolume: 130562.45999999999
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 3916.8737999999994,
                            optProductNeedVolume: 18278.7444
                        }
                    ]
                },
                {
                    name: 'Хуст',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 93096.84895999996,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4542.067895555555,
                            optProductNeedVolume: 22710.339477777776
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 5203.91994444444,
                            optProductNeedVolume: 17346.399814814802
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1209.1981844444435,
                            optProductNeedVolume: 3829.127584074071
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 19777.65022666666,
                            optProductNeedVolume: 59332.95067999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 299.8402266666667,
                            optProductNeedVolume: 1499.2011333333335
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 13478.644519999998,
                            optProductNeedVolume: 4492.881506666668
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1956.8312955555552,
                            optProductNeedVolume: 8479.602280740739
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2730.0413288888867,
                            optProductNeedVolume: 5460.082657777773
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 3894.381526666665,
                            optProductNeedVolume: 649.0635877777768
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 11752.005524444443,
                            optProductNeedVolume: 11752.005524444441
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 1065.9674199999993,
                            optProductNeedVolume: 3197.9022599999976
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3213.6419044444447,
                            optProductNeedVolume: 9640.925713333334
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1171.0295466666662,
                            optProductNeedVolume: 5855.147733333331
                        },
                        {
                            name: 'Хліб',
                            productNeed: 1,
                            productNeedVolume1D: 3383.2365733333318,
                            optProductNeedVolume: 4510.982097777776
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 10072.585462222221,
                            optProductNeedVolume: 20145.170924444443
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 2015.06798,
                            optProductNeedVolume: 1679.223316666667
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6374.555999999989,
                            optProductNeedVolume: 31872.779999999944
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 956.1833999999993,
                            optProductNeedVolume: 4143.461399999997
                        }
                    ]
                }
            ]
        },
        {
            region: 'Рівненська',
            regionNeed: 5,
            regNeedVolume1D: 652431.0139822221,
            optRegNeedVolume: 1693952.1205843613,
            contacts: {
                phone_VCA: '+380 362 69 51 65',
                telegram_VCA: 'https://t.me/s/vitalykoval8',
                hum_center: '+380 96 804 06 19',
                red_cross: '+380 36 263 64 93'
            },
            cities: [
                {
                    name: 'Вараш',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 127967.17994666664,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 6243.343638518519,
                            optProductNeedVolume: 31216.718192592594
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 7153.098814814811,
                            optProductNeedVolume: 21459.296444444437
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1662.1151348148137,
                            optProductNeedVolume: 5263.364593580243
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 27185.561635555554,
                            optProductNeedVolume: 81556.68490666666
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 412.1483022222223,
                            optProductNeedVolume: 2060.7415111111113
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 18527.202026666666,
                            optProductNeedVolume: 18527.202026666666
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2689.7815051851853,
                            optProductNeedVolume: 11655.719855802468
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3752.604882962961,
                            optProductNeedVolume: 7505.209765925922
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 5353.060035555554,
                            optProductNeedVolume: 892.1766725925918
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 16153.833588148149,
                            optProductNeedVolume: 24230.750382222224
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1465.2358933333328,
                            optProductNeedVolume: 4884.119644444443
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 4417.342761481483,
                            optProductNeedVolume: 15460.69966518519
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1609.650062222222,
                            optProductNeedVolume: 5097.225197037036
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 4650.460764444443,
                            optProductNeedVolume: 1550.1535881481486
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 13845.370394074074,
                            optProductNeedVolume: 27690.74078814815
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 2769.8313066666674,
                            optProductNeedVolume: 923.2771022222232
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 8762.207999999986,
                            optProductNeedVolume: 43811.03999999993
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1314.3311999999994,
                            optProductNeedVolume: 5476.379999999997
                        }
                    ]
                },
                {
                    name: 'Дубно',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 113176.49962666664,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 5521.72658074074,
                            optProductNeedVolume: 27608.6329037037
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 6326.330592592589,
                            optProductNeedVolume: 18978.991777777766
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1470.0048325925916,
                            optProductNeedVolume: 4655.015303209873
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 24043.40478222222,
                            optProductNeedVolume: 72130.21434666666
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 364.51144888888894,
                            optProductNeedVolume: 1822.5572444444447
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 16385.794186666666,
                            optProductNeedVolume: 16385.794186666666
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2378.891647407407,
                            optProductNeedVolume: 10308.530472098764
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3318.8719585185163,
                            optProductNeedVolume: 6637.743917037033
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 4734.343582222221,
                            optProductNeedVolume: 789.0572637037021
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 14286.744005925926,
                            optProductNeedVolume: 21430.11600888889
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1295.8812533333328,
                            optProductNeedVolume: 4319.604177777776
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3906.7782192592604,
                            optProductNeedVolume: 13673.723767407411
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1423.6037688888887,
                            optProductNeedVolume: 4508.07860148148
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 4112.952017777777,
                            optProductNeedVolume: 1370.9840059259259
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 12245.097202962963,
                            optProductNeedVolume: 24490.194405925926
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 2449.689146666667,
                            optProductNeedVolume: 816.5630488888892
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 7749.455999999987,
                            optProductNeedVolume: 38747.27999999994
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1162.4183999999993,
                            optProductNeedVolume: 4843.409999999998
                        }
                    ]
                },
                {
                    name: 'Здолбунів',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 74855.60575999999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3652.1025955555556,
                            optProductNeedVolume: 18260.512977777777
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 4184.272444444442,
                            optProductNeedVolume: 12552.817333333327
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 972.2698844444438,
                            optProductNeedVolume: 3078.854634074072
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 15902.450026666666,
                            optProductNeedVolume: 47707.35007999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 241.09002666666672,
                            optProductNeedVolume: 1205.4501333333335
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 10837.661119999999,
                            optProductNeedVolume: 10837.661119999999
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1573.4129955555554,
                            optProductNeedVolume: 6818.12298074074
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2195.1215288888875,
                            optProductNeedVolume: 4390.243057777775
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 3131.322826666666,
                            optProductNeedVolume: 521.8871377777768
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 9449.336924444446,
                            optProductNeedVolume: 14174.005386666668
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 857.1035199999997,
                            optProductNeedVolume: 2857.0117333333324
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2583.9662044444453,
                            optProductNeedVolume: 9043.881715555559
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 941.5799466666665,
                            optProductNeedVolume: 2981.6698311111104
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 2720.3307733333327,
                            optProductNeedVolume: 906.7769244444444
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 8098.979662222222,
                            optProductNeedVolume: 16197.959324444444
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 1620.2388800000003,
                            optProductNeedVolume: 540.0796266666671
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 5125.535999999992,
                            optProductNeedVolume: 25627.67999999996
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 768.8303999999996,
                            optProductNeedVolume: 3203.4599999999987
                        }
                    ]
                },
                {
                    name: 'Костопіль',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 34208.2416,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 1550.5152,
                            optProductNeedVolume: 7752.576
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 2067.3536,
                            optProductNeedVolume: 6202.0608
                        },
                        {
                            name: 'Консерви',
                            productNeed: 2,
                            productNeedVolume1D: 323.024,
                            optProductNeedVolume: 969.0719999999999
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 3940.8928,
                            optProductNeedVolume: 11822.6784
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 129.2096,
                            optProductNeedVolume: 646.048
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 5362.1984,
                            optProductNeedVolume: 5362.1984
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 549.1408,
                            optProductNeedVolume: 2196.5632
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 742.9552,
                            optProductNeedVolume: 1485.9104
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 1582.8176,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 3101.0304,
                            optProductNeedVolume: 6202.060800000001
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 290.72159999999997,
                            optProductNeedVolume: 872.1647999999998
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 1485.9104,
                            optProductNeedVolume: 5943.6416
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 419.9312,
                            optProductNeedVolume: 1259.7936
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 1615.1200000000001,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 2810.3088,
                            optProductNeedVolume: 5620.6176
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 807.5600000000001,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6460.4800000000005,
                            optProductNeedVolume: 32302.4
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 969.072,
                            optProductNeedVolume: 3876.2879999999996
                        }
                    ]
                },
                {
                    name: 'Рівне',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 214539.57095999998,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 10204.0224,
                            optProductNeedVolume: 51020.112
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 11224.42464,
                            optProductNeedVolume: 33673.27391999999
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2040.80448,
                            optProductNeedVolume: 6802.6816
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 33163.0728,
                            optProductNeedVolume: 99489.2184
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 765.30168,
                            optProductNeedVolume: 3826.5084
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 28826.36328,
                            optProductNeedVolume: 28826.36328
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 3316.30728,
                            optProductNeedVolume: 15476.10064
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 4336.70952,
                            optProductNeedVolume: 8673.41904
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 7142.81568,
                            optProductNeedVolume: 2380.9385599999987
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 18877.44144,
                            optProductNeedVolume: 18877.441440000002
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1275.5028,
                            optProductNeedVolume: 4676.8436
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 5357.111760000001,
                            optProductNeedVolume: 16071.335280000001
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2295.9050399999996,
                            optProductNeedVolume: 7653.0167999999985
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 7397.9162400000005,
                            optProductNeedVolume: 4931.944160000001
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 16581.5364,
                            optProductNeedVolume: 33163.0728
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 3061.20672,
                            optProductNeedVolume: 2040.8044800000002
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 51020.112,
                            optProductNeedVolume: 255100.56
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 7653.016799999999,
                            optProductNeedVolume: 33163.072799999994
                        }
                    ]
                },
                {
                    name: 'Сарни',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 87683.91608888887,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4277.978306172839,
                            optProductNeedVolume: 21389.891530864195
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 4901.348271604936,
                            optProductNeedVolume: 14704.044814814808
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1138.8917382716043,
                            optProductNeedVolume: 3606.490504526747
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 18627.717718518517,
                            optProductNeedVolume: 55883.15315555555
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 282.4066074074075,
                            optProductNeedVolume: 1412.0330370370375
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 12694.955288888888,
                            optProductNeedVolume: 12694.955288888888
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1843.0551950617285,
                            optProductNeedVolume: 7986.572511934157
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2571.308454320986,
                            optProductNeedVolume: 5142.616908641972
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 3667.9503851851846,
                            optProductNeedVolume: 611.3250641975301
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 11068.708316049384,
                            optProductNeedVolume: 16603.062474074075
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1003.9888444444441,
                            optProductNeedVolume: 3346.6294814814805
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3026.7910271604947,
                            optProductNeedVolume: 10593.76859506173
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1102.9423407407405,
                            optProductNeedVolume: 3492.6507456790114
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 3186.5249481481474,
                            optProductNeedVolume: 1062.1749827160493
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 9486.934824691358,
                            optProductNeedVolume: 18973.869649382716
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 1897.9058222222227,
                            optProductNeedVolume: 632.6352740740745
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6003.919999999991,
                            optProductNeedVolume: 30019.599999999955
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 900.5879999999996,
                            optProductNeedVolume: 3752.449999999998
                        }
                    ]
                }
            ]
        },
        {
            region: 'Волинська',
            regionNeed: 5,
            regNeedVolume1D: 652252.6921244445,
            optRegNeedVolume: 1566329.1513471603,
            contacts: {
                phone_VCA: '+380 332 77 82 17',
                telegram_VCA: 'https://t.me/volynskaODA  ',
                hum_center: '+380 66 206 06 49',
                red_cross: '+380 33 224 15 34'
            },
            cities: [
                {
                    name: 'Володимир-Волинський',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 108974.27519999996,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 5316.7058,
                            optProductNeedVolume: 26583.529
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 6091.434999999996,
                            optProductNeedVolume: 18274.30499999999
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1415.4237999999991,
                            optProductNeedVolume: 4529.356159999997
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 23150.6772,
                            optProductNeedVolume: 74082.16704
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 350.97720000000004,
                            optProductNeedVolume: 1754.8860000000002
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 15777.392399999999,
                            optProductNeedVolume: 3155.478479999998
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2290.5638,
                            optProductNeedVolume: 10536.59348
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3195.642799999998,
                            optProductNeedVolume: 6391.285599999996
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 4558.558199999999,
                            optProductNeedVolume: 911.7116399999995
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 13756.2796,
                            optProductNeedVolume: 13756.279599999998
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1247.7653999999993,
                            optProductNeedVolume: 3992.8492799999976
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3761.7202000000007,
                            optProductNeedVolume: 11285.160600000001
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1370.7455999999997,
                            optProductNeedVolume: 6305.429759999999
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 3960.2387999999987,
                            optProductNeedVolume: 3960.2387999999987
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 11790.4388,
                            optProductNeedVolume: 23580.8776
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 2358.7326000000003,
                            optProductNeedVolume: 1415.2395600000004
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 7461.7199999999875,
                            optProductNeedVolume: 37308.59999999994
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1119.2579999999994,
                            optProductNeedVolume: 3581.6255999999985
                        }
                    ]
                },
                {
                    name: 'Ковель',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 194622.2733155555,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 9495.354453580247,
                            optProductNeedVolume: 47476.77226790124
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 10878.979697530856,
                            optProductNeedVolume: 32636.93909259257
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2527.871804197529,
                            optProductNeedVolume: 8089.189773432094
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 41345.881100740735,
                            optProductNeedVolume: 132306.81952237035
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 626.8266562962964,
                            optProductNeedVolume: 3134.133281481482
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 28177.58567555555,
                            optProductNeedVolume: 5635.517135111106
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 4090.825409135802,
                            optProductNeedVolume: 18817.79688202469
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 5707.248479506169,
                            optProductNeedVolume: 11414.496959012338
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 8141.343067407405,
                            optProductNeedVolume: 1628.2686134814812
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 24567.98545530864,
                            optProductNeedVolume: 24567.985455308648
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 2228.4427977777764,
                            optProductNeedVolume: 7131.016952888884
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 6718.232679753088,
                            optProductNeedVolume: 20154.69803925926
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2448.078909629629,
                            optProductNeedVolume: 11261.162984296292
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 7072.7763659259235,
                            optProductNeedVolume: 7072.7763659259235
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 21057.098094320987,
                            optProductNeedVolume: 42114.196188641974
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 4212.571268888889,
                            optProductNeedVolume: 2527.542761333334
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 13326.235999999977,
                            optProductNeedVolume: 66631.17999999989
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1998.9353999999987,
                            optProductNeedVolume: 6396.593279999996
                        }
                    ]
                },
                {
                    name: 'Луцьк',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 204338.9376,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 8088.4162799999995,
                            optProductNeedVolume: 40442.081399999995
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 10216.94688,
                            optProductNeedVolume: 30650.840640000002
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2128.5306,
                            optProductNeedVolume: 6811.29792
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 28096.60392,
                            optProductNeedVolume: 89909.132544
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 638.55918,
                            optProductNeedVolume: 3192.7959
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 30437.987579999997,
                            optProductNeedVolume: 6087.597516000002
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 3405.64896,
                            optProductNeedVolume: 15665.985216000001
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 4044.2081399999997,
                            optProductNeedVolume: 8088.4162799999995
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 8301.26934,
                            optProductNeedVolume: 1660.2538679999998
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 20646.74682,
                            optProductNeedVolume: 20646.74682
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1277.11836,
                            optProductNeedVolume: 4086.778752
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 4682.76732,
                            optProductNeedVolume: 14048.301959999999
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2554.23672,
                            optProductNeedVolume: 11749.488912
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 8514.1224,
                            optProductNeedVolume: 8514.1224
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 17666.80398,
                            optProductNeedVolume: 35333.60796
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 4682.76732,
                            optProductNeedVolume: 2809.6603920000007
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 42570.612,
                            optProductNeedVolume: 212853.06
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 6385.5918,
                            optProductNeedVolume: 20433.893760000003
                        }
                    ]
                },
                {
                    name: 'Нововолинськ',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 144317.20600888887,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 7041.039041728394,
                            optProductNeedVolume: 35205.19520864197
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 8067.031216049377,
                            optProductNeedVolume: 24201.093648148126
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1874.479162716048,
                            optProductNeedVolume: 5998.333320691354
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 30658.98850518518,
                            optProductNeedVolume: 98108.76321659258
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 464.8073940740741,
                            optProductNeedVolume: 2324.0369703703705
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 20894.373328888887,
                            optProductNeedVolume: 4178.874665777774
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 3033.4477306172835,
                            optProductNeedVolume: 13953.859560839504
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 4232.065223209874,
                            optProductNeedVolume: 8464.130446419747
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 6037.00627185185,
                            optProductNeedVolume: 1207.4012543703702
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 18217.765920493828,
                            optProductNeedVolume: 18217.76592049383
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1652.4451844444436,
                            optProductNeedVolume: 5287.82459022222
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 4981.73489160494,
                            optProductNeedVolume: 14945.204674814817
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1815.310767407407,
                            optProductNeedVolume: 8350.42953007407
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 5244.637761481479,
                            optProductNeedVolume: 5244.637761481479
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 15614.35652691358,
                            optProductNeedVolume: 31228.71305382716
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 3123.7252822222226,
                            optProductNeedVolume: 1874.235169333334
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 9881.731999999984,
                            optProductNeedVolume: 49408.659999999916
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1482.2597999999991,
                            optProductNeedVolume: 4743.231359999997
                        }
                    ]
                }
            ]
        },
        {
            region: 'Івано-Франківська',
            regionNeed: 5,
            regNeedVolume1D: 598594.9343111109,
            optRegNeedVolume: 1482385.8652424691,
            contacts: {
                phone_VCA: '+380 800 50 15 54',
                telegram_VCA: 'https://t.me/onyshchuksvitlana',
                hum_center: '+380 342 55 18 68',
                red_cross: '+380 34 275 28 37'
            },
            cities: [
                {
                    name: 'Долина',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 62701.67025777776,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3059.1287101234566,
                            optProductNeedVolume: 15295.643550617282
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 3504.8927654320964,
                            optProductNeedVolume: 10514.67829629629
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 814.4072187654316,
                            optProductNeedVolume: 2986.159802139916
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 13320.447650370368,
                            optProductNeedVolume: 39961.3429511111
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 201.94542814814818,
                            optProductNeedVolume: 1009.7271407407409
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 9078.003537777777,
                            optProductNeedVolume: 1513.000589629628
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1317.9456879012346,
                            optProductNeedVolume: 6150.413210205761
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1838.7104730864187,
                            optProductNeedVolume: 3677.4209461728374
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 2622.905383703703,
                            optProductNeedVolume: 437.15089728395014
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 7915.094694320988,
                            optProductNeedVolume: 7915.094694320987
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 717.9398488888885,
                            optProductNeedVolume: 2393.132829629628
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2164.4203565432103,
                            optProductNeedVolume: 6493.2610696296315
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 788.7002548148147,
                            optProductNeedVolume: 3943.5012740740735
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 2278.6440829629623,
                            optProductNeedVolume: 1139.3220414814814
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 6783.988280493827,
                            optProductNeedVolume: 13567.976560987654
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 1357.1686844444446,
                            optProductNeedVolume: 904.7791229629629
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4293.327999999993,
                            optProductNeedVolume: 21466.639999999967
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 643.9991999999996,
                            optProductNeedVolume: 2575.9967999999985
                        }
                    ]
                },
                {
                    name: 'Івано-Франківськ',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 235000.74000000002,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 9894.768,
                            optProductNeedVolume: 49473.84
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 13110.5676,
                            optProductNeedVolume: 39331.7028
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2473.692,
                            optProductNeedVolume: 8245.64
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 30179.042400000002,
                            optProductNeedVolume: 90537.12719999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 742.1076,
                            optProductNeedVolume: 3710.5380000000005
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 34879.057199999996,
                            optProductNeedVolume: 11626.352399999996
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 4205.276400000001,
                            optProductNeedVolume: 18222.864400000006
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 4700.0148,
                            optProductNeedVolume: 9400.0296
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 7915.8144,
                            optProductNeedVolume: 2638.604799999999
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 24984.289200000003,
                            optProductNeedVolume: 24984.289200000007
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1484.2152,
                            optProductNeedVolume: 5442.122400000001
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 6926.337600000001,
                            optProductNeedVolume: 20779.0128
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 3215.7996,
                            optProductNeedVolume: 16078.998
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 5442.1224,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 22757.9664,
                            optProductNeedVolume: 45515.9328
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 5194.753200000001,
                            optProductNeedVolume: 1731.5843999999997
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 49473.840000000004,
                            optProductNeedVolume: 247369.2
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 7421.076,
                            optProductNeedVolume: 29684.303999999996
                        }
                    ]
                },
                {
                    name: 'Калуш',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 46680.55392,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 1642.71744,
                            optProductNeedVolume: 8213.5872
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 3422.328,
                            optProductNeedVolume: 10266.984
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 479.12592,
                            optProductNeedVolume: 1916.5036800000003
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 3969.9004800000002,
                            optProductNeedVolume: 11909.70144
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 136.89312,
                            optProductNeedVolume: 684.4656
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 4859.70576,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 684.4656,
                            optProductNeedVolume: 3422.328
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 889.8052799999999,
                            optProductNeedVolume: 1779.6105599999999
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 1711.164,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 4380.57984,
                            optProductNeedVolume: 4380.57984
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 342.2328,
                            optProductNeedVolume: 1026.6984
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2327.18304,
                            optProductNeedVolume: 6981.54912
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 821.35872,
                            optProductNeedVolume: 4106.7936
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 1163.59152,
                            optProductNeedVolume: 1163.59152
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 3559.2211199999997,
                            optProductNeedVolume: 7118.442239999999
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 547.57248,
                            optProductNeedVolume: 547.57248
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 13689.312,
                            optProductNeedVolume: 68446.56
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 2053.3968,
                            optProductNeedVolume: 8213.5872
                        }
                    ]
                },
                {
                    name: 'Коломия',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 185726.47253333326,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 9061.340503703703,
                            optProductNeedVolume: 45306.70251851851
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 10381.722962962956,
                            optProductNeedVolume: 31145.16888888887
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 2412.3277629629615,
                            optProductNeedVolume: 8845.201797530859
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 39456.04231111111,
                            optProductNeedVolume: 118368.12693333333
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 598.1756444444445,
                            optProductNeedVolume: 2990.8782222222226
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 26889.64373333333,
                            optProductNeedVolume: 4481.607288888881
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 3903.841837037037,
                            optProductNeedVolume: 18217.928572839504
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 5446.381392592589,
                            optProductNeedVolume: 10892.762785185178
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 7769.218311111109,
                            optProductNeedVolume: 1294.8697185185174
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 23445.03122962963,
                            optProductNeedVolume: 23445.031229629625
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 2126.5850666666656,
                            optProductNeedVolume: 7088.616888888886
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 6411.155496296298,
                            optProductNeedVolume: 19233.466488888895
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2336.182044444444,
                            optProductNeedVolume: 11680.910222222219
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 6749.493688888887,
                            optProductNeedVolume: 3374.746844444444
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 20094.619614814816,
                            optProductNeedVolume: 40189.23922962963
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 4020.022933333334,
                            optProductNeedVolume: 2680.015288888889
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 12717.119999999979,
                            optProductNeedVolume: 63585.5999999999
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1907.567999999999,
                            optProductNeedVolume: 7630.271999999995
                        }
                    ]
                },
                {
                    name: 'Надвірна',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 68485.49759999999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3341.3137333333334,
                            optProductNeedVolume: 16706.568666666666
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 3828.196666666664,
                            optProductNeedVolume: 11484.589999999991
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 889.5310666666661,
                            optProductNeedVolume: 3261.613911111109
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 14549.173599999998,
                            optProductNeedVolume: 43647.52079999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 220.57360000000003,
                            optProductNeedVolume: 1102.8680000000002
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 9915.3912,
                            optProductNeedVolume: 1652.5651999999973
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1439.5177333333334,
                            optProductNeedVolume: 6717.749422222222
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2008.3197333333321,
                            optProductNeedVolume: 4016.6394666666642
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 2864.8515999999995,
                            optProductNeedVolume: 477.47526666666636
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 8645.211466666668,
                            optProductNeedVolume: 8645.211466666668
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 784.1651999999996,
                            optProductNeedVolume: 2613.8839999999987
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2364.0742666666674,
                            optProductNeedVolume: 7092.222800000001
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 861.4527999999998,
                            optProductNeedVolume: 4307.263999999999
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 2488.8343999999993,
                            optProductNeedVolume: 1244.4171999999999
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 7409.767733333333,
                            optProductNeedVolume: 14819.535466666666
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 1482.3588000000002,
                            optProductNeedVolume: 988.2392
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4689.359999999992,
                            optProductNeedVolume: 23446.799999999963
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 703.4039999999997,
                            optProductNeedVolume: 2813.6159999999986
                        }
                    ]
                }
            ]
        },
        {
            region: 'Хмельницька',
            regionNeed: 5,
            regNeedVolume1D: 712515.4556366665,
            optRegNeedVolume: 1967508.19217195,
            contacts: {
                phone_VCA: '+380 67 380 35 11',
                telegram_VCA: 'https://t.me/khmelnytskaODA ',
                hum_center: '+380 67 133 15 50',
                red_cross: ''
            },
            cities: [
                {
                    name: 'Кам’янець-Подільський',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 100201.00535999998,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4890.5046,
                            optProductNeedVolume: 24452.523
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 7933.48524,
                            optProductNeedVolume: 26444.9508
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1086.7788,
                            optProductNeedVolume: 4347.1152
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 14997.547440000002,
                            optProductNeedVolume: 44992.64232
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 217.35576,
                            optProductNeedVolume: 1086.7788
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 11519.85528,
                            optProductNeedVolume: 3839.95176
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1521.49032,
                            optProductNeedVolume: 7100.28816
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1738.84608,
                            optProductNeedVolume: 3477.69216
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 4347.1152,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 8042.16312,
                            optProductNeedVolume: 8042.163119999999
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 978.10092,
                            optProductNeedVolume: 3586.3700400000002
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2390.91336,
                            optProductNeedVolume: 7969.7112
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1521.49032,
                            optProductNeedVolume: 7607.4516
                        },
                        {
                            name: 'Хліб',
                            productNeed: 2,
                            productNeedVolume1D: 3260.3364,
                            optProductNeedVolume: 2173.5576
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 8802.908280000001,
                            optProductNeedVolume: 17605.816560000003
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 1956.20184,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 21735.576,
                            optProductNeedVolume: 108677.88
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 3260.3364,
                            optProductNeedVolume: 14128.1244
                        }
                    ]
                },
                {
                    name: 'Нетішин',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 18597.02547,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 610.40565,
                            optProductNeedVolume: 3052.0282500000003
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 732.4867800000001,
                            optProductNeedVolume: 2197.4603400000005
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 122.08113000000002,
                            optProductNeedVolume: 488.32452
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 3133.4156700000003,
                            optProductNeedVolume: 9400.247010000001
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 40.69371000000001,
                            optProductNeedVolume: 203.46855000000005
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 732.4867800000001,
                            optProductNeedVolume: 732.4867800000001
                        },
                        {
                            name: 'Сири',
                            productNeed: 0,
                            productNeedVolume1D: 203.46855000000005,
                            optProductNeedVolume: 813.8742000000002
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 366.24339000000003,
                            optProductNeedVolume: 732.4867800000001
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 2,
                            productNeedVolume1D: 651.0993600000002,
                            optProductNeedVolume: 651.0993600000002
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 1017.3427500000003,
                            optProductNeedVolume: 2034.6855000000005
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 122.08113000000002,
                            optProductNeedVolume: 366.24339
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 162.77484000000004,
                            optProductNeedVolume: 488.3245200000001
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 162.77484000000004,
                            optProductNeedVolume: 651.0993600000002
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 488.32452000000006,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 569.7119400000001,
                            optProductNeedVolume: 1139.4238800000003
                        },
                        {
                            name: 'Риба',
                            productNeed: 2,
                            productNeedVolume1D: 122.08113000000002,
                            optProductNeedVolume: 122.08113000000002
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 8138.742000000002,
                            optProductNeedVolume: 40693.71000000001
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1220.8113,
                            optProductNeedVolume: 4883.2452
                        }
                    ]
                },
                {
                    name: 'Полонне',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 66370.80325333332,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3238.1406892592595,
                            optProductNeedVolume: 16190.703446296298
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 3709.9896574074055,
                            optProductNeedVolume: 11542.190045267482
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 862.064137407407,
                            optProductNeedVolume: 3218.37277965432
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 14099.924397777777,
                            optProductNeedVolume: 45119.758072888886
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 213.76273111111118,
                            optProductNeedVolume: 1068.813655555556
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 9609.223873333334,
                            optProductNeedVolume: 6192.6109405925945
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1395.0683225925927,
                            optProductNeedVolume: 6262.30669252675
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1946.3068614814804,
                            optProductNeedVolume: 3892.6137229629608
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 2776.3907477777775,
                            optProductNeedVolume: 1295.6490156296295
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 8378.264734074075,
                            optProductNeedVolume: 11729.570627703708
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 759.9517566666664,
                            optProductNeedVolume: 2448.7334381481473
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2291.0764107407413,
                            optProductNeedVolume: 7433.2701326255155
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 834.852871111111,
                            optProductNeedVolume: 3895.9800651851847
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 2411.9842022222215,
                            optProductNeedVolume: 696.7954361975308
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 7180.969017037038,
                            optProductNeedVolume: 14361.938034074075
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 1436.5865433333338,
                            optProductNeedVolume: 766.1794897777777
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4544.561999999993,
                            optProductNeedVolume: 22722.80999999996
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 681.6842999999997,
                            optProductNeedVolume: 2847.925519999999
                        }
                    ]
                },
                {
                    name: 'Славута',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 113697.00202666667,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 5547.121180740741,
                            optProductNeedVolume: 27735.605903703705
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 6355.425592592589,
                            optProductNeedVolume: 19772.43517695472
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1476.7654325925919,
                            optProductNeedVolume: 5513.257615012344
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 24153.981182222222,
                            optProductNeedVolume: 77292.73978311112
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 366.187848888889,
                            optProductNeedVolume: 1830.939244444445
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 16461.152986666668,
                            optProductNeedVolume: 10608.298591407412
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2389.8322474074075,
                            optProductNeedVolume: 10727.691421695476
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3334.135558518517,
                            optProductNeedVolume: 6668.271117037034
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 4756.116982222222,
                            optProductNeedVolume: 2219.5212583703706
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 14352.449205925928,
                            optProductNeedVolume: 20093.4288882963
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1301.8410533333329,
                            optProductNeedVolume: 4194.8211718518505
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3924.745619259261,
                            optProductNeedVolume: 12733.61912026338
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1430.1509688888887,
                            optProductNeedVolume: 6674.037854814815
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 4131.867617777777,
                            optProductNeedVolume: 1193.6506451358027
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 12301.412802962965,
                            optProductNeedVolume: 24602.82560592593
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 2460.9553466666675,
                            optProductNeedVolume: 1312.5095182222226
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 7785.095999999988,
                            optProductNeedVolume: 38925.47999999994
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1167.7643999999996,
                            optProductNeedVolume: 4878.6601599999985
                        }
                    ]
                },
                {
                    name: 'Старокостянтинів',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 110986.53397333331,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 5414.881152592593,
                            optProductNeedVolume: 27074.405762962964
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 6203.916074074071,
                            optProductNeedVolume: 19301.072230452664
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1441.5602340740734,
                            optProductNeedVolume: 5381.824873876541
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 23578.16481777778,
                            optProductNeedVolume: 75450.12741688889
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 357.45815111111125,
                            optProductNeedVolume: 1787.2907555555562
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 16068.729013333334,
                            optProductNeedVolume: 10355.40314192593
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2332.8600859259263,
                            optProductNeedVolume: 10471.94971904527
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3254.651774814813,
                            optProductNeedVolume: 6509.303549629626
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 4642.734017777777,
                            optProductNeedVolume: 2166.609208296297
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 14010.295460740743,
                            optProductNeedVolume: 19614.41364503704
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1270.8059466666662,
                            optProductNeedVolume: 4094.81916148148
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3831.182047407409,
                            optProductNeedVolume: 12430.05730936626
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1396.057031111111,
                            optProductNeedVolume: 6514.9328118518515
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 4033.3663822222215,
                            optProductNeedVolume: 1165.1947326419759
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 12008.154530370372,
                            optProductNeedVolume: 24016.309060740743
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 2402.287653333334,
                            optProductNeedVolume: 1281.220081777778
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 7599.503999999989,
                            optProductNeedVolume: 37997.519999999946
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1139.9255999999996,
                            optProductNeedVolume: 4762.355839999998
                        }
                    ]
                },
                {
                    name: 'Хмельницький',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 170375.38517999998,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 6705.29244,
                            optProductNeedVolume: 33526.4622
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 8229.22254,
                            optProductNeedVolume: 24687.667620000004
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1523.9301,
                            optProductNeedVolume: 4876.57632
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 24687.667620000004,
                            optProductNeedVolume: 88875.60343200002
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 304.78602,
                            optProductNeedVolume: 1523.9301
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 13410.58488,
                            optProductNeedVolume: 8046.350928
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2438.28816,
                            optProductNeedVolume: 11703.783168
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3352.64622,
                            optProductNeedVolume: 6705.29244
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 4876.57632,
                            optProductNeedVolume: 1950.6305279999997
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 14020.156920000001,
                            optProductNeedVolume: 16824.188304
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 2,
                            productNeedVolume1D: 1219.14408,
                            optProductNeedVolume: 3657.43224
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2743.07418,
                            optProductNeedVolume: 9326.452212
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1828.71612,
                            optProductNeedVolume: 9143.580600000001
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 5181.362340000001,
                            optProductNeedVolume: 1036.2724679999992
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 7924.43652,
                            optProductNeedVolume: 15848.87304
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 1828.71612,
                            optProductNeedVolume: 1097.2296720000004
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 60957.204000000005,
                            optProductNeedVolume: 304786.02
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 9143.5806,
                            optProductNeedVolume: 38403.03852
                        }
                    ]
                },
                {
                    name: 'Шепетівка',
                    blocked: '',
                    cityNeed: 4,
                    cityNeedVolume1D: 132287.7003733333,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 6454.135919259259,
                            optProductNeedVolume: 32270.679596296293
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 1,
                            productNeedVolume1D: 7394.606907407403,
                            optProductNeedVolume: 23005.44371193414
                        },
                        {
                            name: 'Консерви',
                            productNeed: 1,
                            productNeedVolume1D: 1718.2326674074063,
                            optProductNeedVolume: 6414.735291654317
                        },
                        {
                            name: 'Вода',
                            productNeed: 1,
                            productNeedVolume1D: 28103.420217777777,
                            optProductNeedVolume: 89930.94469688888
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 426.0635511111112,
                            optProductNeedVolume: 2130.3177555555562
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 19152.73081333333,
                            optProductNeedVolume: 12342.870968592593
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2780.5958525925926,
                            optProductNeedVolume: 12481.785827193416
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 3879.3030414814793,
                            optProductNeedVolume: 7758.606082962959
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 5533.793917777777,
                            optProductNeedVolume: 2582.4371616296303
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 2,
                            productNeedVolume1D: 16699.230994074074,
                            optProductNeedVolume: 23378.923391703705
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1514.706246666666,
                            optProductNeedVolume: 4880.720128148146
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 4566.484280740742,
                            optProductNeedVolume: 14815.704555292183
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1663.9962311111108,
                            optProductNeedVolume: 7765.315745185183
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 4807.472982222221,
                            optProductNeedVolume: 1388.8255281975307
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 14312.827797037038,
                            optProductNeedVolume: 28625.655594074076
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 2863.348353333334,
                            optProductNeedVolume: 1527.1191217777778
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 9058.043999999985,
                            optProductNeedVolume: 45290.21999999993
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 1358.7065999999993,
                            optProductNeedVolume: 5676.374239999997
                        }
                    ]
                }
            ]
        },
        {
            region: 'Тернопільська',
            regionNeed: 5,
            regNeedVolume1D: 342220.90152000013,
            optRegNeedVolume: 882322.2045333331,
            contacts: {
                phone_VCA: '+380 352 52 25 82',
                telegram_VCA: 'https://t.me/ternopilskaODA',
                hum_center: '+380 63 180 38 83',
                red_cross: '+380 35 252 10 62'
            },
            cities: [
                {
                    name: 'Кременець',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 65217.37343999999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 3181.866426666667,
                            optProductNeedVolume: 15909.332133333335
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 3645.5153333333315,
                            optProductNeedVolume: 10936.545999999995
                        },
                        {
                            name: 'Консерви',
                            productNeed: 2,
                            productNeedVolume1D: 847.0826933333328,
                            optProductNeedVolume: 2541.2480799999985
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 13854.88784,
                            optProductNeedVolume: 41564.663519999995
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 210.04784000000006,
                            optProductNeedVolume: 1050.2392000000004
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 9442.22928,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1370.8240266666667,
                            optProductNeedVolume: 6031.625717333334
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 1912.4828266666657,
                            optProductNeedVolume: 3824.9656533333314
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 2728.1410399999995,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 8232.662453333334,
                            optProductNeedVolume: 8232.662453333334
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 746.7448799999997,
                            optProductNeedVolume: 2389.583615999999
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 2251.2607733333343,
                            optProductNeedVolume: 6753.782320000004
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 820.3443199999999,
                            optProductNeedVolume: 2625.101824
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 2370.0673599999996,
                            optProductNeedVolume: 474.01347199999964
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 7056.1740266666675,
                            optProductNeedVolume: 14112.348053333335
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 1411.6207200000003,
                            optProductNeedVolume: 564.6482879999999
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 4465.5839999999935,
                            optProductNeedVolume: 22327.91999999997
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 669.8375999999997,
                            optProductNeedVolume: 2813.317919999999
                        }
                    ]
                },
                {
                    name: 'Тернопіль',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 187436.10600000006,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 9190.41552,
                            optProductNeedVolume: 45952.077600000004
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 11125.23984,
                            optProductNeedVolume: 33375.71952
                        },
                        {
                            name: 'Консерви',
                            productNeed: 2,
                            productNeedVolume1D: 1934.8243200000002,
                            optProductNeedVolume: 5804.47296
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 31682.74824,
                            optProductNeedVolume: 95048.24471999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 483.70608000000004,
                            optProductNeedVolume: 2418.5304
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 20557.508400000002,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 2660.38344,
                            optProductNeedVolume: 11705.687136
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2902.23648,
                            optProductNeedVolume: 5804.47296
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 4837.0608,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 16929.7128,
                            optProductNeedVolume: 16929.7128
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1934.8243200000002,
                            optProductNeedVolume: 6191.437824000001
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 4595.20776,
                            optProductNeedVolume: 13785.623280000002
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 2660.38344,
                            optProductNeedVolume: 8513.227008
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 5804.47296,
                            optProductNeedVolume: 1160.8945920000006
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 12576.35808,
                            optProductNeedVolume: 25152.71616
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 1934.8243200000002,
                            optProductNeedVolume: 773.9297280000001
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 48370.60800000001,
                            optProductNeedVolume: 241853.04000000004
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 7255.5912,
                            optProductNeedVolume: 30473.48304
                        }
                    ]
                },
                {
                    name: 'Чортків',
                    blocked: '',
                    cityNeed: 5,
                    cityNeedVolume1D: 89567.42207999999,
                    needs: [
                        {
                            name: 'Кондитерські вироби',
                            productNeed: 1,
                            productNeedVolume1D: 4369.871986666667,
                            optProductNeedVolume: 21849.359933333333
                        },
                        {
                            name: 'Крупи, макарони',
                            productNeed: 2,
                            productNeedVolume1D: 5006.63233333333,
                            optProductNeedVolume: 15019.896999999992
                        },
                        {
                            name: 'Консерви',
                            productNeed: 2,
                            productNeedVolume1D: 1163.3558533333328,
                            optProductNeedVolume: 3490.067559999998
                        },
                        {
                            name: 'Вода',
                            productNeed: 2,
                            productNeedVolume1D: 19027.85288,
                            optProductNeedVolume: 57083.55863999999
                        },
                        {
                            name: 'Чай, кава',
                            productNeed: 2,
                            productNeedVolume1D: 288.4728800000001,
                            optProductNeedVolume: 1442.3644000000004
                        },
                        {
                            name: 'Фрукти',
                            productNeed: 3,
                            productNeedVolume1D: 12967.65096,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Сири',
                            productNeed: 1,
                            productNeedVolume1D: 1882.6451866666669,
                            optProductNeedVolume: 8283.638821333334
                        },
                        {
                            name: 'Ковбаса',
                            productNeed: 1,
                            productNeedVolume1D: 2626.5417866666653,
                            optProductNeedVolume: 5253.083573333331
                        },
                        {
                            name: 'Мʼясо',
                            productNeed: 3,
                            productNeedVolume1D: 3746.7402799999995,
                            optProductNeedVolume: 0
                        },
                        {
                            name: 'Молочні вироби',
                            productNeed: 3,
                            productNeedVolume1D: 11306.471173333335,
                            optProductNeedVolume: 11306.471173333332
                        },
                        {
                            name: 'Дитяче харчування',
                            productNeed: 1,
                            productNeedVolume1D: 1025.5551599999997,
                            optProductNeedVolume: 3281.776511999999
                        },
                        {
                            name: 'Яйця',
                            productNeed: 2,
                            productNeedVolume1D: 3091.8084133333346,
                            optProductNeedVolume: 9275.425240000004
                        },
                        {
                            name: 'Масло',
                            productNeed: 2,
                            productNeedVolume1D: 1126.6342399999999,
                            optProductNeedVolume: 3605.229567999999
                        },
                        {
                            name: 'Хліб',
                            productNeed: 3,
                            productNeedVolume1D: 3254.973519999999,
                            optProductNeedVolume: 650.9947039999997
                        },
                        {
                            name: 'Овочі',
                            productNeed: 1,
                            productNeedVolume1D: 9690.720186666667,
                            optProductNeedVolume: 19381.440373333335
                        },
                        {
                            name: 'Риба',
                            productNeed: 3,
                            productNeedVolume1D: 1938.6740400000006,
                            optProductNeedVolume: 775.4696159999999
                        },
                        {
                            name: 'Цигарки',
                            productNeed: 2,
                            productNeedVolume1D: 6132.887999999991,
                            optProductNeedVolume: 30664.439999999955
                        },
                        {
                            name: 'Гігієна',
                            productNeed: 2,
                            productNeedVolume1D: 919.9331999999996,
                            optProductNeedVolume: 3863.7194399999985
                        }
                    ]
                }
            ]
        }
    ]
}
