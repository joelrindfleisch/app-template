export const wrappedFetch = async(uri) => {
    try {
        const rawResponse = await fetch(uri);
        if(rawResponse.ok) {
            const response = await rawResponse.json();
            return response;
        }
        throw new Error(`Error retrieving data for ${uri}`);
    } catch(err) {
        throw err;
    }
};

// export const wrappedPost = async (uri, payload) => {
//     try {
//         const rawResponse = await fetch(uri, {
//             method: 'POST',
//             body: JSON.stringify(payload), // data can be `string` or {object}!
//             headers:{
//                 'Content-Type': 'application/json'
//             }
//         });
//         if(rawResponse.ok) {
//             const response = await rawResponse.json();
//             return response;
//         }
//         throw new Error(`Error posting data for ${uri}`);
//     } catch(err) {
//         throw err;
//     }
// };
//
// export const wrappedDelete = async (uri) => {
//     try {
//         const rawResponse = await fetch(uri, {
//             method: 'DELETE'
//         });
//         if(rawResponse.ok) {
//             return;
//         }
//         throw new Error(`Error deleting data for ${uri}`);
//     } catch(err) {
//         throw err;
//     }
// };