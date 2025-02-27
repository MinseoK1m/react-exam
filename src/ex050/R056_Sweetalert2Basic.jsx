import React, { useEffect } from "react";
import Swal from "sweetalert2";

const R056_Sweetalert2Basic = () => {
  useEffect(() => {
    //Swal.fire("1. Sweetalert2");
    //alert("2. alert()");
    Swal.fire('1. SweetAlert')
    .then(result => {
      alert('2. result.value: ' + result.value)
    })    
  }, []);

  return <h1>sweetalert2</h1>;
};

export default R056_Sweetalert2Basic;
