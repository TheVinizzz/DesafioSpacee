import React from "react";
import firebase from "../../../config/Firebase";
import { useSelector, useDispatch } from "react-redux";


function Members({ id, pt, uid }) {

    const usuarioEmail = useSelector(state => state.usuarioEmail);
    const dispatch = useDispatch();

    function Remover() {
        firebase.firestore().collection("startups").doc(uid).collection("membros").doc(id).delete().then(() => {
            dispatch({ type: "PART_N", participa: 0 })
        })
    }

    return (
        <div>
            {
                usuarioEmail === pt ?
                    <button onClick={Remover} className="btn-sm btn-descricao ml-2">Sair</button>
                    : null
            }

        </div>
    )
}
export default Members