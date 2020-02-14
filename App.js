import * as React from 'react';
import 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import Loading from './src/components/Loading';
import SignIn from './src/components/SignIn';
import SignUp from './src/components/SignUp';
import Home from './src/components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Context from './src/store'
import { setToken, getToken, clearToken } from './src/util/token'

const Stack = createStackNavigator();
const AuthContext = Context.AuthContext;

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await getToken()
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        await setToken(data.token)
        dispatch({ type: 'SIGN_IN', token: data });
      },
      signOut: async () => {
        await clearToken()
        dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        dispatch({ type: 'SIGN_IN', token: data });
      },
    }),
    []
  );

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}
        >
          {state.isLoading ? (
            <Stack.Screen name="Loading" component={Loading} />
          ) : state.userToken === null ? (
            <>
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              />
              <Stack.Screen name="SignUp" component={SignUp}/>
            </>
          ) : (
                <Stack.Screen name="Home" component={Home} />
              )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}