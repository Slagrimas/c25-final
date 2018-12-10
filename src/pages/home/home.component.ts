import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../app/services/backend.service";
import { Router } from '@angular/router';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    constructor(private backend: BackendService, private router: Router) {

    }

    ngOnInit() { }

}