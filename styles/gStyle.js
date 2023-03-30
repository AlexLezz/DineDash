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
      profileImg: {
        borderRadius: 250,
        width: 100,
        height: 100
        
      },
      profileContainer: {
        flexDirection: 'row',
        paddingHorizontal: "10%",
        paddingVertical: "8%",
        borderBottomWidth: 0.5,
        paddingBottom: "20%",
        backgroundColor: "#FFF"
      },
      profileNameAndNumberView: {
        paddingHorizontal: "12%",
        paddingVertical: "6%",
      },
      profileTextNameAndNumber: {
        fontSize: 20,
        fontFamily: 'roboto-500',
        color: '#333138',
      },
      profileSettings: {
        flexDirection: 'row',
        paddingHorizontal: "10%",
        paddingVertical: "5%",
        paddingBottom: "5%",
        backgroundColor: "#FFF"
      },
      profileSettingNameText: {
        
      }
})

