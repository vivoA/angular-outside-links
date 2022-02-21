

    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
      name: 'search'
    })
    export class SearchPipe implements PipeTransform {
      transform(value: any , args:any) {
        if(!value) return 
        if(!args || args === '') return value
        args =args.toLowerCase()
        return value.filter((ele:any) =>{
          return JSON.stringify(Object.values(ele)).toLowerCase().includes(args)
        })
      }
    }
