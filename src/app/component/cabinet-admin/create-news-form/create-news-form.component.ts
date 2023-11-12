import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NewsDto} from "../../../dto/NewsDto";
import {RestService} from "../../../service/rest.service";

@Component({
  selector: 'app-create-news-form',
  templateUrl: './create-news-form.component.html',
  styleUrls: ['./create-news-form.component.css']
})
export class CreateNewsFormComponent {

  @Output() infoMessage = new EventEmitter<string>();
  @Output() errorMessage = new EventEmitter<string>();
  checkoutForm: FormGroup = this.formBuilder.group({
    title: '',
    text: ''
  });
  fileName: string | undefined;
  formData: FormData = new FormData();

  constructor(
      private formBuilder: FormBuilder,
      private restService: RestService
  ) {
  }

  fileSelected($event: any) {

    // @ts-ignore
    const file: File = event.target.files[0];

    this.fileName = file.name;
    this.formData.append("image", file);

    let title = this.checkoutForm.controls['title'].value;
    let text = this.checkoutForm.controls['text'].value;

    const newsDto: NewsDto = {
      title: title,
      text: text
    };

    this.formData.append('newsDto', new Blob([JSON.stringify(newsDto)], {
      type: "application/json"
    }))
  }

  createNews() {
    console.log(this.formData)
    let token = localStorage.getItem('token');
    this.restService.createNews(token, this.formData).subscribe({
      next: value => {
        this.infoMessage.emit("News added on site")
      },
      error: err => {
        this.errorMessage.emit("Something wrong(..." + err.status)
      }
    });
  }
}
