import { observable, computed, action } from "mobx";

const dt = new Date();

const years = dt.getFullYear();

export default class AppStore {

    @observable footer;


    constructor() {
        
        this.footer = years + 'Populix. PT Imaji Kreasi Triniti.';
      
      }

}