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
        // Firebase returns an object, convert to array:
        const data = response.data;

        if (!data) {
          setProjects([]);
          return;
        }

        // If your DB is already an array, keep it.
        if (Array.isArray(data)) {
          setProjects(data);
          return;
        }

        // If it's an object keyed by id, convert to array of values
        const arr = Object.values(data);
        setProjects(arr);
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
    <ProjectCard key={project.slug || i} project={project} onShow={setActiveProject} />
  ));

  return (
    <div className="bg-zinc-200 p-4 pb-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-content-center auto-cols-auto">
        {projectList}
      </div>

      {/* Inline "Show" panel (one-page replacement for /projects/:slug) */}
      {activeProject && (
        <div className="mt-10 bg-white border border-zinc-300 rounded p-6">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-3xl font-bold">{activeProject.title}</h2>
            <button className="btn btn-sm" onClick={() => setActiveProject(null)}>
              Close
            </button>
          </div>

          {activeProject.images?.[0]?.path ? (
            <img
              className="mt-6 max-h-[450px] border-b-2 w-full object-contain"
              src={activeProject.images[0].path}
              alt=""
            />
          ) : null}

          <div className="mt-6">
            <p className="mb-4">
              <b className="text-xl mr-2">Description:</b>
              {activeProject.description}
            </p>

            {activeProject.date ? (
              <p className="mb-4">
                <b className="text-xl mr-2">Date:</b>
                {activeProject.date}
              </p>
            ) : null}

            {activeProject.tags?.length ? (
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
            ) : null}

            <div className="flex gap-4 flex-wrap">
              {activeProject.website ? (
                <a href={activeProject.website} target="_blank" rel="noreferrer">
                  <button className="btn btn-primary btn-outline btn-sm">Website</button>
                </a>
              ) : null}

              {activeProject.github ? (
                <a href={activeProject.github} target="_blank" rel="noreferrer">
                  <button className="btn btn-primary btn-outline btn-sm">Github</button>
                </a>
              ) : null}
            </div>

            {/* Demo area (one-page) */}
            {activeProject.demo ? (
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4">Demo</h3>

                {/* If you have multiple demos, we can switch by slug or a demoKey */}
                {activeProject.slug === "giphy-app" ? (
                  <GiphyDemo />
                ) : (
                  <p>No demo component wired for this project yet.</p>
                )}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
