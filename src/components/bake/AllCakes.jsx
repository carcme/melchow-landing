import React from "react";
import TagsList from "./TagsList";
import CakesList from "./CakesList";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    allContentfulBakery(sort: { title: ASC }) {
      nodes {
        id
        title
        featured
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
        }
      }
    }
  }
`;

const AllCakes = () => {
  const data = useStaticQuery(query);
  const cakes = data.allContentfulBakery.nodes;

  return (
    <section className="cakes-container">
      <TagsList cakes={cakes} />
      <CakesList cakes={cakes} />
    </section>
  );
};

export default AllCakes;
