import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SingletonRouterService } from 'src/services/singleton-Router.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bank';
  isShow: boolean;
  data = false;


  constructor(
    public dialog: MatDialog,
    private singletonService: SingletonRouterService) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.isShow = this.singletonService.getCredentials();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AppComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

