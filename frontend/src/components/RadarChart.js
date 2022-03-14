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

// const data = [
//   {
//     week: "week1",
//     trainee_comptency: [
//       {
//         name: "Abreham Gessesse",
//         competency: [
//           { Business_Understanding: 35.646, average: 23.46680851063829 },
//           { Data_Engineering: 38.75, average: 29.79787234042553 },
//           { Data_Understanding: 56.396, average: 43.60510638297872 },
//           { Dashboard_Visualization: 56.396, average: 43.60510638297872 },
//           { Mathematics_Statistics: 38.396, average: 33.94553191489361 },
//           { "MLOps_Continuous Delivery": 38.75, average: 29.79787234042553 },
//           { Modeling_evaluation: 38.75, average: 29.79787234042553 },
//           { Python_programming: 38.75, average: 29.79787234042553 },
//           { SQL_programming: 38.75, average: 29.79787234042553 },
//           {
//             Fluency_in_the_Scientific_Method: 56.396,
//             average: 43.60510638297872,
//           },
//           { Ethics: 17.646, average: 13.807234042553185 },
//           {
//             Statistical_Critical_Thinking: 56.396,
//             average: 43.60510638297872,
//           },
//           {
//             Software_Engineering_Dev_Environment: 20.75,
//             average: 20.138297872340427,
//           },
//           { Impact_Lifelong_learning: 71.396, average: 59.7753191489362 },
//           {
//             Professional_Culture_Communication: 50.646,
//             average: 42.56436653775532,
//           },
//           {
//             Social_Intelligence_Mentorship: 53.396,
//             average: 53.04308994201064,
//           },
//           { Career_Thinking: 71.396, average: 59.7753191489362 },
//         ],
//         Rank: "q4",
//       },
//     ],
//   },
//   {
//     week: "week2",
//     trainee_comptency: [
//       {
//         name: "Abreham Gessesse",
//         competency: [
//           { "Business Understanding": 22.0625, average: 19.622340425531913 },
//           { "Data Engineering": 38.5065, average: 32.623 },
//           { "Data Understanding": 60.569, average: 52.24534042553189 },
//           { "Dashboard & Visualization": 60.569, average: 52.24534042553189 },
//           {
//             "Mathematics and Statistics": 40.569,
//             average: 37.71342553191488,
//           },
//           { "MLOps & Continuous Delivery": 38.5065, average: 32.623 },
//           { "Modeling and evaluation": 38.5065, average: 32.623 },
//           { "Python programming": 38.5065, average: 32.623 },
//           { "SQL programming": 18.5065, average: 18.09108510638298 },
//           {
//             "Fluency in the Scientific Method": 22.0625,
//             average: 19.622340425531913,
//           },
//           { Ethics: 22.0625, average: 19.622340425531913 },
//           {
//             "Statistical & Critical Thinking": 60.569,
//             average: 52.24534042553189,
//           },
//           {
//             "Software Engineering & Dev Environment": 38.5065,
//             average: 32.623,
//           },
//           {
//             "Impact & Lifelong learning": 68.069,
//             average: 58.67087234042552,
//           },
//           {
//             "Professional Culture & Communication": 42.0625,
//             average: 34.15425531914894,
//           },
//           {
//             "Social Intelligence & Mentorship": 7.5,
//             average: 6.425531914893617,
//           },
//           { "Career Thinking": 7.5, average: 6.425531914893617 },
//         ],
//         Rank: "q4",
//       },
//     ],
//   },
//   {
//     week: "week3",
//     trainee_comptency: [
//       {
//         name: "Abreham Gessesse",
//         competency: [
//           { "Business Understanding": 33.0, average: 22.1781914893617 },
//           { "Data Engineering": 36.7897, average: 26.09691489361702 },
//           { "Data Understanding": 60.6647, average: 46.57031914893618 },
//           {
//             "Dashboard & Visualization": 51.6647,
//             average: 38.42138297872342,
//           },
//           {
//             "Mathematics and Statistics": 43.6647,
//             average: 34.506489361702144,
//           },
//           {
//             "MLOps & Continuous Delivery": 44.7897,
//             average: 30.011808510638303,
//           },
//           { "Modeling and evaluation": 44.7897, average: 30.011808510638303 },
//           { "Python programming": 36.6647, average: 25.104893617021272 },
//           {
//             "SQL programming": 26.664700000000003,
//             average: 20.15808510638297,
//           },
//           {
//             "Fluency in the Scientific Method": 33.0,
//             average: 22.1781914893617,
//           },
//           { Ethics: 34.0, average: 26.41223404255319 },
//           {
//             "Statistical & Critical Thinking": 60.6647,
//             average: 46.57031914893618,
//           },
//           {
//             "Software Engineering & Dev Environment": 36.7897,
//             average: 26.09691489361702,
//           },
//           {
//             "Impact & Lifelong learning": 78.78970000000001,
//             average: 56.4240425531915,
//           },
//           { "Professional Culture & Communication": 43.0, average: 27.125 },
//           { "Social Intelligence & Mentorship": 0.0, average: 0.0 },
//           { "Career Thinking": 44.7897, average: 30.011808510638303 },
//         ],
//         Rank: "q4",
//       },
//     ],
//   },
//   {
//     week: "week4",
//     trainee_comptency: [
//       {
//         name: "Abreham Gessesse",
//         competency: [
//           { "Business Understanding": 36.305, average: 31.808276595744672 },
//           { "Data Engineering": 16.305, average: 14.971468085106382 },
//           {
//             "Data Understanding": 51.93000000000001,
//             average: 42.744446808510624,
//           },
//           {
//             "Dashboard & Visualization": 36.305,
//             average: 27.659382978723407,
//           },
//           {
//             "Mathematics and Statistics": 16.305,
//             average: 14.971468085106382,
//           },
//           {
//             "MLOps & Continuous Delivery": 21.93,
//             average: 21.035297872340422,
//           },
//           { "Modeling and evaluation": 31.93, average: 25.907638297872342 },
//           { "Python programming": 31.93, average: 25.907638297872342 },
//           { "SQL programming": 0.0, average: 0.0 },
//           {
//             "Fluency in the Scientific Method": 8.462,
//             average: 7.51736170212766,
//           },
//           { Ethics: 30.0, average: 21.709148936170212 },
//           {
//             "Statistical & Critical Thinking": 20.0,
//             average: 16.836808510638303,
//           },
//           {
//             "Software Engineering & Dev Environment": 31.93,
//             average: 25.907638297872342,
//           },
//           {
//             "Impact & Lifelong learning": 51.93000000000001,
//             average: 42.744446808510624,
//           },
//           {
//             "Professional Culture & Communication": 51.93000000000001,
//             average: 42.744446808510624,
//           },
//           { "Social Intelligence & Mentorship": 0.0, average: 0.0 },
//           {
//             "Career Thinking": 51.93000000000001,
//             average: 42.744446808510624,
//           },
//         ],
//         Rank: "q4",
//       },
//     ],
//   },
//   {
//     week: "week6",
//     trainee_comptency: [
//       {
//         name: "Abreham Gessesse",
//         competency: [
//           {
//             "Business Understanding": 48.433499999999995,
//             average: 46.955159574468084,
//           },
//           { "Data Engineering": 25.251, average: 26.210127659574468 },
//           {
//             "Data Understanding": 24.433500000000002,
//             average: 25.82345744680851,
//           },
//           { "Dashboard & Visualization": 16.251, average: 16.74204255319149 },
//           { "Mathematics and Statistics": 0.0, average: 0.0 },
//           {
//             "MLOps & Continuous Delivery": 16.251,
//             average: 16.74204255319149,
//           },
//           { "Modeling and evaluation": 0.0, average: 0.0 },
//           {
//             "Python programming": 40.251000000000005,
//             average: 37.873744680851054,
//           },
//           { "SQL programming": 0.0, average: 0.0 },
//           { "Fluency in the Scientific Method": 0.0, average: 0.0 },
//           { Ethics: 0.0, average: 0.0 },
//           { "Statistical & Critical Thinking": 0.0, average: 0.0 },
//           {
//             "Software Engineering & Dev Environment": 25.251,
//             average: 26.210127659574468,
//           },
//           {
//             "Impact & Lifelong learning": 40.251000000000005,
//             average: 37.873744680851054,
//           },
//           {
//             "Professional Culture & Communication": 23.182499999999997,
//             average: 20.74503191489362,
//           },
//           { "Social Intelligence & Mentorship": 0.0, average: 0.0 },
//           {
//             "Career Thinking": 33.433499999999995,
//             average: 35.29154255319148,
//           },
//         ],
//         Rank: "q2",
//       },
//     ],
//   },
//   {
//     week: "week7",
//     trainee_comptency: [
//       {
//         name: "Abreham Gessesse",
//         competency: [
//           { "Business Understanding": 35.449, average: 43.925819148936164 },
//           { "Data Engineering": 0.0, average: 0.0 },
//           { "Data Understanding": 35.449, average: 43.925819148936164 },
//           {
//             "Dashboard & Visualization": 35.449,
//             average: 43.925819148936164,
//           },
//           {
//             "Mathematics and Statistics": 35.449,
//             average: 43.925819148936164,
//           },
//           {
//             "MLOps & Continuous Delivery": 19.6155,
//             average: 24.967388297872343,
//           },
//           { "Modeling and evaluation": 19.6155, average: 24.967388297872343 },
//           { "Python programming": 19.6155, average: 24.967388297872343 },
//           { "SQL programming": 19.6155, average: 24.967388297872343 },
//           {
//             "Fluency in the Scientific Method": 35.449,
//             average: 43.925819148936164,
//           },
//           { Ethics: 5.625, average: 7.89095744680851 },
//           {
//             "Statistical & Critical Thinking": 35.449,
//             average: 43.925819148936164,
//           },
//           {
//             "Software Engineering & Dev Environment": 19.6155,
//             average: 24.967388297872343,
//           },
//           {
//             "Impact & Lifelong learning": 31.07425,
//             average: 39.484382978723396,
//           },
//           {
//             "Professional Culture & Communication": 15.8335,
//             average: 18.958430851063827,
//           },
//           {
//             "Social Intelligence & Mentorship": 5.625,
//             average: 7.89095744680851,
//           },
//           { "Career Thinking": 5.625, average: 7.89095744680851 },
//         ],
//         Rank: "q2",
//       },
//     ],
//   },
//   {
//     week: "week8",
//     trainee_comptency: [
//       {
//         name: "Abreham Gessesse",
//         competency: [
//           { "Business Understanding": 29.3325, average: 36.97817021276595 },
//           { "Data Engineering": 29.3325, average: 36.97817021276595 },
//           { "Data Understanding": 29.3325, average: 36.97817021276595 },
//           {
//             "Dashboard & Visualization": 29.3325,
//             average: 36.97817021276595,
//           },
//           {
//             "Mathematics and Statistics": 29.3325,
//             average: 36.97817021276595,
//           },
//           { "MLOps & Continuous Delivery": 0.0, average: 0.0 },
//           { "Modeling and evaluation": 29.3325, average: 36.97817021276595 },
//           { "Python programming": 29.3325, average: 36.97817021276595 },
//           { "SQL programming": 0.0, average: 0.0 },
//           {
//             "Fluency in the Scientific Method": 29.3325,
//             average: 36.97817021276595,
//           },
//           { Ethics: 0.0, average: 0.0 },
//           {
//             "Statistical & Critical Thinking": 29.3325,
//             average: 36.97817021276595,
//           },
//           {
//             "Software Engineering & Dev Environment": 29.3325,
//             average: 36.97817021276595,
//           },
//           {
//             "Impact & Lifelong learning": 29.3325,
//             average: 36.97817021276595,
//           },
//           { "Professional Culture & Communication": 0.0, average: 0.0 },
//           { "Social Intelligence & Mentorship": 0.0, average: 0.0 },
//           { "Career Thinking": 29.3325, average: 36.97817021276595 },
//         ],
//         Rank: "q2",
//       },
//     ],
//   },
// ];
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
  const [selected, setSelected] = useState("Cumulative");
  const categories = [];
  const series = [];
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
      fillColor = "#f59942";
      break;
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

  abrhamComp[week].abrham.competency.forEach((comp) => {
    for (let key in comp) {
      console.log(comp[key]);
      if (key === "commulative") {
        series.push(comp[key]);
        colors.push("#000000");
      } else if (key === "average") {
        average.push(comp[key]);
      } else {
        categories.push(key);
        weekValue.push(comp[key]);
      }
    }
  });
  console.log(average);
  const chartData = {
    categories,
    series,
    weekValue,
    colors,
    average,
    fillColors,
  };
  console.log(categories, series, colors, average);

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
  let max;
  if (selected === "Cumulative") {
    seriesData = [{ name: "Cumulative", data: chartData.series }];
    max = data.length - 1;
  } else if (selected === "Batch average") {
    seriesData = [{ name: "Batch average", data: chartData.average }];
    max = 1;
  } else if (selected === "Week performance") {
    seriesData = [{ name: "Weekly  Competency", data: chartData.weekValue }];
    max = 1;
  } else if (selected === "Weekly with Average") {
    seriesData = [
      { name: "Weekly  Competency", data: chartData.weekValue },
      { name: "Batch average", data: chartData.average },
    ];
    max = 1;
  }
  const chartDatas = {
    series: seriesData,
    categories: chartData.categories,
    colors: chartData.colors,
    fillColors: chartData.fillColors,
    max: max,
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
