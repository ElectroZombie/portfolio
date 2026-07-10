import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService } from '../../core/services/cv.service';
import { Skill } from '../../core/models/cv.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.skills = this.cvService.getCvData().skills;
  }
}
