import './App.css';
//import {LoadImages } from './components/api';
import {Loader} from './components/Loader';
import  {Heading} from './components/Heading';
import {Unsplash} from './components/Unsplash';
import { useEffect, useState } from 'react'; 
import axios from 'axios';

import InfiniteScroll from 'react-infinite-scroll-component';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;



function App() {

const [images , setImage] = useState([]);

useEffect(()=>{
  fetchImages();
  },[]) 


const fetchImages = (count = 10) => {
  const accessKey = 'j5QUXgrmMy5Z3Ao1J7XyWxoNxdSDmF2sa6f8fkADrKc';
  const apiRoot = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`;
  
  axios
    .get(apiRoot)
    .then(res => {
      setImage([...images, ...res.data]);
    })
}

//
return (
  <div>
    <Heading />
    <GlobalStyle />
    <InfiniteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={true}
      loader={<Loader />}
    >
      <WrapperImages>
        {images.map(image => (
          <Unsplash url={image.urls.thumb} key={image.id} />
        ))}
      </WrapperImages>
    </InfiniteScroll>
  </div>
);
}

export default App;
