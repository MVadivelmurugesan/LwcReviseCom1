import { LightningElement } from 'lwc';

export default class LwcAccchil1 extends LightningElement {
    searchtext;
    handlechange(event){
        this.searchtext=event.target.value;
        console.log('searchtext',this.searchtext);
    }
    handleSearch(){
        const searchevt=new CustomEvent('getsearchevt',{detail:this.searchtext});
        this.dispatchEvent(searchevt);
    }
}