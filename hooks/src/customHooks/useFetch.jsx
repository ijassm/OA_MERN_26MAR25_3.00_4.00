import { useEffect, useState } from "react";

export function useFetch(api) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("UseFetch triggered");
    fetch(api)
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setData(json);
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  }, []);

  return { loading, data };
}
