import React from "react";
import {uniqueId} from 'lodash'

const Table = ({ data, sortHandler, sort, sortField, handlerItemSelect }) => {
  if (!data) {
    return null
  }
 
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" onClick={() => sortHandler('id')}>
            id {sortField === 'id' ? <small>{sort}</small> : null}
            </th>
          <th scope="col" onClick={() => sortHandler('firstName')}>
            First Name {sortField === 'firstName' ? <small>{sort}</small> : null}
            </th>
          <th scope="col" onClick={() => sortHandler('lastName')}>
            Last Name {sortField === 'lastName' ? <small>{sort}</small> : null}
            </th>
          <th scope="col" onClick={() => sortHandler('email')}>
            Email {sortField === 'email' ? <small>{sort}</small> : null}
            </th>
          <th scope="col" onClick={() => sortHandler('phone')}>
            Phone {sortField === 'phone' ? <small>{sort}</small> : null}
            </th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={uniqueId()} onClick={() => handlerItemSelect(item)}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
