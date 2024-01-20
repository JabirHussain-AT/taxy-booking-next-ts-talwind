// AutoCompleteAddress component

"use client";
import React, { useEffect, useState } from "react";

const AutoCompleteAddress = () => {
  const [value, setValue] = useState("");
  const [addressResult, setaddressResult] = useState<any>([]);

  useEffect(() => {
    const delayBounceFn = setTimeout(() => {
      getAddressList();
    }, 1000);

    return () => {
      clearTimeout(delayBounceFn);
    };
  }, [value]);

  const getAddressList = async () => {
    try {
      const res = await fetch(`/api/search-address?q=${value}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }

      const result = [await res.json()]
      setaddressResult(result);
      console.log(addressResult,'============')
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="mt-5">
      <div>
        <label className="text-gray-400">Where From?</label>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
        />
      </div>
      {addressResult[0]?.data?.suggestions && addressResult[0].data.suggestions.length > 0 && (
        <div>
          {addressResult[0]?.data?.suggestions.map((item: any, index: number) => (
            <div key={index}>
              <h2>{item.full_address}</h2>
            </div>
          ))}
        </div>
      )}

      <div className="mt-3">
        <label className="text-gray-400">Where To?</label>
        <input
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
        />
      </div>
    </div>
  );
};

export default AutoCompleteAddress;
