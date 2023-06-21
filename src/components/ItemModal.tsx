import { useQuery, useMutation } from "@apollo/client";
import { FETCH_ITEM_LOCATION } from "../services/queries";
import { useEffect } from 'react';
import { useState } from 'react';

interface ItemModalDef {
    id: string
}
const ItemModal: React.FC<ItemModalDef> = (id) => {
    console.log(id, "ID>>>>>>>");
    const [locationData, setLocationData] = useState<any>([])
    const itemLocation = useQuery(FETCH_ITEM_LOCATION, { variables: { tenant: "692627ef-fda8-4203-b108-e8e9f52ad410", locationReadId: id.id } })
    useEffect(() => {
        if (itemLocation) setLocationData(itemLocation?.data?.locationList?.resources)
    }, [itemLocation]);

    return <div className="fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75">
        <div className="bg-white rounded p-8">
            {locationData && "Hello"}

        </div>
    </div>
}


export default ItemModal;