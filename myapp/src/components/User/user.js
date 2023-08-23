



function User(props) {
    const user = props.userData;

    return (
        <div className="user">
            <h1>{user.name}</h1>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.address.street + ", " + user.address.city}</p>
        </div>
    );
}

export default User;
