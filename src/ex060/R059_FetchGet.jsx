import React, {useEffect} from 'react';

const R059_FetchGet = () => {
  // useEffect(() => {
  //   async function getfetch() {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/comments?_page=1&_limit=2/');
  //     const body = await response.json();
  //     console.log(body[0].name);
  //   }
  //   getfetch();
  // }, []);

  useEffect(() => {
    function getFetch() {
      fetch('https://jsonplaceholder.typicode.com/comments?_page=1&_limit=2/')
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        console.log(json[0].name)
      })
    }
    getFetch();
  }, []);


  return (
    <h1>fetch get</h1>
  );
};

export default R059_FetchGet;