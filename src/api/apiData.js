import { setData, setProducts } from "../redux/AppReducer/actions.js";

export const getData = (dispatch) => {

    fetch(`https://script.google.com/macros/s/AKfycbyoxZ-GJjWpxFpw3ixGrI2upjMJyzK7HEcsOyBMVEvTPT8JY-IvPaD0bFqS7aqYQ14J/exec`)
        .then(function (response) { return response.json(); })
        .then(function (data) {
            if (data) {
                console.log('recieved data from API', data)
                dispatch(setData(data?.citiesInfo));
                dispatch(setProducts(data?.allProducts));
            }
            else {
                console.log("Fetch error")
            }
        })
        .catch((error) => {
            console.log(error)
        });
}
