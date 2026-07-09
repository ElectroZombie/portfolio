import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService } from '../../core/services/cv.service';
import { CVData } from '../../core/models/cv.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cvData!: CVData;

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvData = this.cvService.getCvData();
  }
}
