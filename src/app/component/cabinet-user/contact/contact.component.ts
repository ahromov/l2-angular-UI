import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RestService} from "../../../service/rest.service";
import {MessageDto} from "../../../dto/MessageDto";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  private readonly _min20Characters = 'Min 20 characters';

  @Output() infoMessage = new EventEmitter<string>();
  @Output() errorMessage = new EventEmitter<string>();

  checkoutForm: FormGroup = this.formBuilder.group({
    text: 'Min 20 characters'
  });

  constructor(
      private formBuilder: FormBuilder,
      private restService: RestService
  ) {
  }

  sendMessage() {
    let token = localStorage.getItem('token');
    let text = this.checkoutForm.controls['text'].value;
    let messageDto = new MessageDto();
    messageDto.text = text;
    this.restService.sendMessage(token, messageDto).subscribe({
      next: value => {
        this.infoMessage.emit(`Your message successfully sent.`)
      },
      error: err => {
        this.errorMessage.emit(`Something wrong( ... ${err.status}`)
      }
    });
    this.checkoutForm.reset()
  }

  clearText() {
    let text = this.checkoutForm.controls['text'].value;
    if (text === this._min20Characters){
      this.checkoutForm.controls['text'].setValue('');
    }
  }
}
