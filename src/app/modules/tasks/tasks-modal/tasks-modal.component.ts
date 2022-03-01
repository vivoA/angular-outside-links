
import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { SidePanelService } from 'src/app/shard/components/side-panel/side-panel.service';

@Component({
  selector: 'app-tasks-modal',
  templateUrl: './tasks-modal.component.html',
  styleUrls: ['./tasks-modal.component.scss']
})
export class TasksModalComponent implements OnInit, OnChanges {

  @Input() title:any;
  @Input() itemObj:any;

  @ViewChild ('content')content:any

  form!:FormGroup;
  submited:boolean=false
  success:boolean=false
  previewImg:any
  igmToSend:any
  btnLoading:boolean=false
  constructor(private fb:FormBuilder,
              private sidePanelSer:SidePanelService,
              private toaster:ToastrService,
              private fireStore:AngularFirestore,
              private firStorage:AngularFireStorage,
              private modal:NgbModal
               ) {}

  ngOnInit(): void {
    this.build()
    //this.citizen=this.realsService.citizens()
    this.linksList?.push(this.newLink())
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.itemObj !=''){
      this.patch()
    }
  }
  
  build(){
    this.form=this.fb.group({
      title:['',         Validators.required],
      description:['',   Validators.required],
      linksList:this.fb.array([])
    })
  }
  get f() { return this.form.controls}


  //links array
  get linksList():FormArray{
    return this.form.get('linksList') as FormArray
  }

  //new link
  newLink():FormGroup{
    return this.fb.group({
      link:['']
    })
  }

  //add link
  addLink(){
    this.linksList.push(this.newLink())
  }

  //remove link
  removeLink(i:any){
    this.linksList.removeAt(i)
  }


  //on file select
  onFileSelect(event:any){
    if(event.target.files[0]){
      this.igmToSend=event.target.files[0]
      let fileReader=new FileReader;
          fileReader.readAsDataURL(event.target.files[0]);
          fileReader.onload = e =>{
            let preview= e.target?.result;
            this.previewImg=preview
          }
    }
  }

  //remove preview img
  removePreview(){
    this.previewImg=null
  }


  //onsubmit
  onSubmit(){
    this.submited=true
    this.btnLoading=true
    if(!this.form.valid){
      this.btnLoading=false
      return
    }
    const data= this.form.value;
    let img=this.igmToSend;

    //on add
     if(this.itemObj  === ""){
      return new Promise((resolve,reject)=>{
        //if there is img
        if(img){
          let ref=this.firStorage.ref('imgs/' + img.name);
          ref.put(img).then(()=> {
            ref.getDownloadURL().subscribe(photo => {
              this.fireStore.collection('tasks').add({
                data,
                photo,
              }).then(res =>{
                this.onSuccessSubmitted()
                this.toaster.success("Your new task added successfully !")
              }).catch(err =>{
                console.log(err);
              })
            })
          });
          //if no img
        }else{
          this.fireStore.collection('tasks').add({
            data,
          }).then(res =>{
            this.onSuccessSubmitted()
            this.toaster.success("Your item added successfully !")
          }).catch(err =>{
            console.log(err);
          })
        }
      })

      //start on edit here 
    }else{
      console.log("img is");
      console.log(typeof(img));
      
      return new Promise((resolve,reject)=>{
        
        //if he update url only 
        if(typeof(img) === 'string'){
          this.fireStore.doc('tasks/'+ this.itemObj.id).update({
            data,
            photo:this.itemObj.photo,
          }).then(res=>{
            this.onSuccessSubmitted()
            this.toaster.success("task Updated Successfully !")
          }).catch(err=>{
            this.toaster.error(err)
          })
        }


        //if he upload new img 
        if(typeof(img) === 'object'){
          let ref=this.firStorage.ref('imgs/' + img.name);
          ref.put(img).then(()=> {
            ref.getDownloadURL().subscribe(photo => {
              this.fireStore.doc('tasks/'+ this.itemObj.id).update({
                data,
                photo,
              }).then(res =>{
                this.onSuccessSubmitted()
                this.toaster.success("task Updated Successfully !")
              }).catch(err =>{
                console.log(err);
              })
            })
          });
        }

        //if no img in this item
        if(typeof(img) === 'undefined'){
          this.fireStore.doc('tasks/'+ this.itemObj.id).update({
            data,
          }).then(res =>{
            this.onSuccessSubmitted()
            this.toaster.success("task Updated Successfully !")
          }).catch(err =>{
            console.log(err);
          })
        }
      })
    }

  }

  
  onSuccessSubmitted(){
    this.success=true
    this.submited=false
    this.form.reset()
    this.sidePanelSer.hide()
    this.igmToSend=null
    this.previewImg=null
    this.btnLoading=false
  }



  //close
  close(){
    this.sidePanelSer.hide()
  }

  //patch value
  patch(){
    if(this.itemObj){
      console.log("object is");
      console.log(this.itemObj);
      
      let objectToUpdate=this.itemObj.data
      let joinDescription=objectToUpdate.description.join('\n')
      this.form.patchValue({
        title:objectToUpdate.title,
        description:joinDescription
      })
      
      //patch img
      this.previewImg=this.itemObj.photo;
      this.igmToSend=this.itemObj.photo;

      //clear form array first and then push new obj with coming data
      this.linksList?.clear()
      objectToUpdate.linksList.forEach((ele:any) =>{
          this.linksList.push(
            this.fb.group({
              link:ele.link
            })
          )
      })
    }
  }

}
