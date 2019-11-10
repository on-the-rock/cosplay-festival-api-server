/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayer = `mutation CreatePlayer($input: CreatePlayerInput!) {
  createPlayer(input: $input) {
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
export const updatePlayer = `mutation UpdatePlayer($input: UpdatePlayerInput!) {
  updatePlayer(input: $input) {
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
export const createDeck = `mutation CreateDeck($input: CreateDeckInput!) {
  createDeck(input: $input) {
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
    owner
  }
}
`;
export const updateDeck = `mutation UpdateDeck($input: UpdateDeckInput!) {
  updateDeck(input: $input) {
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
    owner
  }
}
`;
export const createCard = `mutation CreateCard($input: CreateCardInput!) {
  createCard(input: $input) {
    id
    frameId
    name
    image
    owner
  }
}
`;
export const updateCard = `mutation UpdateCard($input: UpdateCardInput!) {
  updateCard(input: $input) {
    id
    frameId
    name
    image
    owner
  }
}
`;
