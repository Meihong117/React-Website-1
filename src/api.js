
var baseurl = 'https://connectionfunc1.azurewebsites.net/api/'
// https://connectionfunc1.azurewebsites.net/api/details/3
//get/id
export async function getId(id) {
    //console.log("api:",id) //undfined
    const response = await fetch(`${baseurl}details/${id}`,
    {
        headers: { }
    });
    
    // console.log(response)
    return response.text()    
}


// export async function getTenant(tenantId) {
//     const response = await fetch(
//         `${baseurl}tenant/${tenantId}`,
//         {
//             headers: { "x-functions-key": xfunctionskey }
//         });
//     return response.json()   