const html = elementByTagName('html')
const head = elementByTagName('head')
const body = elementByTagName('body')

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

addStyle('./style.css')

function array(s) {
  return Array.apply(null, {length: s})
}

add(
    body,
    add(
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
        ),
        hierarchy(
            element('header'),
            element('nav'),
            add(
                element('ul'),
                ...function ulNav() {
                    return [ 
                        hierarchy(
                            add(
                                setClass(
                                    onclick(element('li'), function() {
                                        if(getAttribute(this, 'active') == null) {
                                            setAttribute(this, 'active', 'true')
                                        } else {
                                            removeAttribute(this, 'active')
                                        }
                                    }),
                                    'menu-list-item'
                                ),
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
                                ...function(s){
                                    return Array.apply(null, {length: s}).map(function(e) {
                                    return setClass(
                                        element('span'),
                                        'line'
                                    )
                                    })
                                }(3)
                            )
                        )
                        ]
                        .concat(
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
                }('Home', 'Documentation', 'Example')
            )
        )
    )
)
