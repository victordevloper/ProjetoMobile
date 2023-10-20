import React from "react";
import { StyleSheet } from "react-native";
import topo from '../../assets/topo.png';

export default function Topo(){
    return <>
        <Imagem source={Topo} style={estilos.topo}></Imagem>
        <Texto style={estilos.titulo}>Detalhes da cesta</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 375 / 667 * width,
    },
    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 16,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
})