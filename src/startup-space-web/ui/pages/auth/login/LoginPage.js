import React, { useState } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import firebase from "../../../config/Firebase";
import "firebase"
import { useSelector, useDispatch } from "react-redux"

import Card from "@material-ui/core/Card";
import { REGISTER_ROUTE } from "../../../../Routes";

import StartupSpaceLogo from "../../assets/image/logo/startup-space.png";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',

        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {

        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {},
}));


export default function LoginPage() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const dispatch = useDispatch();
    const classes = useStyles();

    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resp => {
            dispatch({ type: "LOG_IN", usuarioEmail: email })
        }).catch(erro => {
            alert(erro)
        });
    }




    return (
        <>
            {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to="/" /> : null}

            <Grid container alignContent="center" justify="center" direction="column">
                <Grid item>
                    <Card elevation={4}>
                        <Container component="main" maxWidth="xs">
                            <div className={classes.paper}>
                                <img width="360dp" src={StartupSpaceLogo} />
                                <Box height={"36px"} />
                                <form className={classes.form} onSubmit={logar}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Senha"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={(e) => setSenha(e.target.value)}
                                    />
                                    <Box height={"24px"} />
                                    <Grid container direction="row" justify="flex-end">

                                        <Grid item>
                                            <RouterLink style={{ textDecoration: "none" }} to={REGISTER_ROUTE}>
                                                <Button
                                                    color="primary"
                                                >
                                                    Cadastre-se
                                            </Button>
                                            </RouterLink>
                                        </Grid>
                                        <Grid item> <Box width={"12px"} /></Grid>
                                        <Grid item>

                                            <Button
                                                onClick={logar}
                                                type="button"
                                                variant="contained"
                                                color="primary"
                                                className={classes.button}
                                            >
                                                Entrar
                                    </Button>

                                        </Grid>
                                    </Grid>
                                </form>
                            </div>
                        </Container>
                        <Box height={"24px"} />
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
