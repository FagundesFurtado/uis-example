import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-mouse-move',
  templateUrl: './box-mouse-move.component.html',
  styleUrls: ['./box-mouse-move.component.scss']
})
export class BoxMouseMoveComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.querySelector('.card').addEventListener('mousemove', e => {
      const aux = this.getTarget(e);

      const x = this.getX(e) - aux.offsetLeft;
      const y = this.getY(e) - aux.offsetTop;
      this.setStyle(e, x, y);
    });
  }

  getTarget(e) {
    return e.target;
  }

  getX(e) {
    return e.pageX;
  }

  getY(e) {
    return e.pageY;
  }

  setStyle(e, x, y) {
    this.getTarget(e).style.setProperty('--x', `${x}px`);
    this.getTarget(e).style.setProperty('--y', `${y}px`);
  }
}
