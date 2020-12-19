
export const requairedValid = (fieldValue) => {
    if(fieldValue) {
        return undefined
    } else {return 'Field need to be filled'}
}

export const maxLengthCreator = (amountOfSymbols) => {
    return (fieldValue) => {
        if(fieldValue) {
            if(fieldValue.length <= amountOfSymbols) {
                return undefined
            } else {return 'Too many symbols'}
        } else {return undefined}
    }   
}
