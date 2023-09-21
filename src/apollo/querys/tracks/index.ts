import { gql } from "@apollo/client";

export const GET_TRACKS = gql`
  query listTracks($take: Int!, $skip: Int!, $filter: InputFilterTracks) {
    listTracks(take: $take, skip: $skip, filter: $filter) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
      items {
        id
        name
        artists {
          id
          name
        }
        album {
          name
          release_date
          photo
        }
        preview_url
        track_number
        duration_ms
        spotify_url
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
