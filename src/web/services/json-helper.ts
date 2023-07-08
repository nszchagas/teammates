export class JsonHelper {

    public static parseObjectToJSON(object: Object): string {

        if (object instanceof Array)
            return `[${object.map(obj => this.parseObjectToJSON(obj)).join(',')}]`

        const entries = Object.entries(object).filter(entry => entry[1] !== undefined).map(entry => {
            return `"${entry[0]}":${this.parseAttributeToJson(entry[1])}`;
        })
        return `{${entries.join(",")}}`
    }

    private static parseAttributeToJson(value: Object) {
        const nonQuotable = ['number', 'boolean']
        if (!value || nonQuotable.indexOf(typeof value) != -1)
            return value
        else if (value instanceof Array)
            return `[${value.map(value => this.parseObjectToJSON(value)).join(',')}]`
        else if (typeof value === 'object')
            return this.parseObjectToJSON(value)
        return `"${value}"`
    }

}