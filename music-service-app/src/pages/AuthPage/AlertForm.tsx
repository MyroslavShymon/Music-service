import React, {FunctionComponent} from 'react';
import user from "../../store/user";
import {Alert} from "antd";

interface OwnProps {
    showAlert: boolean
}

type Props = OwnProps;

const AlertForm: FunctionComponent<Props> = ({showAlert}) => {
    return (
        <>
            {
                user.response.type && showAlert &&
                <Alert message={user.response.message} type={user.response.type}/>
            }
        </>
    );
};

export default AlertForm;
