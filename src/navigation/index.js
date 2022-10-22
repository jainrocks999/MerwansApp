import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/auth/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegistrationScreen from '../screens/auth/RegistrationScreen';
import ForgotPassword from '../screens/auth/ForgotPassword';
import HomeScreen from '../screens/main/HomeScreen';
import ChangePassword from '../screens/auth/ChangePassword';
import Category from "../screens/main/Category"
import CategoryList from "../screens/main/CategoryList"
import PaymentPage from '../screens/main/PaymentPage';
import ProfileWithoutLogin from '../screens/main/ProfileWithoutLogin';
import ProfileWithLogin from '../screens/main/ProfileWithLogin';
import MyAccountPage from '../screens/main/MyAccountPage';
import EditProfile from '../screens/main/EditProfile';
import MyOrders from "../screens/main/MyOrders";
import OrderDetail from "../screens/main/OrderDetail";
import MyAddress from "../screens/main/MyAddress";
import ChangeAddress from '../screens/main/ChangeAddress';
import AddressForm from '../screens/main/AddressForm';
import OnlineOrderingHelp from '../screens/main/OnlineOrderingHelp';

const Stack = createNativeStackNavigator();
function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator  
      screenOptions={{
        headerShown: false
        }} 
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegistrationScreen}/>
        <Stack.Screen name="Forgot" component={ForgotPassword}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Change" component={ChangePassword}/>
        <Stack.Screen name="Category" component={Category}/>
        <Stack.Screen name="CategoryList" component={CategoryList}/>
        <Stack.Screen name="Payment" component={PaymentPage}/>
        <Stack.Screen name="ProfileWithoutLogin" component={ProfileWithoutLogin}/>
        <Stack.Screen name="ProfileWithLogin" component={ProfileWithLogin}/>
        <Stack.Screen name="MyAccountPage" component={MyAccountPage}/>
        <Stack.Screen name="EditProfile" component={EditProfile}/>
        <Stack.Screen name="MyOrders" component={MyOrders}/>
        <Stack.Screen name="OrderDetail" component={OrderDetail}/>
        <Stack.Screen name="MyAddress" component={MyAddress}/>
        <Stack.Screen name="ChangeAddress" component={ChangeAddress}/>
        <Stack.Screen name="AddressForm" component={AddressForm}/>
        <Stack.Screen name="OnlineOrderingHelp" component={OnlineOrderingHelp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigate;
