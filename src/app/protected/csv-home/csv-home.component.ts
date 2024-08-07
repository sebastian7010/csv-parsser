import { Component } from '@angular/core';
import { FileService } from '../../services/file.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-csv-home',
  standalone: true,
  imports: [],
  templateUrl: './csv-home.component.html',
  styleUrl: './csv-home.component.css'
})
export class CsvHomeComponent {
  file: File | null = null
  constructor(private fileService: FileService) {}

  onFileSelected(event: any) { 
    this.file = event.target.files[0]
    alert('File seleccionados')}
  
  onUpload() :void {
  if(this.file){
    console.log(this.file)
    this.fileService.uploadFile(this.file)
  }
}
}


