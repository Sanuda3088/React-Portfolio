import React from 'react';
import './Technologies.css';

const Technologies = () => {
    const skills = [
        {
            title: 'HTML',
            imageSrc: '/images/technologies/html.png'
        }, {
            title: 'CSS',
            imageSrc: '/images/technologies/css.png'
        },
        {
            title: 'JavaScript',
            imageSrc: '/images/technologies/js.png'
        },
        {
            title: 'Java',
            imageSrc: '/images/technologies/java.png'
        },
        {
            title: 'Python',
            imageSrc: '/images/technologies/python.png'
        },
        {
            title: 'React',
            imageSrc: '/images/technologies/react.png'
        },
        {
            title: 'Node js',
            imageSrc: '/images/technologies/node.png'
        },
        {
            title: 'Flutter',
            imageSrc: '/images/technologies/flutter.png'
        },
        {
            title: 'Dart',
            imageSrc: '/images/technologies/dart.png'
        },
        {
            title: 'MongoDB',
            imageSrc: '/images/technologies/mongo.png'
        },
        {
            title: 'Firebase',
            imageSrc: '/images/technologies/firebase.png'
        },
        {
            title: 'AWS Amplify',
            imageSrc: '/images/technologies/amplify.png'
        },
        {
            title: 'Figma',
            imageSrc: '/images/technologies/figma.png'
        },
        {
            title: 'Postman',
            imageSrc: '/images/technologies/postman.png'
        },

    ];

    const getImageUrl = (imageSrc) => {
        return process.env.PUBLIC_URL + imageSrc;
    };

    const getImageTitle = (title) => {
        return process.env.PUBLIC_URL + title;
    };

    return (
        <div className='skillContainer'>
            <h1 className='skillsHeading'>
                Tools & <span className="highlight">Technologies</span>
            </h1>
            <div className='skillContent'>
                <div className='skills'>
                    {skills.map((skill, id) => (
                        <div key={id} className='skill'>
                            <div className='skillImageContainer'>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p className='skillTitle'>{getImageTitle(skill.title)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Technologies;
