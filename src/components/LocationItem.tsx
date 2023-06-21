import { useQuery, useMutation } from "@apollo/client";
import { FETCH_ITEM_LOCATION, PATCH_LOCATION_ITEM } from "../services/queries";
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
    const [editKey, setEditKey] = useState({
        address: false,
        alias: false,
        desc: false,
        org: false,
        name: false,
        npi: false,
        partof: false,
    })
    const [newVal, setNewVal] = useState(locationData);
    const [update, updated] = useMutation(PATCH_LOCATION_ITEM, { variables: { tenant: "692627ef-fda8-4203-b108-e8e9f52ad410", locationUpdateId: id.id, requestBody: newVal } });
    let isValChanged = false;
    if (locationData) isValChanged = JSON.parse(JSON.stringify(locationData)).toString() !== JSON.parse(JSON.stringify(newVal)).toString();
    const itemLocation = useQuery(FETCH_ITEM_LOCATION, { variables: { tenant: "692627ef-fda8-4203-b108-e8e9f52ad410", locationReadId: id.id } })
    console.log(itemLocation);
    console.log(newVal, "New Val");
    useEffect(() => {
        if (itemLocation) setLocationData(itemLocation?.data?.locationRead?.resource)
    }, [itemLocation]);

    useEffect(() => {
        if (locationData) setNewVal(locationData)
    }, [locationData]);



    const mockData = {
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
        "updatedAt": 16
    };

    const formatDate = (date: number) => {
        const curr = Date.now();
        const timeDiff = curr - date;
        const hoursPassed = Math.floor(timeDiff / (60 * 60 * 1000));
        return hoursPassed + " " + "hrs";
    }

    const handleUpdate = () => {
        delete newVal.__typename;
        update({ variables: { tenant: "692627ef-fda8-4203-b108-e8e9f52ad410", locationUpdateId: id.id, requestBody: newVal } })
    }

    return locationData && <div className="w-full h-full justify-between">
        <div className="border p-4 my-4 flex flex-col cursor-pointer gap-2">

            {locationData.name &&
                <div className="flex justify-between items-center">
                    <input className={`text-md ${!editKey.name ? "bg-gray-100" : "bg-gray-200"} rounded-md p-2 text-xs font-bold`} onChange={(e) => setNewVal({ ...newVal, name: e.target.value })} disabled={!editKey.name} value={newVal.name} />
                    <button className="px-3 py text-sm rounded-md bg-blue-200 ml-4 font-bold" onClick={() => setEditKey({ ...editKey, name: true })}>
                        Edit
                    </button>
                </div>
            }
            {locationData.address &&

                <div className="flex justify-between items-center">
                    <input className={`text-md ${!editKey.address ? "bg-gray-100" : "bg-gray-200"} rounded-md p-2 text-xs font-bold`} onChange={(e) => setNewVal({ ...newVal, address: e.target.value })} disabled={!editKey.address} value={newVal.address} />
                    <button className="px-3 py text-sm rounded-md bg-blue-200 ml-4 font-bold" onClick={() => setEditKey({ ...editKey, address: true })}>
                        Edit
                    </button>
                </div>
            }

            {locationData.alias &&
                <div className="flex justify-between items-center">
                    <input className={`text-md ${!editKey.alias ? "bg-gray-100" : "bg-gray-200"} rounded-md p-2 text-xs font-bold`} onChange={(e) => setNewVal({ ...newVal, alias: e.target.value })} disabled={!editKey.alias} value={newVal.alias} />
                    <button className="px-3 py text-sm rounded-md bg-blue-200 ml-4 font-bold" onClick={() => setEditKey({ ...editKey, alias: true })}>
                        Edit
                    </button>
                </div>

            }
            {locationData.description &&

                <div className="flex justify-between items-center">
                    <input className={`text-md ${!editKey.desc ? "bg-gray-100" : "bg-gray-200"} rounded-md p-2 text-xs font-bold`} onChange={(e) => setNewVal({ ...newVal, description: e.target.value })} disabled={!editKey.desc} value={newVal.description} />
                    <button className="px-3 py text-sm rounded-md bg-blue-200 ml-4 font-bold" onClick={() => setEditKey({ ...editKey, desc: true })}>
                        Edit
                    </button>
                </div>
            }
            {locationData.managingOrganization &&

                <div className="flex justify-between items-center">
                    <input className={`text-md ${!editKey.org ? "bg-gray-100" : "bg-gray-200"} rounded-md p-2 text-xs font-bold`} onChange={(e) => setNewVal({ ...newVal, managingOrganization: e.target.value })} disabled={!editKey.org} value={newVal.managingOrganization} />
                    <button className="px-3 py text-sm rounded-md bg-blue-200 ml-4 font-bold" onClick={() => setEditKey({ ...editKey, org: true })}>
                        Edit
                    </button>
                </div>
            }
            {locationData.npi &&

                <div className="flex justify-between items-center">
                    <input className={`text-md ${!editKey.npi ? "bg-gray-100" : "bg-gray-200"} rounded-md p-2 text-xs font-bold`} onChange={(e) => setNewVal({ ...newVal, npi: e.target.value })} disabled={!editKey.npi} value={newVal.npi} />
                    <button className="px-3 py text-sm rounded-md bg-blue-200 ml-4 font-bold" onClick={() => setEditKey({ ...editKey, npi: true })}>
                        Edit
                    </button>
                </div>
            }
            {locationData.partof &&
                <div className="flex justify-between items-center">
                    <input className={`text-md ${!editKey.partof ? "bg-gray-100" : "bg-gray-200"} rounded-md p-2 text-xs font-bold`} onChange={(e) => setNewVal({ ...newVal, partOf: e.target.value })} disabled={!editKey.partof} value={newVal.partOf} />
                    <button className="px-3 py text-sm rounded-md bg-blue-200 ml-4 font-bold" onClick={() => setEditKey({ ...editKey, partof: true })}>
                        Edit
                    </button>
                </div>
            }
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
            {<button onClick={() => handleUpdate()} className="px-8 py-2 text-sm rounded-md bg-green-500 ml-4 text-white font-bold">
                Save
            </button>}
        </div>
    </div >
}


export default LocationItem;