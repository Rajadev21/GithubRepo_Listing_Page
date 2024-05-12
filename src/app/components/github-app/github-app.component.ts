import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../../services/github.service';
import { error } from 'console';
import { GithubProfileComponent } from '../github-profile/github-profile.component';
import { GithubRepoComponent } from '../github-repo/github-repo.component';

@Component({
  selector: 'app-github-app',
  standalone: true,
  imports: [FormsModule,GithubProfileComponent,GithubRepoComponent],
  templateUrl: './github-app.component.html',
  styleUrl: './github-app.component.css'
})

export class GithubAppComponent {
  public UserInput: string = "";
  public githubProfile: any;
  public githubRepo: any[] = [];
  public errorMessage: string = "";
  public currentPage: number = 1;
  public pageSize: number = 10;


  constructor(private githubService: GithubService) { }

  // public searchUser() {
  //   // to get the github profile.
  //   this.githubService.getProfile(this.UserInput).subscribe((data) => {
  //     this.githubProfile = data;
  //     console.log(this.githubProfile)
  //   }, (error) => {
  //     this.errorMessage = error;
  //   })

  //   // to get the github repos
  //   this.githubService.getRepos(this.UserInput).subscribe((data) => {
  //     this.githubRepo = data;
  //    }, (error) => {
  //     this.errorMessage = error;
  //     })
  // }
  public searchUser() {
    // to get the github profile
    this.githubService.getProfile(this.UserInput).subscribe({
      next: (data) => {
        this.githubProfile = data;
      },
      error: (error) => {
        this.errorMessage = error;
      }
    });

    // to get the github repos with pagination
    this.loadRepositories();
  }

  public loadRepositories() {
    this.githubService.getRepositories(this.UserInput, this.currentPage, this.pageSize).subscribe({
      next: (data) => {
        this.githubRepo = data;
      },
      error: (error) => {
        this.errorMessage = error;
      }
    });
  }

    public onPageChange(page: number) {
      this.currentPage = page;
      this.loadRepositories();
    }

    public onPageSizeChange() {
      this.currentPage = 1;
      this.loadRepositories();
    }
}
