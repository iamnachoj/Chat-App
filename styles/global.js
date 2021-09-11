import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1 ,
    padding: 50
  },
  dashboardContainer:{
    height: 260,
    width: 300,
    padding: 10,
    backgroundColor: '#fff',
    opacity: 0.89,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  titleText:{
    fontFamily: 'nunito-bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#333'
  },
  regularText:{
    marginVertical: 8,
    lineHeight: 20
  },
  input:{
    borderWidth:1,
    borderColor: '#777',
    padding: 8,
    marginTop: 20,
    marginBottom: 10
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  colorPickerContainer: {
    padding: 10,
  },
  colorPicker: {
    flexDirection: "row",
    marginTop: 15,
  },
  colors: {
    width: 45,
    height: 45,
    marginRight: 20,
    borderRadius: 45 / 2,
  },
  pink: {
    backgroundColor: "#FFD2F8",
  },
  blue: {
    backgroundColor: "#BED7FF",
  },
  mint: {
    backgroundColor: "#B4F8C8",
  },
  yellow: {
    backgroundColor: "#FBE7C6",
  }
});