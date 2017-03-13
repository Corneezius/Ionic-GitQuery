import { Component } from "@angular/core";
import {  GithubRepos } from '../../providers/github-repos';

@Component({
    selector: 'page-repos',
    templateUrl: 'repos.html',
    providers: [GitHubRepos]
})
export class ReposPage {
    public foundRepos;
    public username;

    constructor(public github: GitHubService) {
    }

    getRepos() {
        this.github.getRepos(this.username).subscribe(
            data => {
                this.foundRepos = data.json();
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
    }
}
