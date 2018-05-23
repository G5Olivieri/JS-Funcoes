function init() {
    setAttribute(
    html,
    'lang', 'pt-br'
    )

    add(
        html,
        head,
        body
    )
}
function start() {
    setTimeout(init, 20)
}

start()

add(
    body,
    add(
        setId(
          element('div'),
          'app'
        ),
        setClass(element('div'), 'jumbotron'),
        add(
            setClass(
                element('div'),
                'container'
            ),
            text(
                setClass(
                    element('h1'),
                    'title'
                ),
                'Glayson Framework'
            ),
            text(
                element('p'),
                'Esse framework Js não é oficial em porra nenhuma'
                + ' não serve pra nada, somente para o Glayson aprender'
                + ' a usar melhor o recurso funcional do JavaScript.'
            )
        )
    )
)

var app = elementById('app')

addStyle('./style.css')

function lines(s){
    return Array.apply(null, {length: s}).map(function(e) {
      return setClass(
          element('span'),
          'line'
      )
    })
}

var menu = hierarchy(
    setClass(
        element('li'),
        'menu-list-item'
    ),
    setClass(
        setAttribute(
            element('a'),
            'href', '#'
        ),
        'menu'
    ),
    add(
        setClass(
            element('div'),
            'menu-icon'
        ),
        ...lines(3)
    )
)

function array(s) {
  return Array.apply(null, {length: s})
}

function ulNav() {
  return [menu].concat(
    array(arguments.length).map(function(e, i) {
      return add(
          element('li'),
          text(
              setAttribute(
                  element('a'),
                  'href', '#'
              ),
              this[i]
          )
      )
    }, arguments)
  )
}

add(
    app,
    hierarchy(
        element('header'),
        element('nav'),
        add(
            element('ul'),
            ...ulNav('Home', 'Documentation', 'Example')
        )
    )
)

add(
    querySelector('.menu-list-item')[0],
    setClass(
        add(
            element('ul'),
            ...array(3).map(function(e, i) {
              return add(
                  element('li'),
                  text(
                      setAttribute(
                          element('a'),
                          'href', '#'
                      ),
                      'teste' + i
                  )
                )
            })
        ),
        'menu-nav'
    ),
    setId(
        element('div'),
        'nav-bar-background'
    )
)

onclick(querySelector('li.menu-list-item')[0], function() {
    if(getAttribute(this, 'active') == null) {
        setAttribute(this, 'active', 'true')
    } else {
        removeAttribute(this, 'active')
    }
})
