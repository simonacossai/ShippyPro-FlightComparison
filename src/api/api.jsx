export async function getFlights(departure, arrival) {
    try {
        let response = await fetch(`https://recruitment.shippypro.com/flight-engine/api/flights/from/${departure}/to/${arrival}`,
            {
                method: "GET",
                headers: new Headers({
                    "Authorization": `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
                }),
            })
        if (response.ok) {
            let results = await response.json();
            results.data.sort((a, b) => (a.price > b.price) ? 1 : -1)
            let agency = await getAgency()
            let airport = await getAirports()
            await agency.data.filter(function (o1) {
                return results.data.some(function (o2) {
                    if (o1.id === o2.airlineId) {
                        o2.agency = o1.name;
                    }
                });
            });
            await airport.data.filter(function (o1) {
                return results.data.some(function (o2) {
                    if (o1.id === o2.arrivalAirportId) {
                        o2.arrival = o1.codeIata;
                    }else if (o1.id === o2.departureAirportId) {
                        o2.departure = o1.codeIata;
                    }
                });
            });
            return results;
        } else {
            alert("an error accurred")
        }
    } catch (err) {
        console.log(err);
    }
}

export async function getAgency() {
    try {
        let response = await fetch(`https://recruitment.shippypro.com/flight-engine/api/airlines/all`,
            {
                method: "GET",
                headers: new Headers({
                    "Authorization": `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
                }),
            })
        if (response.ok) {
            let data = await response.json();
            return data;
        } else {
            alert("an error accurred")
        }
    } catch (err) {
        console.log(err);
    }
}

export async function getAirports() {
    try {
        let response = await fetch(`https://recruitment.shippypro.com/flight-engine/api/airports/all`,
            {
                method: "GET",
                headers: new Headers({
                    "Authorization": `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
                }),
            })
        if (response.ok) {
            let data = await response.json();
            return data;
        } else {
            alert("an error accurred")
        }
    } catch (err) {
        console.log(err);
    }
}