import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

let projects = [
  {
    projectName: "AIVIA",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    doc: "doc1",
    imgSrc: "/img/aivia.svg"
  },
  {
    projectName: "MORE",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    doc: "more/autoIndent/actualIndent",
    imgSrc: "/img/more.svg"
  },
  {
    projectName: "AIVIA",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    doc: "doc1",
    imgSrc: "/img/aivia.svg"
  },
  {
    projectName: "AIVIA",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    doc: "doc1",
    imgSrc: "/img/aivia.svg"
  },
  {
    projectName: "AIVIA",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    doc: "doc1",
    imgSrc: "/img/aivia.svg"
  }
];

let titleCard = {
  projectName: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  imgSrc: "/img/file_bundle.svg"
};
const ProjectTitle = (props) => (
  <div className="flex justify-center">
    <h2 className="ttu f1">
      {props.title}
    </h2>
  </div>
);

const TitleCard = (props) => (
  <div className="card w-93">
    <div className="flex justify-center">
      <div className="w-80 pa3 ">
        <h2>
          <i>{props.projectName}</i>
        </h2>
      </div>
      <div className="w-20">
        <img src={props.imgSrc} height="200" />
      </div>
    </div>
  </div>
)

const Card = (props) => (
  <div className="card w-30">
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
// const features = [
//   {
//     title: <>Easy to Use</>,
//     imageUrl: 'img/undraw_docusaurus_mountain.svg',
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: <>Focus on What Matters</>,
//     imageUrl: 'img/undraw_docusaurus_tree.svg',
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: <>Powered by React</>,
//     imageUrl: 'img/undraw_docusaurus_react.svg',
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

// function Feature({imageUrl, title, description}) {
//   const imgUrl = useBaseUrl(imageUrl);
//   return (
//     <div className={clsx('col col--4', styles.feature)}>
//       {imgUrl && (
//         <div className="text--center">
//           <img className={styles.featureImage} src={imgUrl} alt={title} />
//         </div>
//       )}
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
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
      </div >
    </Layout >
  );
}

export default Home;
