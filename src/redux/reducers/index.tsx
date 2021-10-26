const initState ={
    test:''
}

export function rootReducer(state=initState,action:any){
    switch(action.type) {
        default:
            return state;
    }
}