export class ProductTypeModel {
     id: number;
     name: string;

     constructor()
     constructor(id?: number, name?: string){
          this.id = id;
          this.name = name;
     }
}