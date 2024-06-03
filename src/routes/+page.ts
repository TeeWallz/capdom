export const ssr = false;

// export const load = async (loadEvent) => {
//     const { fetch } = loadEvent;
//     const response = await fetch(
//         'https://jsonplaceholder.typicode.com/posts?_limit=10'
//     );
//     const posts = await response.json();
//     return {
//         posts,
//     };
// };

export const load = async (loadEvent) => {
    const { fetch } = loadEvent;

    // from static/houses.json
    const fetchHouseJson = await fetch("/houses.json");
    const houseJson = await fetchHouseJson.json();
    console.log(houseJson);

    return {
        houses: houseJson,
    };
};