import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../components/navbar/navBar";
import { Redirect } from 'react-router-dom';

import firebase from "../../config/Firebase";


function CreateStartup() {

    const [loading, setLoading] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [titulo, setTitulo] = useState();
    const [tipo, setTipo] = useState();
    const [detalhes, setDetalhes] = useState();
    const usuarioEmail = useSelector(state => state.usuarioEmail)
    const dispatch = useDispatch();

    const DB = firebase.firestore();


    function Cadastrar() {
        setMsgTipo(null);
        setLoading(1);

        DB.collection("startups").add({
            titulo: titulo,
            tipo: tipo,
            detalhes: detalhes,
            usuario: usuarioEmail,
            publico: 1,
            creacao: new Date()
        }).then(() => {
            setTimeout(() => {
                dispatch({ type: "CREATE_START", criouStartup: 1 })
            }, 1000);

            setMsgTipo("sucesso")
            setLoading(0)
        }).catch(erro => {
            setMsgTipo("erro")
            setLoading(0)
        })

    }

    return (
        <div>
            <NavBar />
            {useSelector(state => state.criouStartup) > 0 ? <Redirect to='/' /> : null}
            <div className="bg col-12 mt-5">
                <div className="row">
                    <h3 className="mx-auto">Nova Startup</h3>
                </div>
                <form className="reg">
                    <div className="form-group">
                        <label>Nome da sua Startup:</label>
                        <input className="form-control" type="text" onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Região da Startup</label>
                        <select onChange={(e) => setTipo(e.target.value)} className="form-control">
                            <option disabled selected value>-- Selecione um tipo --</option>
                            <option>Norte</option>
                            <option>Nordeste</option>
                            <option>Centro-Oeste</option>
                            <option>Sudeste</option>
                            <option>Sul</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Descreva sua Startup:</label>
                        <textarea onChange={(e) => setDetalhes(e.target.value)} className="form-control" rows="3" />
                    </div>

                    <div className="row">
                        {
                            loading > 0 ?
                                <div class="spinner-border text-danger mx-auto" role="status"><span class="sr-only">Loading...</span></div>
                                :
                                <button onClick={Cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro bg-danger">Casdastrar</button>
                        }
                    </div>
                </form>
                <div className="msg-login text-center mt-2">
                    {msgTipo === 'sucesso' && <span><strong>WOW!!</strong> Startup Publicada! &#128526; </span>}
                    {msgTipo === 'erro' && <span><strong>OPS!!</strong> Não foi possível publicar sua Startup! &#128546; </span>}
                </div>

            </div>
        </div>
    )
}

export default CreateStartup