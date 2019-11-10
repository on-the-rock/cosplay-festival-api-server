/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayer = `query GetPlayer($id: ID!) {
  getPlayer(id: $id) {
    id
    name
    cards {
      items {
        id
        frameId
        name
        image
        owner
      }
      nextToken
    }
    decks {
      items {
        id
        name
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const listPlayers = `query ListPlayers(
  $filter: ModelPlayerFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      cards {
        nextToken
      }
      decks {
        nextToken
      }
      owner
    }
    nextToken
  }
}
`;
