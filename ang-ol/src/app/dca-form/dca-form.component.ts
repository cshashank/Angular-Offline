import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
	selector: 'app-dca-form',
	templateUrl: './dca-form.component.html',
	styleUrls: ['./dca-form.component.css']
})
export class DCAFormComponent implements OnInit {

constructor() { }


ngOnInit() {
}

dca_model = {
	application_id:'a001',	
	remark1:'remark 1',
	remark2:'remark 2'
};


}
