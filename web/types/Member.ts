export interface Member {
  id: string;
  name: string;
  life: string;
  profileImage: {
    url: string;
    width: number;
    height: number;
  };
  relationship: string;
  coordinateX?: number;
  coordinateY?: number;
}