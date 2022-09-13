import {StyleSheet} from 'react-native'

export default StyleSheet.create({

modal: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: "15%",
},

modalContainer: {
    flex: 1,
    width: "100%",
    height: "90%",
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
},

container: {
    flex: 1,
    position: 'relative',

    width: "100%",
    height: "100%",
},

top: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    flexDirection: "row",
},

topTexts: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
},

topTextsIcon: {
    marginLeft: 20,
},

topTextsIcon2: {
    marginRight: 20,
},

bottom: {
    flex: 9,
    flexDirection: 'column',
    zIndex: 2,

    justifyContent: 'center',
    alignItems: 'center',

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
},

bottomInputContainer:{
    width: "80%",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
},

bottomInput: {
    width: "80%",
    marginTop: 5,
    marginBottom: 5,
    
},

bottomInput2: {
    width: "60%",
    marginTop: 5,
    marginBottom: 5,
    
},

bottomInput3: {
    width: "35%",
    marginTop: 5,
    marginBottom: 5,
    
},

bottomTop: {
    flex: 7,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
},

bottomBot: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
},

bottomBotB:{
    elevation: 0,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "70%",

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 20,
},

bottomBotBText: {
    fontSize: 24,
    fontWeight: '700',
},

});