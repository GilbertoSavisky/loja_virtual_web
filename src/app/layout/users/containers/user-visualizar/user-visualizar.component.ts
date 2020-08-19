import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { routerTransition } from '../../../../router.animations';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-visualizar',
  templateUrl: './user-visualizar.component.html',
  styleUrls: ['./user-visualizar.component.scss'],
  animations: [routerTransition()]
})
export class UserVisualizarComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as User
        };
      });
    });
  }

  create(user: User) {
    this.userService.createUser(user);
  }

  update(user: User) {
    this.userService.updateUser(user);
  }

  delete(id: string) {
    this.userService.deleteUser(id);
  }

}
