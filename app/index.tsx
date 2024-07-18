// import { Text, View } from "react-native";
// import Banner from '@/components/Banner'
// import ShoppingList  from "@/components/ShoppingList";
// import React from "react";
// import QuestionForm from "@/components/QuestionForm";
// import { useState } from 'react'
// import Basket from "@/components/Basket";
// import { Stack } from "expo-router";

// export default function Index() {  
  


//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//           <SidebarProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Another" component={AnotherScreen} />
//         </Stack.Navigator>
//         <Sidebar />
//       </NavigationContainer>
//     </SidebarProvider>
//       <Banner/>

//       {/* <ShoppingList/>  */}
//       <Basket />
//       <ShoppingList /> 
//       <QuestionForm />
//       <Text>Text</Text>
//     </View>
//   );
// }

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Survey from '../components/pages/Survey'
// import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)