export interface Order {
  orderId?: number; // optional, will come from DB
  userId: number;
  userName: string;
  totalPrice: number;
  orderDate?: Date;
  status: string;
}
