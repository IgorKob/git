https://docs.expo.io/tutorial/configuration/

// npm
expo install expo-splash-screen


// щоб затримати приховування заставки на п’ять секунд.
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);