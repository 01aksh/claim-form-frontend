import API from "../index.js";

export const postClaim = async (userProfileData) => {
  return API.post("/claims", userProfileData);
};
