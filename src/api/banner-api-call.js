// *Banner API Call -> https://testapi.arbsindia.com/public/api/get-public-banner-list

const apiCall = async () => {
    try {
        const url =
            "https://testapi.arbsindia.com/public/api/get-public-banner-list";
        const data = { business_id: 39 };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const responseData = await response.json();

        return responseData;
    } catch (error) {
        console.error(
            "There was a problem with the fetch operation:",
            error
        );
    }
};

export default apiCall;
