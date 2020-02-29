import React from "react";
import Button from "./button";

const DataSelector = ({ selectHandler }) => {
  const smallUrl =
    "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
  const bigUrl =
    " http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
  return (
    <div style={{paddingTop: "100px", display: "flex", justifyContent: "center"}}>
      <Button handler={() => selectHandler(smallUrl)} text="I choose 32 elements" />
      <Button handler={() => selectHandler(bigUrl)} text="Fuck it lets go 1000" color="info" />
    </div>
  );
};

export default DataSelector;
