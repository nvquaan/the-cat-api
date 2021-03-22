import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  fileToUpload: File = null;
  constructor(public catService: CatService) {}

  ngOnInit(): void {}
  
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.upLoadFile();
  }

  upLoadFile(){
    
  }
}
