import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private booleanSideNav = new BehaviorSubject<boolean>(
    window.innerWidth > 768
  );
  booleanSideNav$ = this.booleanSideNav.asObservable();

  private isloading = new BehaviorSubject<boolean>(false);
  isloading$ = this.isloading.asObservable();

  constructor(private titleService: Title) {}

  setBooleanSideNav(value: boolean) {
    this.booleanSideNav.next(!value);
  }

  setLoading(value: boolean) {
    this.isloading.next(value);
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
