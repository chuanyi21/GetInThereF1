import axios from "axios";

export async function getLatestRaceResults() {
  return axios
    .get("http://ergast.com/api/f1/current/last/results.json")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

// export async function getLatestRaceResults() {
//   try {
//     const resp = await axios.get(
//       "http://ergast.com/api/f1/current/last/results.json"
//     );
//     console.log(resp.data);
//     return resp.data;
//   } catch (err) {
//     console.error(err);
//   }
// }
