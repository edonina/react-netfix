import React from 'react';


export class VideoCast extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <p className="video-full-cast">
                Cast: Cras pulvinar eros id ipsum pulvinar, ut aliquam lorem ultricies. Nunc nec risus sed odio tempor
                sollicitudin eget eget odio. In metus lectus, molestie vel lectus sed, dapibus eleifend dolor.
            </p>
        )
    }
}