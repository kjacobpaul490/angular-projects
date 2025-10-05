import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule],
  templateUrl: './built-in-pipes.html',
  styleUrl: './built-in-pipes.css'
})
export class BuiltInPipes {
  today: Date = new Date();
  gender = 'ghjgjh';
  inviteMap = {
    male: 'Invite him',
    female: 'Invite her',
    other: 'Invite them'
  };
  messages = ['Hi', 'Hello','hiee','byee'];
  messageMap = {
    '=0': 'No messages',
    '=1': '1 message',
    '=2': '# bugs',
    'other': '# messages'
  };
}


