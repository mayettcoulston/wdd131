const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    const chapter = input.value.trim();
    if (chapter === '') {
        alert('Please enter a favorite chapter!');
        input.focus();
        return;
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = 'X';

    li.append(deleteButton);
    list.append(li);

    input.value = '';
    input.focus();

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });
});
