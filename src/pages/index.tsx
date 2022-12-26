import Heading from '~/app/mainContent/Heading';

/* eslint-disable jsx-a11y/anchor-is-valid */
function Home() {
  return (
    <div className="bg-componentsBgBase text-colorsBlack01Label overflow-x-scroll">
      <Heading />

      <h1 className="text-24">Hi, I'm Worawut web Developer</h1>
      <div>Frontend Developer</div>

      <button type="button">Contact me!</button>

      <h2 className="text-22">contact:</h2>

      <h2>
        tel: <span>080-434-7241</span>
      </h2>
      <h2>e-mail: woravootbat@gmail.com</h2>
      <h2>
        github:
        <span>
          <a href="https://github.com/worawutbat"> worawutbat</a>
        </span>
      </h2>

      <h2>Work Experience</h2>
      <div>Frontend Software Engineer (Web Application)</div>
      <div>Fictionlog.co | Apl 2019 - now</div>
      <div>- created an application features for books and ebooks Fictionlog&apos;s platform</div>
      <div>- used stack and technologies by NextJS, TypeScript, React, React Hook, GraphQL, Tailwindcss, Scss, Styled component, Vercel, Github</div>
      <div>- created documents source code such as storybook</div>
      <div>- utilized Aglie methodolgy and click up as a tools for manage work tasking</div>
      <div>- used Github and versel as a platform to conduct source code versioning, CI/CD, code review</div>

      <div>Frontend Developer</div>
      <div>Venuee.co |Apl 2018 to Apl 2019</div>
      <div>- created an application features for event places in Venuee&apos;s platform</div>
      <div>- used stack and technologies by NextJS, TypeScript, React, GraphQL, Styled component, Scss, Github, Jest, Docker</div>
      <div>- unit test, E2E test</div>
      <div>- utilized Aglie methodolgy and asana as a tools for manage work tasking</div>
      <div>- used Github as a platform to conduct source code versioning, CI/CD, code review</div>

      <div>Cooperative Education (Internship)</div>
      <div>NodeFrame Solution | Aug 2017 to Dec 2017</div>
      <div>- created an application features for HR platform</div>
      <div>- used stack and technologies by React, TypeScript, GraphQL, Styled component, Github, Jest, Docker, Jira, Scss, MongoDB, Express, NodeJS, ReactJS, MERN stack</div>

      <div>Skills & Interests</div>
      <div>Programming: </div>
      <div>Typescript, Javascript</div>
      <div>Technologies: Git, React, React Hook, NextJS, CSS</div>

      <h3>Education</h3>
      <div>Kasetsart University</div>
      <div>Bachelor of Computer Science</div>
      <div>G.P.A 3.27/4.00 (Second Class Honours)</div>

      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </div>
  );
}

export default Home;
