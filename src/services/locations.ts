export const getLocations = async() => {
    const response = await fetch(`getLocations?tenant=692627ef-fda8-4203-b108-e8e9f52ad410`);
    return response;
}