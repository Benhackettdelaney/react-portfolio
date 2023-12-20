import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeroShow from '../../components/HeroShow';

const Show = () => {
  const [project, setProject] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    axios.get('https://ben-portfolio-86b65-default-rtdb.firebaseio.com/.json')
      .then(response => {
        const foundProject = response.data.find((p => p.slug === slug));
        setProject(foundProject);
        console.log(project)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [slug]);

  if (!project) return <h1>Project not found</h1>;


  return (
    <>
    <div className='flex flex-1justify-items-center'>
      <HeroShow 
      project={project}
      />
      {(project.website)?(<a href={project.website} target="_blank" rel="noreferrer" className="btn btn-primary mr-2">Website</a>):""}
           {(project.github)?(<a href={project.github} rel="noreferrer" target="_blank"className="btn btn-primary mr-2">Github</a>):"" }
      
      {(project.demo) ? (<Link to={`/projects/${project.slug}/demo`}><button className='btn btn-success'>Demo</button></Link>) : null}
      </div>
      
    </>
  );
};

export default Show;
