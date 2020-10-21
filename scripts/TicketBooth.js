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
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}


