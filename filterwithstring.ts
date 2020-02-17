export class FilterPipe implements PipeTransform{
    transform(data: Array<any>, filters: string){
        if (filters === "") return data;
          return data.filter(function(item){
           return Object.values(item).some((v : string) => {
               if(v==null) return;
                        return v.toLowerCase().includes(filters.toLowerCase())
                            })
          })
    }
}
