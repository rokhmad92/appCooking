import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
// getData
import {getAllDoa} from '../services/apiDoa';
import {getImages} from '../services/apiUnsplash';
// library
import {SliderBox} from 'react-native-image-slider-box';

const Home = () => {
  const [images, setImages] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    getImages()
      .then(res => {
        const arrayImage = [];
        res.forEach(data => {
          arrayImage.push(data.urls.full);
        });

        setImages(arrayImage);
      })
      .catch(err => {
        setErr(true);
        console.log(err);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SliderBox images={images} />
    </View>
  );
};

export default Home;
