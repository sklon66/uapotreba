import { setData } from "../redux/AppReducer/actions.js";

export const getData = (dispatch) => {

    fetch(`https://script.google.com/macros/s/AKfycbzTPuqLLkpYdusQb3dE9P8aDyoc39S8NQH-3hyenObNBWWUj3cKgOjRgnB3EduNOF8O/exec`)
        .then(function (response) { return response.json(); })
        .then(function (data) {
            if (data?.length > 0) {
                dispatch(setData(data));
            }
            else {
                console.log("Fetch error")
            }
        })
        .catch((error) => {
            console.log(error)
        });
}
