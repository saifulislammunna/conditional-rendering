import React from 'react';

const User = (props) => {
    const {familiar} = props;
    return (
        <div>
            <div>
                <h2>Greetings</h2>
            </div>
            <div>
                <h2>Food</h2>
            </div>
            <div>
                <h2>Profession</h2>
            </div>
            <div>
                <h2>Connection</h2>
            </div>

        </div>
    );
};

export default User;