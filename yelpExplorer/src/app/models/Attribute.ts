export class Attribute {
  id: string;
  businessId: string;
  name: string;
  value: string;


  constructor(id: string, businessId: string, name: string, value: string) {
    this.id = id;
    this.businessId = businessId;
    this.name = name;
    this.value = value;
  }
}
