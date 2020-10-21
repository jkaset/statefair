const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".games")

export const GameTicketHolders = () => {
  eventHub.addEventListener("gameTicketPurchased", event => {
      contentTarget.innerHTML += `
        <div class="person bigSpender">
        </div>
    `
    })
  }

  
    