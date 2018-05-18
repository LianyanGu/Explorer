export class Photo {
  id: string;
  businessId: string;
  caption: string;
  label: string;

  constructor(id: string, businessId: string, caption: string, label: string) {
    this.id = id;
    this.businessId = businessId;
    this.caption = caption;
    this.label = label;
  }
}
