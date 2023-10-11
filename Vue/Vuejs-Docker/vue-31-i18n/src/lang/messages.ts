export const messages = {
  en: {
    message: {
        hello: 'Hello World {name} {surname}',
        content: 'We are using i18n package',
        products: 'no products | one product | {count} products',
        comments: 'no comments | comment | comments', //plural
        snake: 'snake case',
        custom_modifier: "custom modifiers example: @.snakeCase:{'message.snake'}"
    }
  },
  es: {
    message: {
        hello: 'Hola {name} {surname}',
        content: 'Utilizando i18n',
        products: 'sin productos | un producto | {count} productos',
        comments: 'sin comentarios | comentario | comentarios' //plural
    }

  }
}