import { useDispatch, useSelector } from "react-redux";

// selectors
import { selectData } from "../redux/AppReducer/selectors";
import { setRegions } from "../redux/AppReducer/actions";


export const useData = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectData);

    const regions = data?.map((el) => {
        return el?.region;
    })

    const result = filterByProductName(data, 'Риба');

    console.log('result', result)

    dispatch(setRegions(regions));
};


const filterByProductName = (data, product) => {
    let res = data.map((region) => {
        let obj = {};

        obj.region = region.region;
        obj.product = product;
        // obj.amountNeeded =
        console.log('obj', obj);

        return region?.cities.map((city) => {
            return city?.needs.filter((need) => {
                if (need?.name === product) {
                    return need?.productNeedVolume1D;
                }
            })
        })


    })
    return res;
}
