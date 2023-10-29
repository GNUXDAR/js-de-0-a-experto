export default class NoteService {
    private base_uri = 'http://172.17.0.2:3000/api/notes'

    public async GetNotes() {
        const uri = this.base_uri
        const rawResponse = await fetch(uri, {
            method: 'GET'
        })
        const response = await rawResponse.json()
        return response
    }
}