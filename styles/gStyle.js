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
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        marginBottom: 10,
      },
      header: {
        width: "100%",
        height: "5%",
        backgroundColor: "#FE6223",
      },
      restCard: {
        paddingHorizontal: '5%',
      },
      mainRest: {
        marginBottom: 15,
      },
      mainRestImg: {
        width: '100%',
        height: 200,
        borderRadius: 10,
      },
      mainRestTitle: {
        fontFamily: 'roboto-700',
        fontSize: 22,
        color: '#333138',
      },
      mainRestDescr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      mainRestNavText: {
        fontFamily: 'roboto-400',
        fontSize: 14, 
        color: '#333138',
        paddingLeft: 10, 
      },
      mainRestNav: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: "#F8F9FB",
      },
      mainRestStar: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: "#F8F9FB",
      },
      mainRestStarText: {
        marginRight: 8,
        fontFamily: 'roboto-400',
        fontSize: 14, 
        color: '#333138',
      }
})

