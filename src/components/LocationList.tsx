import { useQuery, useMutation } from "@apollo/client";
import { FETCH_LOCATIONS } from './../services/queries';
import { FiRefreshCcw } from "react-icons/fi/";
import { SlCalender } from "react-icons/sl/";
import { FcClock } from "react-icons/fc"

import { useEffect, useState } from "react";
import ItemModal from "./ItemModal";

export const LocationList: React.FC = () => {
    const [locationsData, setLocationsData] = useState<any>([])
    const [showModal, setShowModal] = useState(false);
    const [locationId, setLocationId] = useState("");

    const locations = useQuery(FETCH_LOCATIONS, { variables: { tenant: "692627ef-fda8-4203-b108-e8e9f52ad410" } })
    console.log(locations);
    useEffect(() => {
        if (locations) setLocationsData(locations?.data?.locationList?.resources)
    }, [locations]);
    console.log("LOCATIONS DATA", locationsData);
    const handleItemClick = (id: string) => {
        console.log(id, "ID>>>>>>>>>");
        setLocationId(id);
        setShowModal(true);
    }

    const formatDate = (date: number) => {
        const curr = Date.now();
        const timeDiff = curr - date;
        const hoursPassed = Math.floor(timeDiff / (60 * 60 * 1000));
        return hoursPassed + " " + "hrs";
    }
    return <>
        <h1>Location List Page</h1>
        <div className="flex w-50 flex-col p-8 m-2 border">
            <div className="flex-col">
                <div>
                    <button className="px-8 py-2 border">
                        <FiRefreshCcw className="w-4" />
                    </button>
                </div>
                <input type="search" placeholder="Search" className="w-full border" />
                <div className="flex w-1/2 flex gap-2 justify-center items-center p-8 m-2">
                    <button className="px-6 py border">
                        Filter 1
                    </button>
                    <button className="px-6 py border">
                        Filter 2
                    </button>
                    <button className="px-6 py border">
                        Filter 3
                    </button>
                    <button className="px-6 py border">
                        Filter 4
                    </button>
                </div>
            </div>
            {locationsData && <div>
                {locationsData?.map((item: any, key = item.id) => {
                    return <div key={key} className="border p-4 my-4 flex flex-col cursor-pointer" onClick={() => handleItemClick(item.id)}>
                        <div className="flex justify-between">
                            <span className="text-md text-xs font-bold">{item.name}</span>
                            <span className="px-3 py text-xs font-bold bg-yellow-300 rounded-full self-center uppercase">{item.status || "NA"}</span>
                        </div>
                        <span>{item.address}</span>
                        <div className="flex justify-between">
                            <div>
                                <div className="flex justify-center items-center mr-2">
                                    <SlCalender />
                                    <span>{"Dec-20"}</span>
                                </div>
                                <div className="flex justify-center items-center">
                                    <FcClock />
                                    <span>{"02:25 PM"}</span>
                                </div>
                            </div>
                            <span>{formatDate(item.updatedAt)}</span>
                        </div>
                    </div>
                })}
            </div>}
            {showModal && <ItemModal id={locationId} />}
        </div>

    </>
}