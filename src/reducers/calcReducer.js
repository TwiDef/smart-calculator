
function calcReducer(state, action) {
    switch (action.type) {
        case "typeNum":
            if (state.num.length !== 16) {
                return {
                    ...state,
                    num: (state.num += action.payload.num).replace(/^0/, "")
                }
            } else {
                return {
                    ...state
                }
            }
        case "clearAll":
            return {
                ...state,
                num: "0"
            }
        case "clearLast":
            if (state.num !== "") {
                return {
                    ...state,
                    num: (state.num).slice(0, -1)
                }
            }
        case "typeSign":
            return {
                /* ...state, */
                sign: action.payload.sign,
                res: !state.res && state.num ? state.num : state.res,
                num: 0
            }
        default:
            return state
    }
}

export default calcReducer;