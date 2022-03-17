import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Slider,
  Tooltip,
  Typography,
} from "@material-ui/core";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React, { useState } from "react";
import generateColor from "../utils/color";
import AutoComplete from "./AutoComplete";
import { data } from "./chart/data";
import SingleRadarPlot from "./chart/SingleRadarPlot";

const abrhamComp = [];
data.forEach((d) => {
  abrhamComp.push({
    week: d.week,
    abrham: d.trainee_comptency[0],
  });
});
console.log(abrhamComp);

const marks = [];

for (let i = 0; i <= abrhamComp.length - 1; i++) {
  marks.push({
    value: i,
    label: `Week ${abrhamComp[i].week.slice(-1)}`,
  });
}
console.log(marks);
function valuetext(value) {
  return `Week ${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value);
}

export default function RadarChart() {
  const [week, setWeek] = useState(abrhamComp.length - 1);
  const [selected, setSelected] = useState({
    id: "Cumulative",
  });
  const categories = [];
  const series = [];
  const prevSeries = [];
  const colors = [];
  const average = [];
  const fillColors = [];
  const weekValue = [];
  let fillColor;
  console.log(data[week]);

  const rank = abrhamComp[week].abrham.Rank;
  console.log(rank);
  switch (rank) {
    case "q1":
      fillColor = "#f54248";
      break;
    case "q2":
    case "q3":
      fillColor = "#d7f542";
      break;
    case "q4":
      fillColor = "#10e84a";
      break;
    default:
      fillColor = "";
      break;
  }
  //extracting previeus week value for the given week
  if (week !== 0) {
    abrhamComp[week - 1].abrham.competency.forEach((comp) => {
      for (let key in comp) {
        console.log(comp[key]);
        if (key === "commulative") {
          prevSeries.push(comp[key]);
        }
      }
    });
  } else {
    abrhamComp[week].abrham.competency.forEach((comp) => {
      for (let key in comp) {
        console.log(comp[key]);
        if (key === "commulative") {
          prevSeries.push(0);
        }
      }
    });
  }
  console.log("prev", prevSeries);
  // extracting values fro the given week for the radar plot
  abrhamComp[week].abrham.competency.forEach((comp) => {
    for (let key in comp) {
      if (key === "commulative") {
        series.push(comp[key]);
        colors.push("#000000");
        fillColors.push(fillColor);
      } else if (key === "average") {
        average.push(comp[key]);
      } else {
        categories.push(key);
        weekValue.push(comp[key]);
      }
    }
  });

  const markColor = [];
  prevSeries.forEach((ser, index) => {
    let output = Math.ceil((10 / 100) * weekValue[index]);
    console.log(index, weekValue[index]);
    markColor.push({
      seriesIndex: 0,
      dataPointIndex: index,
      fillColor: generateColor("#004c6d", "#c1e7ff", output),
      size: 4,
    });
  });
  console.log("markColor", markColor);
  const chartData = {
    categories,
    series,
    weekValue,
    colors,
    average,
    fillColors,
    markColor,
  };
  // console.log(categories, series, colors, average);

  const indexofPerformingatRisk = [];
  weekValue.forEach((value, index) => {
    if (value <= average[index]) {
      indexofPerformingatRisk.push(index);
    }
  });

  const PerformingatRiskCompetencies = [];
  indexofPerformingatRisk.forEach((value) => {
    PerformingatRiskCompetencies.push(categories[value]);
  });
  const onChanged = (e, value) => {
    setWeek(value);
  };
  let seriesData = [];
  let max,
    markC = [];
  if (selected.id === "Cumulative") {
    seriesData = [{ name: "Cumulative", data: chartData.series }];
    max = data.length - 1;
    markC = chartData.markColor;
  } else if (selected.id === "Week performance") {
    seriesData = [{ name: "Weekly  Competency", data: chartData.weekValue }];
    max = 1;
    markC = [];
  } else if (selected.id === "Weekly with Average") {
    seriesData = [
      { name: "Weekly  Competency", data: chartData.weekValue },
      { name: "Batch average", data: chartData.average },
    ];
    max = 1;
    markC = chartData.markColor;
  }
  const chartDatas = {
    series: seriesData,
    categories: chartData.categories,
    colors: chartData.colors,
    fillColors: chartData.fillColors,
    max: max,
    markC: markC,
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h4">
            {data[week].trainee_comptency[0].name}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <AutoComplete selected={selected} setSelected={setSelected} />
        </Grid>
      </Grid>

      <Typography>
        Radar chart for week {data[week].week.slice(-1)} competency
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
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                Competencies Performing at Risk
                <Tooltip
                  style={{ color: "red" }}
                  title="List of Competencies performed below the average of the batch"
                  placement="right-start"
                >
                  <Button>
                    <InfoOutlinedIcon />
                  </Button>
                </Tooltip>
              </Typography>
              <List>
                {PerformingatRiskCompetencies.map((value) => (
                  <ListItem key={value}>
                    <ListItemText primary={value} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
