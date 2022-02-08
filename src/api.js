
var baseurl = 'https://connectionfunc1.azurewebsites.net/api/'

//get/id
export async function getId(id) {
    //console.log("api:",id) //undfined
    const response = await fetch(`${baseurl}details/${id}`,
    );
    
    return response.text()    
}

