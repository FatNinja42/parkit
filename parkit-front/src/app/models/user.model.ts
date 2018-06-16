export class User {
  id: string;
  name: string;
  employmentDate: Date;
  phoneNumber: number;
  wantsParking: boolean;
  parkingSpot: number;
  passDay: Date;
  licensePlates: string[];
}

export class UserListElement {
  id: string;
  name: string;
  parkingSpot: number;
  phoneNumber: number;
  licensePlates: string[];
}
