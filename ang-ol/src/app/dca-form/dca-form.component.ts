import { Component, OnInit } from '@angular/core';
import { DCA_Model } from '../models/DCA_Model';

@Component({
	selector: 'app-dca-form',
	templateUrl: './dca-form.component.html',
	styleUrls: ['./dca-form.component.css']
})
export class DCAFormComponent implements OnInit {

/*	dca_model: DCA_Model = {
		application_id:"a001",
		remark1:"remark1",
		remark2:"remark2"
	};
*/
	
	dca_model = new DCA_Model();
	getApplicationId(){
		return this.dca_model.application_id;
	}

	getApplicationModel(){
		return this.dca_model;
	}

constructor() { 

}


ngOnInit() {
}

}
