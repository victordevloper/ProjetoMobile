import React from "react";
import { Image, Dimensions, StyleSheet, Text, View } from "react-native";
import Texto from "../componentes/texto";
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
        <Image style={estilos.topo} source={topo}/>
        <Texto style={estilos.titulo}>Detalhes da Cesta</Texto>
        
        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta De Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.imagemFazenda} source={logo}></Image>
                <Texto style={estilos.nomeFazenda}>Fazenda Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}> uma cesta com produtos selecionados cuidadosamente da Fazenda diretamente para a cozinha</Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
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
    nome:{
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 42,
        color: "#464646",
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    descricao:{
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco:{
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda:{
        width: 32,
        height: 32,
    }
    
})
