"use client";
export const DesignSkills = () => {
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">مهارات التصميم</div>
        </div>
        <div className="skills">
          <ul>
            <li>
              <div className="name">تصميم المواقع</div>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">الرسوم التوضيحية</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Photoshop</div>
              <div className="progress">
                <div className="percentage" style={{ width: "75%" }}>
                  <span className="percent">75%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">تصميم غرافيك</div>
              <div className="progress">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const LanguagesSkills = () => {
  useEffect(() => {
    glitcheUtils.dotResize();
    setTimeout(glitcheUtils.createSkillsDot(), 1000);
  }, []);

  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">مهارات اللغة</div>
        </div>
        <div className="skills dotted">
          <ul>
            <li>
              <div className="name">الإنجليزية</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">ألمانية</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">الإيطالي</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "55%" }}>
                  <span className="percent">55%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">فرنسي</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const CodingSkills = () => {
  const skills = [
    { id: 1, title: "WordPress", value: 90 },
    { id: 2, title: "PHP / MYSQL", value: 75 },
    { id: 3, title: "Angular / JavaScript", value: 85 },
    { id: 4, title: "HTML / CSS", value: 95 },
  ];
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">مهارات الترميز</div>
        </div>
        <div className="skills circles">
          <ul>
            {skills.map((skill) => (
              <li key={skill.id}>
                <div className="name">{skill.title}</div>
                <div className={`progress p${skill.value}`}>
                  <div
                    className="percentage"
                    style={{ width: `${skill.value}%` }}
                  >
                    <span className="percent">{skill.value}%</span>
                  </div>
                  <span>{skill.value}%</span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export const Knowledge = () => {
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">المعرفه</div>
        </div>
        <div className="skills list">
          <ul>
            <li>
              <div className="name">موقع استضافة</div>
            </li>
            <li>
              <div className="name">تطبيقات iOS و android</div>
            </li>
            <li>
              <div className="name">إنشاء تصميم الشعار</div>
            </li>
            <li>
              <div className="name">تصميم للطباعة</div>
            </li>
            <li>
              <div className="name">الحديثة وجاهزة جاهزة</div>
            </li>
            <li>
              <div className="name">وتشمل الخدمات الإعلانية</div>
            </li>
            <li>
              <div className="name">الرسومات والرسوم المتحركة</div>
            </li>
            <li>
              <div className="name">محرك بحث التسويق</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

import { glitcheUtils } from "@/utility";
import { Fragment, useEffect } from "react";
const Skills = ({
  design = true,
  languages = true,
  coding = true,
  knowledge = true,
}) => {
  return (
    <Fragment>
      {design && <DesignSkills />}
      {languages && <LanguagesSkills />}
      {coding && <CodingSkills />}
      {knowledge && <Knowledge />}
    </Fragment>
  );
};
export default Skills;
