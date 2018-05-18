export class Friend {
  id: string;
  userId: string;
  friendId: string;

  constructor(id: string, userId: string, friendId: string) {
    this.id = id;
    this.userId = userId;
    this.friendId = friendId;
  }
}
