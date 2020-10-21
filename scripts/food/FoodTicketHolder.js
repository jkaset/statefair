// and add an event listener to the event hub that listens for the food ticket custom event that you will dispatch from the TicketBooth component.
const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", event => { 
        contentTarget.innerHTML += `
            <div class="person eater">
            </div>
        `
    })
}

// In the body of the event listener callback function, add a new <div> element to the content target that has the correct classes on it (see above).