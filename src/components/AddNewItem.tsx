import { useQuery, useMutation } from "@apollo/client";
import { ADD_ITEM, FETCH_ITEM_LOCATION, PATCH_LOCATION_ITEM } from "../services/queries";
import { useEffect } from 'react';
import { useState } from 'react';
import { SlCalender } from 'react-icons/sl/';
import { FcClock } from 'react-icons/fc';

interface AddNewItemDef {
}
const AddNewItem: React.FC<AddNewItemDef> = () => {
    const [data, setData] = useState({
        address: "",
        alias: "",
        description: "",
        managingOrganization: "",
        name: "",
        npi: "",
        partOf: "",
    })
    const [add, added] = useMutation(ADD_ITEM, { variables: { tenant: "692627ef-fda8-4203-b108-e8e9f52ad410", requestBody: data } });

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

    const handleAdd = () => {
        add({ variables: { tenant: "692627ef-fda8-4203-b108-e8e9f52ad410", requestBody: data } })
    }

    return <div className="fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75">
        <div className="bg-white rounded p-8">
            <div className="w-full h-full justify-between">
                <div className="border p-4 my-4 flex flex-col cursor-pointer gap-2">

                    {
                        <div className="flex flex-col justify-between items-center">
                            <label className="text-xs font-bold self-start">Name</label>
                            <input className={`text-md  rounded-md p-2 bg-gray-200 text-xs font-bold`} onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name} />
                        </div>
                    }
                    {

                        <div className="flex flex-col justify-between items-center">
                            <label className="text-xs font-bold self-start">Address</label>                            <input className={`text-md bg-gray-200 rounded-md p-2 text-xs font-bold`} onChange={(e) => setData({ ...data, address: e.target.value })} value={data.address} />
                        </div>
                    }

                    {
                        <div className="flex flex-col justify-between items-center">
                            <label className="text-xs font-bold self-start">Alias</label>                            <input className={`text-md bg-gray-200 rounded-md p-2 text-xs font-bold`} onChange={(e) => setData({ ...data, alias: e.target.value })} value={data.alias} />
                        </div>

                    }
                    {

                        <div className="flex flex-col justify-between items-center">
                            <label className="text-xs font-bold self-start">Description</label>                            <input className={`text-md bg-gray-200 rounded-md p-2 text-xs font-bold`} onChange={(e) => setData({ ...data, description: e.target.value })} value={data.description} />
                        </div>
                    }
                    {

                        <div className="flex flex-col justify-between items-center">
                            <label className="text-xs font-bold self-start">Organization</label>                            <input className={`text-md bg-gray-200 rounded-md p-2 text-xs font-bold`} onChange={(e) => setData({ ...data, managingOrganization: e.target.value })} value={data.managingOrganization} />
                        </div>
                    }
                    {

                        <div className="flex flex-col justify-between items-center">
                            <label className="text-xs font-bold self-start">NPI</label>                            <input className={`text-md bg-gray-200 rounded-md p-2 text-xs font-bold`} onChange={(e) => setData({ ...data, npi: e.target.value })} value={data.npi} />
                        </div>
                    }
                    {
                        <div className="flex flex-col justify-between items-center">
                            <label className="text-xs font-bold self-start">Part Of</label>                            <input className={`text-md bg-gray-200 rounded-md p-2 text-xs font-bold`} onChange={(e) => setData({ ...data, partOf: e.target.value })} value={data.partOf} />
                        </div>
                    }
                    {<button onClick={handleAdd} className="px-8 py-2 text-sm rounded-md bg-green-500 ml-4 text-white font-bold">
                        Save
                    </button>}
                </div>
            </div >

        </div>
    </div>
}


export default AddNewItem;