import { setCurrentRegion } from "../redux/AppReducer/actions";

export const handleRegionClick = (name, dispatch, navigate) => {
    console.log('name---->',name)
    dispatch(setCurrentRegion(name));
    navigate('/region');
}