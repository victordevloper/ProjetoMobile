import React from "react";
import { Image, Dimensions, StyleSheet, Text } from "react-native";
import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
        <Image style={estilos.topo} source={topo}/>
        <Text>Detalhes da Cesta</Text>
    </>
}

const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 375 / 667 * width,
    }
})