const INITIAL_STATE = {
    usuarioEmail: "",
    usuarioLogado: 0,
    criouStartup: 0,
    participa: 0
};


function usuarioReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "LOG_IN":
            return { ...state, usuarioLogado: 1, usuarioEmail: action.usuarioEmail, criouStartup: 0, participa: 0 }
        case "CREATE_START":
            return { ...state, criouStartup: 1 }
        case "PART_S":
            return { ...state, participa: 1 }
        case "PART_N":
            return { ...state, participa: 0 }
        case "DELET_START":
            return { ...state, criouStartup: 0 }
        case "LOG_OUT":
            return { ...state, usuarioLogado: 0, usuarioEmail: null, criouStartup: 0, participa: 0 }

        default:
            return state;
    }
}

export default usuarioReducer