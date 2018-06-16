export class User {
  id: string;
  name: string;
  token: string;
  employmentDate: Date;
  wantsParking: boolean;
  parkingSpot: number;
}

export class UserListElement {
  id: string;
  name: string;
  parkingSpot: number;
}
