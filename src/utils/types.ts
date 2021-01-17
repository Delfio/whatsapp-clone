
export type IUser = {
    id: string;
    name: string;
    imageUri: string;
};
export type IMessage = {
    id: string;
    content: string;
    createdAt: string;

}

export type IChatRoom = {
    id: string;
    users: IUser[];
    lastMessage: IMessage;
}