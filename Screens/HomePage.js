import axios from "axios";
import React from "react";
import { View, Text, Button, Image, StyleSheet,FlatList } from "react-native";

export const HomePage = (navigation) => {
const[breeds,setbreeds]=React.useState({});
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then(({data})=>{
const breedsobject=data.message;
const breedkeys=Object.keys(breedsobject);
const assemblebreed={};
breedkeys.map(key=>{
    if(breedsobject[key].legth>0){
        breedsobject[key].forEach(subbreed => {
        assemblebreed[key+'_'+subbreed]=key+'/'+subbreed;   
    });
}
else{
    assemblebreed[key]=key;
}

});
setbreeds(assemblebreed);
    })

  return (
    <View style={styles.continer}>
      <Image style={styles.image_container} source={require("../Images/car.jpg")} />
   
    <View style={{alignItems:'center'}}>
        <FlatList  
        data={Object.keys(breeds)}
        renderItem={({item})=>{return(<Text>{item}</Text>) }}
        />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    alignContent: "stretch",
  },
  image_container: {
    width: 400,
    height: 200,
    alignContent: "center",
  },
});
