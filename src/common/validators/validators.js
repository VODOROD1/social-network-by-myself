
export const isRequire = (val) => {
    if(val) {
        return undefined
    } else {
        return 'Field must be filled'
    }
}

export const maxLengthCreator = (someLength) => {
    return (val) => {
        if(val.length > someLength) {
            return `Length must be less then ${someLength}`
        } else {
            return undefined
        }
    }
}

