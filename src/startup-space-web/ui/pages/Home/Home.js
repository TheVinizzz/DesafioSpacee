import React, { useState, useEffect } from "react";
import "./Home.css";
import NavBar from "../components/navbar/navBar"
import { useSelector } from "react-redux"

import CardStartup from "../components/startup-card/index"
import firebase from "../../config/Firebase";


function Home({ match }) {

    const [eventos, setEventos] = useState([])
    let listaStartups = []
    const usuarioEmail = useSelector(state => state.usuarioEmail);



    useEffect(() => {

        if (match.params.parametro) {
            firebase.firestore().collection("startups").where("usuario", "==", usuarioEmail).get().then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                    listaStartups.push({
                        id: doc.id,
                        ...doc.data()
                    })

                })
                setEventos(listaStartups)
            })
        }
        else {
            firebase.firestore().collection("startups").get().then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                    listaStartups.push({
                        id: doc.id,
                        ...doc.data()
                    })

                })
                setEventos(listaStartups)
            })
        }


    })

    return (
        <div className="Back">
            <NavBar />
            <div className="row mt-3 p-2">

                {eventos.map(item => <CardStartup key={item.id} id={item.id} img={item.logo}
                    titulo={item.titulo} detalhes={item.detalhes} membros={item.membros} usuario={item.usuario}
                />)}

            </div>
        </div>
    )
}

export default Home