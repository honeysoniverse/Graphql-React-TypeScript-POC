import { gql } from "@apollo/client";

export const FETCH_LOCATIONS = gql`query LocationList($tenant: String!) {
    locationList(tenant: $tenant) {
      pages
      resources {
        address
        alias
        description
        id
        managingOrganization
        name
        npi
        partOf
        status
        tag
        taxId
        telecom {
          rank
          system
          use
          value
        }
        tenant
        type
        updatedAt
      }
    }
  }`;