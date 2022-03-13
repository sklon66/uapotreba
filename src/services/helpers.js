export const sortFromHighestToLowestPriorityByProperty = (array, property) => {
    return array?.sort(function (a, b) {
        return a[property] - b[property];
    });
}
