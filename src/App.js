
import {  createTheme, ThemeProvider } from '@mui/material';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componant/Home';

import About from './componant/About';
import Contact from './componant/Contact';
import Nav from './componant/Nav';
import { useState } from 'react';
import Footer from './componant/Footer';









function App() { 
  const [text , setText] = useState('#000000') ;
  const [navColor , setNavColor] = useState("#06a4b8fc") ;
  const [ switchnav , setSwitchnav] = useState('#E1E7E8')


  const theme = createTheme({

    palette: {
      
      myColor: {
        main: '#26c6da',
        dark:'#C0ECEB' ,
        lihgt: '#2196f3'
      },
      text: {
        main: text,
      },
      navColor: {
        main: navColor,
      },
      switchnav : {
       main: switchnav
      },
      icony : {
        main : '#C0ECEB' ,
      },
    }
  });

  


  const [background , setBackgroun] = useState("light") 
  ;
  // const [colors2 , setColors2] = useState("light2") ;
  // const [colors3 , setColors3] = useState("light3") ;
  // const [colors4 , setColors4] = useState("light4") ;
  // const [colors5 , setColors5] = useState("light5") ;
  // const [colors6 , setColors6] = useState("light6") ;
  

  const handlColor = () => {
    setText('#fafafa');
    setBackgroun("dark")
    setNavColor('#154B7A')
    setSwitchnav('#7792AA')


    // setColors2("dark2");
    // setColors3("dark3");
    // setColors4("dark4");
    // setColors5("dark5");
    // setColors6("dark6");

    
    if (text === '#fafafa') {
      setText('#000000');
      setBackgroun("light");
      setNavColor('#06a4b8fc')
      setSwitchnav('#E1E7E8')



   
    //   setColors2('dark2');
    //   setColors3('dark3');
    // setColors4("dark4");
    // setColors5("dark5");
    // setColors6("dark6");


    } else {
      setText('#fafafa');
      setBackgroun("dark")
      setNavColor('#154B7A')
      setSwitchnav('#7792AA')



      // setColors2('light2');
      // setColors3('light3');
      // setColors4('light4');
      // setColors5('light5');
      // setColors6('light6');
    }
  };
  


  return (
    <div className={background}> 
    <ThemeProvider theme={theme}> 
      <BrowserRouter>

      <Nav   handlColor={handlColor} ></Nav>
            <Routes>
                 <Route path="/MediLab" element={ <Home ></Home>} /> 
               <Route path="/About" element={ <About></About>} />
                <Route path="/Contact" element={ <Contact></Contact>} />
            </Routes>
      
 
            <Footer></Footer>
          </BrowserRouter>

        
    </ThemeProvider>
   
     
    </div>
  );
}

export default App;


// // 
// // 
// // 
// //

// import React, { useState, useEffect } from 'react';
// function App() {
//   const [theme, setTheme] = useState('light');
//   const toggleTheme = () => {
//     if (theme === 'light') {
//       setTheme('dark');
//     } else {
//       setTheme('light');
//     }
//   };
//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);
//   return (
//     <div className={`App ${theme}`}>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       <h1>Hello, world!</h1>
//     </div>
//   );
// }
// export default App;