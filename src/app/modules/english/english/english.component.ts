import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SidePanelService } from 'src/app/shard/components/side-panel/side-panel.service';

declare var $:any

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.scss']
})
export class EnglishComponent implements OnInit {

  loading:boolean=true
  items:any=[]
  itemId:any
  title:string=''
  itemObj:any
  query:any
  //if he typed an arabic words
  arabic=/[\u0600-\u06FF]/;
  @ViewChild("modal") modal:any
 
  constructor(private modalSer:NgbModal,
              private toaster:ToastrService,
              private sidePanelSer:SidePanelService,
              private fireStore:AngularFirestore) {

   }

  ngOnInit(): void {
    this.getAll()
  }
  
  addNew(){
    this.title='Add new english'
    this.itemObj=""
    this.sidePanelSer.show()
    //this.modalSer.open(this.modal.content)
  }
  onEdit(item:any){
    this.title='Edit english'
    this.itemObj=item
    this.sidePanelSer.show()
  }

  //get all items
  getAll(){
    this.fireStore.collection('english').valueChanges({ idField: 'id' }).subscribe(res=>{
      this.items=res;
      this.items.forEach((ele:any) => ele.data["description"]=ele.data.description.split('\n'))
      this.loading=false;
    })
  }



  //to delete 
  toDelate(id:any){
    this.itemId=id
  }



  //delete item
  deleteItem(){
    this.fireStore.doc('english/'+this.itemId).delete().then(res=>{
      this.toaster.success("task was deleted successfully !")
    }).catch(err=>{
      this.toaster.error(err)
    })
  }

  //open img in new tab
  imgNewTab(igm:any){
    window.open(igm)
  }


}
