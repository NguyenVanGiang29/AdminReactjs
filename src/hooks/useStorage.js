import { useState, useEffect } from 'react';
import axios from 'axios';

import {URL} from '../contants';

// const STORAGE_KEY = 'itss-todo';

function useStorage() {
  const [items, setItems] = useState([]);
　
　/* 副作用を使う */
  useEffect(() => {
    const fetch =  async () => {
      axios({
        method: 'GET',
        url: `${URL}/products`,
        data: null
      }).then(res => {
        console.log(res.data);
        setItems(res.data);
      }).catch(err => {
        console.log(err);
      });
    }
    fetch();
    
  }, []);
  
  const addItem = item => {
    axios({
      method: 'POST',
      url:  `${URL}/products`,
      data: item
    }).then(res => {
      items.push(item);
      setItems([...items]);
    }).catch(err => {
      console.log(err);
    })
  }

  const putItem = item => {
    
  };
  
  const deleteItem = id => {
      axios({
        method: 'DELETE',
        url: `${URL}/products/${id}`,
        data: null
      }).then(res => {
        
        console.log(res.status);
        let product = items;
        const index = product.findIndex((item)=>item.id === id);
        product.splice(index, 1);
        
        setItems([...product]);
      }).catch(err => {
        console.log(err);
      })
  };

  return [items, addItem, putItem, deleteItem];
}

export default useStorage;