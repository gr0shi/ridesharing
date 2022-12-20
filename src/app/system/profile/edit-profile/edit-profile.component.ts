import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

  // constructor(private http: HttpClient) { }

  // title = 'ImageUploader';

  // public selectedFile: any;
  // public event1: any;
  // imgURL: any;
  // receivedImageData: any;
  // base64Data: any;
  // convertedImage: any;

  // public onFileChanged(event: any) {
  //   console.log(event);
  //   this.selectedFile = event.target.files[0];

  //   let reader = new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //   reader.onload = (event2) => {
  //     this.imgURL = reader.result;
  //   };

  // }
  // onUpload() {

  //   const uploadData = new FormData();
  //   uploadData.append('myFile', this.selectedFile, this.selectedFile.name);

  //   this.http.post('http://localhost:3000/users', uploadData)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         this.receivedImageData = res;
  //         this.base64Data = this.receivedImageData.pic;
  //         this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
  //       },
  //       err => console.log('Error Occured durring saving: ' + err)
  //     );

  // }
}

