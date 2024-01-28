import React, { useContext, useEffect } from "react";
import { View,  ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../Music/Login";
import HomeScreen from "./Home";
import { AuthContext } from "./AuthContext";
import AllocationList from "./Allocation";
import VideoCallPage from "./VideoCall/VideoCallPage";
import GetClassId from "./VideoCall/Getclassid";
import VideoPlayerPage from "./VideoPlayer/VideoPlayerPage";
import TestView from "./Pay";



//const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();
const Navigation = () => {
    const { isLoading, userInfo } = useContext(AuthContext);
    const { isLoggedInUser } = useContext(AuthContext);

    useEffect(() => {
        console.log(userInfo);
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} />
            </View>
        );
    }

    return (
       
        <Stack.Navigator>
            {isLoggedInUser ? (
                <Stack.Screen name="fetch" component={HomeScreen} options={{ headerShown: true }} />
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            )}
            
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
            <Stack.Screen name="allocation" component={AllocationList} options={{ headerShown: true }} />
            <Stack.Screen name="VideoCallPage" component={VideoCallPage} options={{ headerShown: true }} />
            <Stack.Screen name="getclassid" component={GetClassId} options={{ headerShown: true }} />
            <Stack.Screen name="VideoPlayerScreen" component={VideoPlayerPage} options={{ headerShown: true }} />
            <Stack.Screen name="pay" component={TestView} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
};
export default Navigation;


