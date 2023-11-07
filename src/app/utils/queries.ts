import { gql } from '@apollo/client';

export const GET_ALL_SHIPS = gql`
  query GetData {
      vehicles {
    title
    description
    icons {
      large
      medium
    }
    level
    type {
      name
      title
      icons {
        default
      }
    }
    nation {
      name
      title
      color
      icons {
        small
        medium
        large
      }
    }
  }
  }
`;