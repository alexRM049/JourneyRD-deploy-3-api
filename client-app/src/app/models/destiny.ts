export interface Destiny {
    id: string
    name: string
    category: string
    region: string
    province: string
    phoneNumber: string
    city: string
    maxPeople: number
    budget: number
    description: string
    destinyLong: number
    destinyLat: number
  }
  

export class DestinyFormValues{
  id?: string = undefined;
  name: string = '';
  category: string = '';
  region: string = '';
  province: string = '';
  phoneNumber: string = '';
  city: string = '';
  maxPeople: number = 0;
  budget: number = 0;
  description: string = '';
  destinyLong: number = 0;
  destinyLat: number = 0;

  constructor(destiny?: DestinyFormValues){
    if(destiny){
      this.id = destiny.id;
      this.name = destiny.name;
      this.category = destiny.category;
      this.region = destiny.region;
      this.province = destiny.province;
      this.phoneNumber = destiny.phoneNumber;
      this.city = destiny.city;
      this.maxPeople = destiny.maxPeople;
      this.budget = destiny.budget;
      this.description = destiny.description;
      this.destinyLat = destiny.destinyLat;
      this.destinyLong = destiny.destinyLong;
    }
  }
}