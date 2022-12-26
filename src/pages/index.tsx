import Image from 'next/image';

import Heading from '~/app/mainContent/Heading';

const WorkExperienceObj = [
  {
    firmName: 'Fictionlog.co',
    role: 'Frontend Software Engineer (Web Application)',
    time: 'Apl 2019 - now',
    responsibilities: [
      'created an application features for books and ebooks Fictionlog&apos;s platform',
      'used stack and technologies by NextJS, TypeScript, React, React Hook, GraphQL, Tailwindcss, Scss, Styled component, Vercel, Github',
      'created documents source code such as storybook',
      'utilized Aglie methodolgy and click up as a tools for manage work tasking',
      'used Github and versel as a platform to conduct source code versioning, CI/CD, code review',
    ],
  },
  {
    firmName: 'Venuee.co',
    role: 'Frontend Software Engineer (Web Application)',
    time: 'Apl 2018 to Apl 2019',
    responsibilities: [
      'created an application features for event places in Venuee&apos;s platform',
      'used stack and technologies by NextJS, TypeScript, React, GraphQL, Styled component, Scss, Github, Jest, Docker',
      'unit test, E2E test',
      'utilized Aglie methodolgy and asana as a tools for manage work tasking',
      'used Github as a platform to conduct source code versioning, CI/CD, code review',
    ],
  },
  {
    firmName: 'NodeFrame Solution',
    role: 'Cooperative Education (Internship)',
    time: 'Aug 2017 to Dec 2017',
    responsibilities: [
      'created an application features for HR platform',
      'used stack and technologies by React, TypeScript, GraphQL, Styled component, Github, Jest, Docker, Jira, Scss, MongoDB, Express, NodeJS, ReactJS, MERN stack',
    ],
  },
];
function AboutMe() {
  return (
    <div>
      <h3>
        My name is <b className="text-20">Worawut Tititumjariya</b>. I'm graduated from computer science major, Kasetsart University.I am Web Developer with 3+ years of hands-on
        experience in developing website with reactjs, nextjs and css framwork such as bootstrap, style-component and tailwindcss.
      </h3>
    </div>
  );
}

function WorkExperience() {
  return (
    <div>
      <h3 className="text-20">Work Experience</h3>
      <div className="space-y-8">
        {WorkExperienceObj.map((expItem) => (
          <div>
            <div>{expItem.role}</div>
            <div>
              {expItem.firmName} | {expItem.time}
            </div>
            <ul className="ml-16 list-disc">
              {expItem.responsibilities.map((res) => (
                <li>{res}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skill() {
  return (
    <div>
      <div>Skills & Interests</div>
      <div>Programming: </div>
      <div>Typescript, Javascript</div>
      <div>
        Technologies: Git, React, React Hook, Vercel, NextJS, GraphQL, Storybook, TailwindCss, Bootstrap, Styled-Component, Jest, Docker, Jira, Scss, MongoDB, Express, NodeJS, MERN
        stack
      </div>
    </div>
  );
}

function Education() {
  return (
    <div>
      <h3>Education</h3>
      <div>Kasetsart University</div>
      <div>Bachelor of Computer Science</div>
      <div>G.P.A 3.27/4.00 (Second Class Honours)</div>
    </div>
  );
}

/* eslint-disable jsx-a11y/anchor-is-valid */
function Home() {
  return (
    <div className="space-x-16 space-y-16 overflow-x-scroll text-colorsBlack01Label rounded-8">
      <div className="flex items-center justify-between space-x-16">
        <div className="w-[400px] px-8">
          <Image src="https://avatars.githubusercontent.com/u/29191266?v=4" alt="Worawut profile" width={200} height={200} className="rounded-full" />
        </div>
        <AboutMe />
      </div>

      <Heading />

      <WorkExperience />

      <Skill />

      <Education />
    </div>
  );
}

export default Home;
