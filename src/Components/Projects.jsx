import React from "react";

function Projects() {
  const projects = [
    { title: "Project One", description: "Photography", link: "https://drive.google.com/drive/folders/1nYpt-xmOLxyTbmV7BC0fF8Ru-Pvl96rB?usp=drive_linkg" },
    { title: "Project Two", description: "Animation", link: "#" },
    { title: "Project Three", description: "Programming", link: "#" },
  ];

  return (
    <section className="p-10 bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;