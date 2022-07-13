// 부모 컴포넌트
import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import axios from 'axios';

function CoinView(setCoinData) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const coinData = async () => {
        try {
            setError(null);
            setData([]);
            // 요청 시작엔 에러와 데이터를 초기화 한다.
            setLoading(true);
            // 로딩은 true로 바꾼다.
    
            const response = await axios.get(
                'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
                { headers: {'X-CMC_PRO_API_KEY': 'f92505c7-1347-4a30-babf-5d111693ace0',}, },
            ); // 악시오스 get
            setData(response.data);
            // 데이터는 respons.data에 들어있음
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        coinData();
    }, []);

    // if (loading) return <Text>로딩중...</Text>
    // if (error) return <Text>에러가 발생했습니다.</Text>
    // if (!data) return null;
    // 데이터가 받아지지 않았을 때는 아무것도 표시 되지 않는다.

    // 데이터가 받아졌을 때 아래를 리턴한다.
    return (
        <View>
            {data.map((item, index) => {
                return(
                    <TouchableOpacity onPress={()=>{setCoinData(data)}}>
                    <View>
                        <Text key={index}>{item.name}</Text>
                        <Text>{item.quote.USD.price}</Text>
                    </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default CoinView;

