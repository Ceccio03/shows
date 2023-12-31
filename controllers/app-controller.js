class AppController {
    constructor(){
        this.shows = [];
        this.isUpvoting = false;
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
            <a href="./index.html">lista</a>
            <a href="./new-show.html">nuovo show</a>
        </header>
        <main>
            <div id="btn-container"></div>
            <ul id="shows-container"></ul>
        </main>
        <footer>
            <p>I diritti sono tutti miei!!!</p>
        </footer>`;
    }

    renderShows() {
        const btnContainer = document.getElementById('btn-container');
        btnContainer.innerHTML = '';

        const sortUpBtn = document.createElement('button');
        sortUpBtn.appendChild(document.createTextNode('ordina per upvotes'));
        sortUpBtn.addEventListener('click', () => this.sortByUpVotes(show));
        btnContainer.appendChild(sortUpBtn);

        const sortDownBtn = document.createElement('button');
        sortDownBtn.appendChild(document.createTextNode('ordina per downvotes'));
        sortDownBtn.addEventListener('click', () => this.sortByDownVotes(show));
        btnContainer.appendChild(sortDownBtn);

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
        if (!this.isUpvoting) {
            this.isUpvoting = true;

            DBService.upvote(show).then(show => {
                this.renderShows();
                this.isUpvoting = false;
            });
        } 
    }

    downvoteShow(show) {
        if (!this.isUpvoting) {
            this.isUpvoting = true;
            
            DBService.downvote(show).then(show => {
                this.renderShows();
            });
        }
    }

    sortByUpVotes() {
        this.shows.sort((s1, s2) => s2.upVotes - s1.upVotes);
        this.renderShows();
    }

    sortByDownVotes() {
        this.shows.sort((s1, s2) => s2.downVotes - s1.downVotes);
        this.renderShows();
    }
}