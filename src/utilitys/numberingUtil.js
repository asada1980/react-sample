export const numberingCustomer = (nowMaxCustomerId) => {
    return 'K' + zeroPaddingThree(nowMaxCustomerId)
}

export const zeroPaddingThree = (target) => {
    const result = ('000' + target).slice(-3)
    return result
}