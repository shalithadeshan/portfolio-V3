import { Tabs } from "antd";

const { TabPane } = Tabs;

const Experience = () => {
  return (
    <div className="container content-center grid" style={{ height: "90vh" }}>
      <div className="flex flex-row">
        <p className="text-light-color">
          <span className="font-monospace text-secondary-color">02</span>{" "}
          Experience
        </p>
        <div className="border-t-2 ml-3 mt-3 px-14 inline-block border-secondary-color"></div>
      </div>
      <div className="px-20 mt-10">
        <Tabs tabPosition={"left"}>
          <TabPane tab="Vertex" key="1">
            <div>
              <p className="text-light-color text-2xl">
                Trainee Front-end developer{" "}
                <span>
                  <a href="/" className="text-secondary-color">
                    @Vertex
                  </a>
                </span>
              </p>
              <p className="text-dark-color">March 2021 - September 2021</p>
            </div>
            <div className="text-darkest-color mt-5 pl-5">
              <ul className="list-outside">
                <li className="list-disc w-3/4 text-lg text-justify">
                  Worked with a team of 2 front-end and 2 back-end developers to
                  build a hotel and restaurant management system.
                </li>
                <li className="list-disc w-3/4 text-lg text-justify">
                  Work with a variety of different languages, platforms,
                  frameworks, and content management systems such as JavaScript,
                  TypeScript, Angular.
                </li>
                <li className="list-disc w-3/4 text-lg text-justify">
                  Gain a lots of experience working with team.
                </li>
              </ul>
            </div>
          </TabPane>
          {/* <TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane> */}
        </Tabs>
      </div>
    </div>
  );
};

export default Experience;
