import { Component, OnInit } from '@angular/core';
import { WordcloudService } from '../../services/wordcloud.service';

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.scss'],
  providers: [WordcloudService]
})
export class WordcloudComponent implements OnInit {
  constructor(private readonly wordcloudService: WordcloudService) {}

  ngOnInit(): void {
    this.wordcloudService.init();
  }
}
