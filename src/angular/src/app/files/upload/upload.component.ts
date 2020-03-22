import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilesService } from '../../services/files.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  fileToUpload: File = null;
  uploadForm: FormGroup;

  constructor(
    private cd: ChangeDetectorRef,
    private filesService: FilesService,
    private toastrservice: ToastrService
  ) {}

  ngOnInit() {
    this.uploadForm = new FormGroup({
      fileUpload: new FormControl('', Validators.required)
    });
  }

  onFileChange(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  submitFile() {
    this.filesService.postFile(this.fileToUpload).subscribe((flag: any) => {
      console.log(flag);
    }, (error) => {
      this.toastrservice.error(error.error, 'Error with file upload');
    });
  }
}
