import React from "react";

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
  ]

const GraphTable = () => {
  return (
    <div className="flex">
      <div className=" flex flex-col gap-5 mt-5 text-[#959494] text-xs font-normal">
        <span>Пн</span>
        <span>Ср</span>
        <span>Пт</span>
      </div>
      <div className="flex flex-col text-[#959494] text-xs font-normal">
        <div className="flex justify-around">
          {monthList.map((text) => (
              <span>{text}</span>
          ))}
        </div>
        <div className="m-1 bg-slate-60 grid grid-rows-7 grid-flow-col gap-[2px]">
          {/* <button className="w-[15px] aspect-square bg-[#EDEDED]"></button>
          <button className="w-[15px] aspect-square bg-[#ACD5F2]"></button>
          <button className="w-[15px] aspect-square bg-[#EDEDED]"></button> */}
          {Array(357)
            .fill(0)
            .map((el, idx) => (
              <button className="text-[9px] w-[15px] aspect-square bg-[#EDEDED] outline-none border border-solid hover:border-[#00000050] focus:border-[#00000090] focus:border">
                {/* {idx} */}
              </button>
            ))}
        </div>
        <div className="mt-4 text-[8px] flex gap-2">
          <span>Меньше</span>
          <div className="flex gap-[2px]">
            <button className="w-[15px] aspect-square bg-[#EDEDED]"></button>
            <button className="w-[15px] aspect-square bg-[#ACD5F2]"></button>
            <button className="w-[15px] aspect-square bg-[#7FA8C9]"></button>
            <button className="w-[15px] aspect-square bg-[#527BA0]"></button>
            <button className="w-[15px] aspect-square bg-[#254E77]"></button>
          </div>
          <span>Больше</span>
        </div>
      </div>
    </div>
  );
};

export default GraphTable;
