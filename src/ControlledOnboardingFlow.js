import React from 'react';

export const ControlledOnboardingFlow = ({ children, currentIndex, onNext }) => {

    const currentChild = React.Children.toArray(children)[currentIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext: onNext });
    }

    return currentChild || <p>You are done!!!</p>;
}
