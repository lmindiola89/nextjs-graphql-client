"use client";
import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query {
    characters(page: 2) {
      results {
        id
        name
        image
      }
    }
  }
`;

function ClientPage() {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  console.log(data.characters.results);

  const characters = data.characters.results;

  return (
    <div className="grid place-items-center">
      <h2 className="m-10">Client side rendering</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {characters.map((character) => (
          <div key={character.id}>
            <img src={character.image} alt={character.image}></img>
            <h3 className="text-center"> {character.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientPage;
