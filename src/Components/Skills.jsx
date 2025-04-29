import React from "react";

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS", "GitHub", "Node.js", "Python"];

  return (
    <section id="skills" className="p-10 bg-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="px-6 py-3 bg-gray-700 rounded-full text-lg font-semibold hover:bg-blue-600 transition">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
