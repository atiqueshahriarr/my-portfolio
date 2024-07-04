import MiddleTitle from "../Components/MiddleTitle";
import SkillCard from "../Components/SkillCard";
import CSS3 from "/Skills/CSS3.png";
import ExpressJS from "/Skills/Express.png";
import Firebase from "/Skills/Firebase.png";
import HTML5 from "/Skills/HTML5.png";
import Javascript from "/Skills/JavaScript.png";
import MongoDB from "/Skills/MongoDB.png";
import NodeJs from "/Skills/Node.js.png";
import React from "/Skills/React.png";
import Tailwind from "/Skills/Tailwind CSS.png";

import Figma from "/Skills/Figma.png";
import Git from "/Skills/Git.png";
import GitHub from "/Skills/GitHub.png";
import VSCode from "/Skills/VSCode.png";
import Vercel from "/Skills/Vercel.png";

import C from "/Skills/C.png";
import Java from "/Skills/Java.png";
import NumPy from "/Skills/NumPy.png";
import Pandas from "/Skills/Pandas.png";
import Python from "/Skills/Python.png";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-4/5 mx-auto my-10">
      <MiddleTitle titleName={"Skills"}></MiddleTitle>
      <div className="mt-4">
        <h5>Frontend</h5>
        <div className="mt-2 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
          <SkillCard
            icon={HTML5}
            iconText={"HTML5"}
            stage={""}></SkillCard>
          <SkillCard
            icon={CSS3}
            iconText={"CSS3"}
            stage={""}></SkillCard>
          <SkillCard
            icon={Tailwind}
            iconText={"Tailwind CSS"}
            stage={""}></SkillCard>
          <SkillCard
            icon={Javascript}
            iconText={"Javascript"}
            stage={""}></SkillCard>
          <SkillCard
            icon={React}
            iconText={"React"}
            stage={""}></SkillCard>
        </div>
      </div>

      <div className="mt-4">
        <h5>Backend</h5>
        <div className="mt-2 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
          <SkillCard
            icon={NodeJs}
            iconText={"NodeJs"}
            stage={""}></SkillCard>
          <SkillCard
            icon={ExpressJS}
            iconText={"ExpressJS"}
            stage={""}></SkillCard>

          <SkillCard
            icon={MongoDB}
            iconText={"MongoDB"}
            stage={""}></SkillCard>
          <SkillCard
            icon={Firebase}
            iconText={"Firebase"}
            stage={""}></SkillCard>
        </div>
      </div>
      <div className="mt-4">
        <h5>Tools & Technologies</h5>
        <div className="mt-2 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
          <SkillCard
            icon={Git}
            iconText={"Git"}
            stage={""}></SkillCard>
          <SkillCard
            icon={GitHub}
            iconText={"GitHub"}
            stage={""}></SkillCard>
          <SkillCard
            icon={Figma}
            iconText={"Figma"}
            stage={""}></SkillCard>
          <SkillCard
            icon={VSCode}
            iconText={"VSCode"}
            stage={""}></SkillCard>
          <SkillCard
            icon={Vercel}
            iconText={"Vercel"}
            stage={""}></SkillCard>
        </div>
      </div>

      <div className="mt-4">
        <h5>Complementary</h5>
        <div className="mt-2 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
          <SkillCard
            icon={C}
            iconText={"C"}
            stage={""}></SkillCard>
          <SkillCard
            icon={Python}
            iconText={"Python"}
            stage={""}></SkillCard>
          <SkillCard
            icon={Java}
            iconText={"Java"}
            stage={""}></SkillCard>
          <SkillCard
            icon={NumPy}
            iconText={"NumPy"}
            stage={""}></SkillCard>
          <SkillCard
            icon={Pandas}
            iconText={"Pandas"}
            stage={""}></SkillCard>
        </div>
      </div>
    </div>
  );
};

export default Skills;
