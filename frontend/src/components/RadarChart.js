import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Slider,
  Typography,
} from "@material-ui/core";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";
const data = [
  {
    week: "week0",
    trainees_comp: {
      name: "Abreham Gessesse",
      competency: [
        { "Business Understanding": 35.646 },
        { "Data Engineering": 38.75 },
        { "Data Understanding": 56.396 },
        { "Dashboard & Visualization": 56.396 },
        { "Mathematics and Statistics": 38.396 },
        { "MLOps & Continuous Delivery": 38.75 },
        { "Modeling and evaluation": 38.75 },
        { "Python programming": 38.75 },
        { "SQL programming": 38.75 },
        { "Fluency in the Scientific Method": 56.396 },
        { Ethics: 17.646 },
        { "Statistical & Critical Thinking": 56.396 },
        { "Software Engineering & Dev Environment": 20.75 },
        { "Impact & Lifelong learning": 71.396 },
        { "Professional Culture & Communication": 50.646 },
        { "Social Intelligence & Mentorship": 53.396 },
        { "Career Thinking": 71.396 },
      ],
    },
  },
  {
    week: "week1",
    trainees_comp: {
      name: "Abreham Gessesse",
      competency: [
        { "Business Understanding": 22.0625 },
        { "Data Engineering": 38.5065 },
        { "Data Understanding": 60.569 },
        { "Dashboard & Visualization": 60.569 },
        { "Mathematics and Statistics": 40.569 },
        { "MLOps & Continuous Delivery": 38.5065 },
        { "Modeling and evaluation": 38.5065 },
        { "Python programming": 38.5065 },
        { "SQL programming": 18.5065 },
        { "Fluency in the Scientific Method": 22.0625 },
        { Ethics: 22.0625 },
        { "Statistical & Critical Thinking": 60.569 },
        { "Software Engineering & Dev Environment": 38.5065 },
        { "Impact & Lifelong learning": 68.069 },
        { "Professional Culture & Communication": 42.0625 },
        { "Social Intelligence & Mentorship": 7.5 },
        { "Career Thinking": 7.5 },
      ],
    },
  },
  {
    week: "week2",
    trainees_comp: {
      name: "Abreham Gessesse",
      competency: [
        { "Business Understanding": 33.0 },
        { "Data Engineering": 36.7897 },
        { "Data Understanding": 60.6647 },
        { "Dashboard & Visualization": 51.6647 },
        { "Mathematics and Statistics": 43.6647 },
        { "MLOps & Continuous Delivery": 44.7897 },
        { "Modeling and evaluation": 44.7897 },
        { "Python programming": 36.6647 },
        { "SQL programming": 26.664700000000003 },
        { "Fluency in the Scientific Method": 33.0 },
        { Ethics: 34.0 },
        { "Statistical & Critical Thinking": 60.6647 },
        { "Software Engineering & Dev Environment": 36.7897 },
        { "Impact & Lifelong learning": 78.78970000000001 },
        { "Professional Culture & Communication": 43.0 },
        { "Social Intelligence & Mentorship": 0.0 },
        { "Career Thinking": 44.7897 },
      ],
    },
  },
];

const marks = [];

for (let i = 0; i < data.length; i++) {
  marks.push({ value: i, label: `Week ${i}` });
}
function valuetext(value) {
  return `Week ${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value);
}

export default function RadarChart() {
  const [week, setWeek] = useState(data.length - 1);
  const categories = [];
  const series = [];
  const colors = [];

  data[week].trainees_comp.competency.forEach((comp) => {
    for (let key in comp) {
      categories.push(key);
      series.push(comp[key]);
      colors.push("#000000");
    }
  });
  const indexofPerformingWell = [];
  const indexofPerformingatRisk = [];
  series.forEach((value, index) => {
    if (value >= 50) {
      indexofPerformingWell.push(index);
    }
    if (value <= 35) {
      indexofPerformingatRisk.push(index);
    }
  });
  const PerformingWellCompetencies = [];
  indexofPerformingWell.forEach((value) => {
    PerformingWellCompetencies.push(categories[value]);
  });
  const PerformingatRiskCompetencies = [];
  indexofPerformingatRisk.forEach((value) => {
    PerformingatRiskCompetencies.push(categories[value]);
  });
  console.log(PerformingWellCompetencies, PerformingatRiskCompetencies);
  const onChanged = (e, value) => {
    setWeek(value);
  };

  const options: ApexOptions = {
    series: [
      {
        name: "competency",
        data: series,
      },
    ],

    chart: {
      toolbar: {
        show: true,
        tools: {
          download: false,
          zoomin: true,
          zoomout: true,
          selection: false,
          pan: false,
          zoom: false,
          reset: false,
        },
      },

      title: {
        text: "Basic Radar Chart",
      },
    },
    xaxis: {
      categories: categories,
      tickPlacement: "on",
      labels: {
        show: true,
        style: {
          colors: colors,
          fontSize: "11px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100,
    },
  };

  return (
    <>
      <Typography variant="h4">{data[week].trainees_comp.name}</Typography>
      <Typography>
        Radar chart for week {data[week].week.slice(-1)} competency
      </Typography>
      <Chart
        options={options}
        series={options.series}
        type="radar"
        height={600}
        width="100%"
      />
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
              <Typography variant="h5">Competencies Performing Well</Typography>
              <List>
                {PerformingWellCompetencies.map((value) => (
                  <ListItem key={value}>
                    <ListItemText primary={value} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                Competencies Performing at Risk
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
