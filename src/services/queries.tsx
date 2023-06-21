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

export const FETCH_ITEM_LOCATION = gql`query Query($locationReadId: String!, $tenant: String!) {
    locationRead(id: $locationReadId, tenant: $tenant) {
      id
      resource {
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

  export const PATCH_LOCATION_ITEM = gql`mutation LocationUpdate($locationUpdateId: String!, $tenant: String!, $requestBody: LocationWriteInput!) {
    locationUpdate(id: $locationUpdateId, tenant: $tenant, requestBody: $requestBody) {
      resourceID
    }
  }`;

  export const ADD_ITEM = gql`mutation LocationCreate($requestBody: LocationWriteInput!, $tenant: String!) {
    locationCreate(requestBody: $requestBody, tenant: $tenant) {
      resourceID
    }
  }`;
