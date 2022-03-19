import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

// selectors
import { selectActiveProduct, selectData } from "../redux/AppReducer/selectors";

// action
import { setRegions } from "../redux/AppReducer/actions";


// export const useData = () => {
//     const dispatch = useDispatch();
//     const data = useSelector(selectData);
//
//     const regions = data?.map((el) => {
//         return el?.region;
//     })
//
//     dispatch(setRegions(regions));
//
// };


// const getRegionNeedByProductName = (data, product) => {
//     return data?.map((region) => {
//         let obj = {};
//         let initialValue = 0;
//
//         obj.region = region.region;
//         obj.product = product;
//
//         const sumForRegionByProduct = Math.trunc(region?.cities?.reduce(function (previousValue, currentValue) {
//
//             const b = currentValue?.needs?.filter((need) => {
//                 if (need?.name === product) {
//
//                     return need?.productNeed;
//                 }
//             })
//             const [obj] = b;
//
//             if (previousValue >= 0) {
//                 return previousValue + obj?.productNeed;
//             }
//
//         }, initialValue));
//
//         obj.currentActiveProductNeedsForRegion = sumForRegionByProduct
//         // obj.regionNeedsForSpecificProduts =
//         //     parseFloat((sumForRegionByProduct / (region?.cities?.length + 1)).toFixed(2));
//
//         return obj;
//     });
// }
