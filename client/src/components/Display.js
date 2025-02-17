import { useState } from "react";
import "./display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");

  const getdata = async () => {
    let dataArray;
    try {
      dataArray = await contract.display(account);
      console.log(dataArray);
    } catch (e) {
      alert("You don't have access");
      return;
    }

    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank" rel="noreferrer">
            <img
              key={i}
              src={item.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")}
              alt={`Image ${i + 1}`}
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No images to display");
    }
  };

  return (
    <>
      <div className="image-list">{data}</div>
      <input
        type="button"
        value="Get Data"
        className="button"
        onClick={getdata}
      />
    </>
  );
};

export default Display;