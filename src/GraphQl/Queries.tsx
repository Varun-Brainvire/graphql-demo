import { gql } from "@apollo/client";

export const LOAD_USER = gql`
query {
  post (id:1) {
    id
    title
    body
  }
}`;