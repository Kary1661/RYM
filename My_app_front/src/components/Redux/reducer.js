const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAV":
            return { ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload };
        
        case "REMOVE_FAV":
            return { ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload };
        
        case "FILTER":
            const charFilter = state.allCharacters.filter((char) => char.gender === action.payload);
            return {
                ...state,
                myFavorites: charFilter,
            }

        case "ORDER":
            let orderFav;
            if (action.payload === "Ascendent") {
                orderFav = state.myFavorites.sort((a, b) => a.id > b.id ? 1 : -1);
            } else {
                orderFav = state.myFavorites.sort((a, b) => a.id < b.id ? 1 : -1);
            }
            return {
                ...state,
                myFavorites: [...orderFav],
            }           
        default:
            return {...state}
    }
}

export default reducer;