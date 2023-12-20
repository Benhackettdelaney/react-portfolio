import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Demo = () => {
  const [projects, setProjects] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const App = lazy(() => import(`./demos/${slug}/App`));

  useEffect(() => {
    axios.get('https://ben-portfolio-86b65-default-rtdb.firebaseio.com/.json')
      .then(response => {
        const proj = response.data.find((p) => p.slug === slug);

        if (!proj) {
          navigate('/projects');
        } else if (!proj.demo) {
          navigate(`/projects/${proj.slug}`);
        } else {
          setProjects(proj);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [slug, navigate]);

  if (!projects) return <h2>Project does not exist</h2>;

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <App />
      </Suspense>
    </>
  );
};

export default Demo;
