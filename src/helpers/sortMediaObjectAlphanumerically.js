const sortMediaObjectAlphanumerically = (a, b) => {
    var nameA = a.title.toUpperCase() // ignore upper and lowercase
    var nameB = b.title.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
        return -1
    }
    if (nameA > nameB) {
        return 1
    }
    // names must be equal
    return 0
}

export default sortMediaObjectAlphanumerically;