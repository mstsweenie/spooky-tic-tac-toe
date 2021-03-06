import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RootState } from '../store';
import { clearUser, setUser } from '../store/actions/user.actions';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private _snackBar: MatSnackBar, private store: Store<RootState>) { }

  login(username: string, password: string) {
    let users = JSON.parse(localStorage.getItem('users'));
    if (users === null) {
      users = [];
    }
    let userByName = users.filter(u => u.username === username && u.password === password)[0];
    if (userByName) {
      this.store.dispatch(setUser({username: userByName.username}))
      this.router.navigate(['/board']);
    }
    else{
      this._snackBar.open("Invalid username or password", null, {
        duration: 2000,
      });
    }
  }

  signup(username: string, password: string): void {
    let users = JSON.parse(localStorage.getItem('users'));
    if (users === null) {
      users = [];
    }

    let usersByName = users.filter(u => u.username === username);
    if (usersByName.length === 0) {
      users.push({username: username, password: password})
      
      localStorage.setItem('users', JSON.stringify(users));
      this.login(username, password);
    }
    else{
      this._snackBar.open("User with that name already exists", null, {
        duration: 2000,
      });
    }

  }

  logout() {
    this.store.dispatch(clearUser());
    this.router.navigate(['/login']);
  }

}
