import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

let projects = [
  {
    projectName: "MORE (SQL)",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    doc: "more/autoIndent/actualIndent",
    imgSrc: "/img/database.svg"
  }
];

let titleCard = {
  projectName: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  imgSrc: "/img/File_bundle.svg"
};
const ProjectTitle = (props) => (
  <div className="flex justify-center">
    <h2 className="ttu f1">
      {props.title}
    </h2>
  </div>
);

const TitleCard = (props) => (
  <div className="card w-93 pa3">
    <div className="flex flex-wrap justify-center">
      <div className="w-80-l w-90-m w-100">
        <h2>
          <i>{props.projectName}</i>
        </h2>
      </div>
      <div className="w-20-l w-90-m w-100 flex flex-wrap justify-center">
        <img src={props.imgSrc} height="200" />
      </div>
    </div>
  </div>
)

const Card = (props) => (
  <div className="card w-30-l w-40-m w-100">
    <div className="flex flex-column items-center pa2">
      <img src={props.imgSrc} height="150" />
      <h2 className="tc"><b>{props.projectName}</b></h2>
      <p>{props.description}</p>
      <Link
        className={clsx(
          'button button--outline button--primary button--md'
        )}
        to={useBaseUrl('docs/') + `${props.doc}`}>
        Go to Doc
      </Link>
    </div>
  </div>
)


function Documents() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <div>
      <Layout title="Welcome">
        <div>
          <div className="pa3">
            <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          </div>
          <div className="flex justify-center">
            <TitleCard imgSrc={titleCard.imgSrc} projectName={titleCard.projectName} />
          </div>
          <div className="pa4">
            <div className="flex justify-around flex-wrap">
              {projects.map((object, i) => <Card imgSrc={object.imgSrc} projectName={object.projectName} description={object.description} doc={object.doc} key={i} />)}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Documents;