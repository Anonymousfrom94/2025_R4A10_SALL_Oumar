import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher, TeachersService } from '../teachers.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css',
})
export class DetailPageComponent implements OnInit {
  id!: number;
  teacher: Teacher | null = null;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly teacherService: TeachersService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.teacher = this.teacherService.findOne(this.id);
    if (!this.teacher) {
      this.router.navigate(['/404']);
    }
  }
}
