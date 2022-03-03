import { gql, useQuery } from '@apollo/client';
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from 'react';
import { useParams } from 'react-router-dom';
import Graph from '../components/Graph';
const SKILL =gql`
query GetSkill($id:ID!){
  skill(id:$id){
    data{
      attributes{
        name
        data_graph{
          data{
            attributes{
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
`
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);
export default function Insights() {
  const classes = useStyles();
    const {id}= useParams()
    const {error,loading,data}=useQuery(SKILL,{variables:{id:id}})
    
    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error...</p>
    console.log(data)
    const mydata=data.skill.data.attributes.data_graph.data.attributes.graphData
    console.log(mydata)
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2" className={classes.title}>
            {data.skill.data.attributes.name} Skill Cluster DNA
          </Typography>
        </Toolbar>
      </AppBar>
      <Box m={1} p={4}>
        
         <Graph data={data.skill.data.attributes.data_graph.data.attributes.graphData} /> 
      </Box>
    </Box>
  )
}
