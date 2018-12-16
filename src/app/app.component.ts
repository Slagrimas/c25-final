import { Component } from '@angular/core';
import { ChatService } from '../app/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ChatService],
})
export class AppComponent {
  title = 'c25-final';

  constructor(chatService: ChatService) { }

  
}
