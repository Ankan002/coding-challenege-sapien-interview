import { gql } from "@apollo/client";

export const LEAD_QUERY = gql`
    query ($pagination: PaginationArg) {
        leads(pagination: $pagination) {
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
`;
