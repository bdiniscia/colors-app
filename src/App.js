import React, { useState, useEffect } from 'react';
import './App.sass';
import Header from './Components/Header'
import Cards from './Components/Cards';

const App = () => {

  const [colors, setColors] = useState('')
  const [numOfPages, setNumOfPages] = useState('')
  const [actualPage, setActualPage] = useState('')

  useEffect(() => {
    getColors()
    console.log('in useEffect',colors)

  }, [])

  const getColors = () => {
    fetch('https://reqres.in/api/colors?page=2')
      .then(res => res.json())
      .then(colors => {
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
              year= {color.year}
              hex= {color.color}
              colorName= {color.name}
              pantone= {color.pantone_value}
            />
          )}
        )}
      </section>
    </div>
  );
}

export default App;
