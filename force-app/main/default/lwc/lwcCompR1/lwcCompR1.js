import { LightningElement, track } from 'lwc';
import accrecords from '@salesforce/apex/lwcaccountcls1.getAccount';
export default class LwcCompR1 extends LightningElement {

    @track Accountdata=[];
    error='';
    async function () {
        const data =await accrecords;
    }
}