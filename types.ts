export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  imageUrl: string;
  description: string;
}

export interface Award {
  id: string;
  year: string;
  title: string;
  organization: string;
}

export interface ContactInfo {
  address: string[];
  email: string;
  phone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}