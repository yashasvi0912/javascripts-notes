let tasks = []

const addBtn = document.querySelector("#add-notes-button")
const popup = document.querySelector(".add-notes-pop-up")
const closeBtn = document.querySelector("#close-pop-up")
const form = document.querySelector("#task-form")
const container = document.querySelector(".tasks-container")

addBtn.onclick = () => popup.classList.add("active")
closeBtn.onclick = () => popup.classList.remove("active")

form.onsubmit = e => {
    e.preventDefault()
    let { title, description } = e.target
    if (!title.value || !description.value) return alert("Fill all fields!")

    tasks.push({
        title: title.value,
        description: description.value,
        timeStamp: `T:${new Date().toLocaleTimeString()} D:${new Date().toLocaleDateString()}`
    })

    container.innerHTML = tasks.map(t => `
        <div class="task border p-4">
            <h4>${t.title}</h4>
            <p>${t.description}</p>
            <span>${t.timeStamp}</span>
        </div>
    `).join("")

    form.reset()
    popup.classList.remove("active")
}
