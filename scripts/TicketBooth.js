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
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            
        </div>
    `
}


