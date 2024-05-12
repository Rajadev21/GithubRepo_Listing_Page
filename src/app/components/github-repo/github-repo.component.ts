import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-repo',
  standalone: true,
  imports: [],
  templateUrl: './github-repo.component.html',
  styleUrl: './github-repo.component.css'
})
export class GithubRepoComponent {
  @Input() githubRepo:any[]=[];
}
