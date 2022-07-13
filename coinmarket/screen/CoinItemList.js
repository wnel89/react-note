import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import axios from 'axios';

const CoinItemList = () => {
  const [itemList, setItemList] = useState([]);

  const api_List =
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
  //   const api_Image = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info';

  //   const fetchData = async () => {
  //     try {
  //       const [res1, res2] = await axios.all([
  //         axios.get(api_List),
  //         axios.get(api_Image),
  //         {
  //           headers: {
  //             'X-CMC_PRO_API_KEY': '7d5ea2aa-b88f-400d-97a2-86ba00001ed6',
  //             'id': '1',
  //           },
  //         },
  //       ]);

  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  const fetchData = async () => {
    try {
      const response = await axios.get(api_List, {
        headers: {
          'X-CMC_PRO_API_KEY': '7d5ea2aa-b88f-400d-97a2-86ba00001ed6',
        },
      });
      setItemList(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const list = () => {
    return itemList.map(itemsList => {
      return (
        <View style={style.container} key={itemsList.id}>
          <Text style={style.content}>{itemsList.name}</Text>
          <Text style={style.content}>링크{itemsList.logo}</Text>
          <Text style={style.content}>{itemsList.symbol}</Text>
          <Text style={style.content}>
            ₩
            {(itemsList.quote.USD.price * 1307.27)
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
          <Text style={style.content}>
            {itemsList.quote.USD.percent_change_1h.toFixed(2)}%
          </Text>
          <Text style={style.content}>
            {itemsList.quote.USD.percent_change_24h.toFixed(2)}%
          </Text>
          <Text style={style.content}>
            {itemsList.quote.USD.percent_change_7d.toFixed(2)}%
          </Text>
        </View>
      );
    });
  };

  const style = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      //   backgroundColor: 'yellow',
    },
    content: {
      textAlign: 'center',
      padding: 5,
      flex: 1,
      // backgroundColor: 'green',
    },
  });

  return <ScrollView>{list()}</ScrollView>;
};
export default CoinItemList;
