export class JsonHelper {

    public static parseObjectToJSON(object: Object): string {
        let jsonResponse = "{"
        const nonQuotable = ['number', 'boolean']
        const entries = Object.entries(object).filter(entry => entry[1] !== undefined)
        for (const entry of entries) {
            const [key, value] = entry
            jsonResponse += `"${key}":`;
            if (!value || nonQuotable.indexOf(typeof value) != -1)
                jsonResponse += value
            else if (typeof value === 'object')
                jsonResponse += this.parseObjectToJSON(value)
            else
                jsonResponse += `"${value}"`
            if (entries.indexOf(entry) != entries.length - 1)
                jsonResponse += ","
        }
        jsonResponse += "}"
        return jsonResponse
    }


}