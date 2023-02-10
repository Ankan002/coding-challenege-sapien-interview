import { gql } from "@apollo/client";

export const UPDATE_LEAD_MUTATION = gql`
    mutation($id: ID!, $data: LeadInput!) {
        updateLead(id: $id, data: $data) {
            data {
                id
                attributes {
                    date
                    Time
                    Name
                    email
                    Source
                    updatedAt
                    Status
                    Notes
                }
            }
        }
    }
`
