'use strict';

module.exports = class RequestHandler {

    constructor() {}

    async fetchLinks() {
        try {
            const get = await fetch("http://localhost:3000/myLinks", 
            { 
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
    
            const data = await get.json();
            // console.log(data);
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    async sendCreateMyLink(oPayload) {
        try {
          const post = await fetch("http://localhost:3000/myLinks", 
          { method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(oPayload)
          });
          const data = await post.json();
          //console.log(data);
          return data;
        } catch (e) {
          console.log(e);
        }
    }

    async sendEditMyLink(oPayload, sId) {
        try {
          const patch = await fetch("http://localhost:3000/myLinks/" + sId,
            { method: "PATCH",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(oPayload)
            });

            const data = await patch.json();
            //console.log(data);
            return data;
        } catch (e) {
          console.log(e);
        }
      }

    async removeLinkCard(sId) {
        try {
            const get = await fetch("http://localhost:3000/myLinks/" + sId, 
            { 
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            const data = await get.json();
            // console.log(data);
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}