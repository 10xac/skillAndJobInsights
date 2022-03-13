import { gql, useQuery } from "@apollo/client";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useParams } from "react-router-dom";
import DemandGraph from "../components/DemandGraph";
import RelatedSkill from "../components/RelatedSkill";
import SkillGraph from "../components/SkillGraph";
const SKILL = gql`
  query GetSkill($id: ID!) {
    skill(id: $id) {
      data {
        attributes {
          name
          related_skill {
            data {
              attributes {
                relation
              }
              id
            }
          }
          demand {
            data {
              attributes {
                data
              }
              id
            }
          }
          data_graph {
            data {
              attributes {
                graphData
              }
              id
            }
          }
        }
        id
      }
    }
  }
`;
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    card: {
      flexGrow: 1,
      padding: theme.spacing(2),
      height: "90%",
    },
  })
);
export default function Insights() {
  const classes = useStyles();
  const { id } = useParams();
  const { error, loading, data } = useQuery(SKILL, { variables: { id: id } });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error...</p>;
  console.log(data);
  // const d = data.skill.data.attributes.demand.data.attributes.data;
  // const da = JSON.parse(JSON.stringify(d));
  // const CharData = da.data;
  // console.log(CharData);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2" className={classes.title}>
            {data.skill.data.attributes.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h3" className={classes.title}>
                  Demand Over time
                </Typography>
                <Typography>
                  See how the number of jobs requiring{" "}
                  {data.skill.data.attributes.name} has changed in the past 3
                  months.
                </Typography>
                <DemandGraph
                  data={data.skill.data.attributes.demand.data.attributes.data}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h3" className={classes.title}>
                  Skill Cluster DNA
                </Typography>
                <Typography>
                  Which skills are related to {data.skill.data.attributes.name}{" "}
                  and how are they interconnected?
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <SkillGraph
                    data={
                      data.skill.data.attributes.data_graph.data.attributes
                        .graphData
                    }
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardContent>
                <RelatedSkill
                  data={
                    data.skill.data.attributes.related_skill.data.attributes
                      .relation
                  }
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              className={classes.card}
              sx={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <CardContent></CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
