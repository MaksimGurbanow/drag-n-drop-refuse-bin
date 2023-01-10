const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
const OtherPlaceholder = [placeholders[0], placeholders[1]]
const hiddenText = document.querySelector('.hint')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for(const placeholder of placeholders) {

    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
    placeholders[2].addEventListener('drop', () =>{
      placeholders[2].classList.add('deleter-done')
      item.classList.add('ItemDeleted')
      hiddenText.classList.remove('hidden')
    })

    for( const placeholder of OtherPlaceholder){
      placeholder.addEventListener('drop', () =>{
      placeholders[2].classList.remove('deleter-done')
      placeholders[2].classList.add('deleter')
    })
    placeholders[2].addEventListener('dblclick', () =>{
      item.classList.remove('ItemDeleted')
      hiddenText.classList.add('hidden')
    })
    }
}

function dragstart(event){
    event.target.classList.add('hold')
    setTimeout(() =>event.target.classList.add('hide'), 0 )
}

function dragend(event){
    event.target.classList.remove('hold', 'hide')
    
}



function dragover(event) {      
    event.preventDefault()
}
function dragenter(event){
  event.target.classList.add('hovered')
}
function dragleave(event) {
    event.target.classList.remove('hovered')
}
function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}