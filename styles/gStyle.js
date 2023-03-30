import { StyleSheet} from 'react-native';

export const gStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      text: {
        fontFamily: 'roboto-500',
        fontSize: 15,
        color: '#333138',
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: "5%",
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)'
      },
      header: {
        width: "100%",
        height: "5%",
        backgroundColor: "#FE6223",
      },
})

