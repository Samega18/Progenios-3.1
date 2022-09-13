import {StyleSheet} from 'react-native'

export default StyleSheet.create({

container: {
    flex: 1,
    position: 'relative',

    width: "100%",
    height: "100%",
},

top: {
    flex: 1.1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'relative',
    flexDirection: "row",
},

topTexts: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    zIndex: 4,
},

topTextsIcon: {
    marginLeft: 20,
},

topTextsText: {
    marginRight: 20,

    fontSize: 32,
    fontWeight: '600',

},

topImgContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: 'absolute',
    zIndex: 1,
},

topImage: {
    position: 'absolute',
    width: "110%",
    height: "120%",
    zIndex: 2,
    resizeMode: 'cover',
},

topImgFilter: {
    position: 'absolute',
    opacity: .5,
    width: "110%",
    height: "120%",
    zIndex: 3,
},

bottom: {
    flex: 3.6,
    flexDirection: 'column',
    zIndex: 4,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
},

bottomTop: {
    flex: 1,
    position: 'relative',
    paddingLeft: 25,
    paddingRight: 25,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
},

bottomTopImage: {
    width: 125,
    height: 125,
    borderRadius: 200,
    marginBottom: 60,
    resizeMode: 'contain',
    borderWidth: 1,
},

bottomTopIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    borderRadius: 200,
    marginBottom: 65,
    borderWidth: 1,
},

bottomMid: {
    flex: 2,

    width: "100%",
    height: "100%",
    justifyContent: 'space-evenly',
    flexDirection: "row",
    alignItems: 'center',
},

bottomMidCategoriaC: {
    width: "30%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

},

bottomMidCategoriaT1: {
    fontSize: 26,
    fontWeight: "500",
},

bottomMidCategoriaT2: {
    fontSize: 17,
},

bottomBot: {
    flex: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 25,
    paddingLeft: 25,
},

bottomBotTexts: {
    width: "100%",
    height: "50%",
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
},

bottomBotTextsT1: {
    fontSize: 22,
    fontWeight: "500",
    borderBottomWidth: 1,
},

bottomBotTextsT2: {
    marginTop: 15,
    textAlign: 'justify',
    fontSize: 17,
},

bottomBotInfos: {
    width: "100%",
    height: "50%",
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
},

bottomBotInfo: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
},

bottomBotInfoT: {
    marginLeft: 13,
    fontSize: 15,
},

});