function sendData(event) {
    event.preventDefault();

    const form = document.forms['create'];
    // const title = form['title'].value;
    const formData = new FormData(form);

    let isOverBool;

    if (formData.get('isOver') === 'on') {
        isOverBool = true;
    } else {
        isOverBool = false;
    }

    const newSerie = {
        title: formData.get('title'),
        author: formData.get('author'),
        imageUrl: formData.get('imageUrl'),
        isOver: isOverBool,
        upVotes: 0,
        downVotes: 0
    }
}