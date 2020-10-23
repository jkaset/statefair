const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", customEvent => {
    const idOfClicked = customEvent.target.id

    if (idOfClicked === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                clickedButton: "rideTicket"
            }    
        })
        eventHub.dispatchEvent(rideEvent) 
        console.log(rideEvent)      
    
    } else if (idOfClicked === "foodTicket") {
        const foodEvent = new CustomEvent
        ("foodTicketPurchased", {
            detail: {
                clickedButton: "foodTicket"
            }
        })
        eventHub.dispatchEvent(foodEvent) 
        console.log(foodEvent)
    }

    else if (idOfClicked === "gameTicket") {
        const gameEvent = new CustomEvent
        ("gameTicketPurchased", {
            detail: {
                clickedButton: "gameTicket"
            }
        })
        eventHub.dispatchEvent(gameEvent)
        console.log(gameEvent)
    } else if (idOfClicked === "sideshowTicket") {
        const sideshowEvent = new CustomEvent
        ("sideshowTicketPurchased", {
            detail: {
                clickedButton: "sideshowTicket"
            }
        })
        eventHub.dispatchEvent(sideshowEvent)
        console.log(sideshowEvent)
    }
    else if (idOfClicked === "fullPackageTicket") {
        const fullPackageEvent = new CustomEvent
        ("fullPackageTicketPurchased", {
            detail: {
                clickedButton: "fullPackageTicket"
            }
        })
        eventHub.dispatchEvent(fullPackageEvent)
        console.log(fullPackageEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package Ticket</button>
            
        </div>
    `
}


