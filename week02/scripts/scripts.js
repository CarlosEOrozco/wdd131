const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    const chapter = input.value.trim();
    if (chapter !== '') {
        const li = document.createElement('li');
        li.textContent = chapter;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);
        list.append(li);

        input.value = '';
    } else {
        alert("Please enter a chapter");
    }
    input.focus();
});