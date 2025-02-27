import React from 'react';
import { Table } from 'reactstrap';

const R054_ReactstrapTable = () => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Number</th>
          <th>Book Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>국어 참고서</td>
          <td>10,000</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>수학 참고서</td>
          <td>20,000</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>영어 참고서</td>
          <td>12,000</td>
        </tr>
        <tr>
          <th scope='row'>4</th>
          <td>기술가정 참고서</td>
          <td>24,000</td>
        </tr>
        <tr>
          <th scope='row'>5</th>
          <td>문학 참고서</td>
          <td>17,000</td>
        </tr>
        <tr>
          <th scope='row'>6</th>
          <td>사회 참고서</td>
          <td>20,000</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default R054_ReactstrapTable;