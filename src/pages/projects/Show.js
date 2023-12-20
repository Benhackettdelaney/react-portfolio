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
    <div className='flex flex-1 flex-col justify-center'>
      <HeroShow 
      project={project}
      />
     </div>
      
    </>
  );
};

export default Show;
