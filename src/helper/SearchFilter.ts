const keys = ["first_name", "last_name"]

export const SearchFilter = (data: any, query: string) => {
    return data.filter((items: any) =>
        keys.some((key:string) => 
        items[key].toLowerCase().includes(query)))
}