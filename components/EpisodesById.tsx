import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EPISODES_BY_IDS } from '../graphql/queries';

function EpisodesById() {
  const [ids, setIds] = useState(['1']);
  const { data, error, loading } = useQuery(GET_EPISODES_BY_IDS, {
    variables: { ids: ids.map((i) => `${i}`) },
  });
  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <>
      <button
        onClick={() => {
          setIds([...ids, `${ids.length + 1}`]);
        }}
      >
        Next
      </button>
      {data.episodesByIds.map((e) => (
        <div>{e.name}</div>
      ))}
    </>
  );
}

export default EpisodesById;
