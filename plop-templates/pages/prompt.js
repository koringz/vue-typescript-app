
module.exports = {
    description: 'generate vue component',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'component name please',
    }],
    actions: data => {
        const name = '{{properCase name}}'
        const actions = [
            {
                type: 'add',
                path: `src/pages/${name}/index.vue`,
                templateFile: 'plop-templates/pages/tmp.hbs',
            },
            {
                type: 'add',
                path: `src/pages/${name}/index.css`,
                templateFile: 'plop-templates/pages/style.hbs',
            },
        ]

        return actions
    }
}
