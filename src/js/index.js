document.addEventListener('DOMContentLoaded', () => {
    const inputJS = document.querySelector("#inputJS");
    const anchor = document.querySelector("#anchor");
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // предотвращает перемещение к "#"
        if (inputJS) {
            inputJS.click();
        }
    }, false);
    inputJS.addEventListener('change', () => {
        console.log(inputJS.files);
        console.log(inputJS.files[0].name);
        console.log(inputJS.files[0]);
        console.log(inputJS.files[1]);
    });
    const drop = document.querySelector('drop');
    const dropTarget = document.querySelector(".dropTarget");
    dropTarget.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const currentEl = e.target;
        dropTarget.insertBefore(drop, currentEl);
    });
    // dropElement.addEventListener('dragover', (e) => {
    // e.preventDefault();
    // })
    const me = document.querySelector('#me');
    me.addEventListener('click', (e) => {
        me.style.display = 'block';
        me.style.visibility = 'visible';
        me.focus();
    });
    const color = document.querySelector('#color');
    color.addEventListener('click', (e) => {
        e.target.select();
    });
    color.addEventListener('input', (e) => {
        document.body.style.backgroundColor = e.target.value;
        color.select();
    });
    color.addEventListener('change', (e) => {
        document.body.style.backgroundColor = e.target.value;
        color.select();
    });
});