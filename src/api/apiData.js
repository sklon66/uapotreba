import { setData as setDataRedux } from "../redux/AppReducer/actions";

export const getData = (dispatch) => {

    fetch(`https://script.google.com/macros/s/AKfycbzYsJoGONT66Out741FCAN7GKzGvqSnwhgWkPFPe-acDMPwpNe2wYS7eVQ4FyBUappS/exec`)
        .then(function (response) { return response.json(); })
        .then(function (data) {
            if (data?.length > 0) {
                dispatch(setDataRedux(data));
            }
            else {
                console.log("Error")
            }
        })
}