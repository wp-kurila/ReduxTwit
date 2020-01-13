export default class TwitService {
    _apiBase = 'http://localhost:3000';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json()
    }

    async getPostsItems() {
        return await this.getResource(`/posts/`);
    }

    async postData(newPost) {
        await fetch(`${this._apiBase}/posts/`, {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    async deletePost(id) {
        await fetch(`${this._apiBase}/posts/${id}`, {
            method: 'DELETE'            
        })
    }
}