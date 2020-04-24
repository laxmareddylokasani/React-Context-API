export type StateProps = {
    loggedIn: boolean;
    userName: string;
};

export const initialState: StateProps = {
    loggedIn: false,
    userName: "Laxmareddy",
};

export const reducer = (state: StateProps, action: any) => {
    switch (action.type) {
        case "updateLoginInfo":
            return { ...state, loggedIn: action.payload };
        case "updateUserName":
            return { ...state, userName: action.payload };
        default:
            throw new Error("Action type must be defined.");
    }
}