import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService } from '../../core/services/cv.service';
import { CVData } from '../../core/models/cv.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  cvData!: CVData;
  currentYear = new Date().getFullYear();

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvData = this.cvService.getCvData();
  }
}
