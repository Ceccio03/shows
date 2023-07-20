class AppController {
    constructor(){
        this.shows = [];
    }

    init() {
        this.render();
        DBService.getAllShows().then(shows => {
            this.shows = shows;
            this.renderShows();
        })
    }

    render() {
        const appContainer = document.getElementById('app');

        appContainer.innerHTML = `
        <header>
            <h1>Netflics</h1>
        </header>
        <main>
            <ul id="shows-container">
    
            </ul>
        </main>
        <footer>
            <p>I diritti sono tutti miei!!!</p>
        </footer>`;
    }

    renderShows() {
        const showsContainer = document.getElementById('shows-container');
        showsContainer.innerHTML = '';

        for (let i = 0; i < this.shows.length; i++) {
            const show = this.shows[i];
            const listElement = document.createElement('li');

            const titleNode = document.createTextNode(show.title);
            listElement.appendChild(titleNode);

            const upvoteSpan = document.createElement('span');
            upvoteSpan.appendChild(document.createTextNode(show.upVotes));
            listElement.appendChild(upvoteSpan);

            const upButton = document.createElement('button');
            upButton.appendChild(document.createTextNode('👍'));
            upButton.addEventListener('click', () => this.upvoteShow(show));
            listElement.appendChild(upButton);

            const downvoteSpan = document.createElement('span');
            upvoteSpan.appendChild(document.createTextNode(show.downVotes));
            listElement.appendChild(downvoteSpan);

            const downButton = document.createElement('button');
            downButton.appendChild(document.createTextNode('👎'));
            downButton.addEventListener('click', () => this.downvoteShow(show));
            listElement.appendChild(downButton);

            showsContainer.appendChild(listElement);
        }
    }

    upvoteShow(show) {
        DBService.upvote(show).then(show => {
            this.renderShows();
        });
    }

    downvoteShow(show) {
        DBService.downvote(show).then(show => {
            this.renderShows();
        });
    }
}