export class Category {
  id: string;
  businessId: string;
  category: string;


  constructor(id: string, businessId: string, category: string) {
    this.id = id;
    this.businessId = businessId;
    this.category = category;
  }
}
