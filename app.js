
const myForm = document.querySelector('#my-form');
const descriptionInput = document.querySelector('#description');
const amountInput = document.querySelector('#amount');
const categoriesInput = document.querySelector('#category');
const msg = document.querySelector('.msg');

const list = document.querySelector('#list');
// Listen for form submit
myForm.addEventListener('submit', onSubmit);


function onSubmit(e) {
  e.preventDefault();

  
  if (descriptionInput.value === '' || amountInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
   
    // Create new list item 
    let li = document.createElement('li')
    let details = {
      amount : amountInput.value,
      desc : descriptionInput.value,
      category: categoriesInput.value
    }
    li.innerHTML = `
    <div id=${amountInput.value}>
      ${details.amount} - ${details.desc} - ${details.category} <button class="btn delete" onclick=deleteItem('${amountInput.value}')>Delete</button>
      <button class="btn edit" onclick=edit('${details.amount}','${details.desc}')>Edit</button>
    </div>
    `
    list.appendChild(li)


  }
}


function deleteItem(amount) {

  const toDelete = document.getElementById(amount)
  toDelete.style.display = 'none'

}


function edit(amount, description) {
  amountInput.value = amount
  descriptionInput.value = description

  deleteItem(amount)
}