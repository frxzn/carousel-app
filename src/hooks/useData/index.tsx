import { useEffect, useState } from 'react';
import axios from 'axios';
import { Media, MediaResponse } from 'interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = 'https://picsum.photos/v2/list';

const useData = () => {
  const [data, setData] = useState<Media[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastSavedIndex, setLastSavedIndex] = useState(0);

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        setError(false);
        const JsonIndex = await AsyncStorage.getItem('lastSavedIndex');
        if (JsonIndex) {
          setLastSavedIndex(JSON.parse(JsonIndex));
        }
        const res = await axios.get<MediaResponse[]>(URL);
        const myData = res.data.map(item => ({
          id: item.id,
          title: item.author,
          image: item.download_url,
        }));
        setData(myData.slice(0, 9));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  return {
    data,
    loading,
    error,
    lastSavedIndex,
  };
};

export default useData;
