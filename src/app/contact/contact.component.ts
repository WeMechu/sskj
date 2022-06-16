import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  customerName = '';
  customerPhoneNumber = '';
  customerEmail = '';
  customerMessage = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  sendMessage() {
    const webHook =
      'https://hooks.slack.com/services/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';
    const message = {
      attachments: [
        {
          color: '#2eb886',
          author_name: this.customerName,
          author_link: this.customerEmail,
          title: this.customerName + ' sent you a message.',
          fields: [
            {
              title: 'Name',
              value: this.customerName,
              short: false,
            },
            {
              title: 'Email',
              value: this.customerEmail,
              short: false,
            },
            {
              title: 'Phone number',
              value: this.customerPhoneNumber,
              short: false,
            },
            {
              title: 'Message',
              value: this.customerMessage,
              short: false,
            },
          ],
          footer: 'mechu.in',
          ts: Math.floor(Date.now() / 1000),
        },
      ],
    };
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    this.http.post(webHook, message, options).subscribe();
  }
}
