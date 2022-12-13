import React from "react";
import Table from "../Picture/Table.png";
import { experience } from "../Componants/workingData";

export const WorkingExperience = () => {
  return (
    <>
      <div class="relative">
        <img src={Table} class="w-screen h-screen" />
        <div class="absolute top-[10%] left-[6%]">
          <p className=" topic text-[3.5rem] bg-[rgba(200,149,149,1)] pt-6 pb-6 pl-2 pr-2">
            WORKING EXPERIENCE
          </p>
        </div>

        <div class="w-screen h-screen flex flex-row justify-center absolute top-[28%]">
          <div id="slider" class="w-[95%] h-[80%] ">
            <marquee scrollamount="5">
              {experience.map((item, index) => {
                return (
                  <div
                    key={index}
                    class=" w-[350px] h-[350px] text-left mt-[5%] m-[1%] p-[2%] bg-[#E3C5C0] rounded-2xl inline-block cursor-pointer hover:scale-105  duration-300"
                  >
                    <p>{item.company}</p>
                    <p>{item.positionAndPeriod}</p>
                    <div class=" block w-[320px]">
                      <ul class="list-inside list-disc ">
                        <li>{item.description1}</li>
                        <li>{item.description2}</li>
                        <li>{item.description3}</li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </marquee>
          </div>
        </div>
      </div>
    </>
  );
};
