import { useQuery, useMutation } from "@apollo/client";
import { FETCH_LOCATIONS } from './../services/queries';
import { FiRefreshCcw } from "react-icons/fi/";
import { SlCalender } from "react-icons/sl/";
import { Dispatch } from 'react';
import { FcClock } from "react-icons/fc"

import { useEffect, useState } from "react";

interface LocationListDef {
    setLocationId: Dispatch<string>;
}

export const LocationList: React.FC<LocationListDef> = ({ setLocationId }) => {
    const [locationsData, setLocationsData] = useState<any>([])
    const locations = useQuery(FETCH_LOCATIONS, { variables: { tenant: "692627ef-fda8-4203-b108-e8e9f52ad410" } })
    console.log(locations);
    useEffect(() => {
        if (locations) setLocationsData(locations?.data?.locationList?.resources)
    }, [locations]);
    console.log("LOCATIONS DATA", locationsData);
    const handleItemClick = (id: string) => {
        console.log(id, "ID>>>>>>>>>");
        setLocationId(id);
    }

    const formatDate = (date: number) => {
        const curr = Date.now();
        const timeDiff = curr - date;
        const hoursPassed = Math.floor(timeDiff / (60 * 60 * 1000));
        return hoursPassed + " " + "hrs";
    }
    return <>
        <div className="flex w-full flex-col p-8 m-2 border">
            <div className="flex-col">
                <div className="flex justify-between items-center">
                    <button className="px-12 py-2 shadow-md border">
                        <FiRefreshCcw className="w-4" />
                    </button>
                    <span className="font-bold text-md">Locations</span>
                    <button className="px-8 py-2">
                        <span className="font-bold text-lg">+</span>
                    </button>
                </div>
                <input type="search" placeholder="Search" className="w-full border p-2 rounded-md my-2" />
                <div className="flex gap-2 justify-between items-center m-2">
                    <button className="px-6 py border bg-gray-200 rounded-md">
                        Filter 1
                    </button>
                    <button className="px-6 py border bg-gray-200 rounded-md">
                        Filter 2
                    </button>
                    <button className="px-6 py border bg-gray-200 rounded-md">
                        Filter 3
                    </button>
                    <button className="px-6 py border bg-gray-200 rounded-md">
                        Filter 4
                    </button>
                </div>
            </div>
            {locationsData && <div>
                {locationsData?.map((item: any, key = item.id) => {
                    return <div key={key} className="border p-4 my-4 flex flex-col cursor-pointer" onClick={() => handleItemClick(item.id)}>
                        <div className="flex justify-between">
                            <span className="text-md text-xs font-bold">{item.name}</span>
                            <span className="px-3 py text-xs font-bold bg-orange-300 rounded-full self-center uppercase">{item.status || "NA"}</span>
                        </div>
                        <span className="text-sm font-md">{item.address}</span>
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
                            <span className="text-xs font-md text-gray-500">{formatDate(item.updatedAt)}</span>
                        </div>
                    </div>
                })}
            </div>}
        </div>

    </>
}