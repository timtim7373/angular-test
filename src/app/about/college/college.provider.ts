import {InjectionToken} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AboutInterface} from '../about.interface';
import {COLLEGE, COLLEGE_EN} from './mock-college';

export const COLLEGE_ABOUT$ = new InjectionToken('About college');
export const  collegeFactory = (): Observable<AboutInterface> => {
    return of(COLLEGE);
};
export let collegeProvider = {
    provide: COLLEGE_ABOUT$,
    useFactory: collegeFactory
};
