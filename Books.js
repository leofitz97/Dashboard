

const form = document.querySelector('#myform')
const mybutton = document.querySelector('#formButton')
mybutton.addEventListener('click', () =>{
	form.style.display = 'block';


})

function createTable(){
	const book = document.getElementById('BookName')
	const aut = document.getElementById('author')
	const pgs = document.getElementById('pages')
	let tbl = new create()
	let data = new Books(`${book.value}`, `${aut.value}`, `${pgs.value}`)
	addBooks(data.name)
	tbl.books.innerText = data.name
	tbl.author.innerText = data.author
	tbl.pages.innerText = data.pages
}
function removeBook(){
	
}
const rm = document.getElementsByClassName('.BR')
rm.addEventListener('onclick', ()=>{

})
const disableButton = document.getElementById('Add');
disableButton.addEventListener('click', ()=> {
})

function create(){
	const lib = document.querySelector('#contents')
	const Tr = document.createElement('tr')
	const TD = document.createElement('td')
	const TD1 = document.createElement('td')
	const TD2 = document.createElement('td')
	const TD3 = document.createElement('td')
	const btn = document.createElement('button')
	btn.classList.add('BR')
	TD.classList.add('btn-col')
	btn.innerText = 'Remove'
	TD.appendChild(btn)
	Tr.appendChild(TD)
	Tr.appendChild(TD1)
	Tr.appendChild(TD2)
	Tr.appendChild(TD3)
	lib.appendChild(Tr)
	this.TD = TD
	this.books = TD1
	this.author = TD2
	this.pages = TD3
}
function Books(name, author, pages){
	this.name = name
	this.author = author
	this.pages = pages
	this.info = function(){
	if (!this.isRead){
		let keep = `The ${this.name} by ${author} has ${this.pages} pages not read...`
		return keep}

	else {let keep = `The ${this.name} by ${author} has ${this.pages} pages read...`
		return keep}
	}
	this.read = function () {
		this.isRead = true;
		return true;
	}
}

let library =[]
function addBooks(name){
	library.push(name)
}

function displayBook(){
	let i;
	for (i in library){
		console.log(library[i])

	}
}

let never = new Books('Never', 'James', 255)
addBooks(never.name)
displayBook()
never.read()
console.log(never.info())

let arrow = new Books('Arrow', 'Oliver Queen', 300)
addBooks(arrow.name)

arrow.read()
console.log(arrow.info())
