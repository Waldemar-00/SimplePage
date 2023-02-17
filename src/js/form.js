document.addEventListener('DOMContentLoaded', () => {
    const legend = document.querySelector('legend');
    const range = new Range();
    range.setStart(legend, 0);
    range.setEnd(legend, 1);
    alert(range);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
    setTimeout(() => {
        document.getSelection().empty();
        select();
    }, 4000);

    function select() {
        const p = document.querySelector('p');
        const paragraph = new Range();
        paragraph.setStart(p.firstChild, 3);
        paragraph.setEnd(p.querySelector('b').firstChild, 3);
        document.getSelection().addRange(paragraph);
    }

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        select2();
    }, 8000);
    function select2() {
        const paragr = document.querySelector('p');
        document.getSelection().setBaseAndExtent(paragr, 2, paragr, paragr.childNodes.length);
    }

});