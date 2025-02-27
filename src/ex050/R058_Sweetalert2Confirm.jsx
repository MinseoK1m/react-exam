import React, { Component } from "react";
import Swal from "sweetalert2";

class R058_Sweetalert2Confirm extends Component {
  deleteAlert = (e) => {
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4B088A",
      cancelButtonColor: "#01DF01",
      confirmButtonText: "예",
      cancelButtonText: "아니오",
    }).then((result) => {
      if (result.value) {
        document.querySelector("#deleteId").remove();
        Swal.fire("Deleted", "sweetalert2 삭제완료", "success");
      }
    });
  };

  render() {
    return (
      <div>
        <h1 id="deleteId">sweetalert2</h1>
        <button onClick={(e) => this.deleteAlert()}>삭제</button>
      </div>
    );
  }
}

export default R058_Sweetalert2Confirm;
