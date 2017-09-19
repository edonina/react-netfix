import React from 'react';


export class VideoDescription extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <p className="video-full-description">Pulp Fiction is a 1994 American black comedy neo-noir crime film written and directed by Quentin
                Tarantino, from a story by Tarantino and Roger Avary.[4] Directed in a highly stylized manner, Pulp
                Fiction connects the intersecting storylines of Los Angeles mobsters, fringe players, small-time
                criminals, and a mysterious briefcase. The film's title refers to the pulp magazines and hardboiled
                crime novels popular during the mid-20th century, known for their graphic violence and punchy
                dialogue.</p>
        )
    }
}