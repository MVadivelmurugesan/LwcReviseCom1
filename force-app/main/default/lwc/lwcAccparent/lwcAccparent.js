import { LightningElement } from 'lwc';

export default class LwcAccparent extends LightningElement {
    searchparent;
    handleevent(event){
        this.searchparent=event.detail;
        console.log('searchparent',this.searchparent);
    }

}