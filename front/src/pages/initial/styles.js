import {StyleSheet} from 'react-native'

export default StyleSheet.create({

container: {
    flex: 1,
    position: 'relative',

    width: "100%",
    height: "100%",
},

imageContainer: {
    flex: 2,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "auto",
},

image: {
    flex: 1,
    width: "70%",
    height: "auto",
    resizeMode: 'contain',
},

texts: {
    flex: 1.5,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
},

textsTittle: {
    flex: 1,
    width: "80%",
    
    fontSize: 40,
    fontWeight: '600',
},

pContainer: {
    flex: 1,
    width: "80%",
    justifyContent: 'center',
    alignItems: 'flex-start',
    
},

p: {
    fontSize: 22,
},

p2: {
    fontSize: 30,
    fontWeight: '700',
},

buttons: {
    flex: 2,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
},

b1:{
    elevation: 0,
    backgroundColor: "#4e8df3",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "70%",

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 20,
},

b1Text: {
    fontSize: 24,
    fontWeight: '700',
},

b2:{
    elevation: 0,
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: "70%",

    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
},

b2Text: {
    fontSize: 24,
    fontWeight: '700',
},

});