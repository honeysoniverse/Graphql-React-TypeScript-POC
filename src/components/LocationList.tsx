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
    const mockData = [
        {
            "address": "address of pras",
            "alias": null,
            "description": null,
            "id": "dec9a31b-8370-4afc-9b63-6966360c4958",
            "managingOrganization": null,
            "name": "pras",
            "npi": null,
            "partOf": null,
            "status": null,
            "tag": null,
            "taxId": null,
            "telecom": [],
            "tenant": "692627ef-fda8-4203-b108-e8e9f52ad410",
            "type": null,
            "updatedAt": 1674027705083
        },
        {
            "address": "address of pras",
            "alias": null,
            "description": null,
            "id": "6d54f28d-acf3-4d1e-bd03-b88ec6d25be1",
            "managingOrganization": null,
            "name": "pras",
            "npi": null,
            "partOf": null,
            "status": null,
            "tag": null,
            "taxId": null,
            "telecom": [],
            "tenant": "692627ef-fda8-4203-b108-e8e9f52ad410",
            "type": null,
            "updatedAt": 1674046482958
        },
        {
            "address": "address of pras",
            "alias": null,
            "description": null,
            "id": "2ce1354a-db05-4389-9a15-7a518201ef82",
            "managingOrganization": null,
            "name": "pras",
            "npi": null,
            "partOf": null,
            "status": null,
            "tag": null,
            "taxId": null,
            "telecom": [],
            "tenant": "692627ef-fda8-4203-b108-e8e9f52ad410",
            "type": null,
            "updatedAt": 1674047259655
        },
        {
            "address": "test11",
            "alias": "reboot,boot",
            "description": "This is the first test description",
            "id": "04fe2357-6e15-4ac7-8641-628ad295bcfa",
            "managingOrganization": "organizatation/111-111",
            "name": "AAA-3",
            "npi": "npi-11",
            "partOf": "location/111-111",
            "status": "active",
            "tag": null,
            "taxId": "1111",
            "telecom": [],
            "tenant": "692627ef-fda8-4203-b108-e8e9f52ad410",
            "type": "platforms",
            "updatedAt": 1686409215920
        },
        {
            "address": "str",
            "alias": "str",
            "description": "str",
            "id": "16c278fb-956e-4307-b658-7991d6c4ab02",
            "managingOrganization": "str",
            "name": "str",
            "npi": "str",
            "partOf": null,
            "status": "inactive",
            "tag": null,
            "taxId": "str",
            "telecom": [],
            "tenant": "692627ef-fda8-4203-b108-e8e9f52ad410",
            "type": null,
            "updatedAt": 1686409312603
        },
        {
            "address": "test11",
            "alias": "sfdsdfsfsd",
            "description": "dd",
            "id": "4cb57ff8-83dc-45a7-986d-7bf8ea1a3c99",
            "managingOrganization": "ffff",
            "name": "testing",
            "npi": "xxxx",
            "partOf": "zzzz",
            "status": "inactive",
            "tag": null,
            "taxId": "sagasg",
            "telecom": [],
            "tenant": "692627ef-fda8-4203-b108-e8e9f52ad410",
            "type": null,
            "updatedAt": 1686410921544
        },
        {
            "address": null,
            "alias": null,
            "description": null,
            "id": "70e5c032-043a-4bdd-9e09-53c84568f94e",
            "managingOrganization": null,
            "name": "some",
            "npi": null,
            "partOf": null,
            "status": null,
            "tag": null,
            "taxId": null,
            "telecom": [],
            "tenant": "692627ef-fda8-4203-b108-e8e9f52ad410",
            "type": null,
            "updatedAt": 1686414403981
        },
        {
            "address": "sdgsa",
            "alias": null,
            "description": "asdga",
            "id": "0ec97054-4908-4de0-8d51-a6a1d0ef6aa9",
            "managingOrganization": null,
            "name": "sdfgads",
            "npi": null,
            "partOf": null,
            "status": "active",
            "tag": null,
            "taxId": null,
            "telecom": [],
            "tenant": "692627ef-fda8-4203-b108-e8e9f52ad410",
            "type": "asdg",
            "updatedAt": 1686414941707
        },
        {
            "address": "sdfgasd",
            "alias": null,
            "description": "dsfgasd",
            "id": "964d7c24-26c6-40f1-8b18-645d4c555124",
            "managingOrganization": null,
            "name": "safa",
            "npi": null,
            "partOf": null,
            "status": null,
            "tag": null,
            "taxId": null,
            "telecom": [],
            "tenant": "692627ef-fda8-4203-b108-e8e9f52ad410",
            "type": null,
            "updatedAt": 1686415035741
        },
        {
            "address": "hjdfgjd",
            "alias": null,
            "description": "gasdgas",
            "id": "2a84a1a5-8f83-4400-b2c0-10d131be4988",
            "managingOrganization": null,
            "name": "asfgad",
            "npi": null,
            "partOf": null,
            "status": "inactive",
            "tag": null,
            "taxId": null,
            "telecom": [],
            "tenant": "692627ef-fda8-4203-b108-e8e9f52ad410",
            "type": null,
            "updatedAt": 1686415200212
        }
    ];
    // useEffect(() => {
    //     setLocationsData(mockData)
    // }, []);

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