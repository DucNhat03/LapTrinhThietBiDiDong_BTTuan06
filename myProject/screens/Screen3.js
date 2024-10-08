import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 

const { width, height } = Dimensions.get('window'); 

const Screen_03 = ({ route }) => {
  const {
    image,
    title = 'Pina Mountain',
    originalPrice = '$1350',
    discountedPrice = '$449',
    discount = '15% OFF',
    description = 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
  } = route.params;

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>


      <Text style={styles.title}>{title}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.discount}>{discount}</Text>
        <Text style={styles.originalPrice}>{originalPrice}</Text>
        <Text style={styles.discountedPrice}>{discountedPrice}</Text>
      </View>

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{description}</Text>


      <View style={styles.actionContainer}>
        <FontAwesome name="heart-o" size={36} color="gray" style={styles.heartIcon} />
        <TouchableOpacity style={styles.addButton} onPress={() => {navigation.navigate('Screen_01')}}>
          <Text style={styles.addButtonText}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: width * 0.05, 
  },
  imageContainer: {
    backgroundColor: '#fce7d4', 
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
    height: width * 0.95, 
    marginBottom: height * 0.02, 
    borderRadius: 6, 
  },
  image: {
    width: '90%', 
    height: '90%', 
  },
  title: {
    fontSize: width * 0.07, 
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: height * 0.01, 
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    marginBottom: height * 0.01, 
  },
  discount: {
    fontSize: width * 0.04, 
    color: 'red',
    marginRight: 10,
  },
  originalPrice: {
    fontSize: width * 0.04, 
    color: 'gray',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discountedPrice: {
    fontSize: width * 0.045, 
    fontWeight: 'bold',
    color: 'black',
  },
  sectionTitle: {
    fontSize: width * 0.05, 
    fontWeight: 'bold',
    marginTop: height * 0.01, 
    marginBottom: height * 0.005, 
    textAlign: 'left', 
  },
  description: {
    fontSize: width * 0.04, 
    color: 'gray',
    marginBottom: height * 0.015, 
    textAlign: 'left', 
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.02, 
  },
  heartIcon: {
    padding: 10,
  },
  addButton: {
    backgroundColor: 'red',
    paddingVertical: height * 0.016, 
    paddingHorizontal: width * 0.22, 
    borderRadius: 30,
  },
  addButtonText: {
    color: 'white',
    fontSize: width * 0.045, 
    fontWeight: 'bold',
  },
});

export default Screen_03;
