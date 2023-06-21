import { getLocations } from "../services/locations"
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_LOCATIONS } from './../services/queries';

export const LocationList: React.FC = () => {
    const locations = useQuery(FETCH_LOCATIONS, {variables: {tenant: "692627ef-fda8-4203-b108-e8e9f52ad410"}})
    console.log(locations);
    return <>
        <h1>Location List Page</h1>
    </>
}