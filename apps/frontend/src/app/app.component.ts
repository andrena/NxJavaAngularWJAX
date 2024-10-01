import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { AsyncPipe } from '@angular/common';
import { shareReplay } from 'rxjs';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (user$ | async; as user) {
    <h1>Welcome, {{ user.userName }}</h1>
    }
  `,
})
export class AppComponent {
  private httpClient = inject(HttpClient);

  user$ = this.httpClient
    .get<User>(`${environment.baseUrl}/api/user/current`)
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));
}
