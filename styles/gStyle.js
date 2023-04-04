import { StyleSheet } from "react-native";

export const gStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontFamily: "roboto-500",
    fontSize: 15,
    color: "#333138",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: "5%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    marginBottom: 10,
  },
  header: {
    width: "100%",
    height: "5%",
    backgroundColor: "#FE6223",
  },
  restCard: {
    paddingHorizontal: "5%",
  },
  mainRest: {
    marginBottom: 15,
  },
  mainRestImg: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  mainRestTitle: {
    fontFamily: "roboto-700",
    fontSize: 22,
    color: "#333138",
  },
  mainRestDescr: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainRestNavText: {
    fontFamily: "roboto-400",
    fontSize: 14,
    color: "#333138",
    paddingLeft: 10,
  },
  mainRestNav: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#D7DCE4",
  },
  mainRestStar: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#D7DCE4",
  },
  mainRestStarText: {
    marginRight: 8,
    fontFamily: "roboto-400",
    fontSize: 14,
    color: "#333138",
  },
  profileImg: {
    borderRadius: 250,
    width: 120,
    height: 120,
  },
  profileContainer: {
    flexDirection: "row",
    paddingHorizontal: "5%",
    paddingVertical: "8%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    paddingBottom: "10%",
    backgroundColor: "#FFF",
  },
  profileNameAndNumberView: {
    paddingHorizontal: "10%",
    paddingVertical: "10%",
  },
  profileTextNameAndNumber: {
    fontSize: 20,
    fontFamily: "roboto-500",
    color: "#333138",
  },
  profileSettings: {
    flexDirection: "row",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    paddingBottom: "10%",
    backgroundColor: "#FFF",
    
  },
  profileSettingNameText: {
    fontSize: 15,
    fontFamily: "roboto-500",
    color: "#8F9090",
  },
  profilePersonalInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    paddingVertical: 15
  },
  profilePersonalIconsText: {
    fontSize: 20
  },
  profileSecurity: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    paddingVertical: 15
  },
  profileSecurityText: {
    fontSize: 20,
  },
  AboutUsBlock: {
    flexDirection: "row",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    paddingBottom: "10%",
    backgroundColor: "#FFF",
  },
  slider: {
    width: "100%",
    backgroundColor: "green",
    marginBottom: 10,
  },
  AboutUsText: {
    fontSize: 15,
    fontFamily: "roboto-500",
    color: "#8F9090",
  },
  AboutApp: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    paddingVertical: 15
  },
  AboutAppText: {
    fontSize: 20,
  },
  Support: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    paddingVertical: 15
  },
  SupportText: {
    fontSize: 20,
  },
  Exit: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    paddingVertical: 15
  },
  ExitText: {
    fontSize: 20,
  },
  restInfoDescr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 7

  },
  FullInfoOptions: {
    paddingHorizontal: 15,
  },
  restInfoNav: {
    fontFamily: "roboto-400",
    fontSize: 14,
    color: "#333138",
  },
  restInfoReviews: {
    justifyContent: "flex-end",
  },
  restInfoStarContainer: {
    flexDirection: 'row',
    backgroundColor: '#D7DCE4',
    borderRadius: 10, 
    justifyContent: "space-between",
    padding: 7,
  },
  reviewCol: {
    fontFamily: "roboto-400",
    fontSize: 16,
    color: "#FE6223",
    marginTop: 7
  },
  fullInfoSlotsTitle: {
    fontFamily: "roboto-500",
    fontSize: 20,
    color: "#333138",
    marginBottom: 10
  },
  fullInfoSlotsTitleNum: {
    color: "#FE6223",
    fontSize: 25
  },
  mainRestNavSlots: {
    fontFamily: "roboto-400",
    fontSize: 16,
    color: "#FE6223",
    marginTop: 7
  },
  fullInfoForm: {
    padding: 5,
    backgroundColor: "#D7DCE4",
    borderRadius: 10, 
  },
  fullInfoFormTitle: {
    fontFamily: "roboto-400",
    fontSize: 16,
    color: "#FE6223",
    marginTop: 5
  },
  fullInfoFormMore: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
  },
  fullInfoBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#FE6223",
  },
  fullInfoBtnText: {
    fontFamily: "roboto-700",
    fontSize: 16,
    color: "#FFF",
  },
  bookingTitle: {
    padding: 15,
  },
  bookingTitleText: {
    fontFamily: "roboto-500",
    fontSize: 20,
  },
  bookingEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingEmptyText: {
    fontFamily: "roboto-500",
    fontSize: 22,
    marginTop: 40,
  }

});
