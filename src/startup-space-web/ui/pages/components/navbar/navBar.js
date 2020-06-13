import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";



function NavBar() {

    const usuarioLogado = useSelector(state => state.usuarioLogado)
    const criouStartup = useSelector(state => state.criouStartup);
    const dispatch = useDispatch();

    let rem
    if (usuarioLogado > 0 && criouStartup === 0) {
        rem = <li><Link to="/criarstartup">Criar Startup</Link></li>
    } else {
        rem = null
    }

    return (
        <div>
            <div className="back" >
                <nav className="nav">
                    <div className="container">
                        <div className="logo">
                        </div>
                        <div id="mainListDiv" className="main_list">
                            <ul className="navlinks">
                                <li><Link to="">Home</Link></li>
                                <>
                                    {rem}
                                </>

                                {
                                    useSelector(state => state.usuarioLogado) > 0 ?
                                        <>
                                            <li><Link to="/startups/meus">Minha Startup</Link></li>
                                            <li><Link onClick={() => dispatch({ type: 'LOG_OUT' })}>Sair</Link></li>
                                        </>
                                        :
                                        <>
                                            <li><Link to="/cadastro">Cadastrar</Link></li>
                                            <li><Link to="/entrar">Logar</Link></li>
                                        </>
                                }


                            </ul>
                        </div>
                        <span className="navTrigger">
                            <i></i>
                            <i></i>
                            <i></i>
                        </span>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar