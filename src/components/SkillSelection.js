import React from "react";

const SkillItem = ({ title, level }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 h-6 w-6 rounded-full border border-neutral-300 flex items-center justify-center text-xs">
        ✓
      </div>

      <div className="text-left">
        <p className="font-medium text-white">{title}</p>
        <p className="text-sm text-neutral-400">{level}</p>
      </div>
    </div>
  );
};

const SkillSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <h2 className="text-3xl font-medium mb-6 tracking-tight text-left">
        Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="border border-neutral-300 rounded-[40px] p-10">
          <h3 className="text-3xl font-semibold mb-10 text-left">
            Front-End Development
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <SkillItem title="React Development" level="Experienced" />
            <SkillItem title="Responsive UI Design" level="Experienced" />
            <SkillItem title="API Integration" level="Experienced" />
            <SkillItem title="UI Components" level="Experienced" />
            <SkillItem title="State Management" level="Intermediate" />
            <SkillItem title="Tailwind / Bootstrap" level="Experienced" />
          </div>
        </div>

        <div className="border border-neutral-300 rounded-[40px] p-10">
          <h3 className="text-3xl font-semibold mb-10 text-left">
            Tools & Technologies
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <SkillItem title="Git & GitHub" level="Experienced" />
            <SkillItem title="Node.js / Express" level="Intermediate" />
            <SkillItem title="MongoDB / SQL" level="Intermediate" />
            <SkillItem title="REST APIs" level="Experienced" />
            <SkillItem title="UI/UX Workflow" level="Intermediate" />
            <SkillItem title="TensorFlow Integration" level="Intermediate" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
