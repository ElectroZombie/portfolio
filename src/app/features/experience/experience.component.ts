import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService } from '../../core/services/cv.service';
import { WorkExperience } from '../../core/models/cv.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experiences: WorkExperience[] = [];

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.experiences = this.cvService.getCvData().workExperience;
  }
}
