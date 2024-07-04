import { Text, View } from "react-native";
import Banner from '@/components/Banner'
import ShoppingList  from "@/components/ShoppingList";
import React from "react";
import QuestionForm from "@/components/QuestionForm";
import { useState } from 'react'
import Basket from "@/components/Basket";

export default function Index() {  
  


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Banner/>

      {/* <ShoppingList/>  */}
      <Basket />
      <ShoppingList /> 
      <QuestionForm />
      <Text>Text</Text>
    </View>
  );
}
