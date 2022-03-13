import { Card, CardContent, Grid } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import RadarChart from "../components/RadarChart";

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      flexGrow: 1,

      height: "90%",
    },
  })
);

export default function Competency() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <RadarChart />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
