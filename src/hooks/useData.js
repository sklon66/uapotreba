import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

// selectors
import { selectActiveProduct, selectData } from "../redux/AppReducer/selectors";

// action
import { setNeedsObject, setRegions } from "../redux/AppReducer/actions";


export const useData = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    const activeProduct = useSelector(selectActiveProduct);

    const regions = data?.map((el) => {
        return el?.region;
    })

    dispatch(setRegions(regions));

    useEffect(() => {
        const result = getRegionNeedByProductName(data, activeProduct);
        const sortedRegionsRegardingProductName = sortFromHighestToLowestAmount(result);
        dispatch(setNeedsObject(sortedRegionsRegardingProductName));
    },[activeProduct])

};


const getRegionNeedByProductName = (data, product) => {
    return data?.map((region) => {
        let obj = {};
        let initialValue = 0;

        obj.region = region.region;
        obj.product = product;
        obj.currentActiveProductNeedsForRegion = parseFloat(region?.cities?.reduce(function (previousValue, currentValue) {

            const b = currentValue?.needs?.filter((need) => {
                if (need?.name === product) {
                    return need?.productNeedVolume1D;
                }
            })
            const [obj] = b;

            if (previousValue >= 0) {
                return previousValue + obj?.productNeedVolume1D;
            }

        }, initialValue)?.toFixed(2));

        return obj;
    });
}


const sortFromHighestToLowestAmount = (array) => {
    return array?.sort((a, b) => {
        return b?.currentActiveProductNeedsForRegion - a?.currentActiveProductNeedsForRegion;
    });
}
