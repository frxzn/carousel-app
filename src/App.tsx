import React from 'react';
import { Carousel, CenterText } from 'components';
import { useData } from 'hooks';

const App = () => {
  const { data, loading, error, lastSavedIndex } = useData();

  let render;

  if (loading) {
    render = <CenterText>Loading...</CenterText>;
  } else if (error) {
    render = <CenterText>Error</CenterText>;
  } else if (data) {
    render = <Carousel data={data} startIndex={lastSavedIndex} />;
  } else {
    render = <CenterText>Nothing to show</CenterText>;
  }
  return render;
};

export default App;
