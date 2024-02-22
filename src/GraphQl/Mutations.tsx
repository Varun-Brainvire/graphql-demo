import { gql } from "@apollo/client";

export const ADD_TITLE = gql`
  mutation (
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    id
    title
    body
  }
}
`;