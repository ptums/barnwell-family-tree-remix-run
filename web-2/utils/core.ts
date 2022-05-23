import { Member } from "types/Member";

export const formatMembers = (members, memberPositions) => {

  const results:Member[] = []
  if(members && memberPositions) {
    members.forEach((member) => {
      memberPositions.forEach((position) => {
        if(member?.id == position?.memberId) {
          results.push({
            ...member,
            coordinates: {
              x: position?.coordinateX,
              y: position?.coordinateY,
            }
          })
        }else {
          results.push(member);
        }
      })
    })
  }
  console.log({ results })
  return results;
}


export const modifyRelationship = (relationship: string) => {
  let results = ""
  switch (relationship) {
    case "parent":
      results = "Parent";
      break;
    case "grandparent":
      results = "Grandparent";
      break;
    case "great-grandparent":
      results = "Great Grandparent";
      break;
    case "great-great-grandparent":
      results = "2nd Great Grandparent";
      break;
    case "great-great-great-grandparent":
      results = "3rd Great Grandparent";
      break;
    default:
      results = "";
      break;
  }

  return results;
}
