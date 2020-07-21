export async function GetResource(url:string){

    var oHeaders = new Headers();
    oHeaders.append('pragma', 'no-cache');
    oHeaders.append('cache-control', 'no-cache');
    
    var oInitConfigFetch = {
    method: 'GET',
    headers: oHeaders,
    };

    let oResultHttp= await fetch(`${process.env.PUBLIC_URL}/${url}`, oInitConfigFetch);
    let oJsonResult= await oResultHttp.json();
    
    return oJsonResult;
}