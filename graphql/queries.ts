import { gql } from '@apollo/client';

export const GET_CHARACTER = gql`
query characters($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    results {
      id
      name
      status
    }
  }
}
`;
 export const GET_EPISODES_BY_IDS=gql`
 query nb($ids: [ID!]!) {
  episodesByIds(ids: $ids) {
    id
    name
    episode
    characters{
      name
      gender
      image
    }
    created
  }
}
 `;
