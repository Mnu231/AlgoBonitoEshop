let is_ok = true

const customFetch = (time , array) => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(array)
            } else {
                reject("Error reading data")
            }
        }, time);
    })
}

export default customFetch;