# projectalpha

La convención de nombre sigue este patrón:

    .bloque{}
    .bloque__elemento{}
    .bloque__elemento--modificador{}
'.bloque' representa el primer nivel de una abstracción o componente.
'.bloque__elemento' representa un descendiente de '.bloque' que se ayuda de '.bloque' como un conjunto.
'.bloque__elemento--modificador' representa un estado diferente.
    
Organización
Lor archivos de SCSS están todos en el archivo scss/style.scss con una distribución explicada de la siguiente manera:

--scss
    style.scss
        --atmosphere
            _mediaqueries.scss    //aqui se encuentran los breakpoints
        --components
            _aboutme.scss   //estilos de los elementos que integran la sección 'Sobre mí'
            _contact.scss   //estilos de los elementos que integran la sección 'contacto'
            _home.scss    //estilos de los elementos que integran la sección 'inicio'
            _nav.scss   //estilos de los elementos que integran las navegación y los links a rrss
        --lib
            _mixins.scss    //Todos los mixins van a quí
            _variable.scss    //Variales y bucles
        --site
            _site.scss    //Estructura general de los contenedores y estilos de los elementos comunes a todas la secciones
        --utilities
            _flex.scss    // aquí van los estilos referentes al las flexbox de la estructura general
            _grid.scss    //
     style.scss

