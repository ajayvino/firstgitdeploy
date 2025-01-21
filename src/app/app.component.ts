import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
 data:string="";
 readme:string="";

ngOnInit(): void {




}

savedata(){
  if(this.data !=""){
    let inputdata=this.data;
    localStorage.setItem("user",inputdata);
  }
  else{
    alert("Please Enter Data");
  }
}

readdata(){
  const read=localStorage.getItem("user");
  console.log(read);

  if(read !=null){
    this.readme=read;
  }
  alert(this.readme);
}

}
