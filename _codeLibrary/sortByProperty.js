const sortByProperty = (a, b) => {
    if (a.property < b.property) {
        return 1
    } else if (a.property > b.property) {
        return -1
    }
    return 0
}

//call as an argument:

someArray.sort(sortByProperty)