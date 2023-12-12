import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getAllDoa} from './services/apiDoa';

const App = () => {
  const [doa, setDoa] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    getAllDoa()
      .then(res => {
        setDoa(res[0]);
      })
      .catch(err => {
        setErr(true);
      });
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ color: 'black', fontSize: 30 }}>{doa && doa.doa}</Text>
      <Text style={{color: 'red', fontSize: 30}}>{err && 'Error'}</Text>
    </View>
  );
};

export default App;
