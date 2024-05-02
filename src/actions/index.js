export const fetchJobs = () => async dispatch => {

    try{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type","application/json");

        const raw = JSON.stringify({
            "limit" :10,
            "offset": 0
        });

        const requestOptions = {
            method: "POST",
            headers : myHeaders,
            body : raw
        }

        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const data = await response.json();

        dispatch({type: "FETCH_JOBS_SUCCESS", paylaod: data});

    }catch(error){
        dispatch({type: "FETCH_JOBS_FAILURE",paylaod : error.message})
    }
}