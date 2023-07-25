import React, { useEffect, useState } from "react";
import GraphTableSquare from "./GraphTableSquare";
import moment from "moment";
import axios from "axios";

const monthList = [
  "Апр.",
  "Май ",
  "Июнь ",
  "Июль ",
  "Авг.",
  "Сент.",
  "Окт.",
  "Нояб.",
  "Дек.",
  "Янв.",
  "Февр.",
  "Март ",
];

const GraphTable = () => {
  const [graph, setGraph] = useState({});

  useEffect(() => {
    const response = axios("https://dpg.gg/test/calendar.json")
      .then(({ data }) => {
        console.log(data["2022-06-06"]);
        setGraph(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const generateDate = (num = 0) => {
    let d = new Date();
    d.setDate(d.getDate() - d.getDay() + 7 - (356 - num));
    const key = moment(d).format().split("T")[0];

    return { momentDate: d, graphKey: key };
  };

  return (
    <div className="flex my-14 mx-24">
      <div className=" flex flex-col gap-5 mt-5 text-[#959494] text-xs font-normal">
        <span>Пн</span>
        <span>Ср</span>
        <span>Пт</span>
      </div>
      <div className="flex flex-col text-[#959494] text-xs font-normal">
        <div className="flex justify-around">
          {monthList.map((text) => (
            <span key={text}>{text}</span>
          ))}
        </div>
        <div className="m-1 bg-slate-60 grid grid-rows-7 grid-flow-col gap-[2px]">
          {Array(357)
            .fill(0)
            .map((el, idx) => (
              <GraphTableSquare
                date={generateDate(idx).momentDate}
                contributions={graph[generateDate(idx).graphKey]}
                key={idx}
              />
            ))}
        </div>
        <div className="mt-4 text-[8px] flex gap-2">
          <span>Меньше</span>
          <div className="flex gap-[2px]">
            
            <button className="group relative w-[15px] aspect-square bg-[#EDEDED]">
              <div className="z-10 absolute hidden group-focus:block rounded-[3px] bg-black p-2 bottom-full text-[#fff] text-xs font-normal -translate-x-1/2 ml-2 mb-2">
                <p className="whitespace-nowrap">No contributions</p>
                <div className="absolute left-1/2 -translate-x-2 bg-black w-3 aspect-square rotate-45"></div>
              </div>
            </button>
            
            <button className="group relative w-[15px] aspect-square bg-[#ACD5F2]">
              <div className="z-10 absolute hidden group-focus:block rounded-[3px] bg-black p-2 bottom-full text-[#fff] text-xs font-normal -translate-x-1/2 ml-2 mb-2">
                <p className="whitespace-nowrap">1-9 contributions</p>
                <div className="absolute left-1/2 -translate-x-2 bg-black w-3 aspect-square rotate-45"></div>
              </div>
            </button>
            
            <button className="group relative w-[15px] aspect-square bg-[#7FA8C9]">
              <div className="z-10 absolute hidden group-focus:block rounded-[3px] bg-black p-2 bottom-full text-[#fff] text-xs font-normal -translate-x-1/2 ml-2 mb-2">
                <p className="whitespace-nowrap">10-19 contributions</p>
                <div className="absolute left-1/2 -translate-x-2 bg-black w-3 aspect-square rotate-45"></div>
              </div>
            </button>
            
            <button className="group relative w-[15px] aspect-square bg-[#527BA0]">
              <div className="z-10 absolute hidden group-focus:block rounded-[3px] bg-black p-2 bottom-full text-[#fff] text-xs font-normal -translate-x-1/2 ml-2 mb-2">
                <p className="whitespace-nowrap">20-29 contributions</p>
                <div className="absolute left-1/2 -translate-x-2 bg-black w-3 aspect-square rotate-45"></div>
              </div>
            </button>
            
            <button className="group relative w-[15px] aspect-square bg-[#254E77]">
              <div className="z-10 absolute hidden group-focus:block rounded-[3px] bg-black p-2 bottom-full text-[#fff] text-xs font-normal -translate-x-1/2 ml-2 mb-2">
                <p className="whitespace-nowrap">30+ contributions</p>
                <div className="absolute left-1/2 -translate-x-2 bg-black w-3 aspect-square rotate-45"></div>
              </div>
            </button>
          </div>
          <span>Больше</span>
        </div>
      </div>
    </div>
  );
};

export default GraphTable;
