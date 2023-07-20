function sendData(event) {
    event.preventDefault();

    const form = document.forms['create'];
    // const title = form['title'].value;
    const formData = new FormData(form);
    const newSerie = {
        title: formData.get('title'),
        author: formData.get('author'),
        imageUrl: formData.get('imageUrl'),
        isOver: formData.get('isOver') === 'on' ? true : false,
        upVotes: formData.get('upVotes'),
        downVotes: formData.get('downVotes')
    }
}