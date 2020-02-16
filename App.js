import * as React from 'react';
import 'react-native-gesture-handler';
import Loading from './src/components/Loading';
import SignIn from './src/components/SignIn';
import SignUp from './src/components/SignUp';
import Home from './src/components/Home';
import HeaderHome from './src/components/Home/HomeHeader'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Context from './src/store';
import { AuthActions } from './src/store/actions';
import { setToken, getToken, clearToken } from './src/util/token';

const Stack = createStackNavigator();
const AuthContext = Context.getAuthContext();

export default function App() {
  const [state, dispatch] = React.useReducer(AuthActions, Context.getAuthInitialState());

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
        dispatch({ type: 'SIGN_IN', token: data ? data : null });
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
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          ) : (
                <Stack.Screen
                  name="Home"
                  component={Home}
                />
              )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}