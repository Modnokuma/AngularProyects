import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit{
  //currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  //private interval?: NodeJS.Timeout;
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(()=>{
      console.log(this.currentStatus());
    })
  }

  ngOnInit() {
    console.log('On INIT');
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 1

      if (rnd < 0.5) {
        this.currentStatus.set('online') ;
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {

      clearInterval(interval);
    })
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}