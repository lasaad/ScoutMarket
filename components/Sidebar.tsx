// import React, { useContext } from 'react';
// import { View, Text, Button, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
// import { SidebarContext } from './SidebarContext';

// const Sidebar = () => {
//   const { isSidebarVisible, toggleSidebar } = useContext(SidebarContext);

//   return (
//     <>
//       {isSidebarVisible && (
//         <TouchableWithoutFeedback onPress={toggleSidebar}>
//           <View style={styles.overlay} />
//         </TouchableWithoutFeedback>
//       )}
//       <Animated.View style={[styles.sidebar, isSidebarVisible ? styles.visible : styles.hidden]}>
//         <Text style={styles.menuItem}>Acceuil</Text>
//         <Text style={styles.menuItem}>Mes magasu</Text>
//         <Text style={styles.menuItem}>Menu Item 3</Text>
//         <Button title="Close Sidebar" onPress={toggleSidebar} />
//       </Animated.View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   sidebar: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     width: 250,
//     backgroundColor: 'white',
//     padding: 20,
//     zIndex: 1000,
//   },
//   visible: {
//     left: 0,
//   },
//   hidden: {
//     left: -250,
//   },
//   menuItem: {
//     marginVertical: 10,
//   },
// });

// export default Sidebar;
