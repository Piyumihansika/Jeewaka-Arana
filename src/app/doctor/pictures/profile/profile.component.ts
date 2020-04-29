import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  files: File[] =[];
  // files1: File[]=  [];

  onDrop(files: FileList) {
    for (let i = 0; i <1; i++) {
      this.files.push(files.item(i));
    }
  }
  img : string;
  selectedImage:any;
  isSubmitted:boolean;

  
formdata=new FormGroup({ 
  img:new FormControl(''),

  

 });
  constructor() { }

  ngOnInit() {
    this.formdata;
  }
  showpreview(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload=(e:any)=> this.img = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage =event.target.files[0];
    }
    // else{
    //   this.img ='../../../assets/img/avatar.png';
    //   this.selectedImage = null;
    // }
 
  }



}
