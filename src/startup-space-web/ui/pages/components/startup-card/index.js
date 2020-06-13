import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "../../../config/Firebase";
import { useSelector, useDispatch } from "react-redux";

import Mem from "./membro"
import "./startup-card.css";

function StartupCard({ id, img, titulo, detalhes, membros, usuario }) {

    const usuarioLogado = useSelector(state => state.usuarioLogado)
    const usuarioEmail = useSelector(state => state.usuarioEmail);
    const criouStartup = useSelector(state => state.criouStartup);
    const participa = useSelector(state => state.participa);
    const dispatch = useDispatch();
    let listMember = []
    const [listaMembros, setListaMembros] = useState([]);




    function remover() {
        firebase.firestore().collection("startups").doc(id).delete().then(() => {
            dispatch({ type: "DELET_START", criouStartup: 0 })

        })
    }

    function AddMembro() {
        firebase.firestore().collection("startups").doc(id).collection("membros").add({
            pt: usuarioEmail
        }).then(() => { dispatch({ type: "PART_S", participa: 1 }) })
    }



    useEffect(() => {
        firebase.firestore().collection("startups").doc(id).collection("membros").get().then(async (resp) => {
            await resp.docs.forEach(doc => {
                listMember.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setListaMembros(listMember)
        })
    })




    let button
    if (usuarioEmail === usuario || criouStartup > 0 || participa > 0) {
        button = null
    }
    else if (usuarioLogado === 1 && usuarioEmail !== usuario) {
        button = <Link to="" onClick={AddMembro} className="btn-sm btn-descricao ml-2">Participar</Link>
    } else {
        button = <Link to="/entrar" className="btn-sm btn-descricao ml-2">Logar</Link>
    }

    return (
        <div className="bb col-md-3 col-sm-12 ml-3" key={id}>
            <img id="banner-logo" src="https://i.ibb.co/zZTq6pH/startup-space.png" className="card-img-top img-cartao" alt="Logo da Startup" />
            <div className="card-body">
                <h5>{titulo}</h5>
                <p className="card-text text-justify">
                    {detalhes}
                </p>
                <div className="">
                    <div className="footer-card row d-flex align-items-center">

                        <Link to="/" className="btn-sm btn-descricao">+ Destalhes</Link>
                        {button}
                        {
                            usuarioEmail === usuario ?

                                <Link to="" onClick={remover} className="btn-sm btn-descricao ml-2">Deletar</Link>
                                : null
                        }


                        {button}


                        {
                            usuarioEmail === usuario ?
                                null
                                :
                                listaMembros.map(mem => <Mem id={mem.id} pt={mem.pt} uid={id} us={usuario} />)
                        }


                        <div className="col-6 text-right">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartupCard