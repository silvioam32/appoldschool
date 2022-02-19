import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from "react-native";

export default function MyApp() {
    const [contador, setContador] = useState(0);

    const ButtonContador = () => {
        setContador(preCount => preCount + 1) 
    }
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}> Barbearia Old School</Text>
                <Text style={styles.info}>Cadastro de Cliente</Text>
                <Text style={styles.info}> Seja Bem Vindo ao Nosso App</Text>

                {/* TextInput
                    placeholder="Digite seu e-mail"
                    style={styles.styleInput}
                /> */}

                {/* TextInput
                    placeholder="Digite sua senha"
                    style={styles.styleInput}
                /> */}

                {/* View>
                    <Button title="cadastro" />
                </View> */}
                <View style={styles.viewContador}>
                    <Text style={styles.textContador}>Contador: {contador}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={ButtonContador}>
                    <Text>Adicionar</Text>
                </TouchableOpacity>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        height: 400,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "#BBB",
    },
    title: {
        fontSize: 25,
        marginTop: 50,
    },
    info: {
        fontSize: 18,
        color: "green",
        marginBottom: 50,
    },
    styleInput: {
        width: "90%",
        height: 45,
        marginBottom: 30,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "green",
        paddingLeft: 10,
    },
    viewContador: {
        alignItems: "center",
        padding: 20,
    },
    textContador: {
        fontSize: 15,
    },
    button: {
        width: '90%',
        height: 45,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DDDDDD",
    }
});
