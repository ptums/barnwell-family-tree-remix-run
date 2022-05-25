import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { gql, useQuery } from '@apollo/client'
import noImg from "public/images/image-not-found.png";

const PERSON_BIO_QUERY = gql`
query Person($id: ID) {
  person(where: {id: $id}){
  	name
    life
    birth
    death
    education
    workHistory
    spouse {
      id
      name
    }
    children {
      id
      name
    }
    siblings {
      id
      name
    }
    gallerySlug
    profileImage {
      width
      height
      url
    }
    overview
    militaryService
    residence
    relationship    
  }
}
`


const Profile = ({ id }: { id: string }) => {
  const [ profileId, setProfileId] = useState('string');
  const { loading, error, data } = useQuery(
    PERSON_BIO_QUERY,
    {
      notifyOnNetworkStatusChange: true,
      variables: { id: profileId }
    }
  );

  useEffect(() => {
    if(id) {
      setProfileId(id);
    }
  }, [id]);

  const handleNewProfileId = (id) => {
    setProfileId(id);
    
  }

  console.log({ data })
  
  if(loading) {
    return (
      <div className="w-full h-60 flex flex-col justify-center items-center">
        cool loading icon!
      </div>
    )
  }

  if(error || !data) {
    return (
      <div className="w-full h-60 flex flex-col justify-center items-center text-center">
       There was an error loading this profile!
      </div>
    )
  }

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="mr-2 sm:mr-6">
        {data?.person?.profileImage ? (
          <Image
          src={data?.person?.profileImage?.url}
          alt={data?.person?.name}
          width={data?.person?.profileImage?.width}
          height={data?.person?.profileImage?.height}
          />
        ) : (
          <Image
            src={noImg}
            alt="no image found"
            width={400}
            height={400}
            layout="intrinsic"
          />
        )}
      </div>
      <div className="w-full">
        <h3 className="text-xl font-bold">{data?.person?.name}</h3>
        <p>{data?.person?.life}</p>
        <hr className="my-3"/>
        <p className="mb-2">{data?.person?.overview}</p>
        <p><strong>Birth: </strong>{data?.person?.birth}</p>
        <p><strong>Death: </strong>{data?.person?.death}</p>
        <p><strong>Education: </strong>{data?.person?.education}</p>
        <p><strong>Work History: </strong>{data?.person?.workHistory}</p>
        <p>
          <strong>Spouse: </strong>
          <button className="underline"onClick={() => handleNewProfileId(data?.person?.spouse?.id)}>{data?.person?.spouse?.name}</button>
        </p>
        <p className="flex flex-row">
          <strong>Children: </strong>
          <span className="ml-2 flex flex-row flex-wrap">
            {data?.person?.children?.map((child) => (
              <button
                key={child?.id}
                className="underline mr-3"onClick={() => handleNewProfileId(child?.id)}
              >
                {child?.name}
              </button>
            ))}
          </span>
        </p>

        {/***
         * 
         *    birth
    death
    education
    workHistory
    spouse {
      id
      name
    }
    children {
      id
      name
    }
    siblings {
      id
      name
    }
    gallerySlug
    profileImage {
      width
      height
      url
    }
    overview
    militaryService
    residence
         */}
      </div>
    </div>
  )
};

export default Profile;