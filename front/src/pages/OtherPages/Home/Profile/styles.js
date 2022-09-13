import {StyleSheet} from 'react-native'

export default StyleSheet.create({

container: {
    flex: 1,
    position: 'relative',
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
},

containerTop: {
    flex: 1,
    position: 'relative',
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
},

topBackground: {
    position: 'absolute',
    width: '110%',
    height: '160%',
    borderRadius: 100,
    
},

topLeft: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
},

topLeftIcon: {
    flex: 0,
    marginLeft: 20,
},

topLeftText: {
    flex: 0,
    marginLeft: 40,

    fontSize: 35,
    fontWeight: '600',

},

containerBottom: {
    flex: 4.5,
    position: 'relative',
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
},

bottomTop: {
    flex: 1,
    position: 'relative',
    paddingLeft: 25,
    paddingRight: 25,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
},

topImage: {
    width: 125,
    height: 125,
    borderRadius: 200,
    marginBottom: 50,
    resizeMode: 'contain',
    borderWidth: 1,
},

bottomMid: {
    flex: 1.5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: .5,
    borderBottomColor: "gray",
},

bottomBot: {
    flex: 8.5,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: 'column',
    paddingTop: 20,
},

bottomInfoContainer: {
    position: 'absolute',
    width: '85%',
    height: "92%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    bottom: "8%",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
}

});