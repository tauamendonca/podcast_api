    export default function decodeQuery(url: string) {
        const queryString = url?.split("?p=")[1] || "";
        const decodedString = decodeURI(queryString);
        
        console.log(url);
        console.log(queryString);
        return decodedString;
    }