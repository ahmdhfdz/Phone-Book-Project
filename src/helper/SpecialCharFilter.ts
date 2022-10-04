export const validateInput = (value: string) => {
    //eslint-disable-next-line
    let specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChar.test(value)
}