import { LineProgressBar } from "@frogress/line";
import React from "react";

export default function RelatedSkill({ data }) {
  const myData = JSON.parse(JSON.stringify(data));
  console.log(myData);
  return (
    <div>
      {myData.data.map((relate) => (
        <div key={relate.rank}>
          <h4>
            {" "}
            {relate.rank}. {relate.name}
          </h4>
          <p>{relate.desc}</p>
          <span>
            <LineProgressBar
              percent={relate.percent}
              rounded={18}
              height={18}
            />
            <span>{relate.percent}%</span>
          </span>
        </div>
      ))}
    </div>
  );
}
