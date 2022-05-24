import React from 'react';
import { gql, useQuery } from '@apollo/client'
import { formatMembers } from 'utils/core';
import { trpc } from "utils/trpc";
import MemberBubble from 'components/organisms/MemberBubble';
import { Member } from 'types/Member';

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
  const parents = data?.people?.filter(person => person?.relationship?.includes('parent'));
  const members: Member[] = formatMembers( parents, queryPositions?.data?.positions)
  if(!loading) {
    return members?.map((member) => <MemberBubble member={member} key={member?.id} />)
  } 

  return null;
};

export default TreePage;