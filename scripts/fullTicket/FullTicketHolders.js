const peopleElementArray = document.querySelectorAll(".people")
const eventHub = document.querySelector("#state-fair")

export const FullTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", event => { 
      for (const element of peopleElementArray) {
        element.innerHTML += `
            <div class="person bigSpender">
            </div>
        `
      }
        
    })
}