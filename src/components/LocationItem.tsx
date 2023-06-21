import { useQuery, useMutation } from "@apollo/client";
import { FETCH_ITEM_LOCATION } from "../services/queries";
import { useEffect } from 'react';
import { useState } from 'react';
import { SlCalender } from 'react-icons/sl/';
import { FcClock } from 'react-icons/fc';

interface LocationItemDef {
    id: string
}
const LocationItem: React.FC<LocationItemDef> = (id) => {
    console.log(id, "ID>>>>>>>");
    const [locationData, setLocationData] = useState<any>([])
    const itemLocation = useQuery(FETCH_ITEM_LOCATION, { variables: { tenant: "692627ef-fda8-4203-b108-e8e9f52ad410", locationReadId: id.id } })
    useEffect(() => {
        if (itemLocation) setLocationData(itemLocation?.data?.locationRead?.resource)
    }, [itemLocation]);
    
    const formatDate = (date: number) => {
        const curr = Date.now();
        const timeDiff = curr - date;
        const hoursPassed = Math.floor(timeDiff / (60 * 60 * 1000));
        return hoursPassed + " " + "hrs";
    }
    
    return <div className="w-full h-full flex justify-center items-center">
        <div className="bg-white rounded p-8">
        <div className="border p-4 my-4 flex flex-col cursor-pointer">
                        <div className="flex justify-between">
                            <span className="text-md text-xs font-bold">{locationData.name}</span>
                            <span className="px-3 py text-xs font-bold bg-orange-300 rounded-full self-center uppercase">{locationData.status || "NA"}</span>
                        </div>
                        <span className="text-sm font-md">{locationData.address}</span>
                        <div className="flex justify-between mt-2">
                            <div className="flex">
                                <div className="flex justify-center items-center mr-2">
                                    <SlCalender />
                                    <span className="text-xs font-md">{"Dec-20"}</span>
                                </div>
                                <div className="flex justify-center items-center">
                                    <FcClock />
                                    <span className="text-xs font-md">{"02:25 PM"}</span>
                                </div>
                            </div>
                            <span className="text-xs font-md text-gray-500">{formatDate(locationData.updatedAt)}</span>
                        </div>
                    </div>

        </div>
    </div>
}


export default LocationItem;