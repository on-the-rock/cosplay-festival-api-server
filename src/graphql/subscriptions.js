/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = `subscription OnCreatePlayer($owner: String!) {
  onCreatePlayer(owner: $owner) {
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
export const onUpdatePlayer = `subscription OnUpdatePlayer($owner: String!) {
  onUpdatePlayer(owner: $owner) {
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
export const onCreateDeck = `subscription OnCreateDeck($owner: String!) {
  onCreateDeck(owner: $owner) {
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
export const onUpdateDeck = `subscription OnUpdateDeck($owner: String!) {
  onUpdateDeck(owner: $owner) {
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
export const onCreateCard = `subscription OnCreateCard($owner: String!) {
  onCreateCard(owner: $owner) {
    id
    frameId
    name
    image
    owner
  }
}
`;
export const onUpdateCard = `subscription OnUpdateCard($owner: String!) {
  onUpdateCard(owner: $owner) {
    id
    frameId
    name
    image
    owner
  }
}
`;
