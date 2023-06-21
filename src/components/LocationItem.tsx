import { useQuery, useMutation } from "@apollo/client";
import { FETCH_ITEM_LOCATION } from "../services/queries";
import { useEffect } from 'react';
import { useState } from 'react';

interface LocationItemDef {
    id: string
}
const LocationItem: React.FC<LocationItemDef> = (id) => {
    console.log(id, "ID>>>>>>>");
    const [locationData, setLocationData] = useState<any>([])
    const itemLocation = useQuery(FETCH_ITEM_LOCATION, { variables: { tenant: "692627ef-fda8-4203-b108-e8e9f52ad410", locationReadId: id.id } })
    useEffect(() => {
        if (itemLocation) setLocationData(itemLocation?.data?.locationList?.resources)
    }, [itemLocation]);

    return <div className="w-full h-full flex justify-center items-center">
        <div className="bg-white rounded p-8">
            <h1>Location Data</h1>

        </div>
    </div>
}


export default LocationItem;