import React from 'react';
import TwitServiceContext from '../twit-service-context';

const WithTwitService = () => (Wrapped) => {
    return (props) => {
        return (
            <TwitServiceContext.Consumer>
                {
                    (TwitService) => {
                        return <Wrapped {...props} TwitService={TwitService} />
                    }
                }
            </TwitServiceContext.Consumer>
        )
    }
};

export default WithTwitService;