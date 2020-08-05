//ADICIONA MAIS CAMPOS NO HORARIO
document.querySelector('#add-time').addEventListener('click', cloneField)

function cloneField() {
    const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newfieldContainer.querySelectorAll('input')

    //LIMPA OS CAMPOS AO DUPLICAR 
    fields.forEach(function(field) {
        field.value = ""
    })

    document.querySelector('#schedule-items').appendChild(newfieldContainer)
}