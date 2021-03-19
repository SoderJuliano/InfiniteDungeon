import React, { useEffect } from 'react';
import { useState } from "react";

function NewUser(value) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  setItems(value);
    // Note: the empty deps array [] means
    // this useEffect will run once 
    // similar to componentDidMount()
    console.log(`itesm ${items[0]}`);
    useEffect(() => {
      fetch("htthttp://localhost:5000/cadastro")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.email}
            </li>
          ))}
        </ul>
      );
    }
  }
export {NewUser};