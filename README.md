Create new Vue Template for Team
________________________________

When I first started using Vue, I was blown away how easy it was to use the CLI. I was more surprised to find out how easy it is to create a re-usable Vue project using the Vue CLI. Here’s how:

## Set up your project directory

```base
project/
  template/
  meta.js
```

Let’s create the the questions you want to capture to plug into your Vue Template. Add this to your `meta.js`

```javascript
/**
 * Meta JS File that will be picked up by the Vue CLI
 */
module.exports = {
  /**
   * Add your own Prompt questions here!
   */
  prompts: {
    name: {
      type: 'string', // Question type
      required: true, // Is question Required
      message: 'Project name' // Question it's self
    },
    description: {
      type: 'string',
      required: false,
      message: '',
      default: 'My Awesome Project'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    extra: {
      type: 'string',
      message: 'Extra Messaging!'
    }
  },

  /**
   * You can add a custom complete message
   */
  completeMessage: 'Project Complete!'
};
```

## Create your project Template

Go to `template/` and you can simply start building the template to your project here. Here’s my short and simple Vue template project:

```bash
template/
  package.json
  index.html
  README.md
  .gitignore
```

You can apply the same template variables in your `package.json` and `README.md` file.

```json
{
  "name": "{{name}}",
  "version": "1.0.0",
  "description": "{{description}}",
  "main": "index.js",
  "author": "{{author}}",
  "license": "MIT",
  "private": false,
  "scripts": {
    "start": "http-server ./ -p 3000"
  },
  "dependencies": {
    "http-server": "^0.11.1"
  }
}
```

```readme
{{ name }}
_________
{{ description }}
```

## Push Up

After you creating your template, simply push up your project folder to Github. `A meta.js file and template folder must exists in the project`, otherwise it will not work. After you push up your project, you can now get a copy of your Vue Project by running Vue init Github `username/repository` name:

```bash
vue init username/project-template my-sample-project
```

And that’s it!

## Reference

[Joshua John Villahermosa](https://medium.com/@joshvillahermosa/how-to-create-a-simple-re-usable-vue-project-template-9ec48c6ce0a2)
