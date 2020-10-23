const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", event => { 
        // const rideColor = event.detail.clickedButton
        // contentTarget.classList.add(rideColor)
        contentTarget.innerHTML += `
            <div class="person gawker">
            </div>
        `
    })
}