import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'

const SKILLS=gql`
query GetSkills{
  skills{
    data{
      attributes{
        name
        Definition
      }
      id
    }
  }
}
`
export default function Skills() {
  const {error,loading,data}=useQuery(SKILLS)
    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error...</p>
    console.log(data)
  return (
    <div>
        {data.skills.data.map((skill)=>(
          <Link key={skill.id} to={`/insight/${skill.id}`}>
            <div  className='skill-card'>
                <h1>{skill.attributes.name}</h1>      
                <p>{skill.attributes.Definition}</p> 
                </div>
                </Link>

            
        ))}
    </div>
  )
}
