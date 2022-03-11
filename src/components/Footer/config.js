export const getContent = (language) => {
    const isUa = language === 'ua';

    return [
            {
                title: isUa ? 'Допомога' : 'Help',
                link: 'https://www.ukrainenow.org/refuge#can-anything'
            },
            {
                title: isUa ? 'Перевезення товарів по Україні' : 'Engевезення товарів по Україні',
                link: 'https://pomich.org/shippers'
            },
            {
                title: isUa ? 'Перевезеня товарів з-за кордону' : 'Engевезеня товарів з-за кордону',
                link: 'https://razom-ua.com/'
            },
            {
                title: isUa ? 'Cервіси/фонди/організації' : 'Engвіси/фонди/організації',
                link: isUa ?
                    'https://docs.google.com/document/d/1iMMN4r8HUYVF2_tDZF5FGLKpnVEVQT283O17gOhHScY/edit?usp=sharing'
                    :
                    'https://docs.google.com/document/d/12UBBdpDVj5RbnS1zWKQJ84I5vsIJz-2VhP28b7XKGCU/edit?usp=sharing'
            },
    ];
};
