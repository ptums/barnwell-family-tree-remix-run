import React from 'react';
import Image from 'next/image';
import Draggable from 'react-draggable';
import { Member } from 'types/Member';
import { modifyRelationship } from 'utils/core';
import { trpc } from "utils/trpc";

const MemberBubble = ({ member }: { member: Member}) => {
  const mutation = trpc.useMutation(['position']);

  const savePosition = async (memberId, coordinateX,coordinateY) => {
      mutation.mutate({ memberId, coordinateX, coordinateY });
  };

  

  
  return (
    <Draggable
      onStop={(e, data) => {
        savePosition(member?.id, data?.x, data?.y);
      }}
    >
      <div
      style={{
   
        position:"absolute",
        top: member?.coordinates?.y || 0,
        left: member?.coordinates?.x || 0,
      }}>
        <div
          className="hover:cursor-pointer rounded-xl shadow-lg px-3 py-2 text-white flex flex-col flex-wrap items-center w-36 bg-black bg-opacity-50"
        >
        <div className="w-12 h-16 mr-4 mb-2 overflow-hidden">
              {member?.profileImage ? (
                <Image 
                src={member?.profileImage?.url}
                alt={member?.name}
                height={member?.profileImage?.height || 300}
                width={member?.profileImage?.width || 300}
                />
              ) : (
                <span className="bg-gray-100 w-12 text-xs flex flex-col justify-center text-center h-16  text-black">
                  No Image
                </span>
              )}
            </div>
            <div className="flex flex-col text-xs text-center">
              <p><strong>{member?.name}</strong></p>
              <p>{modifyRelationship(member?.relationship)}</p>
            </div>
        </div>
      </div>        
    </Draggable>
  );
};

export default MemberBubble;