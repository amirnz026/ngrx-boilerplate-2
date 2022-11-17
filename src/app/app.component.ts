import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addItemToCart, userEntered } from 'src/ngrx/actions';
import { AppState, User } from 'src/ngrx/types';
import { Observable } from 'rxjs';
import { userIdSelector } from 'src/ngrx/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  userId$!: Observable<string>;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(userEntered());

    this.userId$ = this.store.pipe(select(userIdSelector()));
  }

  handleClick(): void {
    this.store.dispatch(addItemToCart({ itemName: 'phone' }));
  }
}
