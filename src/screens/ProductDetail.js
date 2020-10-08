import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  View,
  TouchableHighlight,
} from 'react-native';
import AppContainer from '../containers/AppContainer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faTruck,
  faEuroSign,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

//TODO: Refactor and extract Card to new componentt
const ProductDetail = ({route, navigation}) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const {item} = route.params;
  const image = {uri: item.imageUri};

  const CardHeader = ({selected = true}) => {
    return (
      <View style={selected ? styles.cardHeader : styles.cardHeaderGrey} />
    );
  };

  function OnPress(selected) {
    setSelectedTab(selected);
    // alert('hello' + selected);
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <AppContainer>
            <ImageBackground source={image} style={styles.image}>
              {item.stock < 1 && <Text style={styles.noStockTag}>AGOTADO</Text>}
            </ImageBackground>

            <View style={styles.card}>
              <CardHeader />
              <View style={styles.cardBlock}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardText}>{item.shortDescription}</Text>
              </View>
              <View style={styles.cardBlock}>
                <View style={styles.row}>
                  <FontAwesomeIcon icon={faTruck} color={'grey'} size={24} />
                  <Text style={styles.cardText}>
                    {' '}
                    {'Envío gratis en 24-72 horas laborables.'}
                  </Text>
                </View>
                <View style={styles.row}>
                  <FontAwesomeIcon icon={faEuroSign} color={'grey'} size={24} />
                  <Text style={styles.cardText}>
                    {' '}
                    {'Financia en 3, 4 o 6 meses.'}
                  </Text>
                </View>
                <View style={styles.row}>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    color={'grey'}
                    size={24}
                  />
                  <Text style={styles.cardText}> {'Garantía de 2 años.'}</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <CardHeader selected={selectedTab === 1} />
              <TouchableHighlight
                style={selectedTab === 1 ? styles.selected : styles.unselected}
                onPress={() => OnPress(1)}
                underlayColor="white">
                <View style={styles.cardBlock}>
                  <Text style={styles.cardTitle}>{'DESCRIPCIÓN'}</Text>
                </View>
              </TouchableHighlight>

              <CardHeader selected={selectedTab === 2} />
              <TouchableHighlight
                style={selectedTab === 2 ? styles.selected : styles.unselected}
                onPress={() => OnPress(2)}
                underlayColor="white">
                <View style={styles.cardBlock}>
                  <Text style={styles.cardTitle}>{'COMPOSICIÓN'}</Text>
                </View>
              </TouchableHighlight>

              {selectedTab === 1 ? (
                <View style={styles.cardBlock}>
                  <Text style={styles.cardText}>{item.description}</Text>
                  <View style={styles.line} />
                  <Text style={styles.cardText}>{item.description2}</Text>
                </View>
              ) : (
                <View style={styles.cardBlock}>
                  <Text style={styles.cardText}>{item.composition}</Text>
                </View>
              )}
            </View>
          </AppContainer>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.price}>
            {item.price}
            {'\u20AC'}
          </Text>
          <TouchableHighlight
            disabled={item.stock < 1}
            style={styles.price}
            onPress={() => alert('Añadido al carrito!')}
            underlayColor="white">
            <View>
              <Text style={styles.buyButton}>
                {item.stock > 1 ? 'AÑADIR AL CARRITO' : 'AVÍSAME'}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // marginTop: Constants.statusBarHeight,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 400,
    marginTop: 20,
  },
  scrollView: {
    flex: 1,
    // backgroundColor: 'pink',
    // marginHorizontal: 20,
  },
  noStockTag: {
    fontSize: 42,
    color: 'red',
    alignSelf: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
  },
  cardHeader: {
    backgroundColor: '#3eb1c8',
    height: 5,
  },
  cardHeaderGrey: {
    backgroundColor: 'grey',
    height: 5,
  },
  selected: {
    backgroundColor: 'white',
  },
  unselected: {
    backgroundColor: '#DFDFDF',
  },
  cardBlock: {
    borderColor: 'grey',
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    padding: 10,
  },
  cardTitle: {
    color: '#666',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardText: {
    color: '#666',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    paddingBottom: 16,
  },
  line: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    marginTop: 15,
    marginBottom: 15,
  },
  footer: {
    flex: 0.1,
    paddingRight: 50,
    paddingLeft: 50,
    flexDirection: 'row',
  },
  price: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#3eb1c8',
  },
  buyButton: {
    alignSelf: 'center',
    height: 40,
    backgroundColor: '#3eb1c8',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    marginLeft: 20,
  },
});

export default ProductDetail;
