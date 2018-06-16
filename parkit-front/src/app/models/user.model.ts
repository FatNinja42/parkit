export class User {
  id: string;
  name: string;
  employmentDate: Date;
  phoneNumber: number;
  wantsParking: boolean;
  parkingSpot: number;
  passDay: Date;
  licensePlates: string[];

  constructor(object: any) {
    this.id = object.id;
    this.name = object.name;
    this.employmentDate = object.employmentDate;
    this.phoneNumber = object.phoneNumber;
    this.wantsParking = object.wantsParking;
    this.parkingSpot = object.parkingSpot;
    this.passDay = object.passDay;
    this.licensePlates = object.licensePlates;
  }
}

export class UserListElement {
  id: string;
  name: string;
  parkingSpot: number;
  phoneNumber: number;
  licensePlates: string[];
}
