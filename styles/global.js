import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1 ,
    padding: 50
  },
  dashboardContainer:{
    height: 160,
    width: 300,
    padding: 10,
    backgroundColor: '#fff'
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
  }
});