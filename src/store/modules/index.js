const modules = {}

const requireVuexModule = require.context('./', true, /^((?!index).)*\.js$/)

requireVuexModule.keys().forEach(fileName => {
    const moduleName = fileName.replace('./', '').replace('.js', '')
    modules[moduleName] = requireVuexModule(fileName).default
})

export default modules
