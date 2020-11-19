process.env['CT_VAULT_CONFIG'] = `./vault.json` 

const CT = require('ctvault')
exports.handler = async event => {
    let message = JSON.parse(event.Records[0].body)
    const ct = await CT.getClient(message.projectKey)

    let customObject = await ct.customObjects.get(message.resource.id)

    console.log(`\n\n\n`)
    console.log(`Company Updated`)
    console.log(`---------------\n`)
    console.log(`Company: ${customObject.name}`)
    console.log(`Status:  ${customObject.companyState}`)
    console.log(`\n\n\n`)

    return {
        statusCode: 200,
        body: JSON.stringify(event),
    };
}