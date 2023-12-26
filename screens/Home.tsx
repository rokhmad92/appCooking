import React, {useEffect, useState} from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
// get API
import {getAllDoa} from '../services/apiDoa';
import {getImages, getImagesHeader} from '../services/apiUnsplash';
// get components
import ListHorizontal from '../components/ListHorizontal';
// library
import {SliderBox} from 'react-native-image-slider-box';

const Home = () => {
  const [images, setImages] = useState([]);
  const [imagesHeader, setImagesHeader] = useState([]);
  const [doas, setDoas] = useState([]);
  const [err, setErr] = useState(false);
  const dimensions = Dimensions.get('screen');

  useEffect(() => {
    getImagesHeader()
      .then(res => {
        // res berbentuk array
        setImagesHeader(res);
      })
      .catch(err => {
        setErr(true);
        console.log(err);
      });

    getImages()
      .then(res => {
        // res berbentuk array
        setImages(res);
      })
      .catch(err => {
        setErr(true);
        console.log(err);
      });

    getAllDoa()
      .then(res => {
        // const arrayDoa = [];
        // for (let loop = 0; loop < 9; loop++) {
        //   const data = res[loop];
        //   arrayDoa.push(data);
        // }

        setDoas(res);
      }).catch(err => {
        setErr(true);
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <SliderBox
          images={imagesHeader.map(image => image.urls.full)}
          sliderBoxHeight={dimensions.height / 1.8}
          circleLoop={true}
          dotStyle={{width: 30}}
          dotColor="#00FF00"
          inactiveDotColor="#FFFFFF"
          // autoplay={true}
        />

        {/* list doa */}
        <View style={styles.listData}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text
              style={styles.text}>
              Kumpulan Doa
            </Text>

            <Text
              style={styles.text}>
              -->
            </Text>
          </View>

          <ListHorizontal dataImage={images} dataDoa={doas}></ListHorizontal>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listData: {
    margin: 15,
  },

  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  }
});

export default Home;
