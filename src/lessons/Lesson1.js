import React from "react";

/**
 * Create React Elements without JSX
 */
function Lesson1() {

    const title = React.createElement('h2', {}, 'Create React Elements');
    const description = React.createElement('p', {}, 'Example show case creating react elements without jsx');
    const tagsList = [
        React.createElement('li', {}, 'React'),
        React.createElement('li', {}, 'Learning')
    ];
    const tags = React.createElement('ul', {}, ...tagsList);
    const introBlock = React.createElement('div', {}, title, description, tags);


    return (
        introBlock
    )
}

export default Lesson1;