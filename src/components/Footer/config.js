export const getContent = (language) => {
    const isUa = language === 'ua';

    return [
            {
                title: 'help',
                link: 'https://www.ukrainenow.org/refuge#can-anything'
            },
            {
                title: 'transportation_ukraine',
                link: 'https://pomich.org/shippers'
            },
            {
                title: 'transportation_abroad',
                link: 'https://razom-ua.com/'
            },
            {
                title: 'other_links',
                link: isUa ?
                    'https://docs.google.com/document/d/1iMMN4r8HUYVF2_tDZF5FGLKpnVEVQT283O17gOhHScY/edit?usp=sharing'
                    :
                    'https://docs.google.com/document/d/12UBBdpDVj5RbnS1zWKQJ84I5vsIJz-2VhP28b7XKGCU/edit?usp=sharing'
            },
    ];
};
