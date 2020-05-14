import Loader from 'react-loader-spinner';

import React, { useState, useEffect } from 'react';
import './App.sass';
import Header from './Components/Header'
import Cards from './Components/Cards';
import Footer from './Components/Footer';

const App = () => {
  const apiUrl = 'https://reqres.in/api/colors';
  const [colors, setColors] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [numOfPages, setNumOfPages] = useState('');
  const [actualPage, setActualPage] = useState(0);

  // Consult the API 
  useEffect(() => {
    nextColors()
  }, [])

  // Function to get the data from the API and save it
  const nextColors = () => {
    setIsLoading(true);
    const page = actualPage + 1;
    fetch(`${apiUrl}?page=${page}`)
      .then(res => res.json())
      .then(colors => {
        setIsLoading(false);
        setColors(colors.data);
        setNumOfPages(colors.total_pages);
        setActualPage(colors.page);
      });
  }

  const prevColors = () => {
    setIsLoading(true);
    const page = actualPage - 1;
    fetch(`${apiUrl}?page=${page}`)
      .then(res => res.json())
      .then(colors => {
        setIsLoading(false);
        setColors(colors.data);
        setNumOfPages(colors.total_pages);
        setActualPage(colors.page);
      });
  }

  const disabledPrev = isLoading || actualPage === 1;
  const disabledNext  = isLoading || (numOfPages === actualPage);

  return (
    <div className="App">
       <Loader
        style={{position: 'absolute', top: '50%', left: '50%'}}
         type="Puff"
         color="white"
         height={100}
         width={100}
         visible={isLoading} 
      />
      <Header />
      <h3 className='instructions'>Just click on the colors and the Hex Code will be copied to your clipboard:</h3>
      <section className='sectionColors'>
        { colors &&
        colors.map( color => {
          return (
            <Cards 
              key={color.pantone_value}
              year= {color.year}
              hex= {color.color}
              colorName= {color.name}
              pantone= {color.pantone_value}
            />
          )}
        )}
      </section>
      <Footer
        disabledPrev={disabledPrev}
        disabledNext={disabledNext}
        nextColors={nextColors}
        prevColors={prevColors}
      />
    </div>
  );
}

export default App;
