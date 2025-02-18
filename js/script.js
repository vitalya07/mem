new Splide( '#slider1',
    {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        perPage: 5,
        padding: '10rem',
        arrows: false,
        pagination: false,
        autoScroll: {
          speed: 3,
        },
        breakpoints: {
          760: {
            perPage: 5,
          },
          550: {
            perPage: 2,
          },
        }
    }
 ).mount( window.splide.Extensions);
