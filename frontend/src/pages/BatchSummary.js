import { Box, Slider, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { data } from "../components/chart/data";
import SingleRadarPlot from "../components/chart/SingleRadarPlot";
import TableView from "../components/chart/TableView";

const weekSummary = [];
data.forEach((d) => {
  weekSummary.push({ week: d.week, week_summary: d.week_summay });
});

const marks = [];

for (let i = 0; i <= weekSummary.length - 1; i++) {
  marks.push({
    value: i,
    label: `Week ${weekSummary[i].week.slice(-1)}`,
  });
}

function valuetext(value) {
  return `Week ${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value);
}

export default function BatchSummary() {
  const [week, setWeek] = useState(weekSummary.length - 1);
  const categories = [];
  const series = [];
  const colors = [];
  const series2 = [];

  const summary_week_competency = {
    week: data[week].week,
    week_comp: data[week].summary_week_competency,
  };

  weekSummary[week].week_summary.forEach((comp) => {
    for (let key in comp) {
      console.log(key, comp[key]);
      if (key === "competency") {
        categories.push(comp[key]);
      } else if (key === "Week_value") {
        series2.push(comp[key]);
      } else if (key === "cumulative") {
        series.push(comp[key]);
        colors.push("#000000");
      }

      // average.push(comp[key]);
    }
  });

  const chartData = {
    categories,
    series,
    colors,
    series2,
    fillColors: ["#1A73E8", "#B32824"],
  };
  console.log(categories, series, colors, series2);

  const onChanged = (e, value) => {
    setWeek(value);
  };

  const chartDatas = {
    series: [
      { name: "Week Comp", data: chartData.series },
      // { name: "Week average", data: chartData.average },
    ],
    categories: chartData.categories,
    colors: chartData.colors,
    fillColors: chartData.fillColors,
    max: weekSummary.length - 1,
  };

  return (
    <>
      <Typography variant="h4">
        Overall Batch progress up to week {data[week].week.slice(-1)}.
      </Typography>

      <SingleRadarPlot data={chartDatas} />

      <Box
        component="div"
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Slider
          aria-label="Restricted values"
          defaultValue={data.length - 1}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          step={1}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={(event, currentValue) => onChanged(event, currentValue)}
          min={0}
          max={data.length - 1}
        />
      </Box>
      <TableView data={summary_week_competency} />
    </>
  );
}
