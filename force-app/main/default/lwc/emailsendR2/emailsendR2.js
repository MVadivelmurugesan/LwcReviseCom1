import { LightningElement ,track} from 'lwc';
import uploadfile1 from '@salesforce/apex/EmailSendlwc.uploadfile';
export default class EmailsendR2 extends LightningElement {

    @track filename='';
     disabled=true;
     uploadpro=0;
     err=null;
    @track file=null;

    handlefilechange(event){
        const files=event.target.files;
        console.log('upload file 1==>',files);
        if (files.length > 0) {
            this.file=files[0];
            this.filename=this.file.name;
            this.disabled=false
        }else{
            this.disabled=true;
        }
    }
    async handleupload(){
        this.err=null;
        this.uploadpro=0;
        if(this.file){
            try {
                const result=await this.uploadfile(this.file);
                this.uploadpro=100;
                console.log('result 1==>',result);
            } catch (error) {
                this.err='file upload failed'+ error.body.message;
                console.log('error==>'+error.body.message);
            }
        }
    }
    uploadfile(file){
        return new Promise((resolve,reject)=>{
            const reader=new FileReader();
            reader.onload=()=>{
                const filecontent=reader.result;
                uploadfile1({filename:this.filename,filecontent:filecontent})
                .then(result => resolve(result))
                .catch(error => reject(error))
            }
            reader.onerror = () =>{
                reject(new Error ('Faild to load this file'))
            }
            reader.readAsText(file);
        })
    }
}