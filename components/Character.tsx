import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../graphql/queries';

function Character() {
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: {
      page: 2,
      filter: {
        status: 'Dead',
      },
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <>
      {data.characters.results.map((c) => (
        <div key={c.id}>{c.name}</div>
      ))}
    </>
  );
}

export default Character;
