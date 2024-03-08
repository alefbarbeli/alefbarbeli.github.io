const About = () => {
    return (
    <div className="section about section_" id="section-resume">
      <div className="content">
        <div className="title">
          <div className="title_inner">About Me</div>
        </div>
        <div className="image">
          <img src="images/profile.jpeg" alt="Alef Barbeli" />
        </div>
        <div className="desc">
          <p>A Front-end Engineer and Vue specialist with 6+ years of experience building web apps with cutting-edge technologies like Nuxt, Typescript, GraphQL, Tailwind CSS and more.</p>
          <p>Strongly experienced in e-commerce environment, I've already worked with different platforms like Magento 1 and 2, Commercetools, Prestashop, SAP Commerce, Oracle Commerce Cloud and Vtex.</p>
          <p>Currently based in São Paulo/ Brasil, with proficient English communication and writing. I'm open and willing to relocate - traveling and connecting to new cultures and people is my major passion.</p>
          <p>I love Open Source projects and working with fast-paced teams. Curious and creative people are what inspire me the most.</p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Name:</strong> Alef Barbeli de Lima
              </li>
              <li>
                <strong>Age:</strong> 30 Years
              </li>
              <li>
                <strong>Job:</strong> FrontEnd Engineer
              </li>
              <li>
                <strong>City:</strong> São Paulo/ Brasil
              </li>
              <li>
                <strong>E-mail:</strong> alefbarbeli@gmail.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="/media/resume.pdf" about="_blank" className="btn fill" data-text="Download CV">
              Download CV
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
