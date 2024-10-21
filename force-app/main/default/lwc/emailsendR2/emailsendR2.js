import { LightningElement ,track} from 'lwc';
import uploadfile from '@salesforce/apex/EmailSendlwc.uploadfile';
export default class EmailsendR2 extends LightningElement {

    @track filename='';
     disabled=true;
     uploadpro=0;
     err=null;
    @track file=[];

    handlefilechange(event){
        const files=event.target.file;
        console.log('upload file 1==>',files);
        if (file > 0) {
            this.file=files[0];
            this.filename=this.file.name;
            this.disabled=false
        }
    }
    async handleupload(){
        this.err=null;
        this.uploadpro=0;
        if(this.file){
            try {
                const result=await uploadfile(this.file);
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
                uploadfile({filename:this.filename,filecontent:filecontent})
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