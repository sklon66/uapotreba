import { setCurrentRegion } from "../redux/AppReducer/actions";
// locales
import { KEYS_EN } from "../locales/translationEn";

export const handleRegionClick = (name, dispatch, navigate) => {
    console.log('name---->',name)
    dispatch(setCurrentRegion(name));
    navigate(`/region-${KEYS_EN[name]}`);
}