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
    dispatch(setRegions(regions));
};
