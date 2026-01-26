import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import ProjectCard from "../../components/ProjectCard";

// Demo(s)
import GiphyDemo from "./demos/giphy-app/components/GiphyDemo";

const Index = ({ search }) => {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ben-portfolio-86b65-default-rtdb.firebaseio.com/.json`)
      .then((response) => {
        const data = response.data;

        if (!data) {
          setProjects([]);
          return;
        }

        if (Array.isArray(data)) {
          setProjects(data);
          return;
        }

        // Firebase object → array
        setProjects(Object.values(data));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const filteredProjects = useMemo(() => {
    if (!search || search.length <= 1) return projects;
    return projects.filter((p) =>
      (p.title || "").toLowerCase().includes(search.toLowerCase())
    );
  }, [projects, search]);

  const projectList = filteredProjects.map((project, i) => (
    <ProjectCard
      key={project.slug || i}
      project={project}
      onShow={setActiveProject}
    />
  ));

  return (
    <div className="bg-black text-white p-4 pb-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl font-medium tracking-tight text-white">
          Projects
        </h2>
        <p className="text-neutral-400 mt-2 max-w-xl">
          A selection of projects I’ve worked on, including interactive demos.
        </p>
      </div>

      {/* Project cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList}
      </div>

      {/* Inline project details panel */}
      {activeProject && (
        <div className="max-w-6xl mx-auto mt-10 bg-black border border-neutral-800 rounded p-6 text-white">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-3xl font-bold">{activeProject.title}</h2>
            <button
              className="btn btn-sm btn-outline text-white"
              onClick={() => setActiveProject(null)}
            >
              Close
            </button>
          </div>

          {activeProject.images?.[0]?.path && (
            <img
              className="mt-6 max-h-[450px] border-b border-neutral-800 w-full object-contain"
              src={activeProject.images[0].path}
              alt=""
            />
          )}

          <div className="mt-6">
            <p className="mb-4">
              <b className="text-xl mr-2">Description:</b>
              {activeProject.description}
            </p>

            {activeProject.date && (
              <p className="mb-4">
                <b className="text-xl mr-2">Date:</b>
                {activeProject.date}
              </p>
            )}

            {activeProject.tags?.length > 0 && (
              <div className="mb-6">
                <b className="text-xl mr-2">Tags:</b>
                <div className="mt-2 flex flex-wrap gap-3">
                  {activeProject.tags.map((t, idx) => (
                    <span key={idx} className="badge badge-outline">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4 flex-wrap">
              {activeProject.website && (
                <a href={activeProject.website} target="_blank" rel="noreferrer">
                  <button className="btn btn-outline btn-sm text-white">
                    Website
                  </button>
                </a>
              )}

              {activeProject.github && (
                <a href={activeProject.github} target="_blank" rel="noreferrer">
                  <button className="btn btn-outline btn-sm text-white">
                    GitHub
                  </button>
                </a>
              )}
            </div>

            {/* Demo section */}
            {activeProject.demo && (
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4">Demo</h3>

                {activeProject.slug === "giphy-app" ? (
                  <GiphyDemo />
                ) : (
                  <p className="text-neutral-400">
                    No demo component wired for this project yet.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
