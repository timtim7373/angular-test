import {Component, Inject, OnInit} from '@angular/core';
import {COLLEGE_ABOUT$, collegeProvider} from './college.provider';
import {Observable} from 'rxjs';
import {AboutInterface} from '../about.interface';


@Component({
    selector: 'app-college',
    templateUrl: './college.component.html',
    styleUrls: ['./college.component.scss'],
    providers: [collegeProvider]
})
export class CollegeComponent implements OnInit {
    college?: AboutInterface;
    constructor(@Inject(COLLEGE_ABOUT$) readonly college$: Observable<AboutInterface>) {
    }
    ngOnInit() {
        this.getCollege();
    }
    getCollege(): void {
        this.college$.subscribe(college => {
            this.college = college;
        });
    }
}
