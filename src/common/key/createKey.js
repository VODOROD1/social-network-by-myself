
const getKey = (str) => {
    let key = 0;
    for (let i = 0; i < str.length; i++) {
        let temp = str.charCodeAt(i)
        let subKey = String(str.charCodeAt(i))
        key += String(str.charCodeAt(i))
    }
    return key.toString();
}

export default getKey