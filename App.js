import 'react-native-gesture-handler'
import React from 'react'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/components/navigation/Navigation'


const App = () => {

  const [fontLoaded,setFontLoaded] = React.useState(false)

  const customFont =  async () => {
    await 
    Font.loadAsync({
      'PB': require('./src/fonts/PlayfairDisplay-Bold.ttf'),
      'PM': require('./src/fonts/PlayfairDisplay-Medium.ttf'),
      'PR': require('./src/fonts/PlayfairDisplay-Regular.ttf')
    })

    setFontLoaded(true)
  }

  React.useEffect(() => {
    customFont()
  }, [customFont])

  if(fontLoaded) {
    return(
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    )
  } else {
    return <AppLoading />
  }

}

export default App