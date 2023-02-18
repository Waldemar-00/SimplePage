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


    const dropTarget = document.querySelector(".dropTarget");
    ['dragenter', 'dragleave', 'dragover'].forEach(eventIs => {
        dropTarget.addEventListener(eventIs, (e) => {
            e.preventDefault();
            e.stopPropagation();
        }, false);
    });
    // dropTarget.addEventListener('drop', (e) => {
        // e.preventDefault();
        // e.stopPropagation();
        // console.log(e.dataTransfer.files);
        // dropTarget.innerText = e.dataTransfer.files[0].name;
        // dropTarget.classList.add('dropStyle');

    // });
    const dragble = document.querySelector('#dropRed');
    dragble.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.id);
    });
    dropTarget.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.append(document.getElementById(e.dataTransfer.getData('text')));
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


    const elementDrop = document.querySelector('[name=upload]');
    ['dragenter', 'dragleave', 'dragover'].forEach(eventEach => {
        elementDrop.addEventListener(eventEach, (e) => {
            e.preventDefault();
            e.stopPropagation();
        }, false);
    });
    elementDrop.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        elementDrop.files = e.dataTransfer.files;
        elementDrop.style.color = 'green';
        console.log(elementDrop.value);
    }, false);
});