import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './footer.jsx'
import './index.css'
import rasm from './assets/2-2-2-3foodgroups_fruits_detailfeature.jpg' 

const data = [
  {img: rasm, des: 'rasm1'},
  {img: rasm, des: 'rasm1'},
  {img: rasm, des: 'rasm1'},
  {img: rasm, des: 'rasm1'},
  {img: rasm, des: 'rasm1'},
  {img: rasm, des: 'rasm1'},
  {img: rasm, des: 'rasm1'},
  {img: rasm, des: 'rasm1'},
  {img: rasm, des: 'rasm1'},
  {img: rasm, des: 'rasm1'},
  {img: rasm, des: 'rasm1'},
  {img: rasm, des: 'rasm1'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='con'>
      {
        data.map((value) =>{
          return (
            <Footer title={value} />
          )
          
        })
      }
    </div>
  </React.StrictMode>
);

