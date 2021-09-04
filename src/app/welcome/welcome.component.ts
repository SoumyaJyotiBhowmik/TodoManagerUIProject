import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  userName: string;
  welcomeMessageFromService: string;
  constructor(
    private router: ActivatedRoute,
    private welcomeService: WelcomeDataService
  ) {}

  ngOnInit(): void {
    this.userName = this.router.snapshot.params['name'];
  }
  getWelcome() {
    this.welcomeService.executeHelloWorldBeanService().subscribe(
      (resp) => {
        console.log(resp.message);
        this.welcomeMessageFromService = resp.message;
      },
      (error) => {
        this.welcomeMessageFromService = 'error occured';
        console.log('error');
      }
    );
  }
  getWelcomeWithName() {
    this.welcomeService
      .executeHelloWorldBeanServiceWithParameter(this.userName)
      .subscribe(
        (resp) => {
          console.log(resp.message);
          this.welcomeMessageFromService = resp.message;
        },
        (error) => {
          this.welcomeMessageFromService = 'error occured';
          console.log('error');
        }
      );
  }
}
