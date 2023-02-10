import { gql } from "@apollo/client";

export const CREATE_LEAD_MUTATION = gql`
    mutation ($data: LeadInput!) {
        createLead(data: $data) {
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
                }
            }
        }
    }
`
