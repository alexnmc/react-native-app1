import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from "react-navigation-drawer"
import Home  from './Home'
import Button1 from './Button1'
import Button2 from './Button2'


const Main = () => {
    const DashboardNavigator = createStackNavigator(   //top navbar
        { 
             Home,
            
        },
        {
            defaultNavigationOptions: ({ navigation }) => {
            return {
              headerRight: (
                <TouchableOpacity  onPress={() => navigation.openDrawer()} style = {styles.buttonCover}>
                    <Text style = {styles.button}>Countries</Text>
                </TouchableOpacity>
                
              ),
              headerLeft: (
                <TouchableOpacity  onPress={() => navigation.openDrawer()} style = {styles.buttonCover}>
                    <Text style = {styles.button}>Channels</Text>
                </TouchableOpacity>
                
              ),
             
            headerTitle: navigation.state.routeName, // puts the routename in the top navbar 
              headerStyle: {
                height: 60,
                backgroundColor: 'white',
                borderBottomWidth: 0,
                shadowColor: 'transparent',
                shadowOpacity: 0,
                elevation:0,
              },
              headerTintColor: "#05336e",
              headerTitleStyle: {
               textAlign:"center", 
                flex:1 
               },
              }
          }
        }
      )

      const SideNavigator = createDrawerNavigator({
            DashboardNavigator,
            
      },
      {
        contentComponent: ({navigation}) => {return <Button1 function = {navigation.closeDrawer}/>},
         drawerPosition: 'right',
         drawerType: 'slide',
         drawerWidth: 200
        },
      )

      const SideNavigator2 = createDrawerNavigator({
                SideNavigator, 
                DashboardNavigator,
                
        },
        {
          contentComponent: ({navigation}) => {return <Button2 function = {navigation.closeDrawer}/>},
            drawerPosition: 'left',
            drawerType: 'slide',
            drawerWidth: 200,
         },
        )
            
            const AppContainer = createAppContainer(SideNavigator2)
        return( 
            <AppContainer/>
        )
}

const styles = StyleSheet.create({
        
    button:{
        fontSize:14,
        fontFamily: 'Helvetica',
        fontWeight: '900',
        color: 'rgb(241, 241, 241)',
    },

    buttonCover:{
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        width: 90,
        height: 34,
        backgroundColor: 'rgb(175, 0, 0)',
        borderWidth: 1,
        borderColor: 'rgb(141, 0, 0)',
        margin: 10,
    }
})


export default Main