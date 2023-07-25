import React from "react";
import moment from "moment";
import 'moment/locale/ru'

const GraphTableSquare = ({ date, contributions }) => {
  const showDate = () => {
    // alert(moment(date).format('dddd, MMMM D, yyyy'));
  };
   const contributionsClasses =
    contributions >= 30
      ? 'bg-[#254E77]'
      : contributions >= 20
      ? 'bg-[#527BA0]'
      : contributions >= 10
      ? 'bg-[#7FA8C9]'
      : contributions >= 1
      ? 'bg-[#ACD5F2]'
      : 'bg-[#EDEDED]';

  return (
    <button
      onClick={showDate}
      className={`z-1 group relative text-[9px] w-[15px] aspect-square ${contributionsClasses} outline-none border border-solid hover:border-[#00000050] focus:border-[#00000090] focus:border`}
    >
      {/* {idx} */}
      <div className="z-10 absolute hidden group-focus:block rounded-[3px] bg-black p-2 bottom-full text-[#fff] text-xs font-normal -translate-x-1/2 ml-2 mb-2">
        <p>{contributions ?? 'no '} contributions</p>
        <span className="whitespace-nowrap text-[#7C7C7C]">{moment(date).format('dddd, MMMM D, yyyy')}</span>
        <div className="absolute left-1/2 -translate-x-2 bg-black w-3 aspect-square rotate-45">

        </div>
      </div>
    </button>
  );
};

export default GraphTableSquare;
