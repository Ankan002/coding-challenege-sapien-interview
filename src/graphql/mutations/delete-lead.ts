import { gql } from "@apollo/client";

export const DELETE_LEAD_MUTATION = gql`
    mutation($id: ID) {
        deleteLead(id: $id) {
            data {
                id
            }
        }
    }
`
