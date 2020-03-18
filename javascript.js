
bookListUl.onclick = function (event) {
    if (event.target.tagName === 'DIV') {
        let warning = confirm("Do you really want to delete this file?");
        if (warning === true) {
            event.target.parentNode.remove()
        } else {
            event.preventDefault();
        }
    }
}
let forms = document.forms;
hide.onclick = function () {
    if (hide.checked == true) {
        bookListUl.style.visibility = 'hidden'
    } else {
        bookListUl.style.visibility = 'visible'
    }
}
let searchBar = searchForm.querySelector('input');
searchBar.addEventListener('keyup', function (event) {
    let term = event.target.value.toLowerCase();
    let books = bookListUl.getElementsByTagName('li');
    Array.from(books).forEach(function (book) {
        let title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1) {
            book.style.display = 'flex';
        } else {
            book.style.display = 'none'
        }
    })
})
let addInput = addBooks.querySelector('input');
addButton.onclick = function () {
    let text = addInput.value;
    let newLi = document.createElement('LI');
    let span = document.createElement('SPAN')
    span.innerHTML = text;
    newLi.innerHTML = `<span>${text}</span>` + file.value + '<div class="delete" id="deletee">delete</div>';
    bookListUl.append(newLi);

    // newLi.lastElementChild.onclick = function (event) {
    //     if (event.target.tagName === "DIV") {                                        აქ მინდა: ვინც ატვირთავს მარტო იმას რომ შეეძლოს თავისი ატვირთულის წაშლა
    //         let warning = confirm("Do you really want to delete this file?");
    //         if (warning === true) {
    //             event.target.parentNode.remove()
    //         } else {
    //             event.preventDefault();
    //         }
    //     }
    // }
}


