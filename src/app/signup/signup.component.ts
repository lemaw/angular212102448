import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  nama = "Maulana Nur Bakti Utomo";
  nim = "212102448";
  constructor(private renderer: Renderer2){
    this.renderer.addClass(document.body, "signup-page");
  }
  ngOnInit(): void {
  }

}
