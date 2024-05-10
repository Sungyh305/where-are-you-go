import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config'

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        setEmail('ghkdwlgh99@gmail.com');
        setPassword('qwe123');
    }, []);

    const loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error){
            alert(error.message)
        }
    }

    // forget password
    const forgetPassword = () => {
        firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("이메일을 정확히 입력해주세요.")
        }).catch((error) => {
            alert(error)
        })
    }
    return (
        <View style={styles.container}>
            <View style={{marginTop: 40}}>
                <TextInput
                    style={styles.textInput}
                    placeholder="email"
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType = "email-address"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="password"
                    onChangeText={(password) => setPassword(password)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity
                onPress={() => loginUser(email, password)}
                style={styles.button}
            >
                <Text style={{fontWeight: 'bold', fontSize: 22}}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Registration')}
                style={{marginTop: 20}}
            >
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                    회원 가입하기
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {forgetPassword()}}
                style={{marginTop: 20}}
            >
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                    비밀번호 바꾸기
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100,
    },
    textInput: {
        paddingTop: 20,
        paddingBottom: 10,
        width: 300,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 10,
        textAlign: 'center'
    },
    button: {
        marginTop: 50,
        height: 70,
        width: 250,
        backgroundColor: '#86CC57',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    }
})