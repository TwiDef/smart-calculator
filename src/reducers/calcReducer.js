
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
                num: "0",
                res: 0
            }
        case "clearLast":
            if (state.num !== 0) {
                return {
                    ...state,
                    num: (state.num).slice(0, -1)
                }
            }
        case "typeSign":
            return {
                sign: action.payload.sign,
                res: !state.res && state.num ? state.num : state.res,
                num: 0
            }
        case "equalAct":
            if (state.sign && state.num) {
                const math = (a, b, sign) => {
                    if (sign === "/") {
                        if (b === 0) {
                            return "Can't divide by 0"
                        }
                        return a / b
                    }
                    if (state.sign === "*") {
                        return a * b
                    }
                    if (state.sign === "-") {
                        return a - b
                    }
                    if (state.sign === "+") {
                        return a + b
                    }
                }
                return {
                    res: math(Number(state.res), Number(state.num), state.sign),
                    sign: "",
                    num: 0
                }
            }
        default:
            return state
    }
}

export default calcReducer;