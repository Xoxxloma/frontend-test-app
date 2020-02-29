import React, { useState } from "react";

const TableSeacrh = ({searchHandler}) => {

  const [value, setValue] = useState('')

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Recipient's username"
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => searchHandler(value)}
        >
          Найти
        </button>
      </div>
    </div>
  );
};

export default TableSeacrh
