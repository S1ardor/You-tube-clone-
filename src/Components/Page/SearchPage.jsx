import "./search.css";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

export const SearchPage = () => {
  const { searchvalue } = useParams();
  const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchvalue}&part=snippet%2Cid&maxResults=50`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "be12371dfbmshc4d13e7c503e779p18b7e6jsna54b3671ded8",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  const [data, setData] = useState();
  const handleSearchGetRequest = useCallback(async () => {
    if (searchvalue?.length) {
      try {
        const request = await fetch(url, options);

        if (request.status === 200) {
          const response = await request.json();
          setData(response.items);
        }
      } catch (error) {
        return error;
      }
    }
  }, [searchvalue]);
  useEffect(() => {
    handleSearchGetRequest();
  }, [handleSearchGetRequest]);
  const optionss = {
    width: 220,
    height: 180,
  };
  return (
    <>
      <div className="search__inner" >
        {data?.map((item) => {
          return <YouTube opts={optionss} videoId={item.id.videoId} />;
        })}
      </div>
    </>
  );
};
