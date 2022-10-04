export const ContactReducer = (state:any, action:any) => {
    switch(action.type){
        case 'SET_FAVORITE':
            return [...state, action.anime.id
              ]
        case 'REMOVE_FAVORITE':
            return state.filter((col: any) => col !== action.id);
        default:
            return state;
    }
}