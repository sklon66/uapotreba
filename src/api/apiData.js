import { setData } from "../redux/AppReducer/actions.js";

export const getData = (dispatch) => {

    fetch(`https://script.google.com/macros/s/AKfycbzYsJoGONT66Out741FCAN7GKzGvqSnwhgWkPFPe-acDMPwpNe2wYS7eVQ4FyBUappS/exec`)
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
