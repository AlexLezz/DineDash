import { StyleSheet} from 'react-native';
import * as Font from 'expo-font';

const fonts = () => Font.loadAsync({
    'Roboto-700': require('../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-500': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-400': require('../assets/fonts/Roboto-Regular.ttf'),
});



export const gStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'Roboto-400',
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 3,
        paddingHorizontal: "5%",
      },
      header: {
        width: "100%",
        height: "5%",
        backgroundColor: "#FE6223",
      },    
})

