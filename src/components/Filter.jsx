import React, { useState } from "react";

const Filter = ({ handleFilter, value }) => {
  return (
    <>
      <input
        className="filter"
        type="text"
        onChange={handleFilter}
        value={value}
        placeholder="Filter"
      />
    </>
  );
};
export default Filter;
