import React, {useEffect} from 'react';

const R060_FetchPost = () => {
//   useEffect(() => {
//     async function postFetch() {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             body: JSON.stringify({
//                 title: 'foo',
//                 body: 'bar',
//                 userId: 1
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8'
//             }
//         });
//         const body = await response.json();
//         console.log(JSON.stringify(body));
//     }
//     postFetch();
// }, []);

  useEffect(() => {
    function postFetch() {
      fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1, 
              }),
              headers: {
                'Content-type' : 'application/json; charset=UTF-8'
              }
            })
            .then(response => response.json()) 
            .then(json => console.log(json)) 
          }
          postFetch(); 
        }, []);


  return (
    <h1>
      fetch post
    </h1>
  );
};

export default R060_FetchPost;