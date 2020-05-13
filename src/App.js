import React, { useState, useEffect } from 'react';
import './App.sass';
import Header from './Components/Header'
import Cards from './Components/Cards';
import Footer from './Components/Footer';

const App = () => {

  const [colors, setColors] = useState('')
  const [numOfPages, setNumOfPages] = useState('')
  const [actualPage, setActualPage] = useState('')

  // Consult the API 
  useEffect(() => {
    getColors(1)
  }, [])

  // Function to get the data from the API and save it
  const getColors = (page) => {
    fetch(`https://reqres.in/api/colors?page=${page}`)
      .then(res => res.json())
      .then(colors => {
        console.log(colors.data)
        setColors(colors.data)
        setNumOfPages(colors.total_pages)
        setActualPage(colors.page)
      })
  }

  return (
    <div className="App">
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
      <Footer />
    </div>
  );
}

export default App;
