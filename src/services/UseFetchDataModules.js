// To use 'React Query' library
import { useQuery } from "react-query";

export default function UseFetchDataModules() {
  return useQuery("dataModules", async () => {
    try {
      let response = await fetch(
        "https://api.stg.hayu.com/page/home?platform=web"
      );
      response = await response.json();
      return response;
    } catch (e) {
      console.error(`Error from database -- ${e}`);
    }
  });
}
