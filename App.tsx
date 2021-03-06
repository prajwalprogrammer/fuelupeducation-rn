import * as React from 'react'
import { StatusBar } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { ThemeProvider } from '@shopify/restyle'
import theme from './src/Theme'
import { NavigationContainer } from '@react-navigation/native'
import { AuthenticationNavigator } from './src/screens'

const App: React.FC = () => {
  //const [loading, setLoading] = React.useState(false)
  React.useEffect(() => {
    RNBootSplash.hide({ duration: 250 })
  }, [])
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' />
      <ThemeProvider theme={theme}>
        <AuthenticationNavigator />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
