import { useLoaderData, Link } from "@remix-run/react";
import { GraphQLClient, gql } from "graphql-request";
import Header from "~/components/shared/Header";
import Footer from "~/components/shared/Footer";
import NewHome from "~/components/tree";
import { findMembersByGeneration } from "~/utils/core";
import { getPositions } from "~/positions";
import { useEffect, useState } from "react";


const FamilyMemberQuery = gql`
{
  people {
    id
    name
    life
    relationship
    profileImage {
      url
      width
      height
    }
  }
}
`;

export let loader = async () => {
  /** get members */
  const graphcms = new GraphQLClient(
    "https://api-us-east-1.graphcms.com/v2/cl2nckbwm2mt001z450gh1lrf/master"
  );

  const request = await graphcms.request(FamilyMemberQuery);

  /** get member positions */
  const positions = getPositions();
  return {
    members: request?.people,
    positions,
  }
};

export default function Tree() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    id: ""
  });
  const data = useLoaderData();
  const parents = findMembersByGeneration(data?.members, "parent");
  const grandParents = findMembersByGeneration(data?.members, "grandparent");
  const greatGrandParents = findMembersByGeneration(data?.members, "great-grandparent");
  const greatGreatGrandParents = findMembersByGeneration(data?.members, "great-great-grandparent"); 
  const greatGreatGreatGrandParents = findMembersByGeneration(data?.members, "great-great-great-grandparent");
  console.log(data?.positions);

  useEffect(() => {
    console.log({ position })
  }, [position])
  return (
    <NewHome 
      parents={parents}
      grandParents={grandParents}
      greatGrandParents={greatGrandParents}
      greatGreatGrandParents={greatGreatGrandParents}
      greatGreatGreatGrandParents={greatGreatGreatGrandParents}
      setPosition={setPosition}
    />
  )
}
