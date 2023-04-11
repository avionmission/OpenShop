import { StyleSheet, Text, TextInput, TouchableOpacity, View, Animated } from 'react-native';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const AuthScreen = ({ navigation }) => {

    const SigninComponent = () => {
        return (
            <View
                style={styles.formContainer}>

                {/* Email input */}
                <View style={styles.TextInputContainer}>
                    <AntDesign name="mail" size={24} style={styles.TextInputIcon} />
                    <TextInput
                        placeholder='Email'
                        style={styles.TextInputText}
                    />
                </View>

                {/* Password input */}
                <View style={styles.TextInputContainer}>
                    <AntDesign name="lock" size={24} style={styles.TextInputIcon} />
                    <TextInput
                        placeholder='Password'
                        style={styles.TextInputText}
                    />
                </View>

                {/* Sign in Button */}
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.ButtonText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const SignupComponent = () => {
        return (
            <View style={styles.formContainer}>

                {/* Full name input */}
                <View style={styles.TextInputContainer}>
                    <AntDesign name="user" size={24} style={styles.TextInputIcon} />
                    <TextInput
                        placeholder='Full Name'
                        style={styles.TextInputText}
                    />
                </View>

                {/* Email input */}
                <View style={styles.TextInputContainer}>
                    <AntDesign name="mail" size={24} style={styles.TextInputIcon} />
                    <TextInput
                        placeholder='Email'
                        style={styles.TextInputText}
                    />
                </View>

                {/* Password input */}
                <View style={styles.TextInputContainer}>
                    <AntDesign name="lock" size={24} style={styles.TextInputIcon} />
                    <TextInput
                        placeholder='Password'
                        style={styles.TextInputText}
                    />
                </View>

                {/* Re-enter Password input */}
                <View style={styles.TextInputContainer}>
                    <AntDesign name="lock" size={24} style={styles.TextInputIcon} />
                    <TextInput
                        placeholder='Re-enter Password'
                        style={styles.TextInputText}
                    />
                </View>

                {/* Sign in Button */}
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.ButtonText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const Tab = createMaterialTopTabNavigator();

    return (
        <View style={styles.container}>

            {/* Replace this with your app logo */}
            <View style={{ flexDirection: 'row', }}><Text style={{ fontSize: 32, fontWeight: 800 }}>Open</Text><Text style={{ fontSize: 32, fontWeight: 800, color: '#FF9900' }}>Shop.</Text></View>

            {/* Tab navigation between login and signup forms */}
            <View style={{ flex: 1, marginTop: 30 }}>
                <NavigationContainer independent={true}>
                    <Tab.Navigator
                        screenOptions={{
                            tabBarActiveTintColor: 'black',
                            tabBarIndicatorStyle: { backgroundColor: '#000000' },
                            animationEnabled: false,
                        }}
                    >
                        <Tab.Screen name='Sign in' component={SigninComponent} />
                        <Tab.Screen name='Sign up' component={SignupComponent} />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>

            { /* Button to signin as guest */}
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.TextButton}>Sign in as a Guest</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },

    formContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },

    TextInputContainer: {
        flexDirection: 'row',
        borderColor: '#c7c7c7',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 25,
        alignItems: 'center',
        padding: 5,
    },

    TextInputText: {
        marginLeft: 25,
        width: '100%',
        verticalAlign: 'middle'
    },

    TextInputIcon: {
        flex: 0,
        color: '#c7c7c7'
    },

    TextButton: {
        alignSelf: 'center',
        color: '#808080',
        textDecorationLine: 'underline'
    },

    Button: {
        marginTop: 25,
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
    },

    ButtonText: {
        color: '#fff'
    },
});

export default AuthScreen;