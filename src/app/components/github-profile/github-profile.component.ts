import { Component, Input } from '@angular/core';
import { GithubProfileDataComponent } from '../github-profile-data/github-profile-data.component';
import { GithubProfileCardComponent } from '../github-profile-card/github-profile-card.component';

@Component({
  selector: 'app-github-profile',
  standalone: true,
  imports: [GithubProfileDataComponent,GithubProfileCardComponent],
  templateUrl: './github-profile.component.html',
  styleUrl: './github-profile.component.css',
  
  
})
export class GithubProfileComponent {
  @Input() githubProfile:any;
}
