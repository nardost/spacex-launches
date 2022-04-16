import axios from "axios";

// Number of records per page
const pageSize = 5;

export const fetchSpaceXLaunchData = (page) => {
  const endpoint = "https://api.spacexdata.com/v5/launches/query";

  const requestBody = {
    query: {},
    options: {
      select: "payloads rocket links flight_number name date_utc",
      limit: pageSize,
      page: page,
      sort: { date_utc: "desc" },
      populate: [
        {
          path: "payloads",
          select: {
            name: 1,
          },
        },
        {
          path: "rocket",
        },
        {
          path: "links",
          select: {
            presskit: 1,
          },
        },
      ],
    },
  };

  return axios
    .post(endpoint, requestBody)
    .then((response) => ({ data: response.data }))
    .catch((error) => ({ error: error }));
};
