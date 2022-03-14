import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";

import{
    
    InnerContainer,
    
    PageTitle,
    SubTitle,
    StyledFormArea,
    
    StyledButton,
    ButtonText,
    Colors,

    Line,
   
    WelcomeContainer,
    WelcomeImage,
    Avatar,
} from '../components/styles';
const {brand, darkLight, primary} = Colors;

const Welcome = ({navigation, route}) => {

    const {name, email} = route.params;
    
    return (
        <>
           <StatusBar style="light" />
           <InnerContainer>
           <WelcomeImage resizeMode="cover" source={require('../assets/image/10.png')} />
              
              <WelcomeContainer>
              <PageTitle welcome={true}>Welcome! Buddy</PageTitle>
              <SubTitle welcome={true}>{name || 'Name'}</SubTitle>
              <SubTitle welcome={true}>{email || 'Email'}</SubTitle>

                 <StyledFormArea>
                 <Avatar resizeMode="cover" source={require('../assets/image/3.png')} />
                     
                      <Line />
                      {/* <StyledButton onPress={() => {navigation.navigate("Login")}}> */}
                      <StyledButton continue={true} onPress={() => {navigation.navigate("QuizWelcome")}}>
                          
                          <ButtonText>Continue 🚆 </ButtonText>
                      </StyledButton>
                      <StyledButton LogOut={true} onPress={() => {navigation.navigate("Login")}}>
                          
                          <ButtonText>Log Out</ButtonText>
                      </StyledButton>
                  </StyledFormArea>
                  
              </WelcomeContainer>
           </InnerContainer>
        </>
    );
};



export default Welcome;