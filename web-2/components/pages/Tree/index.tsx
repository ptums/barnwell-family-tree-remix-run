import React from 'react';
import { gql, useQuery } from '@apollo/client'
import { formatMembers } from 'utils/core';
import { trpc } from "utils/trpc";
import MemberBubble from 'components/organisms/MemberBubble';

const FAMILY_MEMBER_QUERY = gql`
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


const TreePage = () => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    FAMILY_MEMBER_QUERY,
    {
      notifyOnNetworkStatusChange: true,
    }
  );

  const queryPositions = trpc.useQuery(['positions']);
  const members = formatMembers(data?.people, queryPositions?.data?.positions)
  if(!loading) {
    return members.map((member) => <MemberBubble member={member} key={member?.id} />)
  } 

  return null;
};

export default TreePage;