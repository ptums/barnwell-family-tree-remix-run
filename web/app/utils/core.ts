export const findMembersByGeneration = (members: any, generation: string) => {
  return members.filter(
    ({ relationship }: { relationship: string }) => relationship === generation
  );
};


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

export const bubbleStyle = (relationship: string) => {
  const defaultStyling =
    "absolute hover:cursor-pointer rounded-xl shadow-lg px-3 py-2 text-white flex flex-col flex-wrap items-center w-36";
  let buttonStyle = "";
  switch (relationship) {
    case "parent":
      buttonStyle = `${defaultStyling} bg-sky-500 hover:bg-sky-400`;
      break;
    case "grandparent":
      buttonStyle = `${defaultStyling} bg-emerald-500 hover:bg-emerald-400`;
      break;
    case "great-grandparent":
      buttonStyle = `${defaultStyling} bg-amber-500 hover:bg-amber-400`;
      break;
    case "great-great-grandparent":
      buttonStyle = `${defaultStyling} bg-red-500 hover:bg-red-400`;
      break;
    case "great-great-great-grandparent":
      buttonStyle = `${defaultStyling} bg-violet-500 hover:bg-violet-400`;
      break;

    default:
      buttonStyle = `${defaultStyling} bg-fuchsia-500 hover:bg-fuchsia-400`;
      break;
  }
      return buttonStyle;
}
